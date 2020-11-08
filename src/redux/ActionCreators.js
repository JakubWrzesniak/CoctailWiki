import * as ActionTypes from './ActionTypes';
import { baseUrl } from '../shared/baseUrl';


export const fetchCoctailsByName = (name) => (dispatch) => {
    return fetch(baseUrl + "search.php?s=" + name)
        .then(response => {
                if (response.ok) {

                    return response;
                } else {
                    var error = new Error('Error ' + response.status + ': ' + response.statusText)
                    error.response = response;
                    throw error;
                }
            },
            error => {
                var errmess = new Error(error.message);
                throw errmess;
            })
        .then(response => response.json())
        .then(coctails => dispatch(addCoctails(coctails)))
        .catch(error => dispatch(coctailsFaild(error.message)));
}

export const coctailsFaild = (errmess) => ({

});

export const addCoctails = (coctails) => ({
    type: ActionTypes.ADD_COCTAILS,
    payload: coctails
});