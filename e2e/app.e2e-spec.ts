import { CruddyNgPage } from './app.po';

describe('cruddy-ng App', () => {
  let page: CruddyNgPage;

  beforeEach(() => {
    page = new CruddyNgPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
