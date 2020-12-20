import * as ActionTypes from './ActionTypes';

export const Glasses = (state = {
    isLoading: true,
    errMess: null,
    glasses: []
}, action) => {
    switch (action.type) {
        case ActionTypes.ADD_GLASSES:
            return {...state, errMess: null, glasses: action.payload, isLoading: false };
        case ActionTypes.GLASSES_LOADING:
            return {...state, errMess: null, glasses: [], isLoading: true};
        default:
            return state;
    }
}