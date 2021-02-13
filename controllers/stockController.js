const Stock = require('../models/Stocks');
const express = require('express');
const stockRouter = express.Router();

// INDUCES
// -- We don't need new and edit routes for our application
// Left with CRUD functionality - Create/Read/Update/Delete

// CREATE
stockRouter.post('/', async (req, res) => {
	try {
		const newStockPost = await Stock.create(req.body);
        console.log(req.body);
		res.status(200).json(newStockPost); // return json of our newly created blog so we can send to rest of app
	} catch (error) {
		res.status(400).json(error);
	}
});

// READ
// Has 2 sub-routes which are INDEX and SHOW

//INDEX ROUTE
stockRouter.get('/', async (req, res) => {
	try {
		const foundStocks = await Stock.find({}); //.populate('comments') // transforms array of oject id's into comments themselves
		res.status(200).json(foundStocks);
	} catch (error) {
		res.status(400).json(error);
	}
});

// SHOW ROUTE
stockRouter.get('/:id', async (req, res) => {
	try {
		const foundStocks = await Stock.findById(req.params.id);
		await foundStocks.execPopulate('comments'); ////----might need to get rid of these execPopulate comments here
		res.status(200).json(foundStocks);
	} catch (error) {
		res.status(400).json(error);
	}
});

// DELETE/DESTROY ROUTE
stockRouter.delete('/:id', async (req, res) => {
	try {
		const foundStocks = await await Stock.findByIdAndDelete(req.params.id);
		res.status(200).json(foundStocks);
	} catch (error) {
		res.status(400).json(error);
	}
});

// UPDATE ROUTE
// Put request - something exists and user wants to change it
stockRouter.put('/:id', async (req, res) => {
	try {
		const foundStocks = await await Stock.findByIdAndUpdate(
			req.params.id,
			req.body,
			{ new: true }
		); // find req.params.id and replaces with req.body and gives us document after its changed is reflected by the new:true
		res.status(200).json(foundStocks);
	} catch (error) {
		res.status(400).json(error);
	}
});

module.exports = stockRouter;
