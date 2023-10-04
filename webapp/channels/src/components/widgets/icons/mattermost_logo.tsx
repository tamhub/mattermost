// Copyright (c) 2015-present Tam Dev, Inc. All Rights Reserved.
// See LICENSE.txt for license information.

// eslint-disable-next-line import/order
import k from 'images/logo.png';
import React from 'react';
import type {CSSProperties} from 'react';
import {useIntl} from 'react-intl';

export default function MattermostLogo(props: React.HTMLAttributes<HTMLSpanElement>) {
    const {formatMessage} = useIntl();
    return (
        <span {...props}>
            <svg
                version='1.1'
                x='0px'
                y='0px'
                viewBox='0 0 500 500'
                enableBackground='new 0 0 500 500'
                role='img'
                aria-label={formatMessage({id: 'generic_icons.mattermost', defaultMessage: 'Tam Dev Logo'})}
            >
                <image
                    xlinkHref={k}
                    x='0'
                    y='0'
                    width='100%'
                    height='100%'
                />
            </svg>
        </span>
    );
}

const style: CSSProperties = {
    fillRule: 'evenodd',
    clipRule: 'evenodd',
};
