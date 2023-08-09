import * as React from 'react';

import { ProgressPage } from '@admiral-ds/react-ui';
import type { ProgressPageProps } from '@admiral-ds/react-ui';

export const ProgressPageAnimationTemplate = (props: ProgressPageProps) => {
  const [tik, setTick] = React.useState(0);

  React.useEffect(() => {
    const counter = () => setTick((prev) => prev + 1);
    const timerId = setTimeout(counter, 1000);
    if (tik >= 20) {
      clearTimeout(timerId);
    }
    return () => {
      clearTimeout(timerId);
    };
  }, [tik]);

  return (
    <>
      <ProgressPage
        {...props}
        label={
          <>
            <div>{props.appearance === 'error' ? 'Ошибка загрузки' : 'Загрузка данных...'}</div>
            <div> {props.percent || tik}%</div>
          </>
        }
        percent={props.percent || tik}
        role="alert"
        aria-live="assertive"
      />
    </>
  );
};
