import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import App from './App';

export default function StockNews(props) {
	console.log(props);
	const [ticker, setTicker] = useState({});
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

	return (
		<div>
			<h1>{ticker.symbol} News</h1>
			<h3>{ticker.symbol}</h3>
			<h4>${ticker.lastPrice}</h4>
			<Link to={`/${ticker._id}/edit`}>
				<button>Update Post</button>
			</Link>
		</div>
	);
}
