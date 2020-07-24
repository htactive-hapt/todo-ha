import * as actionTypes from '../actions/types'
import { combineReducers } from 'redux'

const initialTaskState = [
    {
        id: 0,
        title: 'Test Task 0',
        createdAt: '15:57:00, 20/7/2020',
        isCompleted: false,
        color: 'red'
    },
    {
        id: 1,
        title: 'Test Task 1',
        createdAt: '15:58:00, 20/7/2020',
        isCompleted: false,
        color: 'green'
    }]

let initialID = 1

const taskReducer = (state = initialTaskState, action) => {
    switch (action.type) {
        case actionTypes.ADD_TASK: {
            initialID += 1

            return [
                ...state, {
                    id: initialID,
                    title: action.payload.title,
                    createdAt: action.payload.createdAt,
                    isCompleted: false,
                    color: action.payload.color
                }
            ]
        }

        case actionTypes.EDIT_TASK:
            return state.map((item, id) => {
                if (action.payload.id === id) {
                    return {
                        ...item,
                        title: action.payload.newTitle
                    }
                }
                return item
            })

        case actionTypes.DELETE_TASK: {
            const { id } = action.payload

            return state.filter(task => task.id !== id)
        }

        case actionTypes.CHECK_TASK:
            const { id } = action.payload

            return state.map((item) => {
                if (item.id === id) {
                    return { ...item, isCompleted: !item.isCompleted }
                }
                return item
            })

        case actionTypes.TOGGLE_TODO:
            return state.map(item =>
                item.id === action.payload.id ? { ...item, isCompleted: !item.isCompleted } : item)

        default:
            return state
    }
}

const rootReducer = combineReducers({
    tasks: taskReducer,
})

export default rootReducer