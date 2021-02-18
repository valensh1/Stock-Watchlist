import React, { useState, useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import App from './App';

export default function StockNews(props) {
	console.log(props);
	const [ticker, setTicker] = useState('');
	const tickerUpdate = useRef(null);
	useEffect(() => {
		(async () => {
			try {
				const response = await fetch(`/api/stocks/${props.match.params.id}`);
				const data = await response.json();
				setTicker(data);
			} catch (err) {
				console.error(err);
			}
		})();
	}, []);

	const handleUpdate = () => {
		console.log('You clicked to update');
		const inputFieldtoModify = document.getElementById('ticker-update-input');
		const labelFieldToHide = document.getElementById('ticker-update-label');
		const buttonToHide = document.getElementById('ticker-update-button');
		inputFieldtoModify.style.visibility = 'visible';
		labelFieldToHide.style.visibility = 'visible';
		buttonToHide.style.visibility = 'visible';
	};

	const handleUpdateSubmit = async event => {
		console.log('You clicked to submit your update');
		try {
			const response = await fetch(`/api/stocks/${props.match.params.id}`, {
				method: 'PUT', //making a put request to database
				headers: {
					'Content-Type': 'application/json' // telling database we are going to send it json data
				},
				body: JSON.stringify({
					// this is converting the Javascript data we are sending to be updated to json data so our database understands it and can use it to update our database
					symbol: tickerUpdate.current.value, //useRef from input field to update original entry
					lastPrice: ticker.lastPrice //useRef from input field to update original entry
				})
			});
			const data = await response.json(); //json method here converts json to javascript
			setTicker(data);
		} catch (error) {
			console.error(error);
		}
	};

	return (
		<div>
			<h1>{ticker.symbol} News</h1>
			<h3>{ticker.symbol}</h3>
			<h4>${ticker.lastPrice}</h4>
			<Link to={`/${ticker._id}/edit`}>
				<button onClick={handleUpdate}>Update Post</button>
			</Link>
			<br />
			<label id="ticker-update-label" for="ticker-update">
				Update Ticker
			</label>
			<input
				type="text"
				id="ticker-update-input"
				ref={tickerUpdate}
				defaultValue={ticker.symbol}
			></input>
			<button id="ticker-update-button" onClick={handleUpdateSubmit}>
				Send Update
			</button>
		</div>
	);
}
