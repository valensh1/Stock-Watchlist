import React, { useState } from 'react';
import App from '../pages/App';

export const DatePicker = props => {
	const [date4Price, setDate4Price] = useState('2021-02-01');

	const handleDate = event => {
		setDate4Price(event.target.value);
		props.todayDateChild(event.target.value); // passing props from child back up to parent
	};

	return (
		<div>
			<input id="date" type="date" value={date4Price} onChange={handleDate} />
		</div>
	);
};
