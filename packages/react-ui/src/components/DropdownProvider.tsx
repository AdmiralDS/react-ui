import * as React from 'react';

export interface IContextProps {
  addDropdown?: (newDropdown: React.RefObject<HTMLElement>) => void;
  removeDropdown?: (removeDropdown: React.RefObject<HTMLElement>) => void;
  dropdowns: React.RefObject<HTMLElement>[];
  /** ref на дом элемент внутри которого будут создаваться все дроп контейнеры */
  rootRef?: React.RefObject<HTMLElement>;
}
export const DropdownContext = React.createContext({} as IContextProps);

interface ProviderProps {
  children?: React.ReactNode;
  /** ref на дом элемент внутри которого будут создаваться все дроп контейнеры */
  rootRef?: React.RefObject<HTMLElement>;
}

export const DropdownProvider = ({ rootRef, ...props }: ProviderProps) => {
  const [dropdowns, setDropdowns] = React.useState<React.RefObject<HTMLElement>[]>([]);

  const removeDropdown = React.useCallback((removeDropdown: React.RefObject<HTMLElement>) => {
    setDropdowns((prevDrops) => {
      const index = prevDrops.indexOf(removeDropdown);
      return index > -1 ? prevDrops.slice(0, index) : prevDrops;
    });
  }, []);

  const addDropdown = React.useCallback((newDropdown: React.RefObject<HTMLElement>) => {
    setDropdowns((prevDrops) => [...prevDrops, newDropdown]);
  }, []);

  const providerValue = React.useMemo(
    () => ({ addDropdown, removeDropdown, dropdowns, rootRef }),
    [addDropdown, removeDropdown, dropdowns, rootRef],
  );

  return <DropdownContext.Provider value={providerValue} children={props.children} />;
};

export function useDropdown(dropdownRef: React.RefObject<HTMLElement>): IContextProps {
  const { dropdowns = [], addDropdown, removeDropdown } = React.useContext(DropdownContext);

  const dropdownIndex = dropdowns.indexOf(dropdownRef);
  const childrenDropdowns = dropdownIndex > -1 ? dropdowns.slice(dropdownIndex + 1, dropdowns.length) : [];

  return { addDropdown, removeDropdown, dropdowns: childrenDropdowns };
}

/** Функция возращает true, если клик не произошёл ни в одном из дропдаунов и был вне их; иначе возвращает false */
export const useDropdownsClickOutside = (e: Event, dropdowns: React.RefObject<HTMLElement>[]): boolean => {
  return !dropdowns.some((element) => {
    return element.current && element.current.contains(e.target as Element);
  });
};
