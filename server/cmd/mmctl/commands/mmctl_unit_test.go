// Copyright (c) 2015-present Tam Dev, Inc. All Rights Reserved.
// See LICENSE.txt for license information.

//go:build unit
// +build unit

package commands

import (
	"testing"

	"github.com/stretchr/testify/suite"
)

func TestMmctlUnitSuite(t *testing.T) {
	suite.Run(t, new(MmctlUnitTestSuite))
}
