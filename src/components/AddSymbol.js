import React, { useState } from 'react';
import App from '../pages/App';

const AddSymbol = props => {
	return (
		<form>
			<div className="ui icon input">
				<input
					id="symbol-search"
					type="text"
					placeholder="Symbol"
					value={props.symbol}
					onChange={props.handleChange}
				/>
				<button onClick={props.onFormSubmit}>
					<i className="inverted circular search link icon"></i>
				</button>
			</div>
		</form>
	);
};

export default AddSymbol;
