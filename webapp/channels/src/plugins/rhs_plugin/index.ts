// Copyright (c) 2015-present Tam Dev, Inc. All Rights Reserved.
// See LICENSE.txt for license information.

import {connect} from 'react-redux';

import {getPluggableId} from 'selectors/rhs';

import type {GlobalState} from 'types/store';
import type {PluginComponent} from 'types/store/plugins';

import RHSPlugin from './rhs_plugin';

function mapStateToProps(state: GlobalState) {
    const rhsPlugins: PluginComponent[] = state.plugins.components.RightHandSidebarComponent;
    const pluggableId = getPluggableId(state);
    const pluginComponent = rhsPlugins.find((element: PluginComponent) => element.id === pluggableId);
    const pluginTitle = pluginComponent ? pluginComponent.title : '';

    return {
        showPluggable: Boolean(pluginComponent),
        pluggableId,
        title: pluginTitle,
    };
}

export default connect(mapStateToProps)(RHSPlugin);
