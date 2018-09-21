import * as Types from '../constants/ActionType';

var initialState = [];

const login = (state = initialState, action) => {
    switch (action.type) {
        case Types.FETCH_USER:
            state = action.users
            return [...state]

        case Types.LOG_IN:
            state = action.user
            let data = Math.random() + state.id + Math.random() + state.email + Math.random() + Math.random();
            localStorage.setItem('__user', JSON.stringify(state))
            sessionStorage.setItem('__user', JSON.stringify(data))
            return [...state]

        case Types.LOG_OUT:
            localStorage.removeItem('__user')
            sessionStorage.removeItem('__user')
            return [...state]

        default: return [...state]
    }
}

export default login;