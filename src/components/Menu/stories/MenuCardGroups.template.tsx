import { useMemo, useState } from 'react';
import styled from 'styled-components';

import { Menu, MenuItem, typography, mediumGroupBorderRadius, CategoryMenuItem, T } from '@admiral-ds/react-ui';
import type { MenuModelItemProps, MenuProps, RenderOptionProps } from '@admiral-ds/react-ui';
import { ReactComponent as CardSolid } from '@admiral-ds/icons/build/finance/CardSolid.svg';

const category = [
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
const parseShadow = (token: string) => token.replace('box-shadow: ', '').replace(';', '');

const Wrapper = styled.div`
  border-radius: var(--admiral-border-radius-Medium, ${(p) => mediumGroupBorderRadius(p.theme.shape)});
  overflow: hidden;
  border-color: transparent;
  box-shadow: var(--admiral-box-shadow-Shadow08, ${(p) => parseShadow(p.theme.shadow['Shadow 08'])});
`;

const StyledMenuItem = styled(MenuItem)`
  padding: 0;
`;

const InnerContainer = styled.div`
  display: flex;
  width: 100%;
  padding: 6px 8px;
  margin: 0 8px 0 24px;
  border-bottom: 1px solid var(--admiral-color-Neutral_Neutral20, ${(p) => p.theme.color['Neutral/Neutral 20']});
  flex-direction: column;
  align-items: flex-start;
`;

const StyledAdditionalText = styled.div`
  ${typography['Body/Body 2 Long']}
  color: var(--admiral-color-Neutral_Neutral50, ${(p) => p.theme.color['Neutral/Neutral 50']});
  pointer-events: none;
`;

export const MenuCardGroupsTemplate = (props: MenuProps) => {
  const model = useMemo(() => {
    return category.reduce((acc: MenuModelItemProps[], item) => {
      acc.push({
        id: item.id,
        render: (options: RenderOptionProps) => (
          <CategoryMenuItem dimension={props.dimension} key={item.id} {...options}>
            {item.name}
          </CategoryMenuItem>
        ),
      });
      return acc.concat(
        item.content.map((subitem) => {
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

  const [selected, setSelected] = useState<string | undefined>('');
  const [active, setActive] = useState<string | undefined>('');

  return (
    <>
      <T font="Body/Body 1 Long" as="div" style={{ marginBottom: '24px' }}>
        Пример построения меню с группированием пунктов.
      </T>
      <Wrapper style={{ width: 'fit-content' }}>
        <Menu
          {...props}
          defaultIsActive={false}
          model={model}
          selected={selected}
          onSelectItem={setSelected}
          active={active}
          onActivateItem={setActive}
        />
      </Wrapper>
    </>
  );
};
