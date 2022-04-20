import type { AnchorHTMLAttributes, ReactNode } from 'react';
import * as React from 'react';
import type { AppearanceLink, Dimension } from '#src/components/Link/LinkComponent';
import { LinkComponent } from '#src/components/Link/LinkComponent';

export interface LinkProps extends AnchorHTMLAttributes<HTMLAnchorElement> {
  /** Текст ссылки */
  children: ReactNode;
  /** Вид ссылки */
  appearance?: AppearanceLink;
  /** Отключение ссылки */
  disabled?: boolean;
  /** Размер ссылки */
  dimension?: Dimension;
}

export const Link = React.forwardRef<HTMLAnchorElement, LinkProps>(
  ({ disabled = false, appearance = 'primary', dimension = 'm', ...props }, ref) => {
    return (
      <LinkComponent
        dimension={dimension}
        ref={ref}
        tabIndex={disabled ? -1 : props.tabIndex}
        disabled={disabled}
        appearance={appearance}
        {...props}
      />
    );
  },
);

Link.displayName = 'Link';
