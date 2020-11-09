import * as ActionTypes from './ActionTypes';

export const Categories = (state = {
    errMess: null,
    categories: []
}, action) => {
    switch (action.type) {
        case ActionTypes.ADD_CATEGORIES:
            return {...state, errMess: null, categories: action.payload };

        default:
            return state;
    }
}