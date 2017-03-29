import { CanalYoutubePage } from './app.po';

describe('canal-youtube App', () => {
  let page: CanalYoutubePage;

  beforeEach(() => {
    page = new CanalYoutubePage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
