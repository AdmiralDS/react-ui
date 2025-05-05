import * as React from 'react';

import { Badge, ContentSwitcher, ContentSwitcherItem } from '@admiral-ds/react-ui';
import type { ContentSwitcherProps } from '@admiral-ds/react-ui';

import { ReactComponent as StarSolid } from '@admiral-ds/icons/build/system/StarSolid.svg';

const list = [
  {
    title: (
      <>
        <StarSolid width={17} style={{ marginRight: 8 }} />
        Active button
      </>
    ),
  },
  {
    title: (
      <>
        <StarSolid width={17} style={{ marginRight: 8 }} />
        Default button <Badge style={{ marginLeft: 8 }}>6</Badge>
      </>
    ),
  },
  { title: 'Disabled button', disabled: true },
];

export const ContentSwitcherPlaygroundTemplate = ({
  dimension,
  className,
  adaptive,
  ...props
}: ContentSwitcherProps) => {
  const [active, setActive] = React.useState(0);

  return (
    <>
      <ContentSwitcher dimension={dimension} adaptive={adaptive} className={className} {...props}>
        {list.map((item, index) => (
          <ContentSwitcherItem
            key={index}
            adaptive={adaptive}
            active={index === active}
            onClick={() => setActive(index)}
            disabled={item.disabled}
          >
            {item.title}
          </ContentSwitcherItem>
        ))}
      </ContentSwitcher>
    </>
  );
};
