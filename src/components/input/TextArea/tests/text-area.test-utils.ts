import { Page, Locator } from '@playwright/test';

export class TextAreaPageObject {
  constructor(private page: Page) {}

  async renderTextArea(props: any = {}) {
    await this.page.setContent('<div id="root"></div>');
    await this.page.evaluate((componentProps) => {
      const { createRoot } = require('react-dom/client');
      const { TextArea } = require('./TextArea');

      const root = createRoot(document.getElementById('root'));
      root.render(React.createElement(TextArea, componentProps));
    }, props);
  }

  getTextarea(): Locator {
    return this.page.locator('textarea');
  }

  getClearIcon(): Locator {
    return this.page.locator('svg[aria-hidden="true"]').first();
  }

  getCopyIcon(): Locator {
    return this.page.locator('svg[aria-hidden="true"]').first();
  }

  getContainer(): Locator {
    return this.page.locator('[data-status]').first();
  }

  async typeText(text: string) {
    const textarea = this.getTextarea();
    await textarea.fill(text);
  }

  async clearText() {
    const textarea = this.getTextarea();
    await textarea.fill('');
  }

  async getValue(): Promise<string> {
    const textarea = this.getTextarea();
    return textarea.inputValue();
  }
}
