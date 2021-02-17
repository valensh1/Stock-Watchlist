import React from 'react';
import NavBar from '../components/NavBar';
import { BrowserRouter as Router, Route, Switch, Link } from 'react-router-dom';
import routes from './routes';
import StockNews from '../pages/StockNews';
import Home from '../pages/Home';
import App from '../pages/App';
import DeleteSymbol from '../components/DeleteSymbol';

const AppRouter = () => {
	return (
		<Router>
			<NavBar routes={routes} />
			{/* <Link to="/test"> Test Anchor</Link> */}
			<Switch>
				{routes.map(({ Component, key, path }) => (
					<Route
						key={key}
						path={path}
						component={props => <Component page={key} {...props} />}
					></Route>
				))}
				{/* <Route path="/api/stocks/:id" component={StockNews} />
				<Route path="/" component={App} /> 
				<Route path="/" component={App}></Route> */}
			</Switch>
		</Router>
	);
};

export default AppRouter;
