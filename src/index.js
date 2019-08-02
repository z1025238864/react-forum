import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import { BrowserRouter } from 'react-router-dom';
import { createStore,applyMiddleware } from 'redux'
import thunk from 'redux-thunk'
import {Provider} from 'react-redux'
import Reducer from './reducers/index'

const store = createStore(
    Reducer,
    applyMiddleware( thunk )
)
ReactDOM.render(
    < BrowserRouter>
        <Provider store={store}>
            <App />
        </Provider>
    </BrowserRouter>, 
    document.getElementById('root')
    );
