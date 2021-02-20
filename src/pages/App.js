import React, { useState, useEffect, useRef } from 'react';
import AddSymbol from '../components/AddSymbol';
import DeleteSymbol from '../components/DeleteSymbol';
import EditSymbol from '../components/EditButton';
import axios from 'axios';
import { BrowserRouter as Router, Route, Switch, Link } from 'react-router-dom';
import StockNews from './StockNews';
import { DatePicker } from '../components/DatePicker';

const AlphaVantageAPIKey = process.env.ALPHA_VANTAGE_API_KEY;

export default function App(props) {
	const [symbol, setSymbol] = useState(''); // sets state of ticker symbol what user enters
	const [DBSymbolAdd, setDBSymbolAdd] = useState({}); //sets state of what to add to database
	const [DBTicker, setDBTicker] = useState([]); //sets state of what is returned from database
	const [dateFrmChild, setDateFrmChild] = useState(new Date());
	useEffect(() => {
		// Immediately Invoked Function Expression
		(async () => {
			try {
				const response = await fetch('/api/stocks');
				const data = await response.json();
				setDBTicker(data);
			} catch (error) {
				console.error(error);
			} finally {
			}
		})();
	}, [DBTicker]); // Question for Arthur - if I put DBTicker in empty brackets why does useEffect keep running continuously even though my DBTicker state is not changing constantly?

	const APIDataPull = async () => {
		try {
			const response = await fetch(
				`https://cors-anywhere.herokuapp.com/https://www.alphavantage.co/query?function=TIME_SERIES_DAILY_ADJUSTED&symbol=${symbol.toUpperCase()}&apikey=${AlphaVantageAPIKey}`
			);
			const data = await response.json();
			await sendToDB(data);
		} catch (error) {
			console.error(error);
		}
	};

	const sendToDB = async data => {
		const modifiedObject = {
			symbol: symbol,
			lastPrice: data['Time Series (Daily)'][todayDate()]['5. adjusted close']
		};
		try {
			setDBSymbolAdd(modifiedObject);
			const response = await axios.post('api/stocks', modifiedObject);
			setDBTicker([...DBTicker, modifiedObject]);
		} catch (error) {
			console.error(error);
		}
	};

	const onFormSubmit = async event => {
		event.preventDefault();
		try {
			await APIDataPull();
		} catch (error) {
			console.error(error);
		} finally {
			setSymbol('');
		}
	};

	const handleChange = event => {
		setSymbol(event.target.value);
	};

	const todayDateBegin = () => {
		const previousDay = true; // CHANGE THIS HERE TO FALSE TO GET CURRENT DAY
		var today = new Date();
		const previousDayFlag = previousDay
			? String(today.getDate()).padStart(2, '0') //Change here to get date correct
			: String(today.getDate()).padStart(2, '0');
		var dd = String(today.getDate()).padStart(2, '0'); // gets day of month - padStart inserts at beginning. First argument tells how long it should be after insertion and 2nd argument is what do you want inserted
		var mm = String(today.getMonth() + 1).padStart(2, '0'); // gets month - January is 0! . padStart inserts at beginning. First argument tells how long it shold be after insertion and 2nd argument is what do you want inserted
		var yyyy = today.getFullYear(); // gets current year
		let todaysDate = `${yyyy}-${mm}-${previousDayFlag}`;
		return todaysDate;
	};

	const todayDate = () => {
		const previousDay = true; // CHANGE THIS HERE TO FALSE TO GET CURRENT DAY
		var today = new Date();
		const previousDayFlag = previousDay
			? String(today.getDate() - 3).padStart(2, '0') //Change here to get date correct
			: String(today.getDate()).padStart(2, '0');
		var dd = String(today.getDate()).padStart(2, '0'); // gets day of month - padStart inserts at beginning. First argument tells how long it should be after insertion and 2nd argument is what do you want inserted
		var mm = String(today.getMonth() + 1).padStart(2, '0'); // gets month - January is 0! . padStart inserts at beginning. First argument tells how long it shold be after insertion and 2nd argument is what do you want inserted
		var yyyy = today.getFullYear(); // gets current year
		//let todaysDate = `${yyyy}-${mm}-${previousDayFlag}`;
		let todaysDate = `${dateFrmChild}`; //this gets the date from the date input selector. Need to eventually build in logic to get last valid market date if it falls on Saturday/Sunday or holiday
		return todaysDate;
	};

	let count = 1;

	return (
		<div className="total-container">
			{/* todayDateChild is being passed as props to child DatePicker and DatePicker is taking date selected from input and sending it back up to parent */}
			<h1 className="stage" id="heading">
				STOCK WATCHLIST
			</h1>
			<br />
			<DatePicker todayDateChild={date => setDateFrmChild(date)} />
			<br />
			<AddSymbol
				onFormSubmit={onFormSubmit}
				handleChange={handleChange}
				symbol={symbol}
			/>
			<br />
			<ul className="watchlist-container">
				{DBTicker.map(stock => {
					return (
						<div key={stock._id} className="watchlist-data">
							<Link to={`/${stock._id}`} symbol={stock.symbol}>
								<li>{stock.symbol.toUpperCase()}</li>
								<li>${stock.lastPrice}</li>
							</Link>
							<DeleteSymbol stockID={stock._id} />
						</div>
					);
				})}
			</ul>
		</div>
	);
}
