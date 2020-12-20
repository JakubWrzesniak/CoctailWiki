import * as ActionTypes from './ActionTypes';
import { baseUrl } from '../shared/baseUrl';


export const fetchCoctailsByName = (name) => (dispatch) => {

    dispatch(coctailsLoading());

    return fetch(baseUrl + "api/json/v1/1/search.php?s=" + name)
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


export const fetchCoctailsByCategory = (category) => (dispatch) => {

    dispatch(coctailsLoading());
    console.log(category);

    return fetch(baseUrl + "api/json/v1/1/filter.php?c=" + category)
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
        .then(drinks =>dispatch(addCoctails(drinks)))
        .catch(error => dispatch(coctailsFaild(error.message)));
}

export const coctailsFaild = (errmess) => ({
    type: ActionTypes.COCTAILS_ERROR,
    payload: errmess,
});

export const addCoctails = (coctails) => ({
    type: ActionTypes.ADD_COCTAILS,
    payload: coctails
});

export const coctailsLoading = () =>({
    type: ActionTypes.COCTAILS_LOADING
})



export const fetchCoctailById = (id) => (dispatch) => {
    dispatch(coctailLoading());
    console.log(id);
    return fetch(baseUrl + "api/json/v1/1/lookup.php?i=" + id)
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
        .then(coctail => dispatch(addCoctail(coctail)))
        .catch(error => dispatch(coctailFaild(error.message)));
}

export const coctailFaild = (errmess) => ({

});

export const addCoctail = (coctail) => ({
    type: ActionTypes.ADD_COCTAIL,
    payload: coctail
});

export const coctailLoading = () =>({
    type: ActionTypes.COCTAIL_LOADING
})


export const fetchCategories = () => (dispatch) => {
    return fetch(baseUrl + "api/json/v1/1/list.php?c=list")
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
        .then(categories => dispatch(addCategories(categories)))
        .catch(error => dispatch(coctailsFaild(error.message)));
}

export const addCategories = (categories) => ({
    type: ActionTypes.ADD_CATEGORIES,
    payload: categories
});

export const categoriesFaild = (errmess) => ({

});

export const fetchGlasses = () => (dispatch) => {
    dispatch(glassesLoading());
    return fetch(baseUrl + "api/json/v1/1/list.php?g=list")
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
        .then(glasses => dispatch(addGlasses(glasses)))
        .catch(error => dispatch(coctailsFaild(error.message)));
}

export const addGlasses= (glasses) => ({
    type: ActionTypes.ADD_GLASSES,
    payload: glasses
});

export const glassesFaild = (errmess) => ({

});

export const glassesLoading = () =>({
    type: ActionTypes.GLASSES_LOADING
})
