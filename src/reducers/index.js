import { combineReducers } from 'redux';
import tasks from './tasks';
import products from './products';
import cart from './cart';
import login from './login';

const appReducers = combineReducers({
    tasks,
    products,
    cart,
    login,
});

export default appReducers;