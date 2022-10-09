import { configureStore } from '@reduxjs/toolkit'
import  counterSliceReducer  from '../pages/hero/heroSlice'
export const store = configureStore({
    reducer: {
        counter: counterSliceReducer,
    }
})