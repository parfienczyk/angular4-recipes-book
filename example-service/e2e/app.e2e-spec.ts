import { ExampleServicePage } from './app.po';

describe('example-service App', () => {
  let page: ExampleServicePage;

  beforeEach(() => {
    page = new ExampleServicePage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!');
  });
});
