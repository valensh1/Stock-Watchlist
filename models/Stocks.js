const { Schema, model } = require('mongoose');

// create our schema
const stockSchema = new Schema({
	symbol: String,
	lastPrice: Number
});

const Stock = model('Stock', stockSchema);

module.exports = Stock;
