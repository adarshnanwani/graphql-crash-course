const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const BookSchema = new Schema({
  name: String,
  genre: String,
  author: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Author',
  },
});

const User = mongoose.model('Book', BookSchema);

module.exports = User;
