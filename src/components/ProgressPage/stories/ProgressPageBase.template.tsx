import * as React from 'react';

import { ProgressPage } from '@admiral-ds/react-ui';
import type { ProgressPageProps } from '@admiral-ds/react-ui';

export const ProgressPageBaseTemplate = ({ percent = 50, ...props }: ProgressPageProps) => {
  return (
    <>
      <ProgressPage
        {...props}
        label={
          props.label ? (
            <>
              <div>{props.label}</div>
            </>
          ) : (
            <>
              <div>{props.appearance === 'error' ? 'Ошибка загрузки' : 'Загрузка данных...'}</div>
              <div> {percent}%</div>
            </>
          )
        }
        percent={percent}
        role="alert"
        aria-live="assertive"
      />
    </>
  );
};
