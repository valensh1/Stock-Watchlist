import React from 'react';

const SortButton = props => {
	const sortAZ = () => {
		console.log('U clicked to sort A-Z');
		const sortedListAZ = props.DBTicker.sort((a, b) => {
			let tickerA = a.symbol;
			let tickerB = b.symbol;

			if (tickerA < tickerB) {
				return -1;
			}
			if (tickerA > tickerB) {
				return 1;
			}
			return 0;
		});
		props.setDBTicker(sortedListAZ);
	};

	return <i onClick={sortAZ} className="sort alphabet down icon"></i>;
};

export default SortButton;
