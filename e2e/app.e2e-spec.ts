import { Ng2WebAppPage } from './app.po';

describe('ng2-web-app App', function() {
  let page: Ng2WebAppPage;

  beforeEach(() => {
    page = new Ng2WebAppPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
