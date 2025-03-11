class DynamicFilterPage extends BasePage {
  visit() {
    cy.visit('/discover');
  }

  selectSubFilter(title) {
    cy.get(`[title="${title}"]`).parent().click();
  }

  clickOnFilterOption(filterName) {
    const transformedId = this.getIdFromFilterName(filterName);
    cy.get(`#${transformedId}`).click();
  }

  getIdFromFilterName(filterName) {
    return `field${filterName.toLowerCase().replace(/ /g, '.')}`;
  }

  verifyPostResults() {
    cy.get('li.postResult').should('have.length', 10);
    cy.get('li.postResult').each(($el, index) => {
      cy.wrap($el)
        .find('.postResult__title')
        .invoke('text')
        .should('not.be.empty');
      if (index < 10) {
        cy.wrap($el)
          .find('a')
          .click({ force: true });
      }
    });
  }
}

export default DynamicFilterPage;
