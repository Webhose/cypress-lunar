import DynamicFilterPage from '../../../cypress/pages/DynamicFilterPage';
import LoginPage from '../../../cypress/pages/LoginPage';
import Homepage from '../../../cypress/pages/HomePage'; 

describe('Dynamic Filter Page Tests', () => {
  const dynamicFilterPage = new DynamicFilterPage();
  const loginPage = new LoginPage();
  const homepage = new Homepage();
  const userName = Cypress.env('email');
  const password = Cypress.env('password');

  beforeEach(() => {
    cy.viewport(1920, 1080) // Ensure Cypress opens in full-screen mode
    loginPage.visit();
    loginPage.enterUsername(userName);
    loginPage.enterPassword(password);
    loginPage.submit();
    cy.wait(2000);
    dynamicFilterPage.visit();
    homepage.search("Trump");
  });

  it('should click on the Site Type filter', () => {
    // dynamicFilterPage.clickOnFilterOption('Site Type');
    dynamicFilterPage.openSiteTypeFilter();
    dynamicFilterPage.selectSubFilter('telegram'); 
    homepage.verifyPostResults();
  });

  it('should click on the Domain filter', () => {
    dynamicFilterPage.openDomainFilter();
    dynamicFilterPage.selectSubFilter('4chan.org'); 
    homepage.verifyPostResults();
  });

  it('should click on the Status filter', () => {
    dynamicFilterPage.openSiteNameFilter();
    dynamicFilterPage.selectSubFilter('4chan'); 
    homepage.verifyPostResults();
  });

  it('should click on the Date Range filter', () => {
    dynamicFilterPage.openSiteSectionURLFilter();
    dynamicFilterPage.selectSubFilter('https://redlib.catsarch.com/'); 
    homepage.verifyPostResults();
  });

  it('should click on the Risk Level filter', () => {
    dynamicFilterPage.openThreadTitleFilter();
    dynamicFilterPage.selectSubFilter('https://discordapp.com/channels/518979695702704132/801552414465064980'); 
    homepage.verifyPostResults();
  });

  it('should click on the Entity filter', () => {
    dynamicFilterPage.openAuthorFilter();
    dynamicFilterPage.selectSubFilter('anonymous'); 
    homepage.verifyPostResults();
  });

  it('should click on the IP Address filter', () => {
    dynamicFilterPage.openTagCategoryFilter();
    dynamicFilterPage.selectSubFilter('extremism'); 
    homepage.verifyPostResults();
  });

  it('should click on the Industry filter', () => {
    dynamicFilterPage.openCyberRiskFilter();
    dynamicFilterPage.selectSubFilter('10'); 
    homepage.verifyPostResults();
  });

  it('should click on the Country filter', () => {
    dynamicFilterPage.openLanguageFilter();
    dynamicFilterPage.selectSubFilter('english'); 
    homepage.verifyPostResults();
  });

  it('should click on the Language filter', () => {
    dynamicFilterPage.openLocationFilter();
    dynamicFilterPage.selectSubFilter('us'); 
    homepage.verifyPostResults();
  });

  it('should click on the City filter', () => {
    dynamicFilterPage.openDomainValueFilter();
    dynamicFilterPage.selectSubFilter('youtube.com'); 
    homepage.verifyPostResults();
  });

  it('should click on the Network filter', () => {
    dynamicFilterPage.openEmailFilter();
    dynamicFilterPage.selectSubFilter('stephengardneronlychannel@outlook.com'); 
    homepage.verifyPostResults();
  });

  it('should click on the Hosting Provider filter', () => {
    dynamicFilterPage.openIpFilter();
    dynamicFilterPage.selectSubFilter('2.7.7.0'); 
    homepage.verifyPostResults();
  });

  it('should click on the Tags filter', () => {
    dynamicFilterPage.openCveFilter();
    dynamicFilterPage.selectSubFilter('cve-2023-40721'); 
    homepage.verifyPostResults();
  });

  it('should click on the Severity filter', () => {
    dynamicFilterPage.openCreditCardFilter();
    dynamicFilterPage.selectSubFilter('4633443827548008'); 
    homepage.verifyPostResults();
  });

  it('should click on the Impact filter', () => {
    dynamicFilterPage.openCryptoCurrencyFilter();
    dynamicFilterPage.selectSubFilter('0x90fc364dc4a36135171276bd580974a40d9e8cbb'); 
    homepage.verifyPostResults();
  });

  it('should click on the Threat Level filter', () => {
    dynamicFilterPage.openPhoneNumberFilter();
    dynamicFilterPage.selectSubFilter('+12123470786'); 
    homepage.verifyPostResults();
  });
});
