// Copyright (c) 2015-present Tam Dev, Inc. All Rights Reserved.
// See LICENSE.txt for license information.

import {connect} from 'react-redux';
import type {ConnectedProps} from 'react-redux';
import {withRouter} from 'react-router-dom';
import {bindActionCreators} from 'redux';
import type {Dispatch} from 'redux';

import {getConfig} from 'mattermost-redux/selectors/entities/general';
import {getIsOnboardingFlowEnabled} from 'mattermost-redux/selectors/entities/preferences';
import {getCurrentRelativeTeamUrl} from 'mattermost-redux/selectors/entities/teams';
import {isFirstAdmin} from 'mattermost-redux/selectors/entities/users';
import type {GenericAction} from 'mattermost-redux/types/actions';

import {openModal} from 'actions/views/modals';
import {getUserGuideDropdownPluginMenuItems} from 'selectors/plugins';
import {getIsMobileView} from 'selectors/views/browser';

import type {GlobalState} from 'types/store';

import UserGuideDropdown from './user_guide_dropdown';

function mapStateToProps(state: GlobalState) {
    const {HelpLink, ReportAProblemLink, EnableAskCommunityLink} = getConfig(state);

    return {
        helpLink: HelpLink || '',
        isMobileView: getIsMobileView(state),
        reportAProblemLink: ReportAProblemLink || '',
        enableAskCommunityLink: EnableAskCommunityLink || '',
        teamUrl: getCurrentRelativeTeamUrl(state),
        pluginMenuItems: getUserGuideDropdownPluginMenuItems(state),
        isFirstAdmin: isFirstAdmin(state),
        onboardingFlowEnabled: getIsOnboardingFlowEnabled(state),
    };
}

function mapDispatchToProps(dispatch: Dispatch<GenericAction>) {
    return {
        actions: bindActionCreators({
            openModal,
        }, dispatch),
    };
}

const connector = connect(mapStateToProps, mapDispatchToProps);

export type PropsFromRedux = ConnectedProps<typeof connector>;

export default withRouter(connector(UserGuideDropdown));
