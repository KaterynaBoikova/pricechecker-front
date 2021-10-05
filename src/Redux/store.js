import priceReducer from './price-reducer';
import { configureStore, getDefaultMiddleware } from '@reduxjs/toolkit';

const middleware = getDefaultMiddleware();

const store = configureStore({
    reducer: {
        priceChecker: priceReducer,
    },
    middleware,
    //devTools: process.env.NODE_ENV === 'development',
});

export default store;