import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from "react-redux";
import { BrowserRouter as Router } from "react-router-dom";

import App from "./components/app";
import ErrorBoundary from "./components/error-boundary";
import ApiService from './services/api-services';
import { ApiServiceProvider} from "./components/api-service-context";

import store from "./store";
import * as serviceWorker from './serviceWorker';
import 'bootstrap/dist/js/bootstrap.bundle';
import './index.css';

const apiService = new ApiService();

ReactDOM.render(
  <Provider store={store}>
	<ErrorBoundary>
	  <ApiServiceProvider value={apiService}>
		<Router>
		  <App />
		</Router>
	  </ApiServiceProvider>
	</ErrorBoundary>
  </Provider>,
  document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA
serviceWorker.unregister();
