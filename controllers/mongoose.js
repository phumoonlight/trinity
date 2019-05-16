import mongoose from 'mongoose';

mongoose.connect('mongodb://localhost/mydb', { useNewUrlParser: true });

export default mongoose.model('person', mongoose.Schema({
  firstname: String,
  lastname: String,
}, { versionKey: false }));
