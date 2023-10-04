// Copyright (c) 2015-present Tam Dev, Inc. All Rights Reserved.
// See LICENSE.txt for license information.

package model

type AnalyticsRow struct {
	Name  string  `json:"name"`
	Value float64 `json:"value"`
}

type AnalyticsRows []*AnalyticsRow
