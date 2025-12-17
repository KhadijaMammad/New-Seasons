import {configureStore} from '@reduxjs/toolkit';
import counterReducer from '../redux/slices/CounterSlices'

export const store = configureStore({
    reducer: {
        counter: counterReducer,
    }
})