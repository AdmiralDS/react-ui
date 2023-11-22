import * as React from 'react';
import { useQuery } from '@tanstack/react-query';
import { GlobalSearch, useDebounce, Menu, MenuItem, getTextHighlightMeta } from '@admiral-ds/react-ui';
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

const ItemList = styled(Menu)`
  max-height: 496px;
`;

const Highlight = styled.span`
  color: ${(p) => p.theme.color['Primary/Primary 60 Main']};
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

export const BasicExampleTemplate = ({
  themeBorderKind,
  ...props
}: GlobalSearchProps & { themeBorderKind?: BorderRadiusType }) => {
  const [history, setHistory] = React.useState<Array<{ value: string; text: string }>>([]);
  const [searchValue, setSearchValue] = React.useState(props.value ? String(props.value) : '');
  const [options, setOptions] = React.useState<Array<{ value: string; text: string }>>([]);

  const [filter, setFilter] = React.useState('');

  const debouncedFilter = useDebounce(filter, 500);

  const model = React.useMemo(() => {
    return [
      ...history.map((item, index) => ({
        id: item.text + '_' + index,
        render: (options: RenderOptionProps) => (
          <Item {...options} key={item.text + '_' + index}>
            <TimeOutline width={24} />
            <TextBlock>{getHighlightedText(item.text, searchValue)}</TextBlock>
          </Item>
        ),
      })),
      ...options.map((item, index) => ({
        id: item.text + '_' + index,
        render: (options: RenderOptionProps) => (
          <Item {...options} key={item.text + '_' + index}>
            <SearchOutline width={24} />
            <TextBlock>{getHighlightedText(item.text, searchValue)}</TextBlock>
          </Item>
        ),
      })),
    ];
  }, [options, history, searchValue]);

  const { data, isLoading } = useQuery({
    queryKey: ['people', debouncedFilter],
    queryFn: () => searchPeopleByName(debouncedFilter),
  });

  React.useEffect(() => {
    if (data) {
      const names = data['results'] as Array<{ name: string }>;
      const options = names.map(({ name }) => ({ value: name, text: name }));
      setOptions(options);
    }
  }, [data]);

  const handleOnChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value;
    setSearchValue(value);
    setFilter(value);
  };

  const handleSubmitButtonClick = () => {
    setHistory((oldHistory) => [{ value: searchValue, text: searchValue }, ...oldHistory]);
  };

  return (
    <ThemeProvider theme={createBorderRadiusSwapper(themeBorderKind)}>
      <Wrapper>
        <GlobalSearch
          {...props}
          value={searchValue}
          onChange={handleOnChange}
          submitButtonProps={{ onClick: handleSubmitButtonClick }}
          isLoading={isLoading}
        >
          <ItemList defaultIsActive={false} model={model} />
        </GlobalSearch>
      </Wrapper>
    </ThemeProvider>
  );
};
