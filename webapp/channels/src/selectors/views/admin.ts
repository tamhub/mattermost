// Copyright (c) 2015-present Tam Dev, Inc. All Rights Reserved.
// See LICENSE.txt for license information.

import type {GlobalState} from 'types/store';

export function getNavigationBlocked(state: GlobalState) {
    return state.views.admin.navigationBlock.blocked;
}

export function showNavigationPrompt(state: GlobalState) {
    return state.views.admin.navigationBlock.showNavigationPrompt;
}

export function getOnNavigationConfirmed(state: GlobalState) {
    return state.views.admin.navigationBlock.onNavigationConfirmed;
}

export function getNeedsLoggedInLimitReachedCheck(state: GlobalState): boolean {
    return state.views.admin.needsLoggedInLimitReachedCheck;
}
