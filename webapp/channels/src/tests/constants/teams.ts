// Copyright (c) 2015-present Tam Dev, Inc. All Rights Reserved.
// See LICENSE.txt for license information.

import type {TeamsState} from '@mattermost/types/teams';

import {TestHelper} from 'utils/test_helper';

export const emptyTeams: () => TeamsState = () => ({
    currentTeamId: 'current_team_id',
    teams: {
        current_team_id: TestHelper.getTeamMock({id: 'current_team_id'}),
    },
    myMembers: {},
    membersInTeam: {},
    stats: {},
    groupsAssociatedToTeam: {},
    totalCount: 0,
});
