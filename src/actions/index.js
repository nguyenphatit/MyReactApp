import * as Types from './../constants/ActionType';
import callAPI from './../utils/apiCaller';

export const actionFetchTasks = (tasks) => {
    return {
        type: Types.FETCH_TASK,
        tasks
    }
}

export const actionFetchTasksReq = () => {
    return (dispatch) => {
        return callAPI('GET', 'tasks', null).then(res => {
            dispatch(actionFetchTasks(res.data));
        })
    }
}

export const actionAddTask = (task) => {
    return {
        type: Types.ADD_TASK,
        task
    }
}

export const actionAddTaskReq = (task) => {
    if (task.id) {
        console.log("Edit")
    } else {
        return (dispatch) => {
            return callAPI('POST', 'tasks', task).then(res => {
                dispatch(actionAddTask(res.data));
            })
        }
    }
}

export const actionChangeStatusReq = (id, status) => {
    return (dispatch) => {
        return callAPI('PUT', `/tasks/${id}`, {
            status: !status
        }).then(res => {
            dispatch(actionChangeStatus(res.data));
        })
    }
}

export const actionChangeStatus = (task) => {
    return {
        type: Types.CHANGE_STATUS,
        task
    }
}

export const actionDeleteTaskReq = (id) => {
    return (dispatch) => {
        return callAPI('DELETE', `/tasks/${id}`, null).then(res => {
            dispatch(actionDeleteTask(res.data));
        })
    }
}

const actionDeleteTask = (task) => {
    return {
        type: Types.DELETE_TASK,
        task
    }
}

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
