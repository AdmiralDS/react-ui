/**
 * Обычно ширину полосы прокрутки можно вычислить с помощью offsetWidth - clientWidth. Но есть исключение:
 * если на Mac в настройках стоит System Preferences -> General -> Show scroll bars: Automatically based on mouse or trackpad,
 * то полоса прокрутки будет выводиться поверх всего layoutа и результатом вычислений offsetWidth - clientWidth будет 0.
 * Поэтому, если getScrollbarSize будет возвращать 0, буду вместо 0 брать стандартную для Mac ширину полосы прокрутки (16 пикселей)
 * https://gist.github.com/martynchamberlin/6aaf8a45b36907e9f1e21a28889f6b0a
 */
export const getScrollbarSize = () => {
  let scrollBarWidth = 0;
  const scrollbox = document.createElement('div');
  scrollbox.innerHTML = `Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diem 
    nonummy nibh euismod tincidunt ut lacreet dolore magna aliguam erat volutpat. 
    Ut wisis enim ad minim veniam, quis nostrud exerci tution ullamcorper suscipit 
    lobortis nisl ut aliquip ex ea commodo consequat.`;
  scrollbox.style.overflow = 'scroll';
  scrollbox.style.fontSize = '14px';
  scrollbox.style.height = '50px';
  scrollbox.style.maxHeight = '50px';
  scrollbox.style.width = '100px';
  scrollbox.style.position = 'absolute';
  scrollbox.style.top = '-100000px';
  scrollbox.style.left = '-100000px';
  document.body.appendChild(scrollbox);
  scrollBarWidth = scrollbox.offsetWidth - scrollbox.clientWidth;
  document.body.removeChild(scrollbox);
  return scrollBarWidth || 16;
};
