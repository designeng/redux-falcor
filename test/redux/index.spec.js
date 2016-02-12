import chai, { expect } from 'chai';
import spies from 'chai-spies';
import when from 'when';

import { createStore, applyMiddleware, compose } from 'redux';

import thunkMiddleware     from "redux-thunk";
import falcorMiddleware    from "./../../src/common/middleware/falcorMiddleware";

import rootReducer from './../../src/common/reducers';

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

});