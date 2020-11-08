import * as ActionTypes from './ActionTypes';

export const Coctails = (state = {
    errMess: null,
    coctails: []
}, action) => {
    switch (action.type) {
        case ActionTypes.ADD_COCTAILS:
            return {...state, errMess: null, coctails: action.payload };

        default:
            return state;
    }
}