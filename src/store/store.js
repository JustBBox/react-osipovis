import { createStore, combineReducers } from 'redux';
//maybe redux-thunk for sugar syntax

import { pathReducer } from "./reducers/pathReducer";
import { settingsReducer } from './reducers/settingsReducer';
import { commitsReducer } from "./reducers/commitsReducer";
import { showReducer } from "./reducers/showReducer";

const rootReducer = combineReducers({
    path: pathReducer,
    settings: settingsReducer,
    commits: commitsReducer,
    show: showReducer
});

export const reduxStore = createStore(rootReducer);
