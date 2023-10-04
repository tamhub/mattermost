// Copyright (c) 2015-present Tam Dev, Inc. All Rights Reserved.
// See LICENSE.txt for license information.

import {mount, shallow} from 'enzyme';
import React from 'react';

import OverlayTrigger from 'components/overlay_trigger';

import Input from './input';

describe('components/widgets/inputs/Input', () => {
    test('should match snapshot', () => {
        const wrapper = shallow(
            <Input/>,
        );

        expect(wrapper).toMatchSnapshot();
    });

    test('should render with clearable enabled', () => {
        const value = 'value';
        const clearableTooltipText = 'tooltip text';
        const onClear = jest.fn();

        const wrapper = shallow(
            <Input
                value={value}
                clearable={true}
                clearableTooltipText={clearableTooltipText}
                onClear={onClear}
            />,
        );

        const clear = wrapper.find('.Input__clear');
        expect(clear.length).toEqual(1);
        expect(wrapper.find('CloseCircleIcon').length).toEqual(1);

        const tooltip = wrapper.find(OverlayTrigger);
        expect(tooltip.length).toEqual(1);

        const overlay = mount(tooltip.prop('overlay'));
        expect(overlay.text()).toEqual(clearableTooltipText);

        clear.first().simulate('mousedown');

        expect(onClear).toHaveBeenCalledTimes(1);
    });
});
