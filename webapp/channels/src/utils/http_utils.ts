// Copyright (c) 2015-present Tam Dev, Inc. All Rights Reserved.
// See LICENSE.txt for license information.

import {useLocation} from 'react-router-dom';

export function useQuery() {
    return new URLSearchParams(useLocation().search);
}
