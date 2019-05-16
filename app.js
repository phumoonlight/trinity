/* eslint-disable no-console */
import mongoose from 'mongoose';
import express from 'express';
import bodyParser from 'body-parser';
import person from './controllers/people';

mongoose.connect('mongodb://localhost/mydb', { useNewUrlParser: true });
<<<<<<< HEAD

const app = express();
=======
>>>>>>> 5540d12842d7a2bef7d50e46c83bef9bbcf81fd7

const app = express();
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

<<<<<<< HEAD
app.get('/people', User.get);
app.get('/people/:name', User.getid);
app.post('/people', User.post);
app.put('/people/:name', User.put);
app.delete('/people/:id', User.deleteid);
app.delete('/people', User.deleteall);
=======
app.get('/people', person.getAll);
app.get('/people/:name', person.getByName);
app.post('/people', person.post);
app.put('/people/:name', person.put);
app.delete('/people/:name', person.deleteByName);
app.delete('/people', person.deleteAll);
>>>>>>> 5540d12842d7a2bef7d50e46c83bef9bbcf81fd7

app.listen(3000, () => {
  console.log('Listening at :3000');
});
