import * as React from 'react';
import styled from 'styled-components';
import { List, ListIcon } from '@admiral-ds/react-ui';
import type { ListProps } from '@admiral-ds/react-ui';
import { ReactComponent as PersonSolid } from '@admiral-ds/icons/build/system/PersonSolid.svg';

export const ListPlaygroundTemplate = (props: ListProps) => {
  return (
    <>
      <List {...props} nested={false}>
        <li>
          <ListIcon as={PersonSolid} color="red" />
          Test 1
        </li>
        <li>Test 2</li>
        <li>
          Test 3
          <List {...props} nested>
            <li>Example 1</li>
            <li>Example 2</li>
            <li>
              Example 3
              <List {...props} nested>
                <li>Examplee 1</li>
                <li>Examplee 2</li>
                <li>Examplee 3</li>
              </List>
            </li>
          </List>
        </li>
        <li>Test 4</li>
      </List>
    </>
  );
};
