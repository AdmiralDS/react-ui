import * as React from 'react';
import { refSetter } from '#src/components/common/utils/refSetter';
import styled, { css } from 'styled-components';
import { typography } from '#src/components/Typography';
import { Tooltip } from '#src/components/TooltipRefactor';
import type { BreadcrumbsProps } from '#src/components/Breadcrumbs';

const getTypography = css<{ dimension: BreadcrumbsProps['dimension'] }>`
  ${({ dimension }) => {
    switch (dimension) {
      case 's':
        return typography['Caption/Caption 1'];
      case 'm':
        return typography['Body/Body 2 Short'];
      case 'l':
      default:
        return typography['Body/Body 1 Short'];
    }
  }}
`;

export const Crumb = styled.li<{ dimension: BreadcrumbsProps['dimension'] }>`
  display: flex;
  flex-shrink: 0;
  align-items: center;
  white-space: nowrap;
  ${getTypography}
`;

export const Content = styled.span`
  width: 100%;
  height: 100%;
  padding: 4px;
  display: flex;
  align-items: center;
`;

const TextWrapper = styled.div`
  position: relative;
  display: inline-block;
  cursor: pointer;
`;

export const CrumbAnchor = styled.a`
  display: flex;
  align-items: center;
  text-decoration: none;
  position: relative;
  color: ${({ theme }) => theme.color['Neutral/Neutral 50']};

  [aria-current='page'] & {
    pointer-events: none;
  }

  &:hover {
    color: ${({ theme }) => theme.color['Primary/Primary 70']};
  }
  &:active {
    color: ${({ theme }) => theme.color['Primary/Primary 80']};
  }

  &:focus {
    &:before {
      position: absolute;
      content: '';
      border: 2px solid ${({ theme }) => theme.color['Primary/Primary 60 Main']};
      border-radius: 4px;
      top: 0;
      left: 0;
      bottom: 0;
      right: 0;
    }
  }
  &:focus,
  & > ${Content} {
    outline: none;
  }
`;

export interface BreadcrumbProps extends React.HTMLAttributes<HTMLLIElement> {
  /** Текст хлебной крошки */
  text: string;
  /** Url хлебной крошки (href атрибут, используемый во внутреннем Anchor) */
  url?: string;
  /** Позволяет вместо внутреннего Anchor отрендерить любой другой компонент (https://styled-components.com/docs/api#as-polymorphic-prop) */
  linkAs?: React.ElementType;
  /** Дополнительные параметры, которые можно передать во внутренний Anchor */
  linkProps?: { [key: string]: string };
  /** Размер компонента */
  dimension?: BreadcrumbsProps['dimension'];
}

export const Breadcrumb = React.forwardRef<HTMLLIElement, BreadcrumbProps>(
  ({ text, url = '#', linkAs, linkProps, children, tabIndex, dimension = 'l', ...props }, ref) => {
    const tooltip = text.length > 40;
    const crumbRef = React.useRef<HTMLLIElement>(null);
    const textRef = React.useRef<HTMLDivElement | null>(null);

    const [tooltipVisible, setTooltipVisible] = React.useState(false);
    const handleTooltipVisibilityChange = (visible: boolean) => setTooltipVisible(visible);

    return (
      <Crumb ref={refSetter(ref, crumbRef)} dimension={dimension} {...props}>
        <CrumbAnchor href={url} as={linkAs} tabIndex={tabIndex} {...linkProps}>
          <Content tabIndex={-1} role="link">
            {tooltip ? <TextWrapper ref={textRef}>{text.slice(0, 37) + '...'}</TextWrapper> : text}
            {tooltip && (
              <Tooltip
                targetRef={textRef}
                visible={tooltipVisible}
                onVisibilityChange={handleTooltipVisibilityChange}
                renderContent={() => text}
              />
            )}
            {children}
          </Content>
        </CrumbAnchor>
      </Crumb>
    );
  },
);
