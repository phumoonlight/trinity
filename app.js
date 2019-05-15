/* eslint-disable no-console */

import Express from 'express';
import Mongoose from 'mongoose';
import BodyParser from 'body-parser';

const app = Express();
app.use(BodyParser.json());
app.use(BodyParser.urlencoded({ extended: true }));

Mongoose.connect('mongodb://localhost/mydb', { useNewUrlParser: true });

const PersonModel = Mongoose.model('person', {
  firstname: String,
  lastname: String,
});

app.post('/person', async (request, response) => {
  const result = await new PersonModel(request.body).save();
  response.send('save complete!');
  response.send(result);
});

app.get('/person', async (request, response) => {
  const result = await PersonModel.find().exec();
  response.send(result);
});

app.get('/person/:id', async (request, response) => {
  console.log(request);
  let person;
  try {
    person = await PersonModel.find(request.params);
  } catch (error) {
    console.log(error);
  }
  response.send(person);
});

app.put('/person/:id', async (request, response) => {
  const person = await PersonModel.findById(request.params.id).exec();
  person.set(request.body);
  const result = await person.save();
  response.send(result);
});

app.delete('/person/:id', async (request, response) => {
  const result = await PersonModel.deleteOne({ firstname: request.params.id }).exec();
  response.send(result);
});

app.delete('/personall', async (request, response) => {
  const result = await PersonModel.deleteMany().exec();
  response.send(result);
});

app.listen(3000, () => {
  console.log('Listening at :3000');
});
