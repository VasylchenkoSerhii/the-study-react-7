import React from 'react';
import ReactDOM from 'react-dom/client';
import App from 'components/App/App';
import { Provider } from 'react-redux';
import { store} from 'redux/store';
import { ThemeProvider } from 'styled-components';
import { theme } from './theme';
import './index.css';

ReactDOM.createRoot(document.getElementById('root')).render(

  <Provider store={store}>
    <ThemeProvider theme={theme}>
      <App />
    </ThemeProvider>
  </Provider>
);
