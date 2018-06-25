import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import ArticlesView from './components/ArticlesView.js';
import { ApolloClient, createNetworkInterface } from 'apollo-client';
import { ApolloProvider } from 'react-apollo';
import Grid from '@material-ui/core/Grid';

const client = new ApolloClient({
	networkInterface: createNetworkInterface({
		uri: target,
		}),
});


class App extends Component {
	render() {
		return (
			<ApolloProvider client={client}>
				<div className="App">
					<header className="App-header">
						<img src={logo} className="App-logo" alt="logo" />
						<h1 className="App-title">Headless Drupal Sample</h1>
					</header>
					<Grid container>
						<ArticlesView />
					</Grid>
				</div>
			</ApolloProvider>
			);
		}
}

export default App;
