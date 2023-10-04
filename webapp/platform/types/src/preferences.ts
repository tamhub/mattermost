// Copyright (c) 2015-present Tam Dev, Inc. All Rights Reserved.
// See LICENSE.txt for license information.

export type PreferenceType = {
    category: string;
    name: string;
    user_id: string;
    value?: string;
};

export type PreferencesType = {
    [x: string]: PreferenceType;
};
