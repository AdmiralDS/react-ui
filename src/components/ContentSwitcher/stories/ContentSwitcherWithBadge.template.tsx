import * as React from 'react';

import { Badge, ContentSwitcher, ContentSwitcherItem } from '@admiral-ds/react-ui';

const list = [
  {
    title: (
      <>
        Active button <Badge style={{ marginLeft: 8 }}>3</Badge>
      </>
    ),
  },
  {
    title: (
      <>
        Default button <Badge style={{ marginLeft: 8 }}>6</Badge>
      </>
    ),
  },
  {
    title: (
      <>
        Disabled button <Badge style={{ marginLeft: 8 }}>6</Badge>
      </>
    ),
    disabled: true,
  },
];

export const ContentSwitcherWithBadgeTemplate = () => {
  const [active, setActive] = React.useState(0);

  return (
    <>
      <ContentSwitcher dimension={'l'} appearance="primary">
        {list.map((item, index) => (
          <ContentSwitcherItem
            key={index}
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
