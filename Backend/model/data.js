const mongoose = require('mongoose');

const dataschema = new mongoose.Schema({
  id: {
    type: Number,
    unique: true
  },
  city: {
    type: String,
  },
  start_date: {
    type: String,
  },
  end_date: {
    type: String,
  },
  price: {
    type: String,
  },
  status: {
    type: String,
  },
  color: {
    type: String,
  },
  
});

const data = new mongoose.model('data', dataschema);

module.exports = data;
