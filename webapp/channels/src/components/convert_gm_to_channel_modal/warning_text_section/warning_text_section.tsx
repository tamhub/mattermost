// Copyright (c) 2015-present Tam Dev, Inc. All Rights Reserved.
// See LICENSE.txt for license information.

import React from 'react';
import {FormattedMessage, useIntl} from 'react-intl';

import 'components/convert_gm_to_channel_modal/warning_text_section/warning_text_section.scss';

export type Props = {
    channelMemberNames: string[];
}
const WarningTextSection = (props: Props): JSX.Element => {
    const intl = useIntl();

    let memberNames: string;

    if (props.channelMemberNames.length > 0) {
        memberNames = intl.formatList(props.channelMemberNames);
    } else {
        memberNames = intl.formatMessage({id: 'sidebar_left.sidebar_channel_modal.warning_body_yourself', defaultMessage: 'yourself'});
    }

    return (
        <div className='warning-section'>
            <i className='fa fa-exclamation-circle'/>
            <div className='warning-text'>
                <div className='warning-header'>
                    <FormattedMessage
                        id='sidebar_left.sidebar_channel_modal.warning_header'
                        defaultMessage='Conversation history will be visible to any channel members'
                    />
                </div>
                <div className='warning-body'>
                    <FormattedMessage
                        id='sidebar_left.sidebar_channel_modal.warning_body'
                        defaultMessage='You are about to convert the Group Message with {memberNames} to a Channel. This cannot be undone.'
                        values={{
                            memberNames,
                        }}
                    />
                </div>
            </div>
        </div>
    );
};
export default WarningTextSection;
