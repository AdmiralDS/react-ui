import * as React from 'react';

import { MenuButton } from './Menu';
import type { BreadcrumbProps } from './BreadCrumb';
import { Breadcrumb } from './BreadCrumb';
import { Compensator, Navigation, OverflowContentWrapper, OverflowItem, Separator, Wrapper } from './style';
import type { DefaultTheme, FlattenInterpolation, ThemeProps } from 'styled-components';

type Dimension = 'l' | 'm' | 's';

export interface BreadcrumbsProps extends React.HTMLAttributes<HTMLElement> {
  /** Массив хлебных крошек */
  items: BreadcrumbProps[];
  /** Размер компонента */
  dimension?: Dimension;
  /** Мобильное отображение компонента */
  mobile?: boolean;
  /** Позволяет добавлять миксин для выпадающих меню, созданный с помощью styled css  */
  dropContainerCssMixin?: FlattenInterpolation<ThemeProps<DefaultTheme>>;
}

export const Breadcrumbs: React.FC<BreadcrumbsProps> = ({
  items,
  dimension = 'l',
  mobile,
  dropContainerCssMixin,
  ...props
}) => {
  const iconSize = dimension === 'l' ? 20 : 16;
  const visible = items.slice(1, items.length - 1);
  const wrapperRef = React.useRef<HTMLOListElement>(null);
  const overflowRef = React.useRef<HTMLDivElement>(null);
  const [visibilityMap, setVisibilityMap] = React.useState<{ [index: number | string]: boolean }>({ 0: true });

  React.useLayoutEffect(() => {
    if (mobile) {
      wrapperRef.current?.lastElementChild?.scrollIntoView({
        behavior: 'smooth',
        inline: 'center',
        block: 'nearest',
      });
    }
  }, [items, mobile]);

  const handleIntersection = (entries: IntersectionObserverEntry[]) => {
    const updatedEntries: { [index: number | string]: boolean } = {};
    entries.forEach((entry: any) => {
      const target = entry.target;
      const targetNumber = target.dataset.number;

      if (entry.isIntersecting && entry.intersectionRatio === 1.0) {
        updatedEntries[targetNumber] = true;
      } else {
        updatedEntries[targetNumber] = false;
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
        {...(mobile ? {} : order)}
        {...item}
      />
    ) : null;
  }, [items, mobile, dimension]);

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
          aria-label=""
        />
        <Separator width={iconSize} height={iconSize} aria-hidden />
      </OverflowItem>
    ) : null;
  };

  return (
    <Navigation aria-label="Breadcrumb" {...props}>
      <Wrapper ref={wrapperRef} mobile={mobile} role="list">
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
            <OverflowContentWrapper dimension={dimension} ref={overflowRef}>
              {renderVisibleItems()}
              {renderLastItem()}
              <Compensator data-number={items.length} />
            </OverflowContentWrapper>
          </>
        )}
      </Wrapper>
    </Navigation>
  );
};

Breadcrumbs.displayName = 'Breadcrumbs';
