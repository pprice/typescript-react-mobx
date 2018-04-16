import * as React from 'react';
import * as ReactDOM from 'react-dom';
import { Router } from 'react-router';
import { AppContainer } from "react-hot-loader";
import createBrowserHistory from 'history/createBrowserHistory';

import { Provider } from 'mobx-react';
import { syncHistoryWithStore } from 'mobx-react-router';

import createStores from './stores';
import App from './components/App';

// Create history instance, and sync with the routing store (special case)
const browserHistory = createBrowserHistory();
const stores = createStores();
const history = syncHistoryWithStore(browserHistory, stores.router);

// Target render site
const rootElement = document.getElementById('root');

// Main app component render, wrapped in a root provider and router 
const render = (Component: any) =>
    ReactDOM.render(
        <AppContainer>
            <Provider {...stores}>
                <Router history={history}>
                    <Component />
                </Router>
            </Provider>
        </AppContainer>,
        rootElement
    );

// Go go go
render(App);

// Hot reload handling
if ((module as any).hot) {
    (module as any).hot.accept('./components/App', () => render(App));
}