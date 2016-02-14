import chai, { expect } from 'chai';
import spies from 'chai-spies';
import when from 'when';

import { createStore, applyMiddleware, compose } from 'redux';

import thunkMiddleware     from "redux-thunk";
import falcorMiddleware    from "./../../src/common/middleware/falcorMiddleware";

import rootReducer from './../../src/common/reducers';
import * as ContactsActions from './../../src/common/actions/contacts';

chai.use(spies);

const middleware = [
    thunkMiddleware,
    falcorMiddleware
]

const finalCreateStore = compose(applyMiddleware(...middleware))(createStore);
const storeBuilder = (initialState) => finalCreateStore(rootReducer, initialState);

describe('root reducer store',  () => {

    let store = {};
    let finalCreateStore;

    const sendRequestPromise = when.promise((resolve, reject) => {
        setTimeout(() => {
            resolve({name: 'John'})
        }, 100);
    });

    const before = (done) => {
        store = storeBuilder({});
        done();
    }

    beforeEach(before);

    it('should have { dispatch, subscribe } properties',  (done) => {
        expect(store.dispatch).to.be.ok;
        expect(store.subscribe).to.be.ok;
        done();
    });

    it('should have contacts field',  (done) => {
        ContactsActions.contactsGet();
        const state = store.getState();

        expect(state.contacts).to.be.ok;
        expect(state.contacts).to.be.object;

        console.log("state.contacts:", state.contacts);

        // TODO
        store.dispatch(ContactsActions.contactsGet());
        
        setTimeout(() => {
            done();
        }, 300);

    });

});