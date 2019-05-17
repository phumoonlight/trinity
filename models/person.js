import mongoose from 'mongoose';

let random = 0;
const lastrandom = random;
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

});

const Person = mongoose.model('person', personSchema);

export default Person;
