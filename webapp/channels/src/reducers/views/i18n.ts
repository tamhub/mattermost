// Copyright (c) 2015-present Tam Dev, Inc. All Rights Reserved.
// See LICENSE.txt for license information.

import {combineReducers} from 'redux';

import type {GenericAction} from 'mattermost-redux/types/actions';

import {ActionTypes} from 'utils/constants';

import type {Translations} from 'types/store/i18n';

function translations(state: Translations = {}, action: GenericAction) {
    switch (action.type) {
    case ActionTypes.RECEIVED_TRANSLATIONS:
        return {
            ...state,
            [action.data.locale]: action.data.translations,
        };

    default:
        return state;
    }
}

export default combineReducers({
    translations,
});
