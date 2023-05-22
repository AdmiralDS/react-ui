import "@testing-library/jest-dom";
import { render, screen } from "@testing-library/react";

import { Button } from "@admiral-ds/date-picker";

describe("Running Test for Marbella Button", () => {
  test("Check Button Disabled", () => {
    render(<Button text="Button marbella" disabled />);
    expect(
      screen.getByRole("button", { name: "Button marbella" })
    ).toBeDisabled();
  });
});
