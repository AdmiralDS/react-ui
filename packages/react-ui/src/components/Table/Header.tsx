import * as React from 'react';

import { Header as HeaderComp } from './style';
import { refSetter } from '#src/components/common/utils/refSetter';
import { dragObserver } from './dragula';

interface HeaderProps extends React.HTMLAttributes<HTMLDivElement> {
  dimension: 'xl' | 'l' | 'm' | 's';
  onDrop: any
}

export const Header = React.forwardRef<HTMLDivElement, HeaderProps>(({ children, onDrop, ...props }, ref) => {
  const headerRef = React.useRef<HTMLDivElement>(null);

  React.useEffect(() => {
    const header = headerRef.current;
    if (header) {
      const observer = dragObserver([header], {
        direction: 'horizontal',
        invalid: (el: any) => {
          return el.dataset.draggable == 'false';
        },
        accepts: (el: any, target: any, source: any, sibling: any) => {
          // если пытаемся вставить в конец заголовков
          if (sibling == null) return false;
          // нельзя перетащить колонку к фиксированным колонкам
          if (sibling?.dataset.droppable == 'false') return false;
          return true; // elements can be dropped in any of the `containers` by default
        },
      }, onDrop);
      return () => {
        observer.unobserve();
      };
    }
  }, []);

  return (
    <HeaderComp ref={refSetter(headerRef, ref)} {...props}>
      {children}
    </HeaderComp>
  );
});
