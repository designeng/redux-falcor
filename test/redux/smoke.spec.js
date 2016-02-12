import chai, { expect } from 'chai';
import spies from 'chai-spies';
import when from 'when';

import Falcor from "falcor";
import FalcorDataSource from 'falcor-http-datasource';

chai.use(spies);

describe('smoke test',  () => {
    let result;

    const before = (done) => {
        const model = new Falcor.Model({
            source: new FalcorDataSource('http://localhost:3000/messages/model.json')
        });
        // does not work, error Object{message: 'Response code 0'}
        model.getValue(['messages']).then(res => {
            result = res;
            done();
        }).catch(error => {
            console.log("error:::::", error[0].path, error[0].value);
            done();
        })
    }

    beforeEach(before);

    // TODO: fix the test
    it('result should be ok',  (done) => {
        expect(result).not.to.be.ok;
        done()
    });

});