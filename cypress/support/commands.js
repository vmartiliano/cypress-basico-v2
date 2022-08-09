Cypress.Commands.add('fillmandatoryfieldsandsubmit', function() {
      cy.get('#firstName').type('Martiliano')
      cy.get('#lastName').type('Carvalho')
      cy.get('#email').type('martiliano@mail.com')
      cy.get('#open-text-area').type('teste')
      cy.get('button[type="submit"]').click()
    })