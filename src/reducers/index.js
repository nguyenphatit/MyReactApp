import { combineReducers } from 'redux';
import tasks from './tasks';
import products from './products';
import cart from './cart';

const appReducers = combineReducers({
    tasks,
    products,
    cart,
});

export default appReducers;