import { createStore, combineReducers, applyMiddleware } from 'redux';
import { createForms } from 'react-redux-form';
import { Coctail } from './coctail';
import { Coctails } from './coctails';
import { Categories } from './categories';
import { Glasses } from './glasses'; 
import thunk from 'redux-thunk';
import logger from 'redux-logger';
import { InitialSearch } from './search';

export const ConfigureStore = () => {
    const store = createStore(
        combineReducers({
            coctail: Coctail,
            coctails: Coctails,
            categories: Categories,
            glasses: Glasses,
            ...createForms({
                search: InitialSearch
            })

        }),
        applyMiddleware(thunk, logger)
    );

    return store;
}

export default ConfigureStore;