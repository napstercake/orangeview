import { OrangeviewPage } from './app.po';

describe('orangeview App', () => {
  let page: OrangeviewPage;

  beforeEach(() => {
    page = new OrangeviewPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
