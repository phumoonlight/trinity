import Person from '../models/person';

const get = async (request, response) => {
  let result;
  try {
    if ('search' in request.query) {
      const query = request.query.search;
      result = await Person.find({ firstname: { $regex: query, $options: 'i' } }).exec();
      result = result.concat(await Person.find({ lastname: { $regex: query, $options: '' } }).exec());
    } else {
      result = await Person.find().exec();
    }
    response.send(result);
  } catch (error) {
    response.status(404).send(error);
  }
};

const getByUserID = async (request, response) => {
  try {
    const result = await Person.findById(request.params.id);
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
    const person = await Person.findById(request.params.id).exec();
    person.set(request.body);
    const result = await person.save();
    response.send(result);
  } catch (error) {
    response.status(400).send(error);
  }
};

const deleteByID = async (request, response) => {
  try {
    const result = await Person.deleteOne({ _id: request.params.id }).exec();
    response.send(result);
  } catch (error) {
    response.status(400).send(error);
  }
};

export default {
  get,
  getByUserID,
  post,
  put,
  deleteByID,
};
