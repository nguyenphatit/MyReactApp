import { combineReducers } from 'redux';
import products from './products';
import cart from './cart';
import login from './login';

const appReducers = combineReducers({
    products,
    cart,
    login,
});

export default appReducers;