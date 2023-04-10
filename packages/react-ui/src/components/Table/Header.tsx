import * as React from 'react';

import { Header as HeaderComp } from './style';
import { refSetter } from '#src/components/common/utils/refSetter';
import { dragula } from './dragula';

interface HeaderProps extends React.HTMLAttributes<HTMLDivElement> {
  dimension: 'xl' | 'l' | 'm' | 's';
}

export const Header = React.forwardRef<HTMLDivElement, HeaderProps>(({ children, ...props }, ref) => {
  const headerRef = React.useRef<HTMLDivElement>(null);

  React.useEffect(() => {
    const header = headerRef.current;
    if (header) {
      const drake = dragula([header], { direction: 'horizontal' });
      return () => {
        drake.destroy();
      };
    }
  }, []);

  return (
    <HeaderComp ref={refSetter(headerRef, ref)} {...props}>
      {children}
    </HeaderComp>
  );
});
