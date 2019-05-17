/* eslint-disable no-console */
import mongoose from 'mongoose';
import express from 'express';
import bodyParser from 'body-parser';
<<<<<<< HEAD
import user from './controllers/express';
=======
import person from './controllers/people';
>>>>>>> 5540d12842d7a2bef7d50e46c83bef9bbcf81fd7

mongoose.connect('mongodb://localhost/mydb', { useNewUrlParser: true });

const app = express();
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

<<<<<<< HEAD
app.get('/people', user.get);

app.get('/people/:name', user.getid);

app.post('/people', user.post);

app.put('/people/:name', user.put);

app.delete('/people/:id', user.deleteid);

app.delete('/people', user.deleteall);
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
