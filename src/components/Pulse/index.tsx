import styled, { css } from 'styled-components';

export type PulseDimension = 'l' | 'm' | 's';
export type PulseStatus = 'info' | 'danger' | 'success' | 'warning';

export interface PulseProps extends React.HTMLAttributes<HTMLDivElement> {
  /** Размер компонента */
  dimension?: PulseDimension;
  /** Статус компонента (цветовое окрашивание).
   * Можно задать кастомный цвет через объект со свойством background */
  status?: PulseStatus | { background?: string };
  /** Позволяет добавлять  миксин созданный с помощью styled css  */
  cssMixin?: ReturnType<typeof css>;
}

const getPulseColor = css<{ $status: PulseStatus | { background?: string } }>`
  ${({ theme, $status }) => {
    switch ($status) {
      case 'danger':
        return `var(--admiral-color-Error_Error60Main, ${theme.color['Error/Error 60 Main']})`;
      case 'success':
        return `var(--admiral-color-Success_Success50Main, ${theme.color['Success/Success 50 Main']})`;
      case 'warning':
        return `var(--admiral-color-Warning_Warning50Main, ${theme.color['Warning/Warning 50 Main']})`;
      case 'info':
        return `var(--admiral-color-Primary_Primary60Main, ${theme.color['Primary/Primary 60 Main']})`;
      default:
        return (
          $status?.background || `var(--admiral-color-Primary_Primary60Main, ${theme.color['Primary/Primary 60 Main']})`
        );
    }
  }}
`;

const getSize = css<{ $dimension: PulseDimension }>`
  ${({ $dimension }) => {
    switch ($dimension) {
      case 's':
        return '6px';
      case 'l':
        return '14px';
      case 'm':
      default:
        return '10px';
    }
  }}
`;

const PulseElement = styled.div<{
  $dimension: PulseDimension;
  $status: PulseStatus | { background?: string };
  $cssMixin?: ReturnType<typeof css>;
}>`
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
  block-size: ${(p) => (p.$dimension == 'l' ? 16 : p.$dimension == 'm' ? 12 : 8)}px;
  inline-size: ${(p) => (p.$dimension == 'l' ? 16 : p.$dimension == 'm' ? 12 : 8)}px;
  border-radius: 50%;
  background-color: ${getPulseColor};

  &:before {
    content: '';
    border: none;
    position: absolute;
    background-color: transparent;
    border-radius: 50%;
    width: ${getSize};
    height: ${getSize};
    box-sizing: border-box;
    animation-name: ${(p) =>
      p.$dimension == 'l' ? 'animation-l' : p.$dimension == 'm' ? 'animation-m' : 'animation-s'};
    animation-duration: 2500ms;
    animation-timing-function: cubic-bezier(0, 0, 0.58, 1);
    animation-iteration-count: infinite;
  }

  @keyframes animation-s {
    0% {
      opacity: 100%;
      filter: blur(0.2px);
      box-shadow: inset 0 0 0 1px ${getPulseColor};
    }

    80% {
      transform: scale(3.3);
      opacity: 0%;
      box-shadow: inset 0 0 0 0.4px ${getPulseColor};
      filter: blur(0.2px);
    }

    100% {
      opacity: 0%;
    }
  }

  @keyframes animation-m {
    0% {
      opacity: 100%;
      box-shadow: inset 0 0 0 1px
        var(--admiral-color-Primary_Primary60Main, ${(p) => p.theme.color['Primary/Primary 60 Main']});
      filter: blur(0.33px);
    }
    80% {
      transform: scale(2.8);
      opacity: 0%;
      box-shadow: inset 0 0 0 0.7px
        var(--admiral-color-Primary_Primary60Main, ${(p) => p.theme.color['Primary/Primary 60 Main']});
      filter: blur(0.33px);
    }
    100% {
      opacity: 0%;
    }
  }

  @keyframes animation-l {
    0% {
      opacity: 100%;
      filter: blur(0.33px);
      box-shadow: inset 0 0 0 1px ${getPulseColor};
    }
    80% {
      transform: scale(2.5);
      opacity: 0%;
      filter: blur(0.33px);
      box-shadow: inset 0 0 0 1.2px ${getPulseColor};
    }
    100% {
      opacity: 0%;
    }
  }

  ${(p) => p.$cssMixin}
`;

export const Pulse: React.FC<PulseProps> = ({ dimension = 'm', status = 'info', cssMixin, ...props }) => {
  return <PulseElement $dimension={dimension} $status={status} $cssMixin={cssMixin} {...props} />;
};
