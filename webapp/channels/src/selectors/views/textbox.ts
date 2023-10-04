// Copyright (c) 2015-present Tam Dev, Inc. All Rights Reserved.
// See LICENSE.txt for license information.

import type {GlobalState} from 'types/store';

export function showPreviewOnCreateComment(state: GlobalState) {
    return state.views.textbox.shouldShowPreviewOnCreateComment;
}

export function showPreviewOnCreatePost(state: GlobalState) {
    return state.views.textbox.shouldShowPreviewOnCreatePost;
}

export function showPreviewOnEditChannelHeaderModal(state: GlobalState) {
    return state.views.textbox.shouldShowPreviewOnEditChannelHeaderModal;
}
