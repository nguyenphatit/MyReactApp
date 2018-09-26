import * as Types from '../constants/ActionType';

var initialState = [];

const tasks = (state = initialState, action) => {
    switch (action.type) {
        case Types.FETCH_TASK:
            state = action.tasks
            return [...state]

        case Types.ADD_TASK:
            state.push(action.task)
            return [...state]

        case Types.CHANGE_STATUS:
            let indexCS = findIndexInTask(state, action.task.id);
            if (indexCS !== -1) {
                state[indexCS].status = !state[indexCS].status
            }
            return [...state]

        case Types.DELETE_TASK:
            let indexD = findIndexInTask(state, action.task.id);
            if (indexD !== -1) {
                state.splice(indexD, 1);
            }
            return [...state]

        default: return [...state]
    }
}

let findIndexInTask = (tasks, id) => {
    let result = -1;
    tasks.forEach((task, index) => {
        if (task.id === id) {
            result = index;
        }
    });
    return result;
}

export default tasks;