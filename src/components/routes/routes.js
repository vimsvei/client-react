import React from 'react';
import {Route, Switch} from "react-router-dom";
import {SignInPage, SignOnPage} from "../pages";

class Routes extends React.Component {
  render() {
	return (
	  <Switch>
		<Route path="/sign-in" component={SignInPage}/>
		<Route path="/sign-on" component={SignOnPage}/>
	  </Switch>
	);
  }
}

export default Routes;
