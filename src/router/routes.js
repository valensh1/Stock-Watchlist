import React from 'react';
import App from '../pages/App';
import About from '../pages/About';
import Home from '../pages/Home';
import Contact from '../pages/Contact';
import StockNews from '../pages/StockNews';
import DeleteSymbol from '../components/DeleteSymbol';

const routes = [
	{
		Component: Contact,
		key: 'Contact',
		path: '/contact'
	},
	{
		Component: Home,
		key: 'Home',
		path: '/home'
	},
	{
		Component: About,
		key: 'About',
		path: '/about'
	},
	{
		Component: DeleteSymbol,
		key: 'UpdateStock',
		path: '/:id/delete'
	},
	{
		Component: StockNews,
		key: 'StockNews',
		path: '/:id'
	},

	{
		Component: App,
		key: 'App',
		path: '/'
	}
];

export default routes;
