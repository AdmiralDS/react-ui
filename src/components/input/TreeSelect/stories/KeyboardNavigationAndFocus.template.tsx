import { useEffect, useMemo, useRef, useState } from 'react';
import styled from 'styled-components';

import { MenuActionsPanel, T, TextInput, TreeSelect } from '@admiral-ds/react-ui';
import type { TreeSelectItemProps } from '@admiral-ds/react-ui';

const ITEMS: Array<TreeSelectItemProps> = [
  { id: '1', label: 'Опция 1', checked: false },
  { id: '2', label: 'Опция 2', checked: false },
  { id: '3', label: 'Опция 3', checked: false },
];

const Layout = styled.div`
  display: flex;
  flex-direction: column;
  gap: 16px;
  max-width: 480px;
`;

const findItemLabel = (items: Array<TreeSelectItemProps>, id?: string) =>
  items.find((item) => item.id === id)?.label ?? '';

export const KeyboardNavigationAndFocusTemplate = () => {
  const [value, setValue] = useState<string[]>([]);
  const [preselected, setPreselected] = useState<string | undefined>(ITEMS[0].id);
  const [panelValue, setPanelValue] = useState(String(ITEMS[0].label));
  const panelInputRef = useRef<HTMLInputElement>(null);

  const itemsByLabel = useMemo(() => {
    const map = new Map<string, string>();
    ITEMS.forEach((item) => map.set(String(item.label).toLowerCase(), item.id));
    return map;
  }, []);

  useEffect(() => {
    const label = findItemLabel(ITEMS, preselected);
    if (label) {
      setPanelValue(String(label));
    }
  }, [preselected]);

  const focusPanelInput = () => {
    requestAnimationFrame(() => {
      panelInputRef.current?.focus();
      panelInputRef.current?.select();
    });
  };

  const handleOpenChange = (open: boolean) => {
    if (open) {
      const nextPreselected = preselected ?? ITEMS[0].id;
      setPreselected(nextPreselected);
      setPanelValue(String(findItemLabel(ITEMS, nextPreselected)));
      focusPanelInput();
    }
  };

  const handlePreselectItem = (id?: string) => {
    setPreselected(id);
  };

  const handlePanelChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const nextValue = e.currentTarget.value;
    setPanelValue(nextValue);

    const matchedId = itemsByLabel.get(nextValue.trim().toLowerCase());
    if (matchedId) {
      setPreselected(matchedId);
    }
  };

  return (
    <Layout>
      <T font="Body/Body 1 Long">
        TreeSelect с флагом <code>preselectedModeActive</code>: при открытии фокус сразу на инпуте верхней панели.
        ArrowUp/ArrowDown двигают preselected в списке и подставляют подпись опции в инпут панели, фокус при этом
        остаётся в инпуте. Enter подтверждает выбор — опция попадает в основной TreeSelect (чипсы).
      </T>

      <T font="Body/Body 1 Long">
        Home, End, ArrowLeft, ArrowRight и Backspace в инпуте панели продолжают редактировать текст и не прыгают по
        списку. Escape закрывает dropdown.
      </T>

      <TextInput aria-label="Внешнее поле" placeholder="Кликните сюда, чтобы закрыть TreeSelect" />

      <TreeSelect
        items={ITEMS}
        value={value}
        onChange={setValue}
        placeholder="Откройте список"
        preselectedModeActive
        preselected={preselected}
        onPreselectItem={handlePreselectItem}
        onOpenChange={handleOpenChange}
        displayClearIcon
        renderTopPanel={({ dimension }) => (
          <MenuActionsPanel dimension={dimension}>
            <TextInput
              ref={panelInputRef}
              aria-label="Поле верхней панели"
              dimension={dimension === 'l' ? 'xl' : dimension}
              value={panelValue}
              onChange={handlePanelChange}
            />
          </MenuActionsPanel>
        )}
      />
    </Layout>
  );
};
