import { test, expect, Page } from '@playwright/test';
import { TextArea } from '../index'; // путь к вашему компоненту
import { Locator } from '@playwright/test';

test.describe('TextArea Component', () => {
  let page: Page;

  test.beforeEach(async ({ page: testPage }) => {
    page = testPage;
  });

  // Базовые тесты
  test('should render with default props', async () => {
    await page.setContent('<div id="root"></div>');
    await page.evaluate(() => {
      const { createRoot } = require('react-dom/client');
      const { TextArea } = require('./TextArea');

      const root = createRoot(document.getElementById('root'));
      root.render(React.createElement(TextArea));
    });

    const textarea = page.locator('textarea');
    await expect(textarea).toBeVisible();
    await expect(textarea).toHaveValue('');
  });

  test('should display initial value', async () => {
    await page.setContent('<div id="root"></div>');
    await page.evaluate(() => {
      const { createRoot } = require('react-dom/client');
      const { TextArea } = require('./TextArea');

      const root = createRoot(document.getElementById('root'));
      root.render(
        React.createElement(TextArea, {
          defaultValue: 'Initial text',
        }),
      );
    });

    const textarea = page.locator('textarea');
    await expect(textarea).toHaveValue('Initial text');
  });

  // Тесты контроллируемого режима
  test('should update value in controlled mode', async () => {
    await page.setContent('<div id="root"></div>');
    await page.evaluate(() => {
      const { createRoot, useState } = require('react-dom/client');
      const React = require('react');
      const { TextArea } = require('./TextArea');

      function TestComponent() {
        const [value, setValue] = React.useState('initial');
        return React.createElement(TextArea, {
          value: value,
          onChange: (e) => setValue(e.target.value),
        });
      }

      const root = createRoot(document.getElementById('root'));
      root.render(React.createElement(TestComponent));
    });

    const textarea = page.locator('textarea');
    await textarea.fill('new value');
    await expect(textarea).toHaveValue('new value');
  });

  // Тесты неконтроллируемого режима
  test('should update value in uncontrolled mode', async () => {
    await page.setContent('<div id="root"></div>');
    await page.evaluate(() => {
      const { createRoot } = require('react-dom/client');
      const { TextArea } = require('./TextArea');

      const root = createRoot(document.getElementById('root'));
      root.render(
        React.createElement(TextArea, {
          defaultValue: 'default',
        }),
      );
    });

    const textarea = page.locator('textarea');
    await textarea.fill('user input');
    await expect(textarea).toHaveValue('user input');
  });

  // Тесты иконок
  test('should display clear icon when value is present', async () => {
    await page.setContent('<div id="root"></div>');
    await page.evaluate(() => {
      const { createRoot } = require('react-dom/client');
      const { TextArea } = require('./TextArea');

      const root = createRoot(document.getElementById('root'));
      root.render(
        React.createElement(TextArea, {
          defaultValue: 'some text',
          displayClearIcon: true,
        }),
      );
    });

    const clearIcon = page.locator('svg[aria-hidden="true"]');
    await expect(clearIcon).toBeVisible();
  });

  test('should clear value when clear icon is clicked', async () => {
    await page.setContent('<div id="root"></div>');
    await page.evaluate(() => {
      const { createRoot } = require('react-dom/client');
      const { TextArea } = require('./TextArea');

      const root = createRoot(document.getElementById('root'));
      root.render(
        React.createElement(TextArea, {
          defaultValue: 'text to clear',
          displayClearIcon: true,
        }),
      );
    });

    const textarea = page.locator('textarea');
    const clearIcon = page.locator('svg[aria-hidden="true"]');

    await clearIcon.click();
    await expect(textarea).toHaveValue('');
  });

  test('should display copy icon when configured', async () => {
    await page.setContent('<div id="root"></div>');
    await page.evaluate(() => {
      const { createRoot } = require('react-dom/client');
      const { TextArea } = require('./TextArea');

      const root = createRoot(document.getElementById('root'));
      root.render(
        React.createElement(TextArea, {
          defaultValue: 'copy me',
          displayCopyIcon: true,
        }),
      );
    });

    const copyIcon = page.locator('svg[aria-hidden="true"]');
    await expect(copyIcon).toBeVisible();
  });

  // Тесты статусов
  test('should apply error status styling', async () => {
    await page.setContent('<div id="root"></div>');
    await page.evaluate(() => {
      const { createRoot } = require('react-dom/client');
      const { TextArea } = require('./TextArea');

      const root = createRoot(document.getElementById('root'));
      root.render(
        React.createElement(TextArea, {
          status: 'error',
        }),
      );
    });

    const container = page.locator('[data-status="error"]');
    await expect(container).toBeVisible();
  });

  test('should apply success status styling', async () => {
    await page.setContent('<div id="root"></div>');
    await page.evaluate(() => {
      const { createRoot } = require('react-dom/client');
      const { TextArea } = require('./TextArea');

      const root = createRoot(document.getElementById('root'));
      root.render(
        React.createElement(TextArea, {
          status: 'success',
        }),
      );
    });

    const container = page.locator('[data-status="success"]');
    await expect(container).toBeVisible();
  });

  // Тесты размеров
  test('should apply different dimensions', async () => {
    await page.setContent('<div id="root"></div>');
    await page.evaluate(() => {
      const { createRoot } = require('react-dom/client');
      const { TextArea } = require('./TextArea');

      const root = createRoot(document.getElementById('root'));
      root.render(
        React.createElement(TextArea, {
          dimension: 's',
        }),
      );
    });

    const textarea = page.locator('textarea');
    await expect(textarea).toBeVisible();
  });

  // Тесты autoHeight
  test('should auto-adjust height when autoHeight is enabled', async () => {
    await page.setContent('<div id="root"></div>');
    await page.evaluate(() => {
      const { createRoot } = require('react-dom/client');
      const { TextArea } = require('./TextArea');

      const root = createRoot(document.getElementById('root'));
      root.render(
        React.createElement(TextArea, {
          autoHeight: true,
          rows: 1,
        }),
      );
    });

    const textarea = page.locator('textarea');
    const initialHeight = await textarea.evaluate((el) => el.clientHeight);

    await textarea.fill('line 1\nline 2\nline 3\nline 4');
    await page.waitForTimeout(100); // даем время на обновление высоты

    const newHeight = await textarea.evaluate((el) => el.clientHeight);
    expect(newHeight).toBeGreaterThan(initialHeight);
  });

  // Тесты отключенного состояния
  test('should be disabled when disabled prop is true', async () => {
    await page.setContent('<div id="root"></div>');
    await page.evaluate(() => {
      const { createRoot } = require('react-dom/client');
      const { TextArea } = require('./TextArea');

      const root = createRoot(document.getElementById('root'));
      root.render(
        React.createElement(TextArea, {
          disabled: true,
          defaultValue: 'disabled text',
        }),
      );
    });

    const textarea = page.locator('textarea');
    await expect(textarea).toBeDisabled();
    await expect(textarea).toHaveValue('disabled text');
  });

  // Тесты readOnly
  test('should be read-only when readOnly prop is true', async () => {
    await page.setContent('<div id="root"></div>');
    await page.evaluate(() => {
      const { createRoot } = require('react-dom/client');
      const { TextArea } = require('./TextArea');

      const root = createRoot(document.getElementById('root'));
      root.render(
        React.createElement(TextArea, {
          readOnly: true,
          defaultValue: 'readonly text',
        }),
      );
    });

    const textarea = page.locator('textarea');
    await expect(textarea).toHaveAttribute('readonly', '');
  });

  // Тесты максимальной длины
  test('should respect maxLength attribute', async () => {
    await page.setContent('<div id="root"></div>');
    await page.evaluate(() => {
      const { createRoot } = require('react-dom/client');
      const { TextArea } = require('./TextArea');

      const root = createRoot(document.getElementById('root'));
      root.render(
        React.createElement(TextArea, {
          maxLength: 5,
        }),
      );
    });

    const textarea = page.locator('textarea');
    await textarea.fill('1234567890');

    const value = await textarea.inputValue();
    expect(value.length).toBeLessThanOrEqual(5);
  });

  // Тесты placeholder
  test('should display placeholder text', async () => {
    const placeholderText = 'Enter your text here';

    await page.setContent('<div id="root"></div>');
    await page.evaluate((text) => {
      const { createRoot } = require('react-dom/client');
      const { TextArea } = require('./TextArea');

      const root = createRoot(document.getElementById('root'));
      root.render(
        React.createElement(TextArea, {
          placeholder: text,
        }),
      );
    }, placeholderText);

    const textarea = page.locator('textarea');
    await expect(textarea).toHaveAttribute('placeholder', placeholderText);
  });

  // Тесты событий
  test('should call onChange callback when text changes', async () => {
    await page.setContent('<div id="root"></div>');
    const onChangeCalled = await page.evaluate(() => {
      return new Promise((resolve) => {
        const { createRoot } = require('react-dom/client');
        const React = require('react');
        const { TextArea } = require('./TextArea');

        let callCount = 0;

        function TestComponent() {
          return React.createElement(TextArea, {
            onChange: () => {
              callCount++;
              resolve(callCount);
            },
          });
        }

        const root = createRoot(document.getElementById('root'));
        root.render(React.createElement(TestComponent));
      });
    });

    const textarea = page.locator('textarea');
    await textarea.fill('test');

    expect(await onChangeCalled).toBeGreaterThan(0);
  });

  // Тесты иконок после внешнего изменения значения
  test('should update icons when value changes externally in controlled mode', async () => {
    await page.setContent('<div id="root"></div>');
    await page.evaluate(() => {
      const { createRoot, useState } = require('react-dom/client');
      const React = require('react');
      const { TextArea } = require('./TextArea');

      function TestComponent() {
        const [value, setValue] = React.useState('');
        return React.createElement(
          'div',
          {},
          React.createElement(TextArea, {
            value: value,
            displayClearIcon: true,
          }),
          React.createElement(
            'button',
            {
              onClick: () => setValue('external change'),
            },
            'Change Value',
          ),
        );
      }

      const root = createRoot(document.getElementById('root'));
      root.render(React.createElement(TestComponent));
    });

    const textarea = page.locator('textarea');
    const changeButton = page.locator('button');
    const clearIcon = page.locator('svg[aria-hidden="true"]');

    // Иконка не должна отображаться изначально
    await expect(clearIcon).toBeHidden();

    // Меняем значение извне
    await changeButton.click();
    await expect(textarea).toHaveValue('external change');

    // Иконка должна появиться
    await expect(clearIcon).toBeVisible();
  });

  // Тесты accessibility
  test('should have proper accessibility attributes', async () => {
    await page.setContent('<div id="root"></div>');
    await page.evaluate(() => {
      const { createRoot } = require('react-dom/client');
      const { TextArea } = require('./TextArea');

      const root = createRoot(document.getElementById('root'));
      root.render(
        React.createElement(TextArea, {
          'aria-label': 'Test textarea',
        }),
      );
    });

    const textarea = page.locator('textarea');
    await expect(textarea).toHaveAttribute('aria-label', 'Test textarea');
  });
});
