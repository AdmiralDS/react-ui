import { useRef } from 'react';
import type { css } from 'styled-components';
import { ReactComponent as ChevronRightOutline } from '@admiral-ds/icons/build/system/ChevronRightOutline.svg';
import { Tag } from '#src/components/Tag';
import { Badge } from '#src/components/Badge';
import type { PolymorphicComponentPropsWithRef } from '#src/components/common/polymorphicProps';
import { fixedForwardRef } from '#src/components/common/fixedForwardRef';
import { refSetter } from '#src/components/common/utils/refSetter';

import type { SideMenuNodeRenderProps } from './types';
import { Item, LeftCluster, RightCluster, WrapperIcon, Chevron } from './styles';
import { Label } from './Label';
import { HighlightedLabel } from './HighlightedLabel';

export interface SideMenuItemProps extends Omit<SideMenuNodeRenderProps, 'id'> {
  /** CSS миксин, созданный с помощью styled css, для переопределения стилей компонента */
  itemCssMixin?: ReturnType<typeof css>;
}

export type SideMenuItemPolymorphicProps<C extends React.ElementType> = PolymorphicComponentPropsWithRef<
  C,
  SideMenuItemProps
>;
export type SideMenuItemComponentType = (<C extends React.ElementType = 'div'>(
  props: SideMenuItemPolymorphicProps<C>,
) => ReturnType<typeof Item>) & {
  displayName?: string | undefined;
};

export const SideMenuItem: SideMenuItemComponentType = fixedForwardRef(
  (
    {
      type = 'item',
      dimension,
      label,
      labelType,
      selected,
      level,
      icon,
      badge: badgeProps,
      tag: tagProps,
      hasIcons,
      multilineView,
      visibleTooltip,
      tooltipCssMixin,
      searchActive,
      searchQuery,
      searchFormat,
      expanded,
      itemCssMixin,
      ...props
    },
    ref,
  ) => {
    const containerRef = useRef<any>(null);
    const badge = badgeProps ? <Badge {...badgeProps} dimension={dimension === 'l' ? 'm' : 's'} /> : undefined;
    const tag = tagProps ? <Tag {...tagProps} as="span" dimension={dimension === 'l' ? 'm' : 's'} /> : undefined;
    const visibleRightCluster = Boolean(tag || badge);

    return (
      <Item
        ref={refSetter(containerRef, ref)}
        $selected={selected}
        $dimension={dimension}
        $indentLevel={level}
        $hasIcons={hasIcons}
        $itemCssMixin={itemCssMixin}
        {...props}
      >
        <LeftCluster $dimension={dimension}>
          {hasIcons && level < 1 && <WrapperIcon $dimension={dimension}>{icon}</WrapperIcon>}
          <Label
            dimension={dimension}
            label={label}
            isHeader={labelType === 'header' && level < 1}
            multilineView={multilineView}
            visibleTooltip={visibleTooltip}
            tooltipCssMixin={tooltipCssMixin}
            container={containerRef.current}
          >
            {searchActive ? (
              <HighlightedLabel
                text={label}
                searchText={searchQuery}
                highlightFormat={searchFormat}
                multilineView={multilineView}
              />
            ) : (
              label
            )}
          </Label>
        </LeftCluster>
        {(visibleRightCluster || type === 'group') && (
          <RightCluster $dimension={dimension}>
            {badge}
            {tag}
            {type === 'group' && (
              <Chevron $dimension={dimension} $open={expanded}>
                <ChevronRightOutline />
              </Chevron>
            )}
          </RightCluster>
        )}
      </Item>
    );
  },
);

SideMenuItem.displayName = 'SideMenuItem';
