import { createStore, combineReducers, applyMiddleware } from 'redux';
import { createForms } from 'react-redux-form';
import { Coctails } from './coctails';
import thunk from 'redux-thunk';
import logger from 'redux-logger';
import { InitialSearch } from './search';

export const ConfigureStore = () => {
    const store = createStore(
        combineReducers({
            coctails: Coctails,
            ...createForms({
                search: InitialSearch
            })

        }),
        applyMiddleware(thunk, logger)
    );

    return store;
}

export default ConfigureStore;