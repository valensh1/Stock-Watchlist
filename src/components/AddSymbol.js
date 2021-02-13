import React, { useState } from 'react';
import App from '../pages/App';

const AddSymbol = props => {
	const [symbol, setSymbol] = useState([]);
	//console.log(props);

	const handleChange = event => {
		//console.log(event.target.value);
		setSymbol(event.target.value);
	};

	const handleSubmit = event => {
		event.preventDefault();
		console.log('You clicked on submit');
		props.onFormSubmit(symbol, event);
		setSymbol([]);
	};

	return (
		<form onSubmit={handleSubmit}>
			<div className="ui icon input">
				<input
					id="symbol-search"
					type="text"
					placeholder="Symbol"
					value={symbol}
					onChange={handleChange}
				/>
				<i
					onClick={handleSubmit}
					className="inverted circular search link icon"
				></i>
			</div>
		</form>
	);
};

export default AddSymbol;
