import * as React from 'react';
import styled from 'styled-components';
import { Button, CategoryMenuItem, DropMenu, MenuItem, typography } from '@admiral-ds/react-ui';
import { ReactComponent as CardSolid } from '@admiral-ds/icons/build/finance/CardSolid.svg';
import type { DropMenuProps, RenderOptionProps } from '@admiral-ds/react-ui';

const WrapperVertical = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
  gap: 20px;
`;

const Desc = styled.div`
  font-family: 'VTB Group UI';
  color: var(--admiral-color-Neutral_Neutral90, ${(p) => p.theme.color['Neutral/Neutral 90']});
  font-size: 16px;
  line-height: 24px;
`;

const handleVisibilityChangeUnControlledState = (isVisible: boolean) => {
  console.log('onVisibilityChange with uncontrolled state');
  if (isVisible) {
    console.log('Menu opened');
  } else {
    console.log('Menu closed');
  }
};

const StyledAdditionalText = styled.div`
  ${typography['Body/Body 2 Long']}
  color: ${({ theme }) => theme.color['Neutral/Neutral 50']};
  pointer-events: none;
`;

const StyledMenuItem = styled(MenuItem)`
  padding: 0;
`;

const InnerContainer = styled.div`
  display: flex;
  width: 100%;
  padding: 6px 8px;
  margin: 0 8px 0 24px;
  border-bottom: ${({ theme }) => `1px solid ${theme.color['Neutral/Neutral 20']}`};
  flex-direction: column;
  align-items: flex-start;
`;

const StyledDropMenu = styled(DropMenu)`
  min-width: 400px;
`;

const CATEGORIES = [
  {
    name: 'Категория 1',
    id: '1',
    content: [
      {
        id: '2',
        label: 'Номер Карты /****45',
        value: 1,
      },
      {
        id: '3',
        label: 'Номер Карты /****75',
        value: 2,
      },
      { id: '4', label: 'Номер Карты /****22', value: 3 },
      {
        id: '5',
        label: 'Номер Карты /****33',
        value: 4,
      },
    ],
  },
  {
    name: 'Категория 2',
    id: '9',
    content: [
      {
        id: '10',
        label: 'Номер Карты /****21',
        value: 5,
      },
      {
        id: '11',
        label: 'Номер Карты /****35',
        value: 6,
      },
      { id: '12', label: 'Номер Карты /****39', value: 7 },
      {
        id: '13',
        label: 'Номер Карты /****41',
        value: 8,
      },
    ],
  },
];

export const DropMenuCategoryTemplate = (props: DropMenuProps) => {
  const model = React.useMemo(() => {
    return CATEGORIES.reduce((acc: any, item: any) => {
      acc.push({
        id: item.id,
        render: (options: RenderOptionProps) => (
          <CategoryMenuItem dimension={props.dimension} key={item.id} {...options}>
            {item.name}
          </CategoryMenuItem>
        ),
      });
      return acc.concat(
        item.content.map((subitem: any) => {
          return {
            id: subitem.id,
            render: (options: RenderOptionProps) => (
              <StyledMenuItem dimension={props.dimension} key={subitem.id} {...options}>
                <InnerContainer>
                  <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
                    {subitem.label} <CardSolid width={24} height={24} />
                  </div>
                  <StyledAdditionalText>Дополнительный текст</StyledAdditionalText>
                </InnerContainer>
              </StyledMenuItem>
            ),
          };
        }),
      );
    }, []);
  }, [props.dimension]);

  const [selected, setSelected] = React.useState<string | undefined>('');
  const [active, setActive] = React.useState<string | undefined>('');

  return (
    <>
      <WrapperVertical>
        <Desc>
          Неконтроллируемое состояние видимости меню:
          <br />
          - isVisible не передается в DropMenu; <br />- обработчик onVisibilityChange выполняется из DropMenu;
          <br />- для открытия/закрытия меню при клике на кнопке используется обработчик handleClick из DropMenu.
          <br />
          По умолчанию DropMenu открывает/закрывает выпадающий список при нажатии на переданный компонент, а также
          закрывает выпадающий список при выборе опции.
        </Desc>
        <StyledDropMenu
          {...props}
          items={model}
          onSelectItem={(id) => {
            console.log(`selected: ${id}`);
            setSelected(id);
          }}
          onVisibilityChange={handleVisibilityChangeUnControlledState}
          selected={selected}
          active={active}
          onActivateItem={setActive}
          renderContentProp={({ buttonRef, handleKeyDown, handleClick, statusIcon, disabled }) => {
            return (
              <Button
                ref={buttonRef as React.Ref<HTMLButtonElement>}
                loading={props.loading}
                disabled={disabled}
                onKeyDown={handleKeyDown}
                onClick={handleClick}
                dimension={props.dimension}
              >
                Нажми
                {statusIcon}
              </Button>
            );
          }}
        />
      </WrapperVertical>
    </>
  );
};
