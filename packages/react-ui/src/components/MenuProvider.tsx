import * as React from 'react';

export interface MenuContextProps {
  activate?: (menuRef: React.RefObject<HTMLElement>) => void;
  deactivate?: (menuRef: React.RefObject<HTMLElement>) => void;
  activeMenu: React.RefObject<HTMLElement> | undefined;
}
export const MenuContext = React.createContext({} as MenuContextProps);

interface ProviderProps {
  children?: React.ReactNode;
  /** ref на дом элемент внутри которого будут создаваться все дроп контейнеры */
  rootRef?: React.RefObject<HTMLElement>;
}

export const MenuProvider = ({ ...props }: ProviderProps) => {
  const [activeMenu, setActiveMenu] = React.useState<React.RefObject<HTMLElement> | undefined>(undefined);

  const activate = React.useCallback((menuRef: React.RefObject<HTMLElement>) => {
    setActiveMenu(menuRef);
  }, []);

  const deactivate = React.useCallback((menuRef: React.RefObject<HTMLElement>) => {
    setActiveMenu((prevValue) => {
      return prevValue === menuRef ? undefined : prevValue;
    });
  }, []);

  const providerValue = React.useMemo(() => ({ activate, deactivate, activeMenu }), [activate, deactivate, activeMenu]);

  return <MenuContext.Provider value={providerValue} children={props.children} />;
};

export const useMenuContext = () => React.useContext(MenuContext);
