// Copyright (c) 2015-present Tam Dev, Inc. All Rights Reserved.
// See LICENSE.txt for license information.

//go:build !production

package model

func getDefaultServiceEnvironment() string {
	return ServiceEnvironmentDev
}
