// Copyright (c) 2015-present Tam Dev, Inc. All Rights Reserved.
// See LICENSE.txt for license information.

import type {UserThread, ThreadsState} from '@mattermost/types/threads';

export type ExtraData = {
    threadsToDelete?: UserThread[];
    threads: ThreadsState['threads'];
}
