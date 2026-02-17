import { newSpecPage } from '@stencil/core/testing';
import { Cv1Xfedunchyk } from '../cv1-xfedunchyk';

describe('cv1-xfedunchyk', () => {
  it('renders', async () => {
    const page = await newSpecPage({
      components: [Cv1Xfedunchyk],
      html: `<cv1-xfedunchyk></cv1-xfedunchyk>`,
    });
    expect(page.root).toEqualHtml(`
      <cv1-xfedunchyk>
        <mock:shadow-root>
          <slot></slot>
        </mock:shadow-root>
      </cv1-xfedunchyk>
    `);
  });
});
