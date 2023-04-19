import React from 'react';
import { Provider } from 'react-redux';
import { RenderToPipeableStreamOptions, renderToPipeableStream } from 'react-dom/server';
import { StaticRouter } from 'react-router-dom/server';

import { App } from './App';
import { store } from './store';

export const render = (url: string, options: RenderToPipeableStreamOptions) => {
  return renderToPipeableStream(
    <StaticRouter location={url}>
      <Provider store={store}>
        <App />
      </Provider>
    </StaticRouter>,
    options
  );
};
