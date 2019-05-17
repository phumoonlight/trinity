import mongoose from 'mongoose';

const personSchema = mongoose.Schema({
  userid: String,
  firstname: String,
  lastname: String,
}, { versionKey: false });

const Person = mongoose.model('person', personSchema);

export default Person;
