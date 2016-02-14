import { 
    CONTACTS_GET, 
    CONTACTS_GET_REQUEST, 
    CONTACTS_GET_SUCCESS, 
    CONTACTS_GET_FAILURE 
} from '../actions/contacts';

export default function falcorMiddleware() {
    return next => action => {
        const { promise, isFalcorRequest, type, ...rest } = action;

        if (!promise && !isFalcorRequest) return next(action);

        console.log("falcorMiddleware run....");

        return promise
            .then(contacts => {
                if (contacts === null) {
                    var error = new Error('No data.');
                    next({...rest, error, type: CONTACTS_GET_FAILURE});
                } else {
                    console.log("contacts:::::::::::::::::", contacts);

                    const _action = {
                        ...rest, 
                        contacts,
                        type: CONTACTS_GET_SUCCESS
                    }

                    next(_action);
                }
            })
            .catch(error => {
                console.log("contacts::ERROR::", error[0].path, error[0].value);
                next({...rest, error, type: CONTACTS_GET_FAILURE});
            })
    };
}