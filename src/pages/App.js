import React, { useState, useEffect, useRef } from 'react';
import AddSymbol from '../components/AddSymbol';
import DeleteSymbol from '../components/DeleteButton';
import EditSymbol from '../components/EditButton';
import axios from 'axios';
import { BrowserRouter as Router, Route, Switch, Link } from 'react-router-dom';
import StockNews from './StockNews';

const alpha = require('alphavantage')({
	key: 'process.env.ALPHA_VANTAGE_API_KEY'
});
const APIKey = 'RIDXJ7V4EWS069FV';

export default function App(props) {
	const [symbol, setSymbol] = useState([]); // sets state of ticker symbol what user enters
	const [stockList, setStockList] = useState([]); // sets state for total stock list to render
	const [DBSymbolAdd, setDBSymbolAdd] = useState({}); //sets state of what to add to database

	const APIDataPull = async () => {
		try {
			const response = await fetch(
				`https://www.alphavantage.co/query?function=TIME_SERIES_DAILY_ADJUSTED&symbol=${symbol.toUpperCase()}&apikey=${APIKey}`
			);
			const data = await response.json();
			await setDBSymbolAdd({
				symbol: symbol,
				lastPrice: data['Time Series (Daily)'][todayDate()]['5. adjusted close']
			});
		} catch (error) {
			console.error(error);
		}
		// finally {
		// 	console.log(DBSymbolAdd);
		// 	sendToDB();
		// }
	};

	const sendToDB = async () => {
		await axios
			.post('http://localhost:3000/api/stocks', DBSymbolAdd)
			.then(res => {
				console.log(res.data);
			})
			.catch(error => {
				console.log(error);
			});
	};

	const onFormSubmit = async event => {
		event.preventDefault();
		await APIDataPull();
		await sendToDB();
		setSymbol('');
		setStockList([...stockList, symbol]);
	};

	const handleChange = event => {
		setSymbol(event.target.value);
	};

	const todayDate = () => {
		const previousDay = true; // CHANGE THIS HERE TO FALSE TO GET CURRENT DAY
		var today = new Date();
		const previousDayFlag = previousDay
			? String(today.getDate() - 3).padStart(2, '0') //Change here to get date correct
			: String(today.getDate()).padStart(2, '0');
		var dd = String(today.getDate()).padStart(2, '0'); // gets day of month - padStart inserts at beginning. First argument tells how long it shold be after insertion and 2nd argument is what do you want inserted
		var mm = String(today.getMonth() + 1).padStart(2, '0'); // gets month - January is 0! . padStart inserts at beginning. First argument tells how long it shold be after insertion and 2nd argument is what do you want inserted
		var yyyy = today.getFullYear(); // gets current year
		let todaysDate = `${yyyy}-${mm}-${previousDayFlag}`;
		return todaysDate;
	};

	let count = 1;

	return (
		<div className="total-container">
			<AddSymbol
				onFormSubmit={onFormSubmit}
				handleChange={handleChange}
				symbol={symbol}
			/>
			<br />
			<ul>
				{stockList.map(stock => {
					return (
						<div className="watchlist-container">
							<Link to={'/stocknews'}>
								<li key={`${stock}${count++}`}>{stock.toUpperCase()}</li>
							</Link>
							<DeleteSymbol />
							<EditSymbol />
						</div>
					);
				})}
			</ul>
		</div>
	);
}
