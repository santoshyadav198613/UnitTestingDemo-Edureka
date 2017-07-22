import { UnitTestingDemoPage } from './app.po';

describe('unit-testing-demo App', () => {
  let page: UnitTestingDemoPage;

  beforeEach(() => {
    page = new UnitTestingDemoPage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!!');
  });
});
