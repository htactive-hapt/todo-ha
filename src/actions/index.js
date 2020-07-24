import * as actionTypes from './types'

// Task Action

export const addTask = (title, createdAt, color) => {
    return {
        type: actionTypes.ADD_TASK,
        payload: {
            title,
            createdAt,
            color
        }
    }
}

export const editTask = (id, newTitle) => {
    return {
        type: actionTypes.EDIT_TASK,
        payload: {
            id,
            newTitle
        }
    }
}

export const deleteTask = id => {
    return {
        type: actionTypes.DELETE_TASK,
        payload: {
            id
        }
    }
}

export const checkTask = id => {
    return {
        type: actionTypes.CHECK_TASK,
        payload: {
            id
        }
    }
}

export const toggleTodo = (id) => {
    return {
        type: actionTypes.TOGGLE_TODO,
        payload: {
            id
        }
    }
}
