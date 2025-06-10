import styled, { keyframes, css } from 'styled-components';

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

const AnimationS = keyframes`
 0% {
    width: 6px;
    height: 6px;
    opacity: 100%;
    border-width: 1px;
    filter: blur(0.33px);
  }

  80% {
    width: 20px;
    height: 20px;
    opacity: 0%;
    border-width: 1.5px;
    filter: blur(0.66px);
  }

  100% {
    opacity: 0%;
  }
`;

const AnimationM = keyframes`
 0% {
    width: 10px;
    height: 10px;
    opacity: 100%;
    border-width: 1px;
    filter: blur(0.33px);
  }
  80% {
    width: 28px;
    height: 28px;
    opacity: 0%;
    border-width: 2px;
    filter: blur(1px);
  }
  100% {
    opacity: 0%;
  }
`;

const AnimationL = keyframes`
 0% {
    width: 14px;
    height: 14px;
    opacity: 100%;
    border-width: 1px;
    filter: blur(0.33px);
  }
  80% {
    width: 36px;
    height: 36px;
    opacity: 0%;
    border-width: 3px;
    filter: blur(1.33px);
  }
  100% {
    opacity: 0%;
  }
`;

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
    position: absolute;
    content: '';
    background-color: transparent;
    border-radius: 50%;
    border-style: solid;
    border-color: ${getPulseColor};
    box-sizing: border-box;
    animation-name: ${(p) => (p.$dimension == 'l' ? AnimationL : p.$dimension == 'm' ? AnimationM : AnimationS)};
    animation-duration: 2500ms;
    animation-timing-function: cubic-bezier(0, 0, 0.58, 1);
    animation-iteration-count: infinite;
  }

  ${(p) => p.$cssMixin}
`;

export const Pulse: React.FC<PulseProps> = ({ dimension = 'm', status = 'info', cssMixin, ...props }) => {
  return <PulseElement $dimension={dimension} $status={status} $cssMixin={cssMixin} {...props} />;
};
