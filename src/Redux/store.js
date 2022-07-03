import priceReducer from './price/price-reducer';
import jobsReducer from "./jobs/jobs-reducer";
import { configureStore, getDefaultMiddleware } from '@reduxjs/toolkit';

const middleware = getDefaultMiddleware();

const store = configureStore({
    reducer: {
        priceChecker: priceReducer,
        jobs: jobsReducer,
    },
    middleware,
    //devTools: process.env.NODE_ENV === 'development',
});

export default store;