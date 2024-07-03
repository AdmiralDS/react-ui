import { css } from 'styled-components';
import { primaryAppearanceMixin } from './primaryAppearanceMixin';
import { secondaryAppearanceMixin } from './secondaryAppearanceMixin';
import { tertiaryAppearanceMixin } from './tertiaryAppearanceMixin';
import { ghostAppearanceMixin } from './ghostAppearanceMixin';
import { whiteAppearanceMixin } from './whiteAppearanceMixin';
import { dangerAppearanceMixin } from './dangerAppearanceMixin';
import { successAppearanceMixin } from './successAppearanceMixin';
import { focusVisibleStyle } from '#src/components/Button/appearanceMixin/focusVisibleStyle';

export const appearanceMixin = css`
  &[data-appearance~='primary'] {
    ${primaryAppearanceMixin}
  }
  &[data-appearance~='secondary'] {
    ${secondaryAppearanceMixin}
  }
  &[data-appearance~='tertiary'] {
    ${tertiaryAppearanceMixin}
  }
  &[data-appearance~='ghost'] {
    ${ghostAppearanceMixin}
  }
  &[data-appearance~='white'] {
    ${whiteAppearanceMixin}
  }
  &[data-appearance~='danger'] {
    ${dangerAppearanceMixin}
  }
  &[data-appearance~='success'] {
    ${successAppearanceMixin}
  }

  ${focusVisibleStyle}
`;
