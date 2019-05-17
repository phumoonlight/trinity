/* eslint-disable no-console */
import mongoose from 'mongoose';
import express from 'express';
import bodyParser from 'body-parser';
import person from './controllers/people';

mongoose.connect('mongodb://localhost/mydb', { useNewUrlParser: true });

const app = express();
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.get('/people', person.getAll);
app.get('/people/:name', person.getByName);
app.post('/people', person.post);
app.put('/people/:name', person.put);
app.delete('/people/:name', person.deleteByName);
app.delete('/people', person.deleteAll);

app.listen(3000, () => {
  console.log('Listening at :3000');
});
