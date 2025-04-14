import * as React from 'react';
import styled from 'styled-components';

import { Option, Select, MenuItem, T } from '@admiral-ds/react-ui';
import type { SelectProps, RenderOptionProps } from '@admiral-ds/react-ui';

import { Separator } from '#src/components/input/Select/stories/styled';

const InvisibleItem = styled(MenuItem)`
  height: 1px;
  padding: 0;
`;

interface LastOptionProps extends RenderOptionProps {
  onVisible?: () => void;
}
const LastOption = ({ containerRef, onVisible, ...props }: LastOptionProps) => {
  const [visible, setVisible] = React.useState<boolean>(false);
  const ref = React.useRef<HTMLDivElement>(null);

  const handleIntersection = (entries: IntersectionObserverEntry[]) => {
    if (entries[0].isIntersecting && !visible) {
      setVisible(true);
      onVisible?.();
    }

    if (!entries[0].isIntersecting && visible) {
      setVisible(false);
    }
  };

  React.useEffect(() => {
    const observer = new IntersectionObserver(handleIntersection, {
      root: containerRef?.current,
      threshold: [0, 1.0],
    });

    if (containerRef?.current && ref.current) {
      observer.observe(ref.current);
    }

    return () => observer.disconnect();
  }, [containerRef, visible]);

  return <InvisibleItem ref={ref} {...props} />;
};

export const LoadOnScrollTemplate = (props: SelectProps) => {
  const [count, setCount] = React.useState<number>(8);

  const renderOptions = React.useMemo(() => {
    const array = Array.from({ length: count }, (_, k) => {
      return `${k}0000`;
    }).map((item, index) => (
      <Option value={item} key={`${index}/${count}`}>
        {item}
      </Option>
    ));
    array.push(
      <Option
        key={`last/${count}`}
        value={'invisible'}
        renderOption={(options) => <LastOption {...options} onVisible={() => setCount(count + 5)} key={`last`} />}
      />,
    );

    return array;
  }, [count]);

  return (
    <>
      <T font="Body/Body 1 Long" as="div">
        Последним элементом списка опций select добавляется скрытый MenuItem, который отслеживает прокрутку списка до
        конца, и сообщает об этом вызывающему коду. По этому событию происходит изменение списка опций
      </T>
      <Separator />
      <Select {...props} mode="searchSelect">
        {renderOptions}
      </Select>
    </>
  );
};
