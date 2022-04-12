import * as React from 'react';
import ReactDOM from 'react-dom';
import { ThemeProvider } from 'styled-components';
import { LIGHT_THEME } from '#/components/themes';

import { Separator, Wrapper } from './style';
import { Crumb, CrumbAnchor, Content } from './BreadCrumb';

export const measureCrumb = (
  text: string,
  dimension: 'l' | 'm' | 's',
  last: boolean,
  callback: (width: number) => void,
) => {
  // Creates the hidden div appended to the document body
  const container = document.createElement('div');
  container.style.position = 'absolute';
  container.style.visibility = 'hidden';
  container.style.left = '-10000px';
  container.style.top = '-100000px';
  document.body.appendChild(container);
  const iconSize = dimension === 'l' ? 20 : 16;

  const element = (
    <ThemeProvider theme={LIGHT_THEME}>
      <Wrapper data-dimension={dimension}>
        <Crumb>
          <CrumbAnchor href="#">
            <Content tabIndex={-1} role="link">
              {text}
              {!last && <Separator width={iconSize} height={iconSize} aria-hidden />}
            </Content>
          </CrumbAnchor>
        </Crumb>
      </Wrapper>
    </ThemeProvider>
  );

  // Renders the React element into the hidden div
  ReactDOM.render(element, container, () => {
    const width = container.clientWidth;
    callback(width);
    // remove hidden container from dom
    ReactDOM.unmountComponentAtNode(container);
    container.parentNode?.removeChild(container);
  });
};
