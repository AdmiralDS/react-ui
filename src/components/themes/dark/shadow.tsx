import type { Shadow } from '#/components/themes/common';

export const shadow = {
  ClickableActive: `
  box-shadow: 0px 2px 4px rgba(0, 0, 0, 0.4), 0px -2px 2px rgba(0, 0, 0, 0.08);;
`,
  ClickableDefault: `
  box-shadow: 0px 4px 8px rgba(0, 0, 0, 0.4), 0px -2px 4px rgba(0, 0, 0, 0.08);
`,
  ClickableHover: `
  box-shadow: 0px 8px 16px rgba(0, 0, 0, 0.4), 0px -2px 8px rgba(0, 0, 0, 0.08);
`,
  NonClickable: `
  box-shadow: 0px 4px 16px rgba(0, 0, 0, 0.4), 0px 0px 6px rgba(0, 0, 0, 0.08);
`,
} as Shadow;
