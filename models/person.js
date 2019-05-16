import mongoose from 'mongoose';

const personSchema = mongoose.Schema({
  firstname: String,
  lastname: String,
});

const Person = mongoose.model('people', personSchema, { versionKey: false });

export default Person;
