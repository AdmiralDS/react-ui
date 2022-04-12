import React, { Fragment, KeyboardEventHandler, MouseEventHandler, useEffect, useRef, useState } from 'react';
import { ComponentMeta, ComponentStory } from '@storybook/react';
import observeRect from '#/components/common/observeRect';
import { DropDownMenu } from './index';
import { DropDownItem } from '../DropDownItem';
import { Button } from '../Button';
import styled, { css } from 'styled-components';
import { typography } from '../Typography';
import { ReactComponent as CardSolid } from '@admiral-ds/icons/build/finance/CardSolid.svg';
import { withDesign } from 'storybook-addon-designs';
import useInterval_DEPRECATED from '#/components/common/hooks/useInterval_DEPRECATED';
import { useClickOutside } from '#/components/common/hooks/useClickOutside';
import { createPortal } from 'react-dom';

const Desc = styled.div`
  font-family: 'VTB Group UI';
  font-size: 16px;
  line-height: 24px;
`;

const Description = () => (
  <Desc>
    Компонент Dropdown Menu имеет три размера и может быть с иконкой или без. Высота строки : xl - 48px, m - 40px, s -
    32px
  </Desc>
);
export default {
  title: 'Example/DropDownMenu',
  decorators: [withDesign],
  component: DropDownMenu,
  parameters: {
    componentSubtitle: <Description />,
    design: [
      {
        type: 'figma',
        url: 'https://www.figma.com/file/HCiO63zg2hPSXTHuEdpRtG/Admiral-2.0-UI-Kit?node-id=39%3A68967',
      },
      {
        type: 'figma',
        url: 'https://www.figma.com/file/HCiO63zg2hPSXTHuEdpRtG/Admiral-2.0-UI-Kit?node-id=39%3A68937',
      },
    ],
  },
  docs: {
    source: {
      type: 'code',
    },
  },
  argTypes: {
    dimension: {
      options: ['l', 'm', 's'],
      control: { type: 'radio' },
      defaultValue: 'l',
    },
  },
} as ComponentMeta<typeof DropDownMenu>;

const StyledText = styled.div`
  ${typography['Additional/S']}
  color: ${({ theme }) => theme.color.text.primary};
  pointer-events: none;
`;

const StyledDropDown = styled(DropDownMenu)`
  width: 100%;
`;

const PositionedPortalContainer = styled.div`
  position: fixed;
  overflow: visible;
  z-index: 100;
`;

const POSITIONS = ['top', 'bottom'] as const;
type Position = typeof POSITIONS[number];

const bottomDropDownPosition = css`
  bottom: 0;

  ${StyledDropDown} {
    right: 0;
    top: 8px;
  }
`;

const topDropDownPosition = css`
  top: 0;

  ${StyledDropDown} {
    right: 0;
    bottom: 8px;
  }
`;

const Container = styled.div<{ position?: Position }>`
  position: absolute;
  left: 0;
  right: 0;
  height: 0;
  ${({ position }) => (position === 'top' ? topDropDownPosition : bottomDropDownPosition)}
`;

const PositionInPortal = ({
  targetRef,
  children,
  positionComponentRef,
}: {
  targetRef: React.RefObject<HTMLElement>;
  children: React.ReactNode;
  positionComponentRef: React.RefObject<HTMLElement>;
}) => {
  const positionedPortalContainerRef = useRef<HTMLDivElement>(null);
  const [dropDownDisplay, setdropDownDisplay] = useState<Position>('bottom');

  const checkDropDownOpenPosition = (
    calendarRef: React.RefObject<HTMLDivElement>,
    dropDownDisplay: Position,
    setdropDownDisplay: React.Dispatch<React.SetStateAction<Position>>,
  ) => {
    if (calendarRef.current && setdropDownDisplay) {
      const node = calendarRef.current;
      const rect = node.getBoundingClientRect();
      const viewportHeight = window.innerHeight;

      if (dropDownDisplay === 'bottom' && viewportHeight - rect.bottom < 0) {
        setdropDownDisplay('top');
      } else if (dropDownDisplay === 'top' && viewportHeight - rect.bottom - rect.height - 100 > 0) {
        setdropDownDisplay('bottom');
      }
    }
  };

  useInterval_DEPRECATED(checkDropDownOpenPosition, 500, positionComponentRef, dropDownDisplay, setdropDownDisplay);

  useEffect(() => {
    const node = positionedPortalContainerRef.current;
    if (node && targetRef.current) {
      const observer = observeRect(targetRef.current, (rect) => {
        if (rect) {
          const { x, y, height, width } = rect;
          const { style } = node;
          style.top = `${y}px`;
          style.left = `${x}px`;
          style.height = `${height}px`;
          style.width = `${width}px`;
        }
      });
      observer.observe();
      return () => {
        observer.unobserve();
      };
    }
  }, [targetRef.current, positionedPortalContainerRef.current]);

  return createPortal(
    <PositionedPortalContainer ref={positionedPortalContainerRef}>
      <Container position={dropDownDisplay} tabIndex={-1}>
        {children}
      </Container>
    </PositionedPortalContainer>,
    document.body,
  );
};

const Template1: ComponentStory<typeof DropDownMenu> = (args) => {
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

  const [selected, setSelected] = useState<string | number>(category[0].content[0].id);
  const [open, setOpen] = useState(false);
  const buttonRef = useRef(null);
  const dropDownRef = useRef(null);
  const outsideClick = () => setOpen(false);

  useClickOutside([buttonRef], outsideClick);

  const handleKeyDown: KeyboardEventHandler = (e) => {
    if (e.keyCode === 27) {
      setOpen(false);
    }
    if (e.keyCode === 32) {
      setSelected((e.target as HTMLElement).id);
      setOpen(false);
    }
  };

  return (
    <div style={{ width: '100%' }}>
      <Button ref={buttonRef} onClick={() => setOpen(!open)}>
        Нажми
      </Button>
      {open && (
        <PositionInPortal positionComponentRef={dropDownRef} targetRef={buttonRef}>
          <StyledDropDown ref={dropDownRef} tabIndex={-1} {...args}>
            {category.map((item, index) => {
              return (
                <Fragment key={index}>
                  <DropDownItem disabled key={item.id}>
                    <StyledText> {item.name}</StyledText>
                  </DropDownItem>
                  {item.content.map((subCategory) => {
                    return (
                      <DropDownItem
                        dimension={args.dimension}
                        tabIndex={0}
                        onMouseDown={() => setSelected(subCategory.id)}
                        selected={selected === subCategory.id}
                        key={subCategory.id}
                        id={subCategory.id}
                        onKeyDown={handleKeyDown}
                      >
                        <div style={{ width: '100%' }}>
                          <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
                            {subCategory.label} <CardSolid width={24} height={24} />
                          </div>
                          <StyledText>Дополнительный текст</StyledText>
                        </div>
                      </DropDownItem>
                    );
                  })}
                </Fragment>
              );
            })}
          </StyledDropDown>
        </PositionInPortal>
      )}
    </div>
  );
};

const Template2: ComponentStory<typeof DropDownMenu> = (args) => {
  const items = [
    {
      id: '1',
      label: 'Option one',
      value: 1,
    },
    {
      id: '2',
      label: 'Option two',
      value: 2,
    },
    {
      id: '3',
      label: 'Option three',
      value: 3,
    },
    {
      id: '4',
      label: 'Option four',
      value: 4,
    },
    {
      id: '5',
      label: 'Option five',
      value: 5,
    },
    { id: '6', label: 'Option six', value: 7 },
    {
      id: '7',
      label: 'Option seven',
      value: 6,
    },
  ];

  const [selected, setSelected] = useState<number | string>(items[0].id);
  const [open, setOpen] = useState(false);
  const buttonRef = useRef(null);
  const dropDownRef = useRef(null);

  const handleKeyDown: KeyboardEventHandler = (e) => {
    if (e.keyCode === 32) {
      setSelected((e.target as HTMLElement).id);
      setOpen(false);
    } else if (e.keyCode === 27) {
      setOpen(false);
    }
  };

  const handleClick: MouseEventHandler = (e) => {
    e.preventDefault();
    setSelected((e.target as HTMLElement).id);
    setOpen(false);
  };

  const outsideClick = () => setOpen(false);

  useClickOutside([buttonRef], outsideClick);

  return (
    <div style={{ width: '100%' }}>
      <Button ref={buttonRef} onClick={() => setOpen(!open)}>
        Нажми
      </Button>
      {open && (
        <PositionInPortal positionComponentRef={dropDownRef} targetRef={buttonRef}>
          <StyledDropDown ref={dropDownRef} tabIndex={-1} {...args}>
            {items.map((item) => {
              return (
                <DropDownItem
                  dimension={args.dimension}
                  id={item.id}
                  onMouseDown={handleClick}
                  selected={selected === item.id}
                  key={item.id}
                  onKeyDown={handleKeyDown}
                >
                  {item.label}
                </DropDownItem>
              );
            })}
          </StyledDropDown>
        </PositionInPortal>
      )}
    </div>
  );
};

export const BaseDropDown = Template2.bind({});
export const Category = Template1.bind({});

BaseDropDown.storyName = 'Базовый пример';
Category.storyName = 'Категории';
