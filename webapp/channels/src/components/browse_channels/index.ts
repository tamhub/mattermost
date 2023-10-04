// Copyright (c) 2015-present Tam Dev, Inc. All Rights Reserved.
// See LICENSE.txt for license information.

import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import type {ActionCreatorsMapObject, Dispatch} from 'redux';

import type {Channel, ChannelSearchOpts} from '@mattermost/types/channels';

import {getChannels, getArchivedChannels, joinChannel, getChannelsMemberCount, searchAllChannels} from 'mattermost-redux/actions/channels';
import {RequestStatus} from 'mattermost-redux/constants';
import {createSelector} from 'mattermost-redux/selectors/create_selector';
import {getChannelsInCurrentTeam, getMyChannelMemberships, getChannelsMemberCount as getChannelsMemberCountSelector} from 'mattermost-redux/selectors/entities/channels';
import {getConfig} from 'mattermost-redux/selectors/entities/general';
import {getCurrentTeam} from 'mattermost-redux/selectors/entities/teams';
import {getCurrentUserId} from 'mattermost-redux/selectors/entities/users';
import type {Action, ActionResult} from 'mattermost-redux/types/actions';

import {setGlobalItem} from 'actions/storage';
import {openModal, closeModal} from 'actions/views/modals';
import {closeRightHandSide} from 'actions/views/rhs';
import {getIsRhsOpen, getRhsState} from 'selectors/rhs';
import {makeGetGlobalItem} from 'selectors/storage';

import Constants, {StoragePrefixes} from 'utils/constants';

import type {ModalData} from 'types/actions';
import type {GlobalState} from 'types/store';

import BrowseChannels from './browse_channels';

const getChannelsWithoutArchived = createSelector(
    'getChannelsWithoutArchived',
    getChannelsInCurrentTeam,
    (channels: Channel[]) => channels && channels.filter((c) => c.delete_at === 0 && c.type !== Constants.PRIVATE_CHANNEL),
);

const getArchivedOtherChannels = createSelector(
    'getArchivedOtherChannels',
    getChannelsInCurrentTeam,
    (channels: Channel[]) => channels && channels.filter((c) => c.delete_at !== 0),
);

const getPrivateChannelsSelector = createSelector(
    'getPrivateChannelsSelector',
    getChannelsInCurrentTeam,
    (channels: Channel[]) => channels && channels.filter((c) => c.type === Constants.PRIVATE_CHANNEL),
);

function mapStateToProps(state: GlobalState) {
    const team = getCurrentTeam(state) || {};
    const getGlobalItem = makeGetGlobalItem(StoragePrefixes.HIDE_JOINED_CHANNELS, 'false');

    return {
        channels: getChannelsWithoutArchived(state) || [],
        archivedChannels: getArchivedOtherChannels(state) || [],
        privateChannels: getPrivateChannelsSelector(state) || [],
        currentUserId: getCurrentUserId(state),
        teamId: team.id,
        teamName: team.name,
        channelsRequestStarted: state.requests.channels.getChannels.status === RequestStatus.STARTED,
        canShowArchivedChannels: (getConfig(state).ExperimentalViewArchivedChannels === 'true'),
        myChannelMemberships: getMyChannelMemberships(state) || {},
        shouldHideJoinedChannels: getGlobalItem(state) === 'true',
        rhsState: getRhsState(state),
        rhsOpen: getIsRhsOpen(state),
        channelsMemberCount: getChannelsMemberCountSelector(state),
    };
}

type Actions = {
    getChannels: (teamId: string, page: number, perPage: number) => Promise<ActionResult<Channel[], Error>>;
    getArchivedChannels: (teamId: string, page: number, channelsPerPage: number) => Promise<ActionResult<Channel[], Error>>;
    getPrivateChannels: (teamId: string, page: number, channelsPerPage: number) => Promise<ActionResult<Channel[], Error>>;
    joinChannel: (currentUserId: string, teamId: string, channelId: string) => Promise<ActionResult>;
    searchAllChannels: (term: string, opts?: ChannelSearchOpts) => Promise<ActionResult<Channel[], Error>>;
    openModal: <P>(modalData: ModalData<P>) => void;
    closeModal: (modalId: string) => void;
    setGlobalItem: (name: string, value: string) => void;
    closeRightHandSide: () => void;
    getChannelsMemberCount: (channelIds: string[]) => Promise<ActionResult>;
}

function mapDispatchToProps(dispatch: Dispatch) {
    return {
        actions: bindActionCreators<ActionCreatorsMapObject<Action>, Actions>({
            getChannels,
            getArchivedChannels,
            joinChannel,
            searchAllChannels,
            openModal,
            closeModal,
            setGlobalItem,
            closeRightHandSide,
            getChannelsMemberCount,
        }, dispatch),
    };
}

export default connect(mapStateToProps, mapDispatchToProps)(BrowseChannels);
