export default function falcorMiddleware() {
    return next => action => {

        /* destructuring action object to local variables*/
        const { promise, isFalcorRequest, type, ...rest } = action;

        /* filter out all requests, that is not a Firebase promise */
        if (!promise && !isFalcorRequest) return next(action);

        const REQUEST = type + '_REQUEST';
        const SUCCESS = type + '_SUCCESS';
        const FAILURE = type + '_FAILURE';

        /*triggers CONTACTS_GET_REQUEST action*/
        // next({...rest, type: REQUEST});

        console.log("falcorMiddleware run....");

        return promise
            .then(contacts => {
                if (contacts === null) {
                    var error = new Error('No data.');
                    next({...rest, error, type: FAILURE});
                    return false;
                } else {
                    console.log("contacts:::::::::::::::::", contacts);

                    next({...rest, contacts, type: SUCCESS});
                    return contacts;
                }

                /* Slowing up request to see the loader */
                next({...rest, contacts, type: SUCCESS});
                return true;
            })
            .catch(error => {
                console.log("contacts::ERROR::", error[0].path, error[0].value);
            })
    };
}