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

export const Icon = styled.div<{ shouldAnimate?: boolean }>`
  width: 20px;
  height: 20px;
  border: 1px solid #8a96a8;
  border-radius: 50%;
  box-sizing: border-box;
  margin-right: 10px;
  transform-origin: bottom center;
  ${({ shouldAnimate }) => (shouldAnimate ? animation : '')}
`;

export const TextWrapper = styled.div`
  display: flex;
  flex-direction: column;
`;

export const FormValuesWrapper = styled.div`
  font-family: 'VTB Group UI', serif;
  font-size: 16px;
  line-height: 24px;
  border: 1px solid black;
  border-radius: ${(p) => mediumGroupBorderRadius(p.theme.shape)};
  min-height: 100px;
  padding: 12px;
`;

export const ExtraText = styled.div`
  color: #626f84;
`;

export const Separator = styled.div`
  height: 20px;
`;

export const Form = styled.form`
  > * {
    margin-bottom: 12px;
  }
`;

export const StyledGroup = styled(OptionGroup)`
  color: ${(p) => p.theme.color['Purple/Purple 60 Main']};
  ${typography['Main/S']}
`;
