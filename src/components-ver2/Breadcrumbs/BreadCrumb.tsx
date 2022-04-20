import * as React from 'react';
import { refSetter } from '#src/components/common/utils/refSetter';
import styled from 'styled-components';
import { typography } from '#src/components-ver2/Typography';
import { Tooltip } from '#src/components-ver2/Tooltip';

export const Crumb = styled.li`
  display: flex;
  align-items: center;
  white-space: nowrap;
  ${typography['Body/Body 1 Short']}

  [data-dimension='m'] & {
    ${typography['Body/Body 2 Short']}
  }
  [data-dimension='s'] & {
    ${typography['Caption/Caption 1']}
  }
`;

export const Content = styled.span`
  width: 100%;
  height: 100%;
  padding: 4px;
  display: flex;
  align-items: center;
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
}

export const Breadcrumb = React.forwardRef<HTMLLIElement, BreadcrumbProps>(
  ({ text, url = '#', linkAs, linkProps, children, ...props }, ref) => {
    const tooltip = text.length > 40;
    const crumbRef = React.useRef<HTMLLIElement>(null);

    return tooltip ? (
      <Crumb ref={refSetter(ref, crumbRef)} {...props}>
        <CrumbAnchor href={url} as={linkAs} {...linkProps}>
          <Content tabIndex={-1} role="link">
            <Tooltip renderContent={() => text}>{text.slice(0, 37) + '...'}</Tooltip>
            {children}
          </Content>
        </CrumbAnchor>
      </Crumb>
    ) : (
      <Crumb ref={refSetter(ref, crumbRef)} {...props}>
        <CrumbAnchor href={url} as={linkAs} {...linkProps}>
          <Content tabIndex={-1} role="link">
            {text}
            {children}
          </Content>
        </CrumbAnchor>
      </Crumb>
    );
  },
);
