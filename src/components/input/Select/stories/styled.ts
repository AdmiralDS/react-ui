import styled, { css, keyframes } from 'styled-components';
import { mediumGroupBorderRadius } from '#src/components/themes/borderRadius';
import { OptionGroup } from '#src/components/input/Select';
import { typography } from '#src/components/Typography';

const jump = keyframes`
  50% {
    transform: translate3d(0, -7px, 0);
  }
`;

export const animation = css`
  animation: ${jump} 0.35s ease-in-out;
`;

export const Icon = styled.div<{ $shouldAnimate?: boolean }>`
  width: 20px;
  height: 20px;
  border: 1px solid #8a96a8;
  border-radius: 50%;
  box-sizing: border-box;
  margin-right: 10px;
  transform-origin: bottom center;
  ${({ $shouldAnimate }) => ($shouldAnimate ? animation : '')}
`;

export const TextWrapper = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  column-gap: 8px;
`;

export const FormValuesWrapper = styled.div`
  font-family: 'VTB Group UI', serif;
  font-size: 16px;
  line-height: 24px;
  border: 1px solid black;
  border-radius: var(--admiral-border-radius-Medium, ${(p) => mediumGroupBorderRadius(p.theme.shape)});
  min-height: 100px;
  padding: 12px;
  color: var(--admiral-color-Neutral_Neutral90, ${(p) => p.theme.color['Neutral/Neutral 90']});
`;

export const ExtraText = styled.div`
  color: var(--admiral-color-Neutral_Neutral30, ${(p) => p.theme.color['Neutral/Neutral 30']});
  ${typography['Body/Body 2 Short']}
`;

export const Separator = styled.div<{ $height?: number }>`
  height: ${(p) => p.$height || 24}px;
`;

export const Form = styled.form`
  > * {
    margin-bottom: 12px;
  }
`;

export const StyledGroup = styled(OptionGroup)`
  color: var(--admiral-color-Purple_Purple60Main, ${(p) => p.theme.color['Purple/Purple 60 Main']});
  ${typography['Header/H5']}
`;
