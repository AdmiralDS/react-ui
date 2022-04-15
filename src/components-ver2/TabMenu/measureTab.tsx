import ReactDOM from 'react-dom';
import React from 'react';
import { ThemeProvider } from 'styled-components';

import { Badge } from '#src/components-ver2/Badge';
import { LIGHT_THEME } from '#src/components-ver2/themes';

import { Tab, TabContent, TabContentWrapper } from '#src/components-ver2/TabMenu/style';
import type { Dimension } from '#src/components-ver2/TabMenu/constants';

const measureElement = ({ icon, badge, content }: any, dimension: Dimension, callback: (width: number) => void) => {
  // Creates the hidden div appended to the document body
  const container = document.createElement('div');
  container.style.position = 'absolute';
  container.style.visibility = 'hidden';
  container.style.left = '-10000';
  container.style.top = '-10000';
  container.id = 'tab-wrapper';
  document.body.appendChild(container);

  const element = (
    <ThemeProvider theme={LIGHT_THEME}>
      <Tab dimension={dimension} selected>
        <TabContentWrapper dimension={dimension} tabIndex={-1}>
          {icon && icon}
          <TabContent>{content}</TabContent>
          {typeof badge !== 'undefined' && (
            <Badge data-badge dimension="s" appearance="lightDisable">
              {badge}
            </Badge>
          )}
        </TabContentWrapper>
      </Tab>
    </ThemeProvider>
  );

  // Renders the React element into the hidden div
  ReactDOM.render(element, container, () => {
    // const width = container.clientWidth;
    const width = container.getBoundingClientRect().width;
    callback(width);
    // remove hidden container from dom
    ReactDOM.unmountComponentAtNode(container);
    container.parentNode?.removeChild(container);
  });
};

export default measureElement;
