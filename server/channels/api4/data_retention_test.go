// Copyright (c) 2015-present Tam Dev, Inc. All Rights Reserved.
// See LICENSE.txt for license information.

package api4

import (
	"context"
	"testing"

	"github.com/stretchr/testify/require"
)

func TestDataRetentionGetPolicy(t *testing.T) {
	th := Setup(t)
	defer th.TearDown()

	_, resp, err := th.Client.GetDataRetentionPolicy(context.Background())
	require.Error(t, err)
	CheckNotImplementedStatus(t, resp)
}
