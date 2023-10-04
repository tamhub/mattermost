// Copyright (c) 2015-present Tam Dev, Inc. All Rights Reserved.
// See LICENSE.txt for license information.

import {expect, Locator} from '@playwright/test';

export default class FindChannelsModal {
    readonly container: Locator;
    readonly input;
    readonly searchList;

    constructor(container: Locator) {
        this.container = container;

        this.input = container.getByRole('textbox', {name: 'quick switch input'});
        this.searchList = container.locator('.suggestion-list__item');
    }

    async toBeVisible() {
        await expect(this.container).toBeVisible();
    }
}

export {FindChannelsModal};
