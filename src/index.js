import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import store from './redux/redux-store'
import { BrowserRouter } from 'react-router-dom';


let renderAll = (state) => {
    ReactDOM.render(
        <BrowserRouter>
            <App store={store}  />
        </BrowserRouter>,
        document.getElementById('root')
    );
}

renderAll(store.getState());
store.subscribe(() => {
    let state = store.getState();
    renderAll(state);
});