import { throttle } from '#src/components/common/utils/throttle';

type Direction = 'horizontal' | 'vertical';
type Options = {
  mirrorRef: React.RefObject<HTMLElement>;
  dimension: 'xl' | 'l' | 'm' | 's';
  /** Функция для отрисовки контента перетаскиваемой плашки */
  renderMirror: (dragItem: HTMLElement | null) => void;
  /** Функция для очистки контента перетаскиваемой плашки */
  removeMirror: () => void;
  /** Функция для обновления сведений о перетаскиваемом элементе. Н-р, при drag&drop строк, распределенных по группам,
   * строка может в ходе одного перетаскивания изменяться (удаляться, добавляться), поэтому элемент строки нужно обновлять.
   * id - уникальный идентификатор, по которому можно извлечь перетаскиваемый элемент,
   * seacrhInGroup - признак того, нужно ли проводить дополнительный поиск внутри группы (актуально при drag&drop строк,
   * если строка перемещена в свернутую группу, то сама строка не рендерится на экране, и все вычисления нужно производить относительно заголовка группы) */
  updateDragItem?: (id: any, seacrhInGroup?: boolean) => HTMLElement | null;
  /** Проверяет возможность перемещения el в target-контейнер из source-контейнера, где el будет встроен перед элементом sibling */
  accepts?: (
    el: HTMLElement | null,
    target: HTMLElement | null,
    source: HTMLElement | null,
    sibling: HTMLElement | null,
  ) => boolean;
  /** Проверяет, можно ли начать процесс перетаскивания el, где handle - это элемент, на котором произошло событие mousedown,
   * el - это любой элемент между handle и родительским контейнером (взят из o.containers),
   * утилита проходит циклом по всем элементам между handle и родительским контейнером и для кажого el вызывает функцию invalid
   */
  invalid?: (el: HTMLElement, handle: HTMLElement) => boolean;
  direction?: Direction;
};

export function dragObserver(
  initialContainers: HTMLElement[],
  options: Options,
  onDrop?: (item: HTMLElement | null, reference: HTMLElement | null, immediate?: HTMLElement) => void,
  onDragStart?: () => void,
  onDragEnd?: (item: HTMLElement | null) => void,
) {
  let _mirror: HTMLElement | null; // mirror image
  let _source: HTMLElement | null; // source container
  let _item: HTMLElement | null; // item being dragged
  let _itemId: string = '';
  let _initialSibling: HTMLElement | null; // reference sibling when grabbed
  let _currentSibling: HTMLElement | null; // reference sibling now
  let _lastDropTarget: HTMLElement | null = null; // last container item was over
  let _grabbed: any; // holds mousedown context until first mousemove
  let _mirrorContainerStyle: string; // initial style of mirror container
  let _currentTarget: HTMLElement | null = null; // target over which cursor is now located

  const o: Required<Omit<Options, 'updateDragItem'>> & { updateDragItem: Options['updateDragItem'] } & {
    containers: HTMLElement[];
  } = {
    ...options,
    direction: options.direction ?? 'horizontal',
    updateDragItem: options.updateDragItem,
    accepts: options.accepts ?? always,
    invalid: options.invalid ?? invalidTarget,
    containers: [...initialContainers],
  };

  const drake = {
    containers: o.containers,
    unobserve: destroy,
    dragging: false,
  };

  const [drag, freeResources] = throttle(handleDrag, 10);

  events();

  return drake;

  function isContainer(el: HTMLElement) {
    return drake.containers.indexOf(el) !== -1;
  }

  function events(remove?: boolean) {
    const op = remove ? 'remove' : 'add';
    touchy(document.documentElement, op, 'mousedown', grab);
    touchy(document.documentElement, op, 'mouseup', release);
  }

  function eventualMovements(remove?: boolean) {
    const op = remove ? 'remove' : 'add';
    touchy(document.documentElement, op, 'mousemove', startBecauseMouseMoved);
  }

  function movements(remove?: boolean) {
    const op = remove ? 'remove' : 'add';
    crossvent[op](document.documentElement, 'click', preventGrabbed);
  }

  function destroy() {
    events(true);
    release({});
    freeResources();
  }

  function preventGrabbed(e: any) {
    if (_grabbed) {
      e.preventDefault();
    }
  }

  function grab(e: any) {
    const context = canStart(e.target);
    if (!context) {
      return;
    }
    _grabbed = context;
    eventualMovements();
    if (e.type === 'mousedown') {
      e.preventDefault();
    }
  }

  function startBecauseMouseMoved(e: any) {
    if (!_grabbed) {
      return;
    }

    // if mouse does not move
    if (e.movementX == 0 && e.movementY == 0) return;

    const grabbed = _grabbed; // call to end() unsets _grabbed
    eventualMovements(true);
    movements();
    end();
    start(grabbed);

    if (_item) {
      _item.dataset.dragover = 'true';
      renderMirrorImage();
      handleDrag(e);
    }
  }

  function canStart(item: HTMLElement) {
    if (drake.dragging && _mirror) {
      return;
    }
    if (isContainer(item)) {
      return; // don't drag container itself
    }
    const handle = item;
    while (getParent(item) && isContainer(getParent(item)) === false) {
      if (o.invalid(item, handle)) {
        return;
      }
      item = getParent(item); // drag target should be a top element
      if (!item) {
        return;
      }
    }
    const source = getParent(item);
    if (!source) {
      return;
    }
    if (o.invalid(item, handle)) {
      return;
    }

    return { item, source };
  }

  function start(context: any) {
    _source = context.source;
    _item = context.item;
    _itemId = o.direction == 'vertical' ? context.item?.dataset?.row : context.item?.dataset?.thColumn;
    _currentTarget = context.item;
    _initialSibling = _currentSibling = context.item.nextElementSibling;

    drake.dragging = true;
    onDragStart?.();
  }

  function end() {
    if (!drake.dragging) {
      return;
    }
    cleanup();
  }

  function ungrab() {
    _grabbed = false;
    eventualMovements(true);
    movements(true);
  }

  function release(e: any) {
    ungrab();
    if (!drake.dragging) {
      return;
    }
    const clientX = getCoord('clientX', e) || 0;
    const clientY = getCoord('clientY', e) || 0;
    const elementBehindCursor = getElementBehindPoint(_mirror as HTMLElement, clientX, clientY);
    const dropTarget = findDropTarget(elementBehindCursor, clientX, clientY);
    if (dropTarget && dropTarget !== _source) {
      cleanup();
    } else {
      cancel();
    }
  }

  function cancel() {
    if (!drake.dragging) {
      return;
    }
    cleanup();
  }

  function cleanup() {
    ungrab();
    removeMirrorImage();
    delete _item?.dataset?.dragover;
    delete _currentTarget?.dataset?.groupover;
    drake.dragging = false;
    onDragEnd?.(_item);
    _source = _item = _initialSibling = _currentSibling = _lastDropTarget = _currentTarget = null;
    _itemId = '';
  }

  function isInitialPlacement(target: any, s?: any) {
    let sibling;
    if (typeof s !== 'undefined') {
      sibling = s;
    } else if (_mirror) {
      sibling = _currentSibling;
    } else {
      sibling = getItemNextSibling();
    }
    return target === _source && sibling === _initialSibling;
  }

  function findDropTarget(elementBehindCursor: any, clientX: number, clientY: number) {
    let target = elementBehindCursor;
    while (target && !accepted()) {
      target = getParent(target);
    }
    return target;

    function accepted() {
      const droppable = isContainer(target);
      if (droppable === false) {
        return false;
      }

      const immediate = getImmediateChild(target, elementBehindCursor);
      const reference = getReference(target, immediate, clientX, clientY);
      const initial = isInitialPlacement(target, reference);
      if (initial) {
        return true; // should always be able to drop it right back where it was
      }
      return o.accepts(_item, target, _source, reference);
    }
  }

  function handleDrag(e: Event) {
    if (!_mirror) {
      return;
    }
    e.preventDefault();

    if (o.updateDragItem) {
      const updatedItem = o.updateDragItem?.(_itemId);
      if (updatedItem) {
        delete _item?.dataset?.dragover;
        updatedItem.dataset.dragover = 'true';
        _item = updatedItem;
      }
    }

    const clientX = getCoord('clientX', e) || 0;
    const clientY = getCoord('clientY', e) || 0;
    let x, y;
    if (o.direction === 'vertical') {
      x = clientX - (o.dimension === 's' || o.dimension === 'm' ? 18 : 24);
      y = clientY - _mirror.getBoundingClientRect().height / 2;
    } else if (o.direction === 'horizontal') {
      x = clientX - (o.dimension === 's' || o.dimension === 'm' ? 18 : 20);
      y = clientY - _mirror.getBoundingClientRect().height / 2;
    }

    _mirror.style.left = x + 'px';
    _mirror.style.top = y + 'px';

    const elementBehindCursor = getElementBehindPoint(_mirror, clientX, clientY);
    const dropTarget = findDropTarget(elementBehindCursor, clientX, clientY);
    const changed = dropTarget !== null && dropTarget !== _lastDropTarget;
    if (changed || dropTarget === null) {
      _lastDropTarget = dropTarget;
    }
    if (dropTarget == null) {
      _mirror.dataset.cursor = 'error';
    } else {
      _mirror.dataset.cursor = 'normal';
    }

    let reference;
    const immediate = getImmediateChild(dropTarget, elementBehindCursor);

    // if _currentTarget has not changed, do not calculate the reference
    // if immediate is null, do not calculate the reference
    if (_currentTarget?.isEqualNode(immediate) || immediate == null) {
      updateCurrentTarget(immediate);
      return;
    } else {
      updateCurrentTarget(immediate);
      reference = getReference(dropTarget, immediate, clientX, clientY);
    }

    if (_item && ((reference === null && changed) || (reference !== _item && reference !== getItemNextSibling()))) {
      _currentSibling = reference;

      // fix bug when last item move from container and then turn back
      if (getItemNextSibling() === null && reference === null) {
        return;
      }
      onDrop?.(_item, reference, immediate);
    }
  }

  function updateCurrentTarget(immediate: HTMLElement | null) {
    if (o.direction === 'vertical') {
      delete _currentTarget?.dataset.groupover;

      if (immediate?.dataset?.group == 'true') {
        immediate.dataset.groupover = 'true';
      }
    }
    _currentTarget = immediate;
  }

  function getItemNextSibling() {
    const updatedItem = o.updateDragItem?.(_itemId, true) || _item;
    return updatedItem?.nextElementSibling;
  }

  function getItemRect(): any {
    const updatedItem = o.updateDragItem?.(_itemId, true) || _item;
    return updatedItem ? updatedItem.getBoundingClientRect() : {};
  }

  function renderMirrorImage() {
    const mirrorElement = o.mirrorRef.current;
    if (_mirror && !mirrorElement) {
      return;
    }
    if (mirrorElement) {
      o.renderMirror(_item);
      mirrorElement.style.visibility = 'visible';
      _mirror = mirrorElement;
      touchy(document.documentElement, 'add', 'mousemove', drag);

      const mirrorParent = mirrorElement.parentElement;
      if (mirrorParent) {
        _mirrorContainerStyle = mirrorParent.style.userSelect;
        mirrorParent.style.userSelect = 'none';
      }
    }
  }

  function removeMirrorImage() {
    const mirrorElement = o.mirrorRef.current;

    if (_mirror && mirrorElement) {
      const mirrorParent = mirrorElement.parentElement;
      if (mirrorParent) {
        mirrorParent.style.userSelect = _mirrorContainerStyle;
      }

      o.removeMirror();
      mirrorElement.style.visibility = 'hidden';
      touchy(document.documentElement, 'remove', 'mousemove', drag);
      _mirror = null;
    }
  }

  function getImmediateChild(dropTarget: any, target: any) {
    let immediate = target;
    while (immediate !== dropTarget && getParent(immediate) !== dropTarget) {
      immediate = getParent(immediate);
    }
    if (immediate === document.documentElement) {
      return null;
    }
    return immediate;
  }

  function getReference(dropTarget: any, target: any, x: number, y: number) {
    const horizontal = o.direction === 'horizontal';
    const itemRight = getItemRect()?.right;
    const itemBottom = getItemRect()?.bottom;
    const reference = target !== dropTarget ? inside() : outside();
    return reference;

    function outside() {
      // slower, but able to figure out any position
      const len = dropTarget.children.length;
      for (let i = 0; i < len; i++) {
        const el = dropTarget.children[i];
        const rect = el.getBoundingClientRect();
        if (horizontal && typeof itemRight == 'number' && x >= rect.left && x < rect.right) {
          return itemRight <= x ? el.nextElementSibling : el;
        }
        if (!horizontal && typeof itemBottom == 'number' && y >= rect.top && y < rect.bottom) {
          return itemBottom <= y ? el.nextElementSibling : el;
        }
      }
      return null;
    }

    function inside() {
      // faster, but only available if dropped inside a child element
      const rect = target.getBoundingClientRect();
      if (horizontal && typeof itemRight == 'number') {
        return resolve(x >= rect.left && x < rect.right && itemRight <= x);
      }
      if (!horizontal && typeof itemBottom == 'number') {
        return resolve(y >= rect.top && y < rect.bottom && itemBottom <= y);
      }
      return null;
    }

    function resolve(after: boolean) {
      return after ? target.nextElementSibling : target;
    }
  }
}

const crossvent = {
  add: addEventEasy,
  remove: removeEventEasy,
};

function addEventEasy(
  el: HTMLElement,
  type: keyof HTMLElementEventMap,
  fn: EventListenerOrEventListenerObject,
  capturing?: boolean,
) {
  return el.addEventListener(type, fn, capturing);
}

function removeEventEasy(
  el: HTMLElement,
  type: keyof HTMLElementEventMap,
  fn: EventListenerOrEventListenerObject,
  capturing?: boolean,
) {
  return el.removeEventListener(type, fn, capturing);
}

function touchy(
  el: HTMLElement,
  op: 'remove' | 'add',
  type: 'mouseup' | 'mousedown' | 'mousemove',
  fn: EventListenerOrEventListenerObject,
) {
  const touch = {
    mouseup: 'touchend',
    mousedown: 'touchstart',
    mousemove: 'touchmove',
  };

  crossvent[op](el, touch[type] as keyof HTMLElementEventMap, fn);
  crossvent[op](el, type, fn);
}

// document.elementFromPoint может вернуть null, если мы вышли за границы viewport
//
// Если существует 2 соседних по вертикали элемента a и b, где a.left == b.left == x, a.bottom == b.top == y,
// то elementFromPoint(x, y) вернет в качестве результата элемент b.
//
// Если существует 2 соседних по горизонтали элемента a и b, где a.right == b.left == x, a.top == b.top == y,
// то elementFromPoint(x, y) вернет в качестве результата элемент b.

function getElementBehindPoint(point: HTMLElement, x: number, y: number) {
  const state = point.style.pointerEvents;
  point.style.pointerEvents = 'none';
  const el = document.elementFromPoint(x, y);
  point.style.pointerEvents = state;
  return el;
}
function always() {
  return true;
}
function invalidTarget() {
  return false;
}
function getParent(el: any) {
  return el.parentNode === document ? null : el.parentNode;
}

function getEventHost(e: any) {
  if (e.targetTouches && e.targetTouches.length) {
    return e.targetTouches[0];
  }
  // on touchend event, we have to use `e.changedTouches`
  if (e.changedTouches && e.changedTouches.length) {
    return e.changedTouches[0];
  }
  return e;
}

function getCoord(coord: 'pageX' | 'pageY' | 'clientX' | 'clientY', e: any) {
  const host = getEventHost(e);
  return host[coord];
}
