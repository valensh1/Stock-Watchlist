import React, { useState, useEffect, useRef } from 'react';
import FetchParams from '../components/FetchParams';
//const alphaAPI = process.env.ALPHA_VANTAGE_API_KEY;
const alpha = require('alphavantage')({
	key: 'process.env.ALPHA_VANTAGE_API_KEY'
});

export default function App(props) {
	const [stockList, setStockList] = useState([]);
	const API = {
		baseURL: 'https://www.alphavantage.co/query?',
		function: 'function=TIME_SERIES_DAILY_ADJUSTED',
		symbol: '&symbol=AMZN',
		key: `&apikey=RIDXJ7V4EWS069FV`
	};

	console.log(FetchParams);
	const symbolAPI = `${API.baseURL}${API.function}${API.symbol}${API.key}`;
	console.log(symbolAPI);

	alpha.data.daily_adjusted(`zm`).then(data => {
		console.log(data);
	});

	useEffect(() => {
		(async () => {
			try {
				const response = await fetch(symbolAPI);
				const data = await response.json();
				await setStockList(data);
				console.log(data);
			} catch (error) {
				console.error(error);
			} finally {
				console.log('This is the finally statement logging');
			}
		})();
	}, []);

	return <div></div>;
}
