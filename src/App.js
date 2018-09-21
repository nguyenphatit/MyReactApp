import React, { Component } from 'react';
import routes from './routes';
import './App.css';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

class App extends Component {

	showContent = (routes) => {
		let result = null;
		if (routes.length > 0) {
			result = routes.map((route, index) => {
				return <Route
					key={index}
					path={route.path}
					exact={route.exact}
					render={route.main}
				/>
			});
		}
		return result;
	}

	render() {
		return (
			<Router>
				<Switch>
					{this.showContent(routes)}
				</Switch>

			</Router>
		);
	}
}

export default App;
