// Copyright (c) 2015-present Tam Dev, Inc. All Rights Reserved.
// See LICENSE.txt for license information.

package model

type EmojiSearch struct {
	Term       string `json:"term"`
	PrefixOnly bool   `json:"prefix_only"`
}
