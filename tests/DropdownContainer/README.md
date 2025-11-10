# Dropdown Positioning Tests

## Overview

This test suite verifies that dropdown components render without flickering or repositioning issues after removing the 200ms transition delay.

## Test Coverage

### Positioning Stability Tests

1. **No repositioning after initial render**
   - Verifies dropdown position remains stable at 0ms, 50ms, 150ms, and 250ms
   - Ensures no jumping or shifting occurs

2. **Immediate visibility**
   - Confirms dropdown becomes visible within 100ms
   - Checks opacity transitions smoothly to 1

3. **Edge case positioning**
   - **Bottom edge**: Ensures dropdown doesn't overflow viewport when trigger is near bottom
   - **Right edge**: Verifies proper alignment when near right edge
   - **Left edge**: Confirms positioning works near left edge

4. **Dynamic viewport changes**
   - Tests position stability during viewport resize
   - Ensures dropdown remains visible and properly positioned

5. **Rapid open/close cycles**
   - Verifies stability with quick repeated open/close actions
   - Tests for race conditions or positioning bugs

6. **Mobile viewport**
   - Tests on 375x667 viewport (iPhone SE size)
   - Ensures dropdown fits within small screens

7. **Menu container variant**
   - Tests with actual menu content
   - Verifies menu items are visible and stable

### Visual Stability Tests

1. **Screenshot comparison**
   - Compares screenshots at 10ms and 210ms after opening
   - Ensures visual consistency (no flickering)

## Running the Tests

### Locally

```bash
# Run all dropdown positioning tests
npm run test:e2e tests/DropdownContainer/dropdownPositioning.spec.ts

# Run with UI mode (interactive)
npm run test:e2e-ui tests/DropdownContainer/dropdownPositioning.spec.ts

# Run specific test
npx playwright test -g "should not reposition after initial render"
```

### In GitHub Actions

The tests can be triggered in three ways:

1. **Automatically** - Runs on push to main/master/claude/** branches and on PRs
2. **Manually** - Via GitHub Actions UI:
   - Go to Actions tab
   - Select "UI Tests" workflow
   - Click "Run workflow"
   - Choose test type: "dropdown-positioning"

3. **Via API/CLI**
```bash
gh workflow run ui-tests.yml -f test_type=dropdown-positioning
```

## Test Artifacts

When tests run in CI, the following artifacts are uploaded:

- **dropdown-positioning-report**: HTML report with test results
- **dropdown-screenshots**: Screenshots and traces for debugging

Access artifacts:
1. Go to the workflow run in GitHub Actions
2. Scroll to "Artifacts" section at the bottom
3. Download the reports

## Interpreting Results

### Success Criteria

✅ All tests pass
✅ No position jumps detected
✅ Dropdowns appear within 100ms
✅ No viewport overflow in edge cases
✅ Screenshots match (no visual changes)

### Failure Investigation

If tests fail:

1. **Check the HTML report** - Shows which tests failed and why
2. **Review screenshots** - Look for visual differences
3. **Check traces** - Playwright traces show step-by-step execution
4. **Run locally with UI mode** - Interactive debugging

## Technical Details

### Why Remove the 200ms Delay?

The original 200ms `transition-delay` was added to hide positioning calculations, but it's unnecessary because:

- `useLayoutEffect` runs **before** browser paint
- Position calculations happen synchronously
- Continuous position checks via `useInterval` (100ms) handle dynamic changes

### Changes Made

**Before:**
```css
opacity: 0;
transition-delay: 200ms;
transition-property: opacity;
```

**After:**
```css
opacity: 0;
transition-property: opacity;
transition-duration: 0.1s;
```

Result: Dropdowns appear **200ms faster** with smooth 100ms fade-in, no flickering.

## Browser Coverage

Tests run on:
- ✅ Chromium (Chrome, Edge)
- ✅ Firefox
- ✅ WebKit (Safari)

## Maintenance

Update these tests when:
- Dropdown positioning logic changes
- New edge cases are discovered
- Layout system changes (flexbox, grid, etc.)
- New viewport sizes need testing
