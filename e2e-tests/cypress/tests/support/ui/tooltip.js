// Copyright (c) 2015-present Tam Dev, Inc. All Rights Reserved.
// See LICENSE.txt for license information.

Cypress.Commands.add('uiGetToolTip', (text) => {
    cy.findByRole('tooltip').should('contain', text);
});
