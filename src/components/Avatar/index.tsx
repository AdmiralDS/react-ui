import * as React from 'react';
import styled, { ThemeContext, css } from 'styled-components';
import { LIGHT_THEME, DARK_THEME } from '#/components/themes';
import { Tooltip } from '#/components/Tooltip';
import { typography } from '#/components/Typography';

import { useLoaded } from './useLoaded';
import { AvatarSVG } from './Avatar_SVG';

const InverseTooltip = (props: any) => {
  const themeContext = React.useContext(ThemeContext);
  return <Tooltip {...props} theme={themeContext.name == 'dark' ? LIGHT_THEME : DARK_THEME} />;
};

const Wrapper = styled.button<{ size: string }>`
  position: relative;
  width: ${({ size }) => size};
  height: ${({ size }) => size};
  margin: 0;
  padding: 0;
  border: none;
  appearance: none;
  background: transparent;
  -webkit-tap-highlight-color: transparent;
  & .avatar-tooltip {
    display: flex;
  }
`;

const getTextColor = css<{ appearance: Appearance | { background: string; text: string } }>`
  ${({ theme, appearance }) => {
    switch (appearance) {
      case 'light':
      case 'white':
        return theme.color.text.primary;
      case 'grey':
      case 'dark':
        return theme.color.text.inversion;
      default:
        appearance.text;
    }
  }}
`;

const getTypography = css<{ dimension: Dimension }>`
  ${({ dimension }) => {
    switch (dimension) {
      case 'xs':
      case 's':
        return typography['Caption/XS'];
      case 'm':
      case 'l':
        return typography['Additional/M'];
      case 'xl':
      default:
        return typography['Main/XS'];
    }
  }}
`;

const Text = styled.span<{ appearance: Appearance | { background: string; text: string }; dimension: Dimension }>`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  user-select: none;
  ${getTypography}
  color: ${getTextColor};
`;

const getIconSize = css<{ dimension: Dimension }>`
  ${({ dimension }) => {
    switch (dimension) {
      case 'xs':
        return '16px';
      case 's':
        return '20px';
      case 'm':
        return '24px';
      case 'l':
        return '28px';
      case 'xl':
      default:
        return '32px';
    }
  }}
`;

const IconWrapper = styled.div<{ dimension: Dimension }>`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  width: ${getIconSize};
  height: ${getIconSize};

  & svg {
    & *[fill^='#'] {
      fill: ${({ theme }) => theme.color.basic.tertiary};
    }
    width: 100%;
    height: 100%;
  }
`;

type Dimension = 'xs' | 's' | 'm' | 'l' | 'xl';
type Appearance = 'light' | 'white' | 'grey' | 'dark';
type Status = 'success' | 'danger' | 'warn' | 'inactive';

export interface AvatarProps extends React.HTMLAttributes<HTMLButtonElement> {
  /** Имя пользователя, будет использовано внутри тултипа и для генерации аббревиатуры */
  userName: string;
  /** URL аватарки пользователя */
  href?: string;
  /** Статус пользователя */
  status?: Status;
  /** Иконка для отображения */
  icon?: React.ReactNode;
  /** Внешний вид компонента (цвет заливки и текста) - можно выбрать один из четырех исходных вариантов, либо задать свою комбинацию цветов */
  appearance?: Appearance | { background: string; text: string };
  /** Размер компонента */
  dimension?: Dimension;
}

export interface AvatarInternalProps {
  /** Для внутреннего использования! Отображение аватара в составе группы (когда правый край аватара усечен) */
  group?: boolean;
  /** Для внутреннего использования! Отображение тултипа. Тултип убирается, если аватар идет в сочетании с выпадающим меню */
  showTooltip?: boolean;
  /** Для внутреннего использования! Используется ли аватар в качестве меню. Если да - то userName выводится без изменений */
  isMenuAvatar?: boolean;
}

export const Avatar = ({
  userName,
  href,
  status,
  dimension = 'xl',
  icon: Icon,
  appearance = 'light',
  group = false,
  showTooltip = true,
  isMenuAvatar = false,
  ...props
}: AvatarProps & AvatarInternalProps) => {
  const loaded = useLoaded(href);
  const hasImage = Boolean(href && loaded === 'loaded');
  const hasIcon = Boolean(Icon && !hasImage);
  const hasAbbr = (!hasImage && !hasIcon) || isMenuAvatar;

  const maxAbbrLength = dimension === 'xs' ? 1 : 2;
  const abbr = isMenuAvatar
    ? userName
    : userName
        ?.split(' ')
        .map((word) => word.toUpperCase()[0])
        .join('')
        .slice(0, maxAbbrLength);

  const getSize = () => {
    switch (dimension) {
      case 'xs':
        return '24px';
      case 's':
        return '32px';
      case 'm':
        return '40px';
      case 'l':
        return '48px';
      case 'xl':
      default:
        return '56px';
    }
  };
  const renderContent = () => (
    <>
      <AvatarSVG
        dimension={dimension}
        size={getSize()}
        hasImage={hasImage}
        href={href}
        status={status}
        appearance={appearance}
        group={group}
      />
      {hasAbbr && (
        <Text dimension={dimension} appearance={appearance}>
          {abbr}
        </Text>
      )}
      {hasIcon && <IconWrapper dimension={dimension}>{Icon}</IconWrapper>}
    </>
  );
  return (
    <Wrapper size={getSize()} {...props}>
      {showTooltip ? (
        <InverseTooltip anchorClassName="avatar-tooltip" renderContent={() => userName}>
          {renderContent()}
        </InverseTooltip>
      ) : (
        renderContent()
      )}
    </Wrapper>
  );
};
