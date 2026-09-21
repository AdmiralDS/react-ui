import { useState } from 'react';
import type { ReactNode } from 'react';
import styled, { ThemeProvider } from 'styled-components';

import { GlobalSearch, MenuItem } from '@admiral-ds/react-ui';
import type { BorderRadiusType, GlobalSearchProps, MenuModelItemProps } from '@admiral-ds/react-ui';
import { createBorderRadiusSwapper } from '../../../../.storybook/createBorderRadiusSwapper';

const Wrapper = styled.div`
  display: flex;
  justify-content: center;
`;

const PrefixContent = styled.span`
  display: inline-flex;
  gap: 4px;
  align-items: center;
`;

const PrefixMarker = styled.span`
  width: 8px;
  height: 8px;
  border-radius: 50%;
  background: var(--admiral-color-Primary_Primary60Main, ${(p) => p.theme.color['Primary/Primary 60 Main']});
`;

interface SearchOption {
  id: string;
  label: string;
}

interface PrefixOption {
  id: string;
  value: ReactNode;
  options: SearchOption[];
}

const PREFIX_OPTIONS: PrefixOption[] = [
  {
    id: 'people',
    value: (
      <PrefixContent key="people" data-testid="global-search-prefix-people">
        <PrefixMarker />
        <strong>People</strong>
      </PrefixContent>
    ),
    options: [
      { id: 'luke-skywalker', label: 'Luke Skywalker' },
      { id: 'leia-organa', label: 'Leia Organa' },
      { id: 'han-solo', label: 'Han Solo' },
    ],
  },
  {
    id: 'documents',
    value: (
      <PrefixContent key="documents" data-testid="global-search-prefix-documents">
        <PrefixMarker />
        <strong>Documents</strong>
      </PrefixContent>
    ),
    options: [
      { id: 'passport', label: 'Passport' },
      { id: 'contract', label: 'Contract' },
      { id: 'invoice', label: 'Invoice' },
    ],
  },
];

const PREFIX_VALUES = PREFIX_OPTIONS.map(({ value }) => value);

export interface ReactNodePrefixTemplateProps extends Omit<
  GlobalSearchProps,
  | 'defaultValue'
  | 'model'
  | 'onChange'
  | 'onPrefixValueChange'
  | 'prefixValue'
  | 'prefixValueList'
  | 'renderPrefixOption'
  | 'renderPrefixValue'
  | 'value'
> {
  themeBorderKind?: BorderRadiusType;
  CSSCustomProps?: boolean;
}

export const ReactNodePrefixTemplate = ({
  themeBorderKind,
  CSSCustomProps,
  ...props
}: ReactNodePrefixTemplateProps) => {
  const [searchValue, setSearchValue] = useState('');
  const [prefixId, setPrefixId] = useState(PREFIX_OPTIONS[0].id);

  const selectedPrefix = PREFIX_OPTIONS.find(({ id }) => id === prefixId) ?? PREFIX_OPTIONS[0];
  const normalizedSearchValue = searchValue.trim().toLowerCase();
  const filteredOptions = selectedPrefix.options.filter(({ label }) =>
    label.toLowerCase().includes(normalizedSearchValue),
  );
  const model: MenuModelItemProps[] = filteredOptions.map(({ id, label }) => ({
    id: label,
    render: (options) => (
      <MenuItem key={id} {...options}>
        {label}
      </MenuItem>
    ),
  }));

  if (model.length === 0) {
    model.push({
      id: 'no-results',
      render: () => (
        <MenuItem key="no-results" disabled>
          No results
        </MenuItem>
      ),
    });
  }

  const handlePrefixValueChange = (value: ReactNode) => {
    const nextPrefix = PREFIX_OPTIONS.find((option) => option.value === value);
    if (nextPrefix) {
      setPrefixId(nextPrefix.id);
    }
  };

  return (
    <ThemeProvider theme={createBorderRadiusSwapper(themeBorderKind, CSSCustomProps)}>
      <Wrapper>
        <GlobalSearch
          {...props}
          data-testid="global-search-react-node-prefix"
          value={searchValue}
          onChange={setSearchValue}
          model={model}
          prefixValue={selectedPrefix.value}
          prefixValueList={PREFIX_VALUES}
          onPrefixValueChange={handlePrefixValueChange}
        />
      </Wrapper>
    </ThemeProvider>
  );
};
