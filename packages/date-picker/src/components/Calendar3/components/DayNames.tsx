import type { FC } from "react";
import * as React from "react";
import type { Dayjs } from "dayjs";
import { ThemeContext } from "styled-components";
import { LIGHT_THEME } from "@admiral-ds/react-ui";

import { capitalizeFirstLetter, DAY_NUMBERS } from "../constants";
import { addDays, startOfWeek } from "../date-utils";
import { DayNameComponent } from "../styled/DayNameComponent";

interface IDayNamesProps {
  date: Dayjs;
}

export const DayNames: FC<IDayNamesProps> = ({ date }) => {
  const theme = React.useContext(ThemeContext) || LIGHT_THEME;
  const weekStart = startOfWeek(
    date,
    theme.locales[theme.currentLocale].firstDayOfWeek ?? 1
  );
  return (
    <div>
      {DAY_NUMBERS.map((offset) => {
        const day = addDays(weekStart, offset);
        const weekDayName = capitalizeFirstLetter(day.format("dd").slice(0, 2));
        return (
          <DayNameComponent key={day.valueOf()}>{weekDayName}</DayNameComponent>
        );
      })}
    </div>
  );
};
