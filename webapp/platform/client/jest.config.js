// Copyright (c) 2015-present Tam Dev, Inc. All Rights Reserved.
// See LICENSE.txt for license information.

/** @type {import('jest').Config} */

module.exports = {
    moduleNameMapper: {
        '^@mattermost/types/(.*)$': '<rootDir>/../types/src/$1',
    },
    setupFiles: ['<rootDir>/src/setupTests.ts'],
};
