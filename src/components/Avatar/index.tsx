import * as React from 'react';
import styled, { css } from 'styled-components';
import { typography } from '#src/components/Typography';
import { Tooltip } from '#src/components/Tooltip';
import { DefaultFontColorName } from '#src/components/themes/common';

import { useLoaded } from './useLoaded';
import { AvatarSVG } from './Avatar_SVG';
import { mediumGroupBorderRadius } from '#src/components/themes/borderRadius';

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
  border-radius: ${(p) => mediumGroupBorderRadius(p.theme.shape)};

  &:focus-visible {
    outline-offset: 2px;
    outline: ${(p) => p.theme.color['Primary/Primary 60 Main']} solid 2px;
  }
`;

const getTextColor = css<{ appearance: Appearance | { background?: string; text?: string; icon?: string } }>`
  ${({ theme, appearance }) => {
    switch (appearance) {
      case 'light':
      case 'white':
        return theme.color[DefaultFontColorName];
      case 'grey':
        return theme.color['Special/Static White'];
      case 'dark':
        return theme.color['Neutral/Neutral 00'];
      default:
        return appearance?.text || theme.color[DefaultFontColorName];
    }
  }}
`;

const getTypography = css<{ dimension: Dimension }>`
  ${({ dimension }) => {
    switch (dimension) {
      case 'xs':
      case 's':
        return typography['Caption/Caption 1'];
      case 'm':
      case 'l':
        return typography['Body/Body 1 Short'];
      case 'xl':
      default:
        return typography['Subtitle/Subtitle 1'];
    }
  }}
`;

const Text = styled.span<{
  appearance: Appearance | { background?: string; text?: string; icon?: string };
  dimension: Dimension;
}>`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  user-select: none;
  color: ${getTextColor};
  ${getTypography}
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

const getIconColor = css<{ appearance: Appearance | { background?: string; text?: string; icon?: string } }>`
  ${({ theme, appearance }) => {
    switch (appearance) {
      case 'light':
      case 'white':
        return theme.color['Neutral/Neutral 50'];
      case 'grey':
        return theme.color['Special/Static White'];
      case 'dark':
        return theme.color['Neutral/Neutral 00'];
      default:
        return appearance?.icon || theme.color['Neutral/Neutral 50'];
    }
  }}
`;

const IconWrapper = styled.div<{
  dimension: Dimension;
  appearance: Appearance | { background?: string; text?: string; icon?: string };
}>`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  width: ${getIconSize};
  height: ${getIconSize};

  & svg {
    & *[fill^='#'] {
      fill: ${getIconColor};
    }
    width: 100%;
    height: 100%;
  }
`;

type Dimension = 'xs' | 's' | 'm' | 'l' | 'xl';
type Appearance = 'light' | 'white' | 'grey' | 'dark';
type Status = 'success' | 'danger' | 'warn' | 'inactive';

export interface AvatarProps extends React.HTMLAttributes<HTMLButtonElement> {
  /** Имя пользователя, будет использовано внутри тултипа и для генерации инициалов (в случае если не задан параметр userInitials) */
  userName: string;
  /** Инициалы пользователя. По умолчанию вычисляются на основании userName - берутся первые буквы первых
   *  двух слов (одного слова для dimension='s'), входящих в userName
   */
  userInitials?: string;
  /** URL аватарки пользователя */
  href?: string;
  /** Статус пользователя */
  status?: Status | string;
  /** Иконка для отображения */
  icon?: React.ReactNode;
  /** Внешний вид компонента (цвет заливки, текста, иконки) -
   * можно выбрать один из четырех исходных вариантов, либо задать свою комбинацию цветов.
   * Параметры background, text и icon являются опциональными, если какие-то из них не заданы,
   * то по умолчанию будут применены те же цвета, что и при appearance='light'
   * */
  appearance?: Appearance | { background?: string; text?: string; icon?: string };
  /** Размер компонента */
  dimension?: Dimension;
  /** Уникальный идентификатор svg маски */
  svgMaskId?: string;
}

export interface AvatarInternalProps {
  /** Для внутреннего использования! Отображение аватара в составе группы (когда правый край аватара усечен) */
  group?: boolean;
  /** Для внутреннего использования! Отображение тултипа. Тултип убирается, если аватар идет в сочетании с выпадающим меню */
  showTooltip?: boolean;
  /** Для внутреннего использования! Используется ли аватар в качестве меню. Если да - то userName выводится без изменений */
  isMenuAvatar?: boolean;
}

export const Avatar = React.forwardRef<HTMLButtonElement, AvatarProps & AvatarInternalProps>(
  (
    {
      userName,
      userInitials,
      href,
      status,
      dimension = 'xl',
      icon: Icon,
      appearance = 'light',
      group = false,
      showTooltip = true,
      isMenuAvatar = false,
      svgMaskId,
      ...props
    }: AvatarProps & AvatarInternalProps,
    ref,
  ) => {
    const loaded = useLoaded(href);
    const hasImage = Boolean(href && loaded === 'loaded');
    const hasIcon = Boolean(Icon && !hasImage);
    const hasAbbr = (!hasImage && !hasIcon) || isMenuAvatar;

    const maxAbbrLength = dimension === 'xs' ? 1 : 2;
    const defaultUserInitials = userName
      ?.split(' ')
      .map((word) => word.toUpperCase()[0])
      .join('')
      .slice(0, maxAbbrLength);
    const initials = userInitials ? userInitials : defaultUserInitials;
    const abbr = isMenuAvatar ? userName : initials;

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
          svgMaskId={svgMaskId}
        />
        {hasAbbr && (
          <Text dimension={dimension} appearance={appearance}>
            {abbr}
          </Text>
        )}
        {hasIcon && (
          <IconWrapper dimension={dimension} appearance={appearance}>
            {Icon}
          </IconWrapper>
        )}
      </>
    );
    return (
      <Wrapper size={getSize()} {...props} ref={ref}>
        {showTooltip ? (
          <Tooltip anchorClassName="avatar-tooltip" renderContent={() => userName}>
            {renderContent()}
          </Tooltip>
        ) : (
          renderContent()
        )}
      </Wrapper>
    );
  },
);

Avatar.displayName = 'Avatar';
