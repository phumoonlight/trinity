/* eslint-disable no-console */
import express from 'express';
import bodyParser from 'body-parser';
import user from './controllers/express';

const app = express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.get('/people', user.get);

app.get('/people/:name', user.getid);

app.post('/people', user.post);

app.put('/people/:name', user.put);

app.delete('/people/:id', user.deleteid);

app.delete('/people', user.deleteall);

app.listen(3000, () => {
  console.log('Listening at :3000');
});
