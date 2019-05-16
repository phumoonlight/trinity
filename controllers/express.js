import PersonModel from './mongoose';

const get = async (request, response) => {
  try {
    const result = await PersonModel.find().exec();
    response.send(result);
  } catch (error) {
    response.status(500).send(error);
  }
};
const getid = async (request, response) => {
  try {
    const result = await PersonModel.findOne({ firstname: request.params.name });
    response.send(result);
  } catch (error) {
    response.status(500).send(error);
  }
};
const post = async (request, response) => {
  try {
    const person = new PersonModel(request.body);
    const result = await person.save();
    response.send(result);
  } catch (error) {
    response.status(500).send(error);
  }
};
const put = async (request, response) => {
  try {
    const person = await PersonModel.findOne({ firstname: request.params.name }).exec();
    person.set(request.body);
    const result = await person.save();
    response.send(result);
  } catch (error) {
    response.status(500).send(error);
  }
};
const deleteid = async (request, response) => {
  try {
    const result = await PersonModel.deleteOne({ firstname: request.params.id }).exec();
    response.send(result);
  } catch (error) {
    response.status(500).send(error);
  }
};
const deleteall = async (request, response) => {
  try {
    const result = await PersonModel.deleteMany().exec();
    response.send(result);
  } catch (error) {
    response.status(500).send(error);
  }
};
export default {
  get,
  getid,
  post,
  put,
  deleteid,
  deleteall,
};
