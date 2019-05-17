import mongoose from 'mongoose';

let random = 0;
const lastrandom = random;
const personSchema = mongoose.Schema({
<<<<<<< HEAD
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
=======
  userid: String,
  firstname: String,
  lastname: String,
}, { versionKey: false });
>>>>>>> 90a77759355ce29fa5ae1a404f80f5e9569473ef

const Person = mongoose.model('person', personSchema);

export default Person;
