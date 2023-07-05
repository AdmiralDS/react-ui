export type RenderDirection = 'left' | 'right';
export type SubMenuAlign = 'left' | 'leftBottom' | 'right' | 'rightBottom';
export type SubMenuPosition = {
  position: SubMenuAlign;
  bottomOffset?: number;
};

/**
 * функция вычисления позиции SubMenu
 *
 * @param anchorElement - элемент, относительно которого позиционируется SubMenu
 * @param containerElement - контейнер, в котором отрисовывается SubMenu
 * @param renderDirection - сторона от родительского меню, в которой по умолчанию
 * будет появляться дочернее меню при наличии места
 * @return SubMenuPosition - объект, содержащий данные о позиции subMenu и отступ снизу
 * */
export function getPosition(
  anchorElement: HTMLElement,
  containerElement: HTMLElement,
  renderDirection: RenderDirection,
): SubMenuPosition {
  const anchorElementRect: DOMRect = anchorElement.getBoundingClientRect();
  const containerRect: DOMRect = containerElement.getBoundingClientRect();

  const isEnoughOnRight = document.documentElement.clientWidth - anchorElementRect.right > containerRect.width;
  const isEnoughOnLeft = anchorElementRect.left > containerRect.width;

  const side =
    renderDirection === 'right'
      ? !isEnoughOnRight && isEnoughOnLeft
        ? 'left'
        : 'right'
      : !isEnoughOnLeft && isEnoughOnRight
      ? 'right'
      : 'left';

  const isEnoughOnBottom = document.documentElement.clientHeight - anchorElementRect.top > containerRect.height - 1;

  if (isEnoughOnBottom) return { position: `${side}Bottom` };
  else {
    const offset = -(document.documentElement.clientHeight - anchorElementRect.top - containerRect.height) + 8;
    return { position: side, bottomOffset: offset };
  }
}
