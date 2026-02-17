import { newE2EPage } from '@stencil/core/testing';

describe('cv1-xfedunchyk', () => {
  it('renders', async () => {
    const page = await newE2EPage();
    await page.setContent('<cv1-xfedunchyk></cv1-xfedunchyk>');

    const element = await page.find('cv1-xfedunchyk');
    expect(element).toHaveClass('hydrated');
  });
});
