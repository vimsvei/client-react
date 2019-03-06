import React from 'react';
import './app.css';

import ErrorBoundary from "../error-boundary";
import Header from "../header";
import Spinner from "../spinner";
import Routes from "../routes/routes";

const App = () => {
  return (
	<ErrorBoundary>
	  <Header/>
	  <Spinner/>
	  <Routes/>
	</ErrorBoundary>
  )
};
export default App;
