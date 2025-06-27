import * as React from 'react';
import { Link, T } from '@admiral-ds/react-ui';
import styled from 'styled-components';
import { Link as RouterLink, MemoryRouter as Router } from 'react-router-dom';

const Divider = styled.div`
  width: 10px;
  height: 12px;
`;

export const LinkAsPropTemplate = () => {
  return (
    <>
      <T font="Body/Body 1 Long" as="div" style={{ marginBottom: '24px' }}>
        Компонент Link является полиморфным компонентом. По умолчанию компонент Link возвращает стандартный html anchor
        элемент. Однако с помощью параметра as можно перезадать тип элемента, который будет отрисован. В качестве
        значения as можно передать строку, в которой будет прописан тип html элемента, или компонент.
      </T>
      <Link as="button" type="button">
        Render button instead of anchor
      </Link>
      <Divider />
      <Link as="div" dimension="s">
        Render div instead of anchor
      </Link>
      <Divider />
      <Router>
        <Link as={RouterLink} to="">
          Render RouterLink instead of anchor
        </Link>
      </Router>
    </>
  );
};
