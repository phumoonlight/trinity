/* eslint-disable arrow-body-style */
/* eslint-disable no-console */
import mongoose from 'mongoose';

mongoose.connect('mongodb://localhost:27017/mydb', { useNewUrlParser: true });

const testSchema = mongoose.Schema({
  name: String,
  age: Number,
  isAlive: Boolean,
}, { collection: 'users' });

const User = mongoose.model('', testSchema);

const testUser = new User({
  name: 'noobmaster69',
  age: 1500,
  isAlive: true,
  hobby: 'drink',
});

testUser.save((err) => { if (err) throw err; });
