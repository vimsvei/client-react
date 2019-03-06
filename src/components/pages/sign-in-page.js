import React from 'react';
import './sign-in-page.css';
import AppLogo from "../app-logo/app-logo";

class SignInPage extends React.Component {
  
  state = {
	email: '',
	password: '',
  };
  
  onEmailChange = (event) => {
	this.setState({
	  email: event.target.value
	});
  };
  
  onPasswordChange = (event) => {
	this.setState({
	  password: event.target.value
	});
  };
  
  onSubmit = (event) => {
	
  };
  
  render() {
	return (
	  <div className="login-page">
		<AppLogo sizeLogo="128"/>
		<h1 className="h3 mb-3 font-weight-normal">Please sign in</h1>
		<form
		  className="form-signin"
		  onSubmit={this.onSubmit}>
		  <input
			className="form-control form-control-lg"
			type="email" aria-describedby="emailHelp"
			placeholder="Enter email"
			onChange={this.onEmailChange}
			value={this.state.email}
			required autoFocus/>
		  <input
			className="form-control form-control-lg"
			type="password" aria-describedby="emailHelp"
			placeholder="Password"
			onChange={this.onPasswordChange}
			value={this.state.password}
			required/>
		  <div className="form-group form-check text-left">
			<input
			  className="form-check-input"
			  type="checkbox"/>
			<label
			  className="form-check-label"
			  htmlFor="checkRemember">
			  Remember me
			</label>
		  </div>
		  <button
			className="btn btn-primary btn-lg btn-block"
			type="submit">
			Sign in
		  </button>
		</form>
		<p className="mt-5 mb-2 text-muted">&copy; 2018</p>
	  </div>
	);
  }
}

export default SignInPage;
