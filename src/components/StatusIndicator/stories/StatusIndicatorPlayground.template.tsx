import * as React from 'react';

import { StatusIndicator } from '@admiral-ds/react-ui';
import type { StatusIndicatorProps } from '@admiral-ds/react-ui';
import { ReactComponent as CheckOutline } from '@admiral-ds/icons/build/service/CheckOutline.svg';

export const StatusIndicatorPlaygroundTemplate = ({ text = 'P 16px/24 book', ...props }: StatusIndicatorProps) => {
  return <StatusIndicator {...props} text={text} icon={<CheckOutline />} />;
};
