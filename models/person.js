import mongoose from 'mongoose';

const personSchema = mongoose.Schema({
  firstname: String,
  lastname: String,
  password: {
    type: String,
    validate: [
      function (password) {
        return password && password.length >= 6;
      },
      'Password 6 characters',
    ],
  },

});

const Person = mongoose.model('person', personSchema);

export default Person;
