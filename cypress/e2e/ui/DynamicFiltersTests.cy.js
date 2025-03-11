import DynamicFilterPage from '../../../cypress/pages/DynamicFilterPage';
import LoginPage from '../../../cypress/pages/LoginPage';
import Homepage from '../../../cypress/pages/Homepage'; 

describe('Dynamic Filter Page Tests', () => {
  const dynamicFilterPage = new DynamicFilterPage();
  const loginPage = new LoginPage();
  const homepage = new Homepage();

  beforeEach(() => {
    loginPage.visit();
    loginPage.enterUsername("almir@webz.io");
    loginPage.enterPassword("19Rek@.river.bog96");
    loginPage.submit();

    dynamicFilterPage.visit();
    homepage.search("Trump");
  });

  it('should click on the Site Type filter', () => {
    dynamicFilterPage.clickOnFilterOption('Site Type');
    dynamicFilterPage.selectSubFilter('telegram'); 
    dynamicFilterPage.verifyPostResults();
  });

  it('should click on the Domain filter', () => {
    dynamicFilterPage.clickOnFilterOption('Domain');
    dynamicFilterPage.selectSubFilter('4chan.org'); 
    dynamicFilterPage.verifyPostResults();
  });

  it('should click on the Status filter', () => {
    dynamicFilterPage.clickOnFilterOption('Site Name');
    dynamicFilterPage.selectSubFilter('4chan'); 
    dynamicFilterPage.verifyPostResults();
  });

  it('should click on the Date Range filter', () => {
    dynamicFilterPage.clickOnFilterOption('Site section URL');
    dynamicFilterPage.selectSubFilter('https://redlib.catsarch.com/'); 
    dynamicFilterPage.verifyPostResults();
  });

  it('should click on the Risk Level filter', () => {
    dynamicFilterPage.clickOnFilterOption('Thread URL');
    dynamicFilterPage.selectSubFilter('https://discordapp.com/channels/518979695702704132/801552414465064980'); 
    dynamicFilterPage.verifyPostResults();
  });

  it('should click on the Entity filter', () => {
    dynamicFilterPage.clickOnFilterOption('Author');
    dynamicFilterPage.selectSubFilter('anonymous'); 
    dynamicFilterPage.verifyPostResults();
  });

  it('should click on the IP Address filter', () => {
    dynamicFilterPage.clickOnFilterOption('Tag');
    dynamicFilterPage.selectSubFilter('extremism'); 
    dynamicFilterPage.verifyPostResults();
  });

  it('should click on the Industry filter', () => {
    dynamicFilterPage.clickOnFilterOption('Risk Score');
    dynamicFilterPage.selectSubFilter('10'); 
    dynamicFilterPage.verifyPostResults();
  });

  it('should click on the Country filter', () => {
    dynamicFilterPage.clickOnFilterOption('Language');
    dynamicFilterPage.selectSubFilter('english'); 
    dynamicFilterPage.verifyPostResults();
  });

  it('should click on the Language filter', () => {
    dynamicFilterPage.clickOnFilterOption('Location Entity');
    dynamicFilterPage.selectSubFilter('us'); 
    dynamicFilterPage.verifyPostResults();
  });

  it('should click on the City filter', () => {
    dynamicFilterPage.clickOnFilterOption('Domain Entity');
    dynamicFilterPage.selectSubFilter('youtube.com'); 
    dynamicFilterPage.verifyPostResults();
  });

  it('should click on the Network filter', () => {
    dynamicFilterPage.clickOnFilterOption('Email Entity');
    dynamicFilterPage.selectSubFilter('stephengardneronlychannel@outlook.com'); 
    dynamicFilterPage.verifyPostResults();
  });

  it('should click on the Hosting Provider filter', () => {
    dynamicFilterPage.clickOnFilterOption('IP Entity');
    dynamicFilterPage.selectSubFilter('2.7.7.0'); 
    dynamicFilterPage.verifyPostResults();
  });

  it('should click on the Tags filter', () => {
    dynamicFilterPage.clickOnFilterOption('CVE Entity');
    dynamicFilterPage.selectSubFilter('cve-2023-40721'); 
    dynamicFilterPage.verifyPostResults();
  });

  it('should click on the Severity filter', () => {
    dynamicFilterPage.clickOnFilterOption('Credit Card Entity');
    dynamicFilterPage.selectSubFilter('4633443827548008'); 
    dynamicFilterPage.verifyPostResults();
  });

  it('should click on the Impact filter', () => {
    dynamicFilterPage.clickOnFilterOption('Crypto Address Entity');
    dynamicFilterPage.selectSubFilter('0x90fc364dc4a36135171276bd580974a40d9e8cbb'); 
    dynamicFilterPage.verifyPostResults();
  });

  it('should click on the Threat Level filter', () => {
    dynamicFilterPage.clickOnFilterOption('Phone Entity');
    dynamicFilterPage.selectSubFilter('+12123470786'); 
    dynamicFilterPage.verifyPostResults();
  });
});
