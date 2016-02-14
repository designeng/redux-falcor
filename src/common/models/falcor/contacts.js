import Falcor from "falcor";
import FalcorDataSource from 'falcor-http-datasource';
import when from 'when';

export const noopModel = {
    getValue: () => {
        return when.promise(function(resolve, reject, notify) {
            resolve([
                {name: 'one'},
                {name: 'two'}
            ]);
        });
    }
}

export const model = new Falcor.Model({
    source: new FalcorDataSource('http://localhost:3000/contacts/model.json')
});