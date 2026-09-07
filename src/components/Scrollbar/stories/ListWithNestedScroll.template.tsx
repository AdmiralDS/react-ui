import React, { useMemo, useRef, useState } from 'react';
import styled, { css } from 'styled-components';
import { Scrollbars, TextArea, Toggle, T, hideNativeScrollbarsCss } from '@admiral-ds/react-ui';

type ListItem = {
  id: string;
  type: 'text' | 'textarea';
  content: string;
};

type SimplifiedListProps = {
  options: ListItem[];
  enableTransformSync?: boolean;
};

const makeScrollboxMixin = () => {
  return css`
    overflow-y: auto;
    background:
      linear-gradient(white 30%, rgba(255, 255, 255, 0)),
      linear-gradient(rgba(255, 255, 255, 0), white 70%) 0 100%,
      radial-gradient(farthest-side at 50% 0, rgba(0, 0, 0, 0.2), rgba(0, 0, 0, 0)),
      radial-gradient(farthest-side at 50% 100%, rgba(0, 0, 0, 0.2), rgba(0, 0, 0, 0)) 0 100%;
    background-repeat: no-repeat;
    background-color: white;
    background-size:
      100% 40px,
      100% 40px,
      100% 14px,
      100% 14px;
    background-attachment: local, local, scroll, scroll;
  `;
};

const Daamn = styled.div`
  border-radius: 4px;
  border: 1px solid ${({ theme }) => theme.color['Neutral/Neutral 40']};
  &:hover {
    border: 1px solid ${({ theme }) => theme.color['Neutral/Neutral 60']};
  }
  background: ${(p) => p.theme.color['Special/Static White']};
  display: flex;
  flex: 1;
  overflow: hidden;
`;

const ListWrapper = styled.div`
  flex: 1;
  width: 100%;
  overflow: hidden;
  user-select: none;
  cursor: pointer;
  position: relative;
  ${makeScrollboxMixin()}
  ${hideNativeScrollbarsCss}
`;

const ItemWrapper = styled.div`
  padding: 6px 8px;
  display: flex;
  flex-flow: column;
  background: transparent;
  &:hover {
    background: ${({ theme }) => theme.color['Opacity/Hover']};
  }
`;

export const SimplifiedList = ({ options, enableTransformSync = false }: SimplifiedListProps) => {
  const [contentNode, setContentNode] = useState<HTMLDivElement | null>(null);

  return (
    <Daamn>
      <ListWrapper ref={setContentNode} data-testid="List">
        {options.map((item, index) => (
          <ItemWrapper key={item.id} data-index={index}>
            {item.type === 'textarea' ? (
              <div style={{ display: 'flex', flexDirection: 'column', gap: 8, width: '100%' }}>
                <T font="Body/Body 2 Short" style={{ color: '#666' }}>
                  Элемент #{index} с вложенным скроллом (TextArea):
                </T>
                <TextArea value={item.content} readOnly rows={3} style={{ overflow: 'auto', resize: 'none' }} />
              </div>
            ) : (
              <T font="Body/Body 2 Short">
                Элемент #{index}: {item.content}
              </T>
            )}
          </ItemWrapper>
        ))}

        <Scrollbars contentNode={contentNode} enableTransformSync={enableTransformSync} />
      </ListWrapper>
    </Daamn>
  );
};

// --- Storybook story ---

const StoryContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 16px;
  width: 100%;
  max-width: 600px;
  height: 700px;
  padding: 16px;
`;

const InfoBox = styled.div`
  padding: 12px;
  background: ${({ theme }) => theme.color['Opacity/Neutral 8']};
  border-radius: 4px;
  border-left: 3px solid ${({ theme }) => theme.color['Primary/Primary 60 Main']};
`;

const WarningBox = styled.div`
  padding: 12px;
  background: ${({ theme }) => theme.color['Warning/Warning 10']};
  border-radius: 4px;
  border-left: 3px solid ${({ theme }) => theme.color['Warning/Warning 60']};
`;

export const ListWithNestedScrollTemplate = () => {
  const [enableTransformSync, setEnableTransformSync] = useState(true);

  const options = useMemo<ListItem[]>(() => {
    const longText =
      'ОченьДлинныйТекстБезПробеловКоторыйНамеренноВызываетГоризонтальныйСкроллВнутриЭлементаСпискаЭтоПроверяетНеВылезаетЛиНативныйСкроллбарЗаГраницыПриИспользованииКастомногоScrollbarsВРодительскомКонтейнере1234567890';
    return Array.from({ length: 30 }, (_, i) => ({
      id: `item-${i}`,
      type: i % 4 === 0 ? 'textarea' : 'text',
      content: i % 4 === 0 ? longText : `Просто текст для заполнения высоты и проверки скролла.`,
    }));
  }, []);

  return (
    <StoryContainer>
      <InfoBox>
        <T font="Body/Body 2 Short">
          <b>
            О фиче <code>enableTransformSync</code> (только для <code>Scrollbars</code>):
          </b>
          <br />
          Эта опция доступна только у компонента <code>Scrollbars</code> и позволяет синхронизировать положение
          контейнеров кастомных скроллбаров с прокруткой контента через CSS <code>transform</code>.
          <br />
          Это необходимо, когда скролл происходит за счёт <code>transform</code>, например, в виртуализированных списках
          или при кастомной реализации прокрутки.
          <br />
          <b>Без этой опции</b> контейнеры скроллбаров не будут двигаться вместе с контентом, что приведёт к визуальным
          артефактам и некорректному поведению прокрутки.
        </T>
      </InfoBox>

      <WarningBox>
        <T font="Body/Body 2 Short">
          <b>⚠️ Используйте с осторожностью:</b>
          <br />
          Включение этой опции создаёт новый stacking context у контейнеров скроллбара, что может приводить к визуальным
          артефактам — например, нативный скроллбар вложенных элементов (таких как <code>TextArea</code> или{' '}
          <code>select</code>) может визуально «вылезать» за свои границы.
          <br />
          Включайте эту опцию только если вы уверены, что в вашем сценарии скролл действительно происходит за счёт{' '}
          <code>transform</code>, и вы проверили отсутствие побочных эффектов.
        </T>
      </WarningBox>

      <Toggle checked={enableTransformSync} onChange={(e) => setEnableTransformSync(e.currentTarget.checked)}>
        enableTransformSync = {enableTransformSync ? 'true' : 'false'} ({enableTransformSync ? 'выключить' : 'включить'}{' '}
        синхронизацию через transform)
      </Toggle>

      <SimplifiedList options={options} enableTransformSync={enableTransformSync} />
    </StoryContainer>
  );
};
