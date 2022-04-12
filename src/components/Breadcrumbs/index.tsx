import * as React from 'react';
import { uid } from '#/components/common/uid';
import observeRect from '#/components/common/observeRect';

import { measureCrumb } from './utils';
import { MenuButton } from './Menu';
import { Breadcrumb } from './BreadCrumb';
import type { BreadcrumbProps } from './BreadCrumb';
import { Wrapper, Content, Separator } from './style';

type Dimension = 'l' | 'm' | 's';
type CrumbWithRefProps = BreadcrumbProps & { ref: React.RefObject<HTMLLIElement>; width?: number };

export interface BreadcrumbsProps extends React.HTMLAttributes<HTMLOListElement> {
  /** Массив хлебных крошек */
  items: BreadcrumbProps[];
  /** Размер компонента */
  dimension?: Dimension;
  /** Мобильное отображение компонента */
  mobile?: boolean;
}

export const Breadcrumbs: React.FC<BreadcrumbsProps> = ({ items, dimension = 'l', mobile, ...props }) => {
  // add refs to items
  const crumbsWithRef: Array<CrumbWithRefProps> = items.map((item) => ({
    ...item,
    ref: React.createRef<HTMLLIElement>(),
  }));
  const iconSize = dimension === 'l' ? 20 : 16;
  const wrapperRef = React.useRef<HTMLOListElement>(null);
  const btnRef = React.useRef<HTMLButtonElement>(null);
  const contentRef = React.useRef<HTMLDivElement>(null);
  const [_, update] = React.useState({});
  const [crumbs, setCrumbs] = React.useState({ visible: crumbsWithRef.length - 2, hidden: 0 });

  const visibleItems = mobile
    ? crumbsWithRef.slice(1, crumbsWithRef.length - 1)
    : crumbsWithRef.slice(1 + crumbs.hidden, -1);
  const hiddenItems = mobile ? [] : crumbsWithRef.slice(1, -(1 + crumbs.visible));

  React.useEffect(() => {
    mobile &&
      crumbsWithRef[crumbsWithRef.length - 1].ref.current?.scrollIntoView({
        behavior: 'smooth',
        inline: 'center',
        block: 'nearest',
      });
  }, [items, mobile]);

  // measure crumbs width
  React.useLayoutEffect(() => {
    if (!mobile) {
      crumbsWithRef.forEach((item: CrumbWithRefProps, index: number) => {
        measureCrumb(item.text, dimension, index === crumbsWithRef.length - 1, (width: number) => {
          item.width = width;
        });
      });
    }
  }, [crumbsWithRef, mobile, _]);

  // recalculation on wrapper resize
  React.useLayoutEffect(() => {
    if (wrapperRef.current && !mobile) {
      const observer = observeRect(wrapperRef.current, (rect) => {
        const wrapperWidth = rect?.width || 0;

        // first and last items
        let contentWidth = (crumbsWithRef[0].width || 0) + (crumbsWithRef[crumbsWithRef.length - 1].width || 0);
        let visibleCrumbsCounter = 0;

        const restCrumbs = crumbsWithRef.slice(1, crumbsWithRef.length - 1).reverse();
        restCrumbs.forEach((item: CrumbWithRefProps) => {
          contentWidth += item.width || 0;
          if (contentWidth <= wrapperWidth) {
            visibleCrumbsCounter++;
          }
        });
        const hiddenCrumbsCounter = crumbsWithRef.length - 2 - visibleCrumbsCounter;

        if (visibleCrumbsCounter !== crumbs.visible || hiddenCrumbsCounter !== crumbs.hidden) {
          setCrumbs({ visible: visibleCrumbsCounter, hidden: hiddenCrumbsCounter });
        }
      });
      observer.observe();
      return () => {
        observer.unobserve();
      };
    }
  }, [wrapperRef.current, mobile, _]);

  React.useLayoutEffect(() => {
    if (contentRef.current && !mobile) {
      const observer = observeRect(contentRef.current, () => update({}));
      observer.observe();
      return () => {
        observer.unobserve();
      };
    }
  }, [contentRef.current, mobile]);

  const renderFirstItem = () => {
    const item = crumbsWithRef[0];
    const id = item.id || uid();
    return (
      <Breadcrumb key={id} {...item}>
        <Separator width={iconSize} height={iconSize} aria-hidden />
      </Breadcrumb>
    );
  };

  const renderLastItem = () => {
    const item = crumbsWithRef[crumbsWithRef.length - 1];
    const id = item.id || uid();
    return <Breadcrumb key={id} aria-current="page" {...item} />;
  };

  const renderVisibleItems = () => {
    return visibleItems.map((item) => {
      const id = item.id || uid();
      return (
        <Breadcrumb key={id} {...item}>
          <Separator width={iconSize} height={iconSize} aria-hidden />
        </Breadcrumb>
      );
    });
  };

  const renderHiddenItems = () => {
    return hiddenItems.length ? (
      <>
        <MenuButton ref={btnRef} options={hiddenItems} aria-label="" />
        <Separator width={iconSize} height={iconSize} aria-hidden />
      </>
    ) : null;
  };

  return (
    <Wrapper ref={wrapperRef} data-dimension={dimension} role="list" mobile={mobile} {...props}>
      <Content ref={contentRef}>
        {items.length > 1 ? renderFirstItem() : null}
        {renderHiddenItems()}
        {renderVisibleItems()}
        {renderLastItem()}
      </Content>
    </Wrapper>
  );
};
