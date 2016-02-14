import express from 'express';
import FalcorServer from 'falcor-express';

/* ---- import falcor routers ---- */
import NavigationRouter from './api/falcor/routers/navigation';
import ContactsRouter   from './api/falcor/routers/contacts';
import MessagesRouter   from './api/falcor/routers/messages';

var app = express();

/* ---- falcor models API ---- */
app.use('/navigation/model.json',   FalcorServer.dataSourceRoute(() => new NavigationRouter()));
app.use('/contacts/model.json',     FalcorServer.dataSourceRoute(() => new ContactsRouter()));
app.use('/messages/model.json',     FalcorServer.dataSourceRoute(() => new MessagesRouter()));

// static pages
app.use(express.static('./public'));

/* 404 */
app.use(function(req, res, next) {
    var err = new Error('Route is not found:::::' + req.url);
    err.status = 404;
    next(err);
});

app.set('port', process.env.PORT || 3000);
var port = app.get('port');

app.listen(port, err => {
    if (err) {
        console.error(err);
        return;
    }
    console.log('navigate to http://localhost:' + port);
});