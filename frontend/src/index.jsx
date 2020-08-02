import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import Theme from './theme/theme';
import GlobalStyles from './theme/GlobalStyles';
import StoreRedux from './redux/store';

ReactDOM.render(
  <React.StrictMode>
    <StoreRedux>
      <Theme>
        <GlobalStyles />
        <App />
      </Theme>
    </StoreRedux>
  </React.StrictMode>,
  document.getElementById('root')
);
