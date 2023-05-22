const crossvent = {
  add: addEventEasy,
  remove: removeEventEasy,
};

function addEventEasy(el: HTMLElement, type: any, fn: any, capturing?: boolean) {
  return el.addEventListener(type, fn, capturing);
}

function removeEventEasy(el: HTMLElement, type: any, fn: any, capturing?: boolean) {
  return el.removeEventListener(type, fn, capturing);
}

type Options = {
  mirrorRef: React.RefObject<HTMLElement>;
  accepts?: (el: any, target: any, source: any, sibling: any) => boolean;
  invalid?: (el: any, handle: any) => boolean;
  mirrorContainer?: HTMLElement;
  direction?: 'horizontal' | 'vertical';
};

export function dragObserver(initialContainers: HTMLElement[], options: Options, onDrop?: any) {
  let _mirror: any; // mirror image
  let _source: any; // source container
  let _item: any; // item being dragged
  let _offsetX: any; // reference x
  let _offsetY: any; // reference y
  let _initialSibling: any; // reference sibling when grabbed
  let _currentSibling: any; // reference sibling now
  let _lastDropTarget: any = null; // last container item was over
  let _grabbed: any; // holds mousedown context until first mousemove

  const o: any = {
    ...options,
    accepts: options.accepts ?? always,
    direction: options.direction ?? 'horizontal',
    mirrorContainer: options.mirrorContainer ?? document.body,
    invalid: options.invalid ?? invalidTarget,
    containers: [...initialContainers],
  };

  const drake = {
    containers: o.containers,
    unobserve: destroy,
    dragging: false,
  };

  events();

  return drake;

  function isContainer(el: any) {
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

    // это проверка на то, был ли сейчас просто клик или движение мыши
    // если вообще есть такая проблема ??
    if (e.movementX == 0 && e.movementY == 0) return;

    const grabbed = _grabbed; // call to end() unsets _grabbed
    eventualMovements(true);
    movements();
    end();
    start(grabbed);

    const offset = getOffset(_item);
    // расстояние между левым краем элемента и позицией курсора
    _offsetX = getCoord('pageX', e) - offset.left;
    _offsetY = getCoord('pageY', e) - offset.top;

    _item.dataset.dragover = 'true';
    renderMirrorImage();
    drag(e);
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

    return {
      item: item,
      source: source,
    };
  }

  function start(context: any) {
    _source = context.source;
    _item = context.item;
    _initialSibling = _currentSibling = context.item.nextElementSibling;

    drake.dragging = true;
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
    const elementBehindCursor = getElementBehindPoint(_mirror, clientX, clientY);
    const dropTarget = findDropTarget(elementBehindCursor, clientX, clientY);
    if (dropTarget && dropTarget !== _source) {
      cleanup();
    } else {
      cancel();
    }
  }

  function cancel(revert?: any) {
    if (!drake.dragging) {
      return;
    }
    const reverts = arguments.length > 0 ? revert : false;
    const parent = getParent(_item);
    const initial = isInitialPlacement(parent);
    if (initial === false && reverts) {
      _source.insertBefore(_item, _initialSibling);
    }
    cleanup();
  }

  function cleanup() {
    ungrab();
    removeMirrorImage();
    if (_item) {
      delete _item.dataset.dragover;
    }
    drake.dragging = false;
    _source = _item = _initialSibling = _currentSibling = _lastDropTarget = null;
  }

  function isInitialPlacement(target: any, s?: any) {
    let sibling;
    if (typeof s !== 'undefined') {
      sibling = s;
    } else if (_mirror) {
      sibling = _currentSibling;
    } else {
      sibling = _item.nextElementSibling;
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

  function drag(e: any) {
    if (!_mirror) {
      return;
    }
    e.preventDefault();

    const clientX = getCoord('clientX', e) || 0;
    const clientY = getCoord('clientY', e) || 0;
    const x = clientX - _offsetX;
    const y = clientY - _offsetY;

    _mirror.style.left = x + 'px';
    _mirror.style.top = y + 'px';

    const elementBehindCursor = getElementBehindPoint(_mirror, clientX, clientY);
    const dropTarget = findDropTarget(elementBehindCursor, clientX, clientY);
    const changed = dropTarget !== null && dropTarget !== _lastDropTarget;
    if (changed || dropTarget === null) {
      _lastDropTarget = dropTarget;
    }

    let reference;
    // что такое immediate
    const immediate = getImmediateChild(dropTarget, elementBehindCursor);
    if (immediate !== null) {
      reference = getReference(dropTarget, immediate, clientX, clientY);
    } else {
      return;
    }

    if ((reference === null && changed) || (reference !== _item && reference !== _item.nextElementSibling)) {
      _currentSibling = reference;
      // dropTarget.insertBefore(_item, reference);
      onDrop?.(_item, reference);
    }
  }

  function renderMirrorImage() {
    // нет реализации для direction vertical
    if (_mirror && !o.mirrorRef.current) {
      return;
    }
    const title = _item.dataset.thTitle;
    o.mirrorRef.current.innerHTML = title;
    o.mirrorRef.current.style.visibility = 'visible';
    _mirror = o.mirrorRef.current;

    touchy(document.documentElement, 'add', 'mousemove', drag);
    o.mirrorContainer.style.userSelect = 'none';
  }

  function removeMirrorImage() {
    if (_mirror && o.mirrorRef.current) {
      o.mirrorContainer.style.userSelect = 'auto';
      o.mirrorRef.current.style.visibility = 'hidden';
      touchy(document.documentElement, 'remove', 'mousemove', drag);
      _mirror = null;
    }
  }

  // находит дочерний элемент dropTarget, содержащий в себе target
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
    const reference = target !== dropTarget ? inside() : outside();
    return reference;

    function outside() {
      // slower, but able to figure out any position
      const len = dropTarget.children.length;
      let i;
      let el;
      let rect;
      for (i = 0; i < len; i++) {
        el = dropTarget.children[i];
        rect = el.getBoundingClientRect();
        if (horizontal && rect.left + rect.width / 2 > x) {
          return el;
        }
        if (!horizontal && rect.top + rect.height / 2 > y) {
          return el;
        }
      }
      return null;
    }

    function inside() {
      // faster, but only available if dropped inside a child element
      const rect = target.getBoundingClientRect();
      if (horizontal) {
        return resolve(x > rect.left + rect.width / 2);
      }
      return resolve(y > rect.top + rect.height / 2);
    }

    function resolve(after: boolean) {
      return after ? target.nextElementSibling : target;
    }
  }
}

function touchy(el: HTMLElement, op: 'remove' | 'add', type: 'mouseup' | 'mousedown' | 'mousemove', fn: any) {
  const touch = {
    mouseup: 'touchend',
    mousedown: 'touchstart',
    mousemove: 'touchmove',
  };

  crossvent[op](el, touch[type], fn);
  crossvent[op](el, type, fn);
}

// получаем координаты элемента в контексте документа
function getOffset(el: HTMLElement) {
  const rect = el.getBoundingClientRect();
  return {
    left: rect.left + window.scrollX,
    top: rect.top + window.scrollY,
  };
}

function getElementBehindPoint(point: HTMLElement, x: number, y: number) {
  point = point || {};
  const state = point.style.display;
  // временно прячем mirror, чтобы вычислить, какой сейчас за ним скрывается элемент
  point.style.display = 'none';
  const el = document.elementFromPoint(x, y);
  point.style.display = state;
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
