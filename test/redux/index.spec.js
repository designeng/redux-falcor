import chai, { expect } from 'chai';
import spies from 'chai-spies';
import when from 'when';

import rootReducer from './../../src/common/reducers';

chai.use(spies);

describe('root reducer',  () => {

    let root = {};

    const sendRequestPromise = when.promise((resolve, reject) => {
        setTimeout(() => {
            resolve({name: 'John'})
        }, 100);
    });

    const before = (done) => {
        done();
    }

    beforeEach(before);

    it('should be',  (done) => {
        expect(true).to.equal(true);
        done();
    });

});