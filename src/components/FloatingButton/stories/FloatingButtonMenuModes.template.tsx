import { useState } from 'react';
import type { ChangeEvent } from 'react';
import styled from 'styled-components';
import { FloatingButton, FloatingButtonMenu, Toggle, T } from '@admiral-ds/react-ui';
import type { FloatingButtonMenuProps } from '@admiral-ds/react-ui';

import { ReactComponent as EmailOutline } from '@admiral-ds/icons/build/system/EmailOutline.svg';
import { ReactComponent as DeleteOutline } from '@admiral-ds/icons/build/system/DeleteOutline.svg';
import { ReactComponent as PrintOutline } from '@admiral-ds/icons/build/system/PrintOutline.svg';

const Layout = styled.div`
  display: flex;
  justify-content: space-between;
  height: 200px;
`;

export const FloatingButtonMenuModesTemplate = ({ icon, ...props }: FloatingButtonMenuProps) => {
  const [open, setOpen] = useState(false);

  const onChange = (event: ChangeEvent<HTMLInputElement>) => {
    setOpen(event.currentTarget.checked);
  };

  return (
    <>
      <T font="Body/Body 1 Long" as="div" style={{ marginBottom: '24px' }}>
        Компонент FloatingButtonMenu может использоваться как в контролируемом, так и в некотролируемом режиме. У
        компонента есть параметр isOpen, с помощью которого можно управлять видимостью меню. Также существует колбек
        onOpenChange, который срабатывает при каждом нажатии на основную кнопку и при клике вне группы кнопок. При
        закрытом меню основная кнопка может содержать любую иконку, при открытии меню иконка меняется на иконку «Close».
      </T>
      <Layout>
        <div>
          <T font="Body/Body 1 Short" as="div" style={{ marginBottom: '16px', fontStyle: 'italic' }}>
            Контролируемый режим
          </T>
          <Toggle onChange={onChange}>Открыть/закрыть меню</Toggle>
        </div>
        <FloatingButtonMenu
          icon={icon ?? <EmailOutline />}
          isOpen={open}
          // eslint-disable-next-line no-console
          onOpenChange={(isOpen) => console.log(isOpen ? 'Open menu1' : 'Close menu1')}
          containerStyle={{ left: props.mobile ? '16px' : '28px' }}
          {...props}
        >
          <FloatingButton appearance="secondary">
            <DeleteOutline />
          </FloatingButton>
          <FloatingButton appearance="secondary">
            <PrintOutline />
          </FloatingButton>
        </FloatingButtonMenu>
        <T font="Body/Body 1 Short" as="div" style={{ fontStyle: 'italic' }}>
          Неконтролируемый режим
        </T>
        <FloatingButtonMenu
          icon={icon ?? <EmailOutline />}
          // eslint-disable-next-line no-console
          onOpenChange={(isOpen) => console.log(isOpen ? 'Open menu2' : 'Close menu2')}
          {...props}
        >
          <FloatingButton appearance="secondary">
            <DeleteOutline />
          </FloatingButton>
          <FloatingButton appearance="secondary">
            <PrintOutline />
          </FloatingButton>
        </FloatingButtonMenu>
      </Layout>
    </>
  );
};
