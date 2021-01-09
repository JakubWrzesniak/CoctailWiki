import * as ActionTypes from './ActionTypes';

export const Ingredients = (state = {
    isLoading: true,
    errMess: null,
    ingredients: []
}, action) => {
    switch (action.type) {
        case ActionTypes.ADD_INGREDIENTS:
            return {...state, errMess: null, ingredients: action.payload, isLoading: false };
        case ActionTypes.INGREDIENTS_LOADING:
            return {...state, errMess: null, ingredients: [], isLoading: true};
        default:
            return state;
    }
}