import { useEffect, useState } from 'react';
import type { ReactNode } from 'react';
import { useQuery } from '@tanstack/react-query';
import { GlobalSearch, useDebounce, MenuItem, getTextHighlightMeta, InputIconButton, T } from '@admiral-ds/react-ui';
import { ReactComponent as CloseOutlineSvg } from '@admiral-ds/icons/build/service/CloseOutline.svg';
import type { GlobalSearchProps, BorderRadiusType, RenderOptionProps, HighlightFormat } from '@admiral-ds/react-ui';
import { createBorderRadiusSwapper } from '../../../../.storybook/createBorderRadiusSwapper';
import styled, { ThemeProvider } from 'styled-components';
import { ReactComponent as SearchOutline } from '@admiral-ds/icons/build/system/SearchOutline.svg';
import { ReactComponent as TimeOutline } from '@admiral-ds/icons/build/system/TimeOutline.svg';

const Wrapper = styled.div`
  display: flex;
  justify-content: center;
`;

const Item = styled(MenuItem)`
  gap: 8px;
`;
const TextBlock = styled.div`
  flex: 1 1 auto;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
`;

const Highlight = styled.span`
  color: var(--admiral-color-Primary_Primary60Main, ${(p) => p.theme.color['Primary/Primary 60 Main']});
`;

function getHighlightedText(text = '', highlight = '', highlightFormat: HighlightFormat = 'wholly') {
  const { parts, chunks } = getTextHighlightMeta(text, highlight, highlightFormat);

  return parts.map((part, i) =>
    chunks.indexOf(part.toLowerCase()) >= 0 ? <Highlight key={i}>{part}</Highlight> : part,
  );
}

//
// В storybook QueryClientProvider должен быть подготовлен на уровень выше чем темплейт примера:
//
// import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
// const queryClient = new QueryClient();
// const PaneSimpleStory: StoryFn<typeof GlobalSearch> = (props) => (
//   <QueryClientProvider client={queryClient}>
//     <BasicExampleTemplate {...props} />
//   </QueryClientProvider>
// );

async function searchPeopleByName(name: string) {
  const response = await fetch(
    'https://swapi.dev/api/people/?' +
      new URLSearchParams({
        search: name,
      }),
  );
  if (!response.ok) {
    throw new Error('Network response was not ok');
  }
  return response.json();
}

const PREFIX_OPTIONS = ['prefix One', 'prefix Two', 'prefix Three'];

export const BasicExampleTemplate = ({
  themeBorderKind,
  CSSCustomProps,
  ...props
}: GlobalSearchProps & { themeBorderKind?: BorderRadiusType; CSSCustomProps?: boolean }) => {
  const [history, setHistory] = useState<Array<{ value: string; text: string }>>([]);
  const [searchValue, setSearchValue] = useState('');

  const [options, setOptions] = useState<Array<{ value: string; text: string }>>([]);

  const [filter, setFilter] = useState('');

  const model = [
    ...history
      .filter((item) => item.text.includes(filter) || filter === '')
      .map((item, index) => ({
        id: item.text,
        render: (options: RenderOptionProps) => (
          <Item {...options} key={item.text + '_history_' + index}>
            <TimeOutline width={options.dimension === 's' ? 20 : 24} />
            <TextBlock>{getHighlightedText(item.text, searchValue)}</TextBlock>
            {options.hovered && (
              <InputIconButton
                icon={CloseOutlineSvg}
                key="clear-icon"
                aria-hidden
                width={options.dimension === 's' ? 20 : 24}
                onMouseDown={(e) => {
                  setHistory((old) => old.toSpliced(index, 1));
                  e.preventDefault();
                  e.stopPropagation();
                }}
              />
            )}
          </Item>
        ),
      })),
    ...options
      .filter((item) => item.text.includes(filter))
      .filter((item) => history.every((hist) => hist.text !== item.text))
      .map((item, index) => ({
        id: item.text,
        render: (options: RenderOptionProps) => (
          <Item {...options} key={item.text + '_suggest_' + index}>
            <SearchOutline width={options.dimension === 's' ? 20 : 24} />
            <TextBlock>{getHighlightedText(item.text, searchValue)}</TextBlock>
          </Item>
        ),
      })),
  ];

  if (model.length === 0) {
    model.push({
      id: 'Нет совпадений',
      render: () => (
        <Item disabled>
          <TextBlock>Нет совпадений</TextBlock>
        </Item>
      ),
    });
  }

  const debouncedFilter = useDebounce(filter, 500);
  const { data, isLoading } = useQuery({
    queryKey: ['people', debouncedFilter],
    queryFn: () => searchPeopleByName(debouncedFilter),
  });

  useEffect(() => {
    if (data) {
      const names = data['results'] as Array<{ name: string }>;
      const options = names.map(({ name }) => ({ value: name, text: name }));
      setOptions(options);
    }
  }, [data]);

  const handleOnChange = (value: string) => {
    // eslint-disable-next-line no-console
    console.log(`handleOnChange ${value}`);
    setSearchValue(value);
    setFilter(value);
  };

  const handleSubmitButtonClick = () => {
    const value = searchValue;
    // eslint-disable-next-line no-console
    console.log(`handleSubmitButtonClick ${value}`);
    setHistory((oldHistory) =>
      oldHistory.findIndex((elem) => elem.text === value) < 0 ? [{ value, text: value }, ...oldHistory] : oldHistory,
    );
  };

  const [prefixValue, setPrefixValue] = useState<ReactNode>('prefix One');

  return (
    <ThemeProvider theme={createBorderRadiusSwapper(themeBorderKind, CSSCustomProps)}>
      <T font="Body/Body 1 Long" as="div" style={{ marginBottom: '24px' }}>
        Prefix появляется если назначать prefixValue, а если назначить prefixValueList превращается в мини префикс
        селект.
      </T>
      <Wrapper>
        <GlobalSearch
          {...props}
          prefixValue={prefixValue}
          prefixValueList={PREFIX_OPTIONS}
          onPrefixValueChange={setPrefixValue}
          value={searchValue}
          onChange={handleOnChange}
          submitButtonProps={{ ...props.submitButtonProps, onClick: handleSubmitButtonClick }}
          isLoading={isLoading}
          model={model.slice(0, 10)}
        />
      </Wrapper>
    </ThemeProvider>
  );
};
