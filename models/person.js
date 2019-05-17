import mongoose from 'mongoose';

let random = 0;
const personSchema = mongoose.Schema({
  ID: {
    type: String,
    default() {
      random += Math.floor((Math.random() * 1) + 1);
      return random;
    },
  },
  firstname: String,
  lastname: String,

}, { versionKey: false });

const Person = mongoose.model('person', personSchema);

export default Person;
