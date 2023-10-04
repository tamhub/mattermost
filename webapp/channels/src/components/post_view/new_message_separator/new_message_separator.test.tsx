// Copyright (c) 2015-present Tam Dev, Inc. All Rights Reserved.
// See LICENSE.txt for license information.

import React from 'react';

import {renderWithIntl, screen} from 'tests/react_testing_utils';

import NewMessageSeparator from './new_message_separator';

describe('components/post_view/new_message_separator', () => {
    test('should render new_message_separator', () => {
        renderWithIntl(
            <NewMessageSeparator
                separatorId='1234'
                newMessagesSeparatorActions={[]}
                lastViewedAt={0}
            />,
        );

        const newMessage = screen.getByText('New Messages');
        const separator = screen.getByTestId('NotificationSeparator');

        expect(newMessage).toBeInTheDocument();
        expect(newMessage).toHaveClass('separator__text');

        expect(separator).toBeInTheDocument();
        expect(separator).toHaveClass('Separator NotificationSeparator');
    });
});
