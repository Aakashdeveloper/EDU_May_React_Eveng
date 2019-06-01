import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
// import MoviesList from './containers/movies_list';
import App  from './views/app';
import store from './store';

ReactDOM.render(
    <Provider store={store}>
        <App/>
    </Provider>, document.getElementById('root'))