import { Angular2basicsPage } from './app.po';

describe('angular2basics App', function() {
  let page: Angular2basicsPage;

  beforeEach(() => {
    page = new Angular2basicsPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
