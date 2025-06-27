import type { AppearanceLink, Dimension } from './LinkComponent';
import { LinkComponent } from './LinkComponent';
import type { PolymorphicComponentPropsWithRef } from '../common/polymorphicProps';
import { fixedForwardRef } from '../common/fixedForwardRef';

export interface LinkProps {
  /** Текст ссылки */
  children: React.ReactNode;
  /** Вид ссылки */
  appearance?: AppearanceLink;
  /** Отключение ссылки */
  disabled?: boolean;
  /** Размер ссылки */
  dimension?: Dimension;
}

export type LinkPolymorphicProps<C extends React.ElementType> = PolymorphicComponentPropsWithRef<C, LinkProps>;

export type LinkComponentType = (<C extends React.ElementType = 'a'>(
  props: LinkPolymorphicProps<C>,
) => ReturnType<typeof LinkComponent>) & {
  displayName?: string | undefined;
};

export const Link: LinkComponentType = fixedForwardRef(
  ({ disabled = false, appearance = 'primary', dimension = 'm', as, ...props }, ref) => {
    return (
      <LinkComponent
        {...props}
        $dimension={dimension}
        ref={ref}
        tabIndex={disabled ? -1 : props.tabIndex}
        as={disabled ? 'span' : as}
        disabled={disabled}
        $appearance={appearance}
      />
    );
  },
);

Link.displayName = 'Link';

export { LinkComponentCssMixin } from './LinkComponent';
export type { LinkComponentProps } from './LinkComponent';
