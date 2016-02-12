import { combineReducers } from 'redux';

import contacts from './contacts';

const rootReducer = combineReducers({
    contacts  : contacts,
});

export default rootReducer;