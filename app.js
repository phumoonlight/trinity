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
  try {
    const person = new PersonModel(request.body);
    const result = await person.save();
    response.send(result);
  } catch (error) {
    response.status(500).send(error);
  }
});

app.get('/person', async (request, response) => {
  try {
    const result = await PersonModel.find().exec();
    response.send(result);
  } catch (error) {
    response.status(500).send(error);
  }
});

app.get('/person/:id', async (request, response) => {
  try {
    const result = await PersonModel.findOne({ firstname: request.params.id });
    response.send(result);
  } catch (error) {
    response.status(500).send(error);
  }
});

app.put('/person/:id', async (request, response) => {
  try {
    const person = await PersonModel.findById(request.params.id).exec();
    person.set(request.body);
    const result = await person.save();
    response.send(result);
  } catch (error) {
    response.status(500).send(error);
  }
});

app.delete('/person/:id', async (request, response) => {
  try {
    const result = await PersonModel.deleteOne({ _id: request.params.id }).exec();
    response.send(result);
  } catch (error) {
    response.status(500).send(error);
  }
});

app.delete('/personall', async (request, response) => {
  try {
    const result = await PersonModel.deleteOne().exec();
    response.send(result);
  } catch (error) {
    response.status(500).send(error);
  }
});

app.listen(3000, () => {
  console.log('Listening at :3000');
});
