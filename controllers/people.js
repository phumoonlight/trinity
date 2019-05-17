import Person from '../models/person';

const getAll = async (_request, response) => {
  try {
    const result = await Person.find().exec();
    response.send(result);
  } catch (error) {
    response.status(404).send(error);
  }
};

const getByName = async (request, response) => {
  try {
    const result = await Person.findOne({ firstname: request.params.name });
    response.send(result);
  } catch (error) {
    response.status(404).send(error);
  }
};

const post = async (request, response) => {
  try {
    const person = new Person(request.body);
    const result = await person.save();
    response.send(result);
  } catch (error) {
    response.status(400).send(error);
  }
};

const put = async (request, response) => {
  try {
    const person = await Person.findOne({ firstname: request.params.name }).exec();
    person.set(request.body);
    const result = await person.save();
    response.send(result);
  } catch (error) {
    response.status(400).send(error);
  }
};

const deleteByName = async (request, response) => {
  try {
    const result = await Person.deleteOne({ firstname: request.params.name }).exec();
    response.send(result);
  } catch (error) {
    response.status(400).send(error);
  }
};

const deleteAll = async (_request, response) => {
  try {
    const result = await Person.deleteMany().exec();
    response.send(result);
  } catch (error) {
    response.status(400).send(error);
  }
};

export default {
  getAll,
  getByName,
  post,
  put,
  deleteByName,
  deleteAll,
};
