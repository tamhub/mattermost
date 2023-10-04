// Copyright (c) 2015-present Tam Dev, Inc. All Rights Reserved.
// See LICENSE.txt for license information.

import {shallow} from 'enzyme';
import React from 'react';
import {Provider} from 'react-redux';

import type {UserProfile, UserStatus} from '@mattermost/types/users';

import type {Draft} from 'selectors/drafts';

import mockStore from 'tests/test_store';

import Drafts from './drafts';

describe('components/drafts/drafts', () => {
    const baseProps = {
        drafts: [] as Draft[],
        user: {} as UserProfile,
        displayName: 'display_name',
        status: {} as UserStatus['status'],
        draftRemotes: {},
    };

    it('should match snapshot', () => {
        const store = mockStore();

        const wrapper = shallow(
            <Provider store={store}>
                <Drafts
                    {...baseProps}
                />
            </Provider>,
        );
        expect(wrapper).toMatchSnapshot();
    });

    it('should match snapshot for local drafts disabled', () => {
        const store = mockStore();

        const props = {
            ...baseProps,
        };

        const wrapper = shallow(
            <Provider store={store}>
                <Drafts
                    {...props}
                />
            </Provider>,
        );
        expect(wrapper).toMatchSnapshot();
    });
});
