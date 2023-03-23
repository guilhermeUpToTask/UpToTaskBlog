import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import { Provider } from 'react-redux';
import categoriesReducer from './store/reducers/categories';
import { configureStore } from '@reduxjs/toolkit';


const store = configureStore({
    reducer:{
        categories: categoriesReducer,
    }
})

ReactDOM.createRoot(document.getElementById('root')).render(
    <React.StrictMode>
        <Provider store={store}>
            <App />
        </Provider>
    </React.StrictMode>
)
