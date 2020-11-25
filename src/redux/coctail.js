import * as ActionTypes from './ActionTypes';

export const Coctail = (state = {
    errMess: null,
    isLoading: true,
    coctail: []
}, action) => {
    switch (action.type) {
        case ActionTypes.ADD_COCTAIL:
            return {...state, errMess: null, isLoading: false, coctail: action.payload };
        case ActionTypes.COCTAIL_LOADING:
            return {...state, isLoading: true, errMess: null, coctail: [] };
        default:
            return state;
    }
}