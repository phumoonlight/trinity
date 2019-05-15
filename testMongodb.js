/* eslint-disable arrow-body-style */
/* eslint-disable no-console */
import mongoClient from 'mongodb';

const url = 'mongodb://localhost:27017';

const testObj = {
  name: 'noobmaster69',
  age: 1500,
  isAlive: true,
};

const connectDB = async () => {
  try {
    const mongo = await mongoClient.connect(url, { useNewUrlParser: true });
    const database = mongo.db('mydb');
    database.collection('users').insertOne(testObj);
    mongo.close();
  } catch (error) {
    console.log(error);
  }
};

connectDB();
