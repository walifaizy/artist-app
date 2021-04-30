import React from 'react';
import ReactDOM from 'react-dom';
import SearchApp from './containers/searchApp/SearchApp';
import { Provider } from 'react-redux';
import store from './store';
import GlobalStyles from './theme/globalStyles.js';

ReactDOM.render(
    <React.StrictMode>
        <Provider store={store}>
            <GlobalStyles /> <SearchApp />
        </Provider>
    </React.StrictMode>,
    document.getElementById('root'),
);
