import { TestInstallPage } from './app.po';

describe('test-install App', () => {
  let page: TestInstallPage;

  beforeEach(() => {
    page = new TestInstallPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
