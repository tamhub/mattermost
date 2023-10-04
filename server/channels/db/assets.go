// Copyright (c) 2015-present Tam Dev, Inc. All Rights Reserved.
// See LICENSE.txt for license information.

package db

import "embed"

//go:embed migrations
var assets embed.FS

func Assets() embed.FS {
	return assets
}
