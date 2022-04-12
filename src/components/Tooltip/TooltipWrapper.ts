import styled from 'styled-components';

import { typography } from '#/components/Typography';

const TOOLTIP_PADDING = '4px 8px';
const TOOLTIP_BORDER_RADIUS = '4px';

/**
 * Для тултипа лучше выбрать position: fixed, а не absolute.
 * Поскольку тултип через портал может быть отрендерен в любой контейнер на усмотрение пользователя (не только document.body),
 * то при абсолютном позиционировании нужно будет постоянно искать родителя,
 * относительно которого будет позиционироваться тултип и вычислять координаты относительно этого родителя.
 *
 * При фиксированном позиционировании тултип позиционируется всегда относительно исходного содержащего блока (окна браузера).
 * Исключение, когда один из его предков имеет свойство transform, perspective, или filter,
 * установленное на что-то иное, кроме none, и в этом случае этот предок ведет
 * себя как содержащий блок. Тогда top, right, bottom и left тултипа рассчитываются относительно этого содержащего блока.
 * Если у такого предка кроме transform задано свойство overflow: hidden, то тултип будет обрезаться по его краям.
 *
 * Если оказалось, что у тултипа есть предок со свойством transform, perspective, или filter отличным от none,
 * то при расчете координат тултипа нужно учитывать верхний и левый отступы этого предка относительно окна браузера.
 */
export const TooltipWrapper = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  z-index: ${({ theme }) => theme.zIndex.tooltip};
  width: auto;
  background-color: ${({ theme }) => theme.color.background.primary};
  ${typography['Additional/XS']}
  border-radius: ${TOOLTIP_BORDER_RADIUS};
  ${(props) => props.theme.shadow.ClickableDefault}
  padding: ${TOOLTIP_PADDING};
`;
