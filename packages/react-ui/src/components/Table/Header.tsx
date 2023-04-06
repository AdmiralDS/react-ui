import * as React from 'react';

import { Header as HeaderComp } from './style';
import { refSetter } from '#src/components/common/utils/refSetter';
import { addClass, rmClass } from './classes';
import {
  getRectWidth,
  getRectHeight,
  getParent,
  nextEl,
  getCoord,
  getOffset,
  getElementBehindPoint,
} from './dragUtils';

interface HeaderProps extends React.HTMLAttributes<HTMLDivElement> {
  dimension: 'xl' | 'l' | 'm' | 's';
}

export const Header = React.forwardRef<HTMLDivElement, HeaderProps>(({ children, ...props }, ref) => {
  const [dragging, setDragging] = React.useState(false);
  const _mirror = React.useRef<any>(null); // mirror image
  const _source = React.useRef<any>(null); // source container
  const _item = React.useRef<any>(null); // item being dragged
  const _offsetX = React.useRef<any>(null); // reference x
  const _offsetY = React.useRef<any>(null); // reference y
  const _moveX = React.useRef<any>(null); // reference move x
  const _moveY = React.useRef<any>(null); // reference move y
  const _initialSibling = React.useRef<any>(null); // reference sibling when grabbed
  const _currentSibling = React.useRef<any>(null); // reference sibling now
  const _copy = React.useRef<any>(null); // item used for copying
  const _lastDropTarget = React.useRef<any>(null); // last container item was over
  const _grabbed = React.useRef<any>({});

  const headerRef = React.useRef<HTMLDivElement>(null);

  function isContainer(el: any) {
    return el === headerRef.current;
  }

  function canStart(item: any) {
    if (dragging && _mirror.current) {
      return;
    }
    if (isContainer(item)) {
      return; // don't drag container itself
    }

    while (getParent(item) && isContainer(getParent(item)) === false) {
      item = getParent(item); // drag target should be a top element
      if (!item) {
        return;
      }
    }
    var source = getParent(item);
    if (!source) {
      return;
    }

    return {
      item,
      source,
    };
  }

  function end() {
    if (!dragging) {
      return;
    }
    cleanup();
  }

  function ungrab() {
    _grabbed.current = false;
    eventualMovements(true);
  }

  function renderMirrorImage() {
    if (_mirror.current) {
      return;
    }
    var rect = _item.current.getBoundingClientRect();
    const mirror = _item.current.cloneNode(true);
    mirror.style.width = getRectWidth(rect) + 'px';
    mirror.style.height = getRectHeight(rect) + 'px';
    mirror.style.position = 'fixed';
    mirror.style.background = 'white';
    rmClass(mirror, 'gu-transit');
    addClass(mirror, 'gu-mirror');
    document.body.appendChild(mirror);
    _mirror.current = mirror;
    document.body.addEventListener('mousemove', drag);
    addClass(document.body, 'gu-unselectable');
  }

  function removeMirrorImage() {
    if (_mirror.current) {
      rmClass(headerRef.current, 'gu-unselectable');
      document.body.removeEventListener('mousemove', drag);
      getParent(_mirror.current).removeChild(_mirror.current);
      _mirror.current = null;
    }
  }

  function cleanup() {
    var item = _copy.current || _item.current;
    ungrab();
    removeMirrorImage();
    if (item) {
      rmClass(item, 'gu-transit');
    }
    _source.current =
      _item.current =
      _copy.current =
      _initialSibling.current =
      _currentSibling.current =
      _lastDropTarget.current =
        null;
  }

  function start(context: any) {
    _source.current = context.source;
    _item.current = context.item;
    _initialSibling.current = nextEl(context.item);
    _currentSibling.current = nextEl(context.item);

    setDragging(true);
  }

  function startBecauseMouseMoved(e: any) {
    if (!_grabbed.current) {
      return;
    }

    let grabbed = {};
    Object.assign(grabbed, _grabbed.current);
    console.log(grabbed);
    eventualMovements(true);
    end();
    start(grabbed);

    var offset = getOffset(_item.current);
    _offsetX.current = getCoord('pageX', e) - offset.left;
    _offsetY.current = getCoord('pageY', e) - offset.top;

    addClass(_copy.current || _item.current, 'gu-transit');
    renderMirrorImage();
    drag(e);
  }

  const eventualMovements = React.useCallback(
    (remove?: any) => {
      const op = remove ? 'remove' : 'add';
      if (op === 'add') {
        document.body.addEventListener('mousemove', startBecauseMouseMoved);
      } else {
        document.body.removeEventListener('mousemove', startBecauseMouseMoved);
      }
    },
    [_grabbed],
  );

  const grab = (e: any) => {
    _moveX.current = e.clientX;
    _moveY.current = e.clientY;

    const context = canStart(e.target);
    if (!context) {
      return;
    }
    _grabbed.current = context;
    eventualMovements();
    if (e.type === 'mousedown') {
      e.preventDefault();
    }
  };

  function cancel(revert?: any) {
    if (!dragging) {
      return;
    }
    var reverts = arguments.length > 0 ? revert : false;
    var item = _copy.current || _item.current;
    var parent = getParent(item);
    var initial = isInitialPlacement(parent);
    if (initial === false && reverts) {
      if (_copy.current) {
        if (parent) {
          parent.removeChild(_copy);
        }
      } else {
        _source.current.insertBefore(item, _initialSibling);
      }
    }
    cleanup();
  }
  function isInitialPlacement(target?: any, s?: any) {
    var sibling;
    if (typeof s !== 'undefined') {
      sibling = s;
    } else if (_mirror.current) {
      sibling = _currentSibling.current;
    } else {
      sibling = nextEl(_copy.current || _item.current);
    }
    return target === _source.current && sibling === _initialSibling.current;
  }

  const release = (e: any) => {
    ungrab();

    if (dragging) {
      return;
    }
    var item = _copy.current || _item.current;
    var clientX = getCoord('clientX', e) || 0;
    var clientY = getCoord('clientY', e) || 0;
    var elementBehindCursor = getElementBehindPoint(_mirror.current, clientX, clientY);
    // var dropTarget = findDropTarget(elementBehindCursor, clientX, clientY);
    var dropTarget = headerRef.current;
    if (dropTarget && (!_copy.current || dropTarget !== _source.current)) {
      cleanup();
    } else {
      cancel();
    }
  };

  function drag(e: any) {
    if (!_mirror.current) {
      return;
    }
    e.preventDefault();

    // var clientX = getCoord('clientX', e) || 0;
    // var clientY = getCoord('clientY', e) || 0;
    // var x = clientX - _offsetX.current;
    // var y = clientY - _offsetY.current;

    var clientX = e.clientX;
    var clientY = e.clientY;
    _mirror.current.style.left = e.clientX + 'px';
    // _mirror.current.style.top = y + 'px';
    _mirror.current.style.top = (headerRef.current?.getBoundingClientRect().x || 0) + 'px';

    var item = _copy.current || _item.current;
    var elementBehindCursor = getElementBehindPoint(_mirror.current, clientX, clientY);
    // var dropTarget = findDropTarget(elementBehindCursor, clientX, clientY);
    var dropTarget = headerRef.current;
    var changed = dropTarget !== null && dropTarget !== _lastDropTarget.current;

    var parent = getParent(item);
    if (dropTarget === _source.current && _copy.current) {
      if (parent) {
        parent.removeChild(item);
      }
      return;
    }
    var reference;
    console.log(elementBehindCursor);
    var immediate = getImmediateChild(dropTarget, elementBehindCursor);
    if (immediate !== null) {
      reference = getReference(dropTarget, immediate, clientX, clientY);
    } else {
      if (_copy.current && parent) {
        parent.removeChild(item);
      }
      return;
    }
    if ((reference === null && changed) || (reference !== item && reference !== nextEl(item))) {
      _currentSibling.current = reference;
      dropTarget?.insertBefore(item, reference);
    }
  }

  function findDropTarget(elementBehindCursor?: any, clientX?: any, clientY?: any) {
    var target = elementBehindCursor;
    while (target && !accepted()) {
      target = getParent(target);
    }
    return target;

    function accepted() {
      var droppable = isContainer(target);
      if (droppable === false) {
        return false;
      }

      var immediate = getImmediateChild(target, elementBehindCursor);
      var reference = getReference(target, immediate, clientX, clientY);
      var initial = isInitialPlacement(target, reference);
      if (initial) {
        return true; // should always be able to drop it right back where it was
      }
      return true;
    }
  }

  function getImmediateChild(dropTarget?: any, target?: any) {
    var immediate = target;
    while (immediate !== dropTarget && getParent(immediate) !== dropTarget) {
      immediate = getParent(immediate);
    }
    if (immediate === document.body) {
      return null;
    }
    return immediate;
  }

  function getReference(dropTarget?: any, target?: any, x?: any, y?: any) {
    var horizontal = false;
    var reference = target !== dropTarget ? inside() : outside();
    return reference;

    function outside() {
      // slower, but able to figure out any position
      var len = dropTarget.children.length;
      var i;
      var el;
      var rect;
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
      var rect = target.getBoundingClientRect();
      if (horizontal) {
        return resolve(x > rect.left + getRectWidth(rect) / 2);
      }
      return resolve(y > rect.top + getRectHeight(rect) / 2);
    }

    function resolve(after?: any) {
      return after ? nextEl(target) : target;
    }
  }

  React.useEffect(() => {
    document.body.addEventListener('mousedown', grab);
    document.body.addEventListener('mouseup', release);
    document.body.addEventListener('touchstart', grab);
    document.body.addEventListener('touchend', release);
    return () => {
      document.body.removeEventListener('mousedown', grab);
      document.body.removeEventListener('mouseup', release);
      document.body.removeEventListener('touchstart', grab);
      document.body.removeEventListener('touchend', release);
    };
  }, []);
  return (
    <HeaderComp ref={refSetter(headerRef, ref)} {...props}>
      {children}
    </HeaderComp>
  );
});
