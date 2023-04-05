export function getRectWidth(rect) {
  return rect.width || rect.right - rect.left;
}
export function getRectHeight(rect) {
  return rect.height || rect.bottom - rect.top;
}
export function getParent(el) {
  return el.parentNode === document ? null : el.parentNode;
}

export function nextEl(el) {
  return el?.nextElementSibling || manually();
  function manually() {
    var sibling = el;
    do {
      sibling = sibling.nextSibling;
    } while (sibling && sibling.nodeType !== 1);
    return sibling;
  }
}
function getEventHost(e) {
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

export function getCoord(coord, e) {
  var host = getEventHost(e);
  var missMap = {
    pageX: 'clientX', // IE8
    pageY: 'clientY', // IE8
  };
  if (coord in missMap && !(coord in host) && missMap[coord] in host) {
    coord = missMap[coord];
  }
  return host[coord];
}

export function getOffset(el) {
  var rect = el.getBoundingClientRect();
  return {
    left: rect.left + getScroll('scrollLeft', 'pageXOffset'),
    top: rect.top + getScroll('scrollTop', 'pageYOffset'),
  };
}

export function getElementBehindPoint(point, x, y) {
  point = point || {};
  var state = point.className || '';
  var el;
  point.className += ' gu-hide';
  el = document.elementFromPoint(x, y);
  point.className = state;
  return el;
}

function getScroll(scrollProp, offsetProp) {
  if (typeof window[offsetProp] !== 'undefined') {
    return window[offsetProp];
  }
  if (document.body.clientHeight) {
    return document.body[scrollProp];
  }
  return document.body[scrollProp];
}
