import { 
    CONTACTS_GET, 
    CONTACTS_GET_REQUEST, 
    CONTACTS_GET_SUCCESS, 
    CONTACTS_GET_FAILURE 
} from '../actions/contacts';

export default function falcorMiddleware() {
    return next => action => {

        /* destructuring action object to local variables*/
        const { promise, isFalcorRequest, type, ...rest } = action;

        /* filter out all requests, that is not a Firebase promise */
        if (!promise && !isFalcorRequest) return next(action);

        console.log("falcorMiddleware run....");

        return promise
            .then(contacts => {
                if (contacts === null) {
                    var error = new Error('No data.');
                    next({...rest, error, type: CONTACTS_GET_FAILURE});
                } else {
                    console.log("contacts:::::::::::::::::", contacts);

                    next({...rest, contacts, type: CONTACTS_GET_SUCCESS});
                }
            })
            .catch(error => {
                console.log("contacts::ERROR::", error[0].path, error[0].value);
                next({...rest, error, type: CONTACTS_GET_FAILURE});
            })
    };
}