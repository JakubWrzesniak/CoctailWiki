import * as ActionTypes from './ActionTypes';

export const Coctails = (state = {
    errMess: null,
    isLoading: true,
    coctails: []
}, action) => {
    switch (action.type) {
        case ActionTypes.ADD_COCTAILS:
            return {...state, isLoading: false, errMess: null, coctails: action.payload };
        case ActionTypes.COCTAILS_LOADING:
            return {...state, isLoading: true, errMess: null, coctails: [] };
        case ActionTypes.COCTAILS_ERROR:
            return {...state, isLoading: false, errMess: action.payload, coctails: [] };
        default:
            return state;
    }
}