import { getComputedStyleProperty } from './getComputedStylePropertyValueAsNumber';

export function resizePaddings(node: HTMLDivElement) {
  // Берем значение паддинга из начала блока для просчета симметричного отступа с обоих краев модалки
  const leftPadding = getComputedStyleProperty(node, 'padding-inline-start') ?? 0;

  // Вычисляем ширину полоски скролла
  const paddingValue = leftPadding - (node.offsetWidth - node.clientWidth);

  // При уменьшении масштаба область скрола не менят свой размер и может становиться больше необходимого паддинга,
  // по этому имеет смысл держать минимально возможный паддинг от полосы скрола
  node.style.paddingRight = `${paddingValue > 4 ? paddingValue : 4}px`;
}
