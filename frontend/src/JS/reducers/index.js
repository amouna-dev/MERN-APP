import {combineReducers} from 'redux';
import AuthReducer from './AuthReducer';
import userReducer from './userReducer';
import productReducer from './productReducer';
import {editReducer} from './edit';
import cartReducer from './cartReducer';
import { orderReducer } from './orderReducer';


const rootReducer = combineReducers({
    AuthReducer,
    userReducer,
    productReducer,
    editReducer,
    cart: cartReducer,
    orderReducer,
})

export default rootReducer;