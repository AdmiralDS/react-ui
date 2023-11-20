import * as React from 'react';
import { useQuery } from '@tanstack/react-query';
import { GlobalSearch, GlobalSearchOption, useDebounce } from '@admiral-ds/react-ui';
import type { GlobalSearchProps, BorderRadiusType, RenderOptionProps } from '@admiral-ds/react-ui';
import { Menu, MenuItem, mediumGroupBorderRadius } from '@admiral-ds/react-ui';
import { createBorderRadiusSwapper } from '../../../../.storybook/createBorderRadiusSwapper';
import styled, { ThemeProvider } from 'styled-components';

const Wrapper = styled.div`
  display: flex;
  justify-content: center;
`;

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
  const [searchValue, setSearchValue] = React.useState(props.value ? String(props.value) : '');
  const [options, setOptions] = React.useState<Array<{ value: string; text: string }>>([]);

  const [filter, setFilter] = React.useState('');

  const debouncedFilter = useDebounce(filter, 500);

  const model = React.useMemo(() => {
    return options.map((item, index) => ({
      id: item.text + '_' + index,
      render: (options: RenderOptionProps) => (
        <MenuItem {...options} key={item.text + '_' + index}>
          {item.text}
        </MenuItem>
      ),
    }));
  }, [options]);

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

  return (
    <ThemeProvider theme={createBorderRadiusSwapper(themeBorderKind)}>
      <Wrapper>
        <GlobalSearch {...props} value={searchValue} onChange={handleOnChange}>
          <Menu defaultIsActive={false} model={model} />
        </GlobalSearch>
      </Wrapper>
    </ThemeProvider>
  );
};
