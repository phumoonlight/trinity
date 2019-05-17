import mongoose from 'mongoose';

const personSchema = mongoose.Schema({
  firstname: String,
  lastname: String,
});

const Person = mongoose.model('person', personSchema);

export default Person;
