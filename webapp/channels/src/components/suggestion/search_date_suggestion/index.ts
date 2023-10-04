// Copyright (c) 2015-present Tam Dev, Inc. All Rights Reserved.
// See LICENSE.txt for license information.

import {connect} from 'react-redux';

import {getCurrentTimezone, isTimezoneEnabled} from 'mattermost-redux/selectors/entities/timezone';

import {getCurrentLocale} from 'selectors/i18n';

import {getCurrentDateForTimezone} from 'utils/timezone';

import type {GlobalState} from 'types/store';

import SearchDateSuggestion from './search_date_suggestion';

function mapStateToProps(state: GlobalState) {
    const timezone = getCurrentTimezone(state);
    const locale = getCurrentLocale(state);

    const enableTimezone = isTimezoneEnabled(state);

    let currentDate;
    if (enableTimezone) {
        currentDate = getCurrentDateForTimezone(timezone);
    }

    return {
        currentDate,
        locale,
    };
}

export default connect(mapStateToProps)(SearchDateSuggestion);
