// import React from 'react';
import ReactDOM from 'react-dom/client';
import { Provider } from 'react-redux';
import { BrowserRouter } from 'react-router-dom';
import { HelmetProvider } from 'react-helmet-async';
// import { PersistGate } from 'redux-persist/integration/react';
import App from './App.jsx';
import './index.css';
import {
  store,
  // persistor
} from './redux/store.js';

ReactDOM.createRoot(document.getElementById('root')).render(
  // <React.StrictMode>
    <Provider store={store}>
      <BrowserRouter basename='/node_fs97_front_VeronikaPetrushka'>
        {/* <PersistGate loading={null} persistor={persistor}> */}
        <HelmetProvider>
          <App />
        </HelmetProvider>
        {/* </PersistGate> */}
      </BrowserRouter>
    </Provider>
  // </React.StrictMode>
);
