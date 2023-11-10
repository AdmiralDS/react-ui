import styled from 'styled-components';
import type { FC } from 'react';

const Container = styled.div``;

export interface GlobalSearchProps extends React.HTMLAttributes<HTMLDivElement> {}
export const GlobalSearch: FC<GlobalSearchProps> = (props) => {
  return <Container {...props}></Container>;
};
