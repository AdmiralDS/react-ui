import * as React from 'react';
import styled from 'styled-components';
import { OrderedList } from '@admiral-ds/react-ui';
import type { ListProps } from '@admiral-ds/react-ui';
import { ReactComponent as PersonSolid } from '@admiral-ds/icons/build/system/PersonSolid.svg';

export const ListOrderedTemplate = (props: ListProps) => {
  return (
    <>
      <OrderedList {...props} nested={false}>
        <li>Test 1</li>
        <li>Test 2</li>
        <li>
          Test 3
          <OrderedList {...props} nested>
            <li>Example 1</li>
            <li>Example 2</li>
            <li>
              Example 3
              <OrderedList {...props} nested>
                <li>Examplee 1</li>
                <li>Examplee 2</li>
                <li>Examplee 3</li>
              </OrderedList>
            </li>
          </OrderedList>
        </li>
        <li>Test 4</li>
      </OrderedList>
    </>
  );
};
