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
  &[data-appearance~='primary']:not(.button-group > button) {
    ${primaryAppearanceMixin}
  }
  &[data-appearance~='secondary']:not(.button-group > button) {
    ${secondaryAppearanceMixin}
  }
  &[data-appearance~='tertiary']:not(.button-group > button) {
    ${tertiaryAppearanceMixin}
  }
  &[data-appearance~='ghost']:not(.button-group > button) {
    ${ghostAppearanceMixin}
  }
  &[data-appearance~='white']:not(.button-group > button) {
    ${whiteAppearanceMixin}
  }
  &[data-appearance~='danger']:not(.button-group > button) {
    ${dangerAppearanceMixin}
  }
  &[data-appearance~='success']:not(.button-group > button) {
    ${successAppearanceMixin}
  }
  &:is(.button-group[data-appearance='primary'] > button) {
    ${primaryAppearanceMixin}
  }
  &:is(.button-group[data-appearance='secondary'] > button) {
    ${secondaryAppearanceMixin}
  }
  &:is(.button-group[data-appearance='tertiary'] > button) {
    ${tertiaryAppearanceMixin}
  }

  ${focusVisibleStyle}
`;
