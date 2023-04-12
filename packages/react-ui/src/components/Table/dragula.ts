'use strict';

import { addClass, rmClass } from './classes';

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
  accepts?: (el: any, target: any, source: any, sibling: any) => boolean;
  invalid?: (el: any, handle: any) => boolean;
  mirrorContainer?: HTMLElement;
  direction?: 'horizontal' | 'vertical';
};

export function dragObserver(initialContainers: HTMLElement[], options: Options) {
  let _mirror: any; // mirror image
  let _source: any; // source container
  let _item: any; // item being dragged
  let _offsetX: any; // reference x
  let _offsetY: any; // reference y
  let _moveX: any; // reference move x
  let _moveY: any; // reference move y
  let _initialSibling: any; // reference sibling when grabbed
  let _currentSibling: any; // reference sibling now
  let _lastDropTarget: any = null; // last container item was over
  let _grabbed: any; // holds mousedown context until first mousemove

  const o: any = options || {};
  if (typeof o.accepts === 'undefined') {
    o.accepts = always;
  }
  o.containers = initialContainers || [];
  if (typeof o.direction === 'undefined') {
    o.direction = 'vertical';
  }
  if (typeof o.mirrorContainer === 'undefined') {
    o.mirrorContainer = document.body;
  }
  if (typeof o.invalid === 'undefined') {
    o.invalid = invalidTarget;
    function invalidTarget() {
      return false;
    }
  }

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
    crossvent[op](document.documentElement, 'selectstart', preventGrabbed); // IE8
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
    _moveX = e.clientX;
    _moveY = e.clientY;

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

    // truthy check fixes #239, equality fixes #207, fixes #501
    // это проверка на то, был ли сейчас просто клик или движение мыши
    if (
      typeof e.clientX !== 'undefined' &&
      Math.abs(e.clientX - _moveX) <= 0 &&
      typeof e.clientY !== 'undefined' &&
      Math.abs(e.clientY - _moveY) <= 0
    ) {
      return;
    }
    // if ((event.movementX == 0) && (event.movementY == 0)) return;

    const grabbed = _grabbed; // call to end() unsets _grabbed
    eventualMovements(true);
    movements();
    end();
    start(grabbed);

    const offset = getOffset(_item);
    _offsetX = getCoord('pageX', e) - offset.left;
    _offsetY = getCoord('pageY', e) - offset.top;

    addClass(_item, 'gu-transit');
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
    _initialSibling = _currentSibling = nextEl(context.item);

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
      rmClass(_item, 'gu-transit');
    }
    drake.dragging = false;
    if (_lastDropTarget) {
    }
    _source = _item = _initialSibling = _currentSibling = _lastDropTarget = null;
  }

  function isInitialPlacement(target: any, s?: any) {
    let sibling;
    if (typeof s !== 'undefined') {
      sibling = s;
    } else if (_mirror) {
      sibling = _currentSibling;
    } else {
      sibling = nextEl(_item);
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
    _mirror.style.position = 'fixed';
    _mirror.style.background = 'white';

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

    if ((reference === null && changed) || (reference !== _item && reference !== nextEl(_item))) {
      _currentSibling = reference;
      dropTarget.insertBefore(_item, reference);
    }
  }

  function renderMirrorImage() {
    if (_mirror) {
      return;
    }
    const rect = _item.getBoundingClientRect();
    _mirror = _item.cloneNode(true);
    _mirror.style.width = rect.width + 'px';
    _mirror.style.height = rect.height + 'px';
    rmClass(_mirror, 'gu-transit');
    addClass(_mirror, 'gu-mirror');
    o.mirrorContainer.appendChild(_mirror);
    touchy(document.documentElement, 'add', 'mousemove', drag);
    o.mirrorContainer.style.userSelect = 'none';
  }

  function removeMirrorImage() {
    if (_mirror) {
      o.mirrorContainer.style.userSelect = 'auto';
      touchy(document.documentElement, 'remove', 'mousemove', drag);
      getParent(_mirror).removeChild(_mirror);
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
      return after ? nextEl(target) : target;
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

// получаем координаты относительно document, а не viewport
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
function getParent(el: any) {
  return el.parentNode === document ? null : el.parentNode;
}

function nextEl(el: any) {
  return el.nextElementSibling || manually();
  function manually() {
    let sibling: any = el;
    do {
      sibling = sibling.nextSibling;
    } while (sibling && sibling.nodeType !== 1);
    return sibling;
  }
}

function getEventHost(e: any) {
  // on touchend event, we have to use `e.changedTouches`
  // see http://stackoverflow.com/questions/7192563/touchend-event-properties
  // see https://github.com/bevacqua/dragula/issues/34
  if (e.targetTouches && e.targetTouches.length) {
    return e.targetTouches[0];
  }
  if (e.changedTouches && e.changedTouches.length) {
    return e.changedTouches[0];
  }
  return e;
}

function getCoord(coord: 'pageX' | 'pageY' | 'clientX' | 'clientY', e: any) {
  const host = getEventHost(e);
  const missMap: any = {
    pageX: 'clientX', // IE8
    pageY: 'clientY', // IE8
  };
  if (coord in missMap && !(coord in host) && missMap[coord] in host) {
    coord = missMap[coord];
  }
  return host[coord];
}
