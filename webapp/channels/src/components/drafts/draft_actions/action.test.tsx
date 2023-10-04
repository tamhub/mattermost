// Copyright (c) 2015-present Tam Dev, Inc. All Rights Reserved.
// See LICENSE.txt for license information.

import {shallow} from 'enzyme';
import React from 'react';

import Action from './action';

describe('components/drafts/draft_actions/action', () => {
    const baseProps = {
        icon: '',
        id: '',
        name: '',
        onClick: jest.fn(),
        tooltipText: '',
    };

    it('should match snapshot', () => {
        const wrapper = shallow(
            <Action
                {...baseProps}
            />,
        );
        expect(wrapper).toMatchSnapshot();
    });
});
