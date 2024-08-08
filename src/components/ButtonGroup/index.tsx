import type { FC, HTMLAttributes } from 'react';
import styled from 'styled-components';

export const Wrapper = styled.div`
  display: inline-flex;
  white-space: nowrap;
  & > button {
    border: 1px solid var(--admiral-color-Neutral_Neutral20, ${(p) => p.theme.color['Neutral/Neutral 20']});
    flex: 1 0 auto;
  }
  & > button:not(:first-child) {
    margin-left: -1px;
  }
  & > button:first-child {
    border-top-right-radius: 0;
    border-bottom-right-radius: 0;
  }
  & > button:last-child {
    border-top-left-radius: 0;
    border-bottom-left-radius: 0;
  }
  & > button:not(:first-child):not(:last-child) {
    border-radius: 0;
  }
  // обводка элемента при фокусе с клавиатуры должна отображаться поверх соседних кнопок
  & > button:focus-visible {
    z-index: 1;
  }
`;

type Dimension = 'xl' | 'l' | 'm' | 's';
type Appearance = 'primary' | 'secondary' | 'tertiary';

export interface ButtonGroupProps extends HTMLAttributes<HTMLDivElement> {
  /** Размер компонента */
  dimension?: Dimension;
  /** Внешний вид кнопок */
  appearance?: Appearance;
}

export const ButtonGroup: FC<ButtonGroupProps> = ({
  children,
  dimension = 'xl',
  appearance = 'primary',
  className,
  ...props
}) => {
  return (
    <Wrapper
      role="group"
      data-dimension={dimension}
      data-appearance={appearance}
      className={`button-group ` + className}
      {...props}
    >
      {children}
    </Wrapper>
  );
};

ButtonGroup.displayName = 'ButtonGroup';
