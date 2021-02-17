import React, { useState, useEffect, useRef } from 'react';
export default function UpdateStock(props) {
	console.log(props);
	const [stock, setStock] = useState({
		symbol: '',
		lastPrice: ''
	});
	const [didDelete, setDidDelete] = useState(false);

	useEffect(() => {
		(async () => {
			try {
				const response = await fetch(`/api/stocks/${props.match.params.id}`);
				const data = await response.json();
				setStock(data);
				console.log(stock);
			} catch (error) {
				console.error(error);
			}
		})();
	}, [stock, didDelete]);
	const handleDelete = async e => {
		try {
			const response = await fetch(`/api/stocks/${props.match.params.id}`, {
				method: 'DELETE',
				headers: {
					'Content-Type': 'application/json'
				}
			});
			const data = await response.json();
			setDidDelete(!didDelete);
		} catch (error) {
			console.error(error);
		} finally {
			window.location.assign('/');
		}
	};
	const handleSubmit = async e => {
		e.preventDefault();
		try {
			const response = await fetch(`/api/stocks/${props.match.params.id}`, {
				method: 'PUT',
				headers: {
					'Content-Type': 'application/json'
				},
				body: JSON.stringify({
					title: titleInput.current.value,
					body: bodyInput.current.value
				})
			});
			const data = await response.json();
			setStock(data);
		} catch (error) {
			console.error(error);
		}
	};

	console.log(stock);
	return (
		<div>
			<h1>{stock.symbol ? stock.symbol : ''}</h1>
			<p>{stock.lastPrice ? stock.lastPrice : ''}</p>
			<button onClick={handleDelete}>Delete Ticker</button>
			<ul>
				{stock.symbol && stock.symbol.length
					? stock.symbol.map(item => {
							return (
								<li key={item._id}>
									<h3>{item.symbol} says...</h3>
									<p>{item.lastPrice}</p>
								</li>
							);
					  })
					: ''}
			</ul>
		</div>
	);
}
