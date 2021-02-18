import React, { useState } from 'react';
import App from '../pages/App';

const DeleteSymbol = props => {
	const [symbolDelete, setSymbolDelete] = useState(false);
	const handleDelete = async event => {
		try {
			const response = await fetch(`/api/stocks/${props.match.params.id}`, {
				method: 'DELETE',
				headers: {
					'Content-Type': 'application/json'
				}
			});
			const data = await response.json();
			setSymbolDelete(!symbolDelete);
		} catch (error) {
			console.error(error);
		} finally {
			//await window.location.assign('/');
		}
	};
	return <button onClick={handleDelete}>DELETE</button>;
};

export default DeleteSymbol;
