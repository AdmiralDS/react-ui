import * as React from "react";
import { ReactComponent as ChevronLeftOutline } from "@admiral-ds/icons/build/system/ChevronLeftOutline.svg";
import { ReactComponent as ChevronRightOutline } from "@admiral-ds/icons/build/system/ChevronRightOutline.svg";

import { IconPlacement } from "@admiral-ds/react-ui";

type ButtonProps = {
  onMouseDown: (event: React.MouseEvent<HTMLButtonElement>) => void;
  disabled: boolean;
  type: "left" | "right";
};

export const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ onMouseDown, disabled, type }, ref) => (
    <IconPlacement
      dimension="lSmall"
      ref={ref}
      onMouseDown={(event) => {
        event?.preventDefault();
        onMouseDown(event);
      }}
      disabled={disabled}
      highlightFocus={false}
    >
      {type === "left" && <ChevronLeftOutline />}
      {type === "right" && <ChevronRightOutline />}
    </IconPlacement>
  )
);
