// Copyright (c) 2015-present Tam Dev, Inc. All Rights Reserved.
// See LICENSE.txt for license information.

import {expect, Locator} from '@playwright/test';

export default class ChannelsHeaderMobile {
    readonly container: Locator;

    constructor(container: Locator) {
        this.container = container;
    }

    async toBeVisible() {
        await expect(this.container).toBeVisible();
    }

    async toggleSidebar() {
        await this.container.getByRole('button', {name: 'Toggle sidebar Menu Icon'}).click();
    }
}

export {ChannelsHeaderMobile};
