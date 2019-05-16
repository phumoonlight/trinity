/* eslint-disable no-console */
import express from 'express';
import bodyParser from 'body-parser';
import User from './controllers/express';

mongoose.connect('mongodb://localhost/mydb', { useNewUrlParser: true });

const app = express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.get('/people', User.get);
app.get('/people/:name', User.getid);
app.post('/people', User.post);
app.put('/people/:name', User.put);
app.delete('/people/:id', User.deleteid);
app.delete('/people', User.deleteall);

app.listen(3000, () => {
  console.log('Listening at :3000');
});
