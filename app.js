/* eslint-disable no-console */

import express from 'express';
import mongoose from 'mongoose';
import bodyParser from 'body-parser';

const app = express();
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

mongoose.connect('mongodb://localhost/mydb', { useNewUrlParser: true });

const PersonModel = mongoose.model('person', mongoose.Schema({
  firstname: String,
  lastname: String,
}, { versionKey: false }));

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

app.get('/person/:name', async (request, response) => {
  try {
    const result = await PersonModel.findOne({ firstname: request.params.name });
    response.send(result);
  } catch (error) {
    response.status(500).send(error);
  }
});

app.put('/person/:name', async (request, response) => {
  try {
    const person = await PersonModel.findOne({ firstname: request.params.name }).exec();
    person.set(request.body);
    const result = await person.save();
    response.send(result);
  } catch (error) {
    response.status(500).send(error);
  }
});

app.delete('/person/:id', async (request, response) => {
  try {
    const result = await PersonModel.deleteOne({ firstname: request.params.id }).exec();
    response.send(result);
  } catch (error) {
    response.status(500).send(error);
  }
});

app.delete('/personall', async (request, response) => {
  try {
    const result = await PersonModel.deleteMany().exec();
    response.send(result);
  } catch (error) {
    response.status(500).send(error);
  }
});

app.listen(3000, () => {
  console.log('Listening at :3000');
});
