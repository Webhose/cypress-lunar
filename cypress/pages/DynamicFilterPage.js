import BasePage from "./BasePage";

class DynamicFilterPage extends BasePage {
  visit() {
    cy.visit('/discover');
  }

  selectSubFilter(title) {
    cy.get(`[title="${title}"]`).parent().first().click();
  }

  clickOnFilterOption(filterName) {
    const transformedId = this.getIdFromFilterName(filterName);
    cy.get(`#${transformedId}`).click();
  }

  getIdFromFilterName(filterName) {
    return `fieldsite${filterName.toLowerCase().replace(/ /g, '.')}`;
  }

  openSiteTypeFilter() {
    cy.wait(1000);
    cy.get('[id="fieldsite.type"]').click();
  }
  
  openDomainFilter() {
    cy.wait(1000);
    cy.get('[id="fieldsite.domain"]').click();
  }
  
  openSiteNameFilter() {
    cy.wait(1000);
    cy.get('[id="fieldsite.name_agg"]').click();
  }
  
  openSiteSectionURLFilter() {
    cy.wait(1000);
    cy.get('[id="fieldthread.site_section"]').click();
  }
  
  openUrlFilter() {
    cy.wait(1000);
    cy.get('[id="fieldthread.url"]').click();
  }
  
  openAuthorFilter() {
    cy.wait(1000);
    cy.get('[id="fieldauthor"]').click();
  }
  
  openTagCategoryFilter() {
    cy.wait(1000);
    cy.get('[id="fieldenriched.category"]').click();
  }
  
  openCyberRiskFilter() {
    cy.wait(1000);
    cy.get('[id="fieldenriched.cyber_risk.value"]').click();
  }
  
  openLanguageFilter() {
    cy.wait(1000);
    cy.get('[id="fieldlanguage"]').click();
  }
  
  openLocationFilter() {
    cy.wait(1000);
    cy.get('[id="fieldenriched.location.none.keyword"]').click();
  }
  
  openDomainValueFilter() {
    cy.wait(1000);
    cy.get('[id="fieldenriched.domain.value"]').click();
  }
  
  openEmailFilter() {
    cy.wait(1000);
    cy.get('[id="fieldenriched.email.value"]').click();
  }
  
  openIpFilter() {
    cy.wait(1000);
    cy.get('[id="fieldenriched.ip.value"]').click();
  }
  
  openCveFilter() {
    cy.wait(1000);
    cy.get('[id="fieldenriched.cve.value"]').click();
  }
  
  openCreditCardFilter() {
    cy.wait(1000);
    cy.get('[id="fieldenriched.credit_card.value"]').click();
  }

  openPhoneNumberFilter() {
    cy.wait(1000);
    cy.get('[id="fieldenriched.phone.value"]').click();
  }

  openCryptoCurrencyFilter() {  
    cy.wait(1000);
    cy.get('[id="fieldenriched.wallet_id.value"]').click();
  }

  waitForDynamicFiltersToLoad() {
    cy.get('#fieldsite\\.type', { timeout: 10000 }) // Wait up to 10s
      .should('be.visible');
  }
  
}

export default DynamicFilterPage;
