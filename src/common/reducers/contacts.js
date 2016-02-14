import { 
    CONTACTS_GET, 
    CONTACTS_GET_REQUEST, 
    CONTACTS_GET_SUCCESS, 
    CONTACTS_GET_FAILURE 
} from '../actions/contacts';

export default function contacts(state = {}, action) {

    console.log("ACTION IN REDUCER::::", action);

    switch (action.type) {

        case CONTACTS_GET_SUCCESS: {
            console.log("CONTACTS_GET_SUCCESS.......");
            return Object.assign({}, state, {contacts: action.contacts});
        }

        case CONTACTS_GET_FAILURE:
            return Object.assign({}, state, {failed: true});

        default:
            return state;
    }
}