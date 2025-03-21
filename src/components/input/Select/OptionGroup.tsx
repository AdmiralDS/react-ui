import styled from 'styled-components';
import { OptionGroupProvider } from './useSelectContext';
import { OptionWrapper } from './styled';
import { Option } from './Option';
import { useDropDownContext } from '#src/components/input/Select/DropDownContext';
import { useId } from '#src/components/common/hooks/useId';

export interface OptionGroupProps extends React.HTMLAttributes<HTMLDivElement> {
  disabled?: boolean;
  label: string;
}

const Category = styled(OptionWrapper)`
  font-weight: 500;
  color: var(--admiral-color-Neutral_Neutral90, ${(p) => p.theme.color['Neutral/Neutral 90']});
  user-select: none;
`;

export const OptionGroup = ({ label, disabled, children, ...props }: React.PropsWithChildren<OptionGroupProps>) => {
  const selectContext = useDropDownContext();
  const id = props.id || useId();
  return (
    <OptionGroupProvider disabled={disabled}>
      <Option
        value={label}
        readOnly={true}
        renderOption={() => (
          <Category {...props} $dimension={selectContext?.dimension} key={id}>
            {label}
          </Category>
        )}
      />
      {children}
    </OptionGroupProvider>
  );
};
