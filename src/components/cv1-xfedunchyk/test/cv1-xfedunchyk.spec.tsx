import { newSpecPage } from '@stencil/core/testing';
import { Cv1Xfedunchyk } from '../cv1-xfedunchyk';

describe('cv1-xfedunchyk', () => {
  it('renders', async () => {
    const page = await newSpecPage({
      components: [Cv1Xfedunchyk],
      html: `<cv1-xfedunchyk></cv1-xfedunchyk>`,
    });
    
      const wlList = page.rootInstance as Cv1Xfedunchyk;
      const expectedPatients = wlList?.waitingPatients?.length

      const items = page.root.shadowRoot.querySelectorAll("md-list-item");
      expect(items.length).toEqual(expectedPatients);

  });
});
