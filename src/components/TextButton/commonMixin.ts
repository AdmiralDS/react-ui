import styled, { css, keyframes } from 'styled-components';

export const IconContainer = styled.div``;

export const ButtonContainer = styled.div``;

const loadingKeyframes = keyframes`
  to {
    background-position: 315px 0, 0 0, 0 190px, 50px 195px;
  }
`;

export const skeletonMixin = css`
  background-image: linear-gradient(0.25turn, transparent, #fff, transparent), linear-gradient(#eee, #eee),
    radial-gradient(38px circle at 19px 19px, #eee 50%, transparent 51%), linear-gradient(#eee, #eee);
  background-repeat: no-repeat;
  background-size:
    315px 250px,
    315px 180px,
    100px 100px,
    225px 30px;
  background-position:
    -315px 0,
    0 0,
    0 190px,
    50px 195px;
  animation: ${loadingKeyframes} 1.5s infinite;
`;
