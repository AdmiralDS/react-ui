import * as React from 'react';
import type { CSSProperties } from 'react';

import { MenuButton } from './Menu';
import type { BreadcrumbProps } from './BreadCrumb';
import { Breadcrumb } from './BreadCrumb';
import {
  Compensator,
  Navigation,
  OverflowContentWrapper,
  OverflowContent,
  OverflowItem,
  Separator,
  Wrapper,
} from './style';
import type { css } from 'styled-components';

type Dimension = 'l' | 'm' | 's';

export interface BreadcrumbsProps extends React.HTMLAttributes<HTMLElement> {
  /** Массив хлебных крошек */
  items: BreadcrumbProps[];
  /** Размер компонента */
  dimension?: Dimension;
  /** Мобильное отображение компонента */
  mobile?: boolean;
  /** Является ли последняя хлебная крошка активной */
  lastBreadcrumbActive?: boolean;
  /** Позволяет добавлять миксин для выпадающих меню, созданный с помощью styled css  */
  dropContainerCssMixin?: ReturnType<typeof css>;
  /** Позволяет добавлять класс на контейнер выпадающего меню  */
  dropContainerClassName?: string;
  /** Позволяет добавлять стили на контейнер выпадающего меню  */
  dropContainerStyle?: CSSProperties;
}

export const Breadcrumbs: React.FC<BreadcrumbsProps> = ({
  items,
  dimension = 'l',
  mobile,
  lastBreadcrumbActive = false,
  dropContainerCssMixin,
  dropContainerClassName,
  dropContainerStyle,
  ...props
}) => {
  const iconSize = dimension === 'l' ? 20 : 16;
  const visible = items.slice(1, items.length - 1);
  const wrapperRef = React.useRef<HTMLOListElement>(null);
  const overflowRef = React.useRef<HTMLOListElement>(null);
  const hasMounted = React.useRef(false);
  const [visibilityMap, setVisibilityMap] = React.useState<{ [index: number | string]: boolean }>({ 0: true });

  React.useEffect(() => {
    if (!hasMounted.current) {
      hasMounted.current = true;
    }
  }, []);

  // Если компонент в режиме mobile, нужно отслеживать изменение размера крошек,
  // вызванное подгрузкой шрифтов или изменением dimension, для того чтобы скорректировать позицию скролла
  React.useLayoutEffect(() => {
    const firstCrumb = wrapperRef.current?.firstElementChild;
    if (firstCrumb && mobile) {
      const resizeObserver = new ResizeObserver(() => {
        wrapperRef.current?.scrollBy({ left: wrapperRef.current.scrollWidth, behavior: 'smooth' });
      });
      resizeObserver.observe(firstCrumb);
      return () => {
        resizeObserver.disconnect();
      };
    }
  }, [mobile]);

  React.useLayoutEffect(() => {
    if (mobile && wrapperRef.current) {
      if (!hasMounted.current) {
        // При mountе компонента в режиме mobile доскролл до активной крошки должен происходить моментально
        wrapperRef.current?.scrollBy({ left: wrapperRef.current.scrollWidth });
      } else {
        // Если в ходе существования компонента меняется параметр items или компонент переходит
        // в режим mobile, то доскролл до активной крошки должен происходить плавно
        wrapperRef.current.scrollBy({ left: wrapperRef.current.scrollWidth, behavior: 'smooth' });
      }
    }
  }, [items, mobile]);

  const handleIntersection = (entries: IntersectionObserverEntry[]) => {
    const updatedEntries: { [index: number | string]: boolean } = {};
    entries.forEach((entry: any) => {
      const target = entry.target;
      const targetNumber = target.dataset.number;

      if (targetNumber) {
        // intersectionRatio - имеет значение float, сравнение с 1 может привести к неправильному
        // результату, данное сравнение равносильно (a - b) < 0.01
        updatedEntries[targetNumber] = entry.isIntersecting && entry.intersectionRatio > 0.99;
      }
    });

    setVisibilityMap((prev: { [index: number | string]: boolean }) => ({
      ...prev,
      ...updatedEntries,
    }));
  };

  React.useLayoutEffect(() => {
    const observer = new IntersectionObserver(handleIntersection, {
      root: wrapperRef.current,
      threshold: [0, 1.0],
    });

    if (overflowRef.current && !mobile) {
      Array.from(overflowRef.current.children).forEach((item) => {
        observer.observe(item);
      });
    }
    return () => observer.disconnect();
  }, [mobile, setVisibilityMap, items]);

  const renderFirstItem = React.useCallback(() => {
    const item = items[0];
    const id = item?.id || item?.text;
    return items.length > 1 ? (
      <Breadcrumb key={id} data-number={0} dimension={dimension} {...item}>
        <Separator width={iconSize} height={iconSize} aria-hidden />
      </Breadcrumb>
    ) : null;
  }, [items, dimension]);

  const renderLastItem = React.useCallback(() => {
    const item = items[items.length - 1];
    const id = item?.id || item?.text;
    const order = { style: { order: 1 } };
    return items.length > 0 ? (
      <Breadcrumb
        key={id}
        aria-current="page"
        data-number={items.length - 1}
        dimension={dimension}
        active={lastBreadcrumbActive}
        {...(mobile ? {} : order)}
        {...item}
      />
    ) : null;
  }, [items, mobile, dimension, lastBreadcrumbActive]);

  const renderVisibleItems = () => {
    return visible.map((item, index) => {
      const id = item.id || item.text;
      const order = { style: { order: items.length - index - 1 } };
      return (
        <Breadcrumb
          key={id}
          data-number={index + 1}
          tabIndex={visibilityMap[index + 1] ? 0 : -1}
          dimension={dimension}
          {...(mobile ? {} : order)}
          {...item}
        >
          <Separator width={iconSize} height={iconSize} aria-hidden />
        </Breadcrumb>
      );
    });
  };

  const renderHiddenItems = () => {
    const hiddenItems = items.filter((_, index) => !visibilityMap[index]);
    return hiddenItems.length ? (
      <OverflowItem>
        <MenuButton
          options={hiddenItems}
          dimension={dimension === 'l' ? 'm' : 's'}
          dropContainerCssMixin={dropContainerCssMixin}
          dropContainerClassName={dropContainerClassName}
          dropContainerStyle={dropContainerStyle}
          aria-label=""
        />
        <Separator width={iconSize} height={iconSize} aria-hidden />
      </OverflowItem>
    ) : null;
  };

  return (
    <Navigation aria-label="Breadcrumb" {...props}>
      <Wrapper ref={wrapperRef} $mobile={mobile} role="list">
        {mobile ? (
          <>
            {renderFirstItem()}
            {renderVisibleItems()}
            {renderLastItem()}
          </>
        ) : (
          <>
            {renderFirstItem()}
            {renderHiddenItems()}
            <OverflowContentWrapper $dimension={dimension} data-overflow>
              <OverflowContent ref={overflowRef}>
                {renderVisibleItems()}
                {renderLastItem()}
                <Compensator aria-hidden />
              </OverflowContent>
            </OverflowContentWrapper>
          </>
        )}
      </Wrapper>
    </Navigation>
  );
};

Breadcrumbs.displayName = 'Breadcrumbs';
