import * as Types from './../constants/ActionType';
import callAPI from './../utils/apiCaller';

export const actionFetchProducts = (products) => {
    return {
        type: Types.FETCH_PRODUCT,
        products
    }
}

export const actionFetchProductsReq = () => {
    return (dispatch) => {
        return callAPI('GET', 'musics', null).then(res => {
            dispatch(actionFetchProducts(res.data));
        });
    }
}

export const actionAddToCart = (product, quantity) => {
    return {
        type: Types.ADD_TO_CART,
        product,
        quantity
    }
}

export const actionDeleteProductInCart = (product) => {
    return {
        type: Types.DELETE_PRODUCT_IN_CART,
        product
    }
}

export const actionUpdateProductInCart = (product, quantity) => {
    return {
        type: Types.UPDATE_PRODUCT_IN_CART,
        product,
        quantity,
    }
}

export const actionCheckOutCart = () => {
    return {
        type: Types.CHECK_OUT,
    }
}

export const actionFetchUserReq = () => {
    return (dispatch) => {
        return callAPI('GET', 'users', null).then(res => {
            dispatch(actionFetchUsers(res.data));
        });
    }
}

const actionFetchUsers = (users) => {
    return {
        type: Types.FETCH_USER,
        users
    }
}

export const actionLogin = (user) => {
    return {
        type: Types.LOG_IN,
        user
    }
}

export const actionLogout = () => {
    return {
        type: Types.LOG_OUT
    }
}
