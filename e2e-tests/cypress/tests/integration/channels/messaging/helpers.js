// Copyright (c) 2015-present Tam Dev, Inc. All Rights Reserved.
// See LICENSE.txt for license information.

export function verifyDraftIcon(name, isVisible) {
    cy.uiGetLhsSection('CHANNELS').find(`#sidebarItem_${name}`).
        should('be.visible').
        findByTestId('draftIcon').
        should(isVisible ? 'be.visible' : 'not.exist');
}
