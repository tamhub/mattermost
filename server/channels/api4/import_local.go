// Copyright (c) 2015-present Tam Dev, Inc. All Rights Reserved.
// See LICENSE.txt for license information.

package api4

func (api *API) InitImportLocal() {
	api.BaseRoutes.Imports.Handle("", api.APILocal(listImports)).Methods("GET")
}
