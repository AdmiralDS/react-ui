import { createContext, useCallback, useContext, useMemo, useState } from 'react';

export interface DropdownContextProps {
  addDropdown?: (newDropdown: React.RefObject<HTMLElement>) => void;
  removeDropdown?: (removeDropdown: React.RefObject<HTMLElement>) => void;
  dropdowns: React.RefObject<HTMLElement>[];
  /** ref на дом элемент внутри которого будут создаваться все дроп контейнеры */
  rootRef?: React.RefObject<HTMLElement>;
  activateMenu?: (menuRef: React.RefObject<HTMLElement>) => void;
  deactivateMenu?: (menuRef: React.RefObject<HTMLElement>) => void;
  currentActiveMenu: React.RefObject<HTMLElement> | undefined;
}
export const DropdownContext = createContext({} as DropdownContextProps);

interface ProviderProps {
  children?: React.ReactNode;
  /** ref на дом элемент внутри которого будут создаваться все дроп контейнеры */
  rootRef?: React.RefObject<HTMLElement>;
}

export const DropdownProvider = ({ rootRef, ...props }: ProviderProps) => {
  const [dropdowns, setDropdowns] = useState<React.RefObject<HTMLElement>[]>([]);
  const [currentActiveMenu, setCurrentActiveMenu] = useState<React.RefObject<HTMLElement> | undefined>(undefined);

  const activateMenu = useCallback((menuRef: React.RefObject<HTMLElement>) => {
    setCurrentActiveMenu(menuRef);
  }, []);

  const deactivateMenu = useCallback((menuRef: React.RefObject<HTMLElement>) => {
    setCurrentActiveMenu((prevValue) => {
      return prevValue === menuRef ? undefined : prevValue;
    });
  }, []);

  const removeDropdown = useCallback((removeDropdown: React.RefObject<HTMLElement>) => {
    setDropdowns((prevDrops) => {
      const index = prevDrops.indexOf(removeDropdown);
      return index > -1 ? prevDrops.slice(0, index) : prevDrops;
    });
  }, []);

  const addDropdown = useCallback((newDropdown: React.RefObject<HTMLElement>) => {
    setDropdowns((prevDrops) => [...prevDrops, newDropdown]);
  }, []);

  const providerValue = useMemo(
    () => ({
      addDropdown,
      removeDropdown,
      dropdowns,
      rootRef,
      activateMenu,
      deactivateMenu,
      currentActiveMenu,
    }),
    [addDropdown, removeDropdown, dropdowns, rootRef, activateMenu, deactivateMenu, currentActiveMenu],
  );

  return <DropdownContext.Provider value={providerValue} children={props.children} />;
};

export function useDropdown(dropdownRef: React.RefObject<HTMLElement>): DropdownContextProps {
  const {
    dropdowns = [],
    addDropdown,
    removeDropdown,
    activateMenu,
    deactivateMenu,
    currentActiveMenu,
  } = useContext(DropdownContext);

  const dropdownIndex = dropdowns.indexOf(dropdownRef);
  const childrenDropdowns = dropdownIndex > -1 ? dropdowns.slice(dropdownIndex + 1, dropdowns.length) : [];

  return { addDropdown, removeDropdown, dropdowns: childrenDropdowns, activateMenu, deactivateMenu, currentActiveMenu };
}

/** Функция возращает true, если клик не произошёл ни в одном из дропдаунов и был вне их; иначе возвращает false */
export const useDropdownsClickOutside = (e: Event, dropdowns: React.RefObject<HTMLElement>[]): boolean => {
  return !dropdowns.some((element) => {
    return element.current && element.current.contains(e.target as Element);
  });
};
