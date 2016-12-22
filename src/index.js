import React from 'react';
import ReactDOM from 'react-dom';
import { AppContainer } from 'react-hot-loader';
import Root from './components/Root';

const render = () => {
  ReactDOM.render(
    <AppContainer>
      <Root />
    </AppContainer>,
    document.getElementById('root'),
  );
};

render();

// Hot Module Replacement API
if (module.hot) {
  module.hot.accept('./components/Root', render);
}
