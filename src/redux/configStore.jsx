import {configureStore} from '@reduxjs/toolkit'
import { arrSinhVien } from './reducers/userReducer'
import { burgerReducer } from './reducers/burgerReducer'
export const store = configureStore({
    reducer:{
        arrSinhVien:arrSinhVien,
        burgerReducer:burgerReducer,
    }
})