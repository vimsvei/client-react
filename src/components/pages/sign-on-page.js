import React from 'react';
import './sign-on-page.css';
import AppLogo from "../app-logo/app-logo";

class SignOnPage extends React.Component {
  
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
		<h1 className="h3 mb-3 font-weight-normal">Please sign on</h1>
		<form
		  className="form-signin"
		  onSubmit={this.onSubmit}>
		  <input
			className="form-control form-control-lg"
			type="email" aria-describedby="emailHelp"
			placeholder="First Name"
			onChange={this.onEmailChange}
			value={this.state.email}
			required autoFocus/>
		  <input
			className="form-control form-control-lg"
			type="email" aria-describedby="emailHelp"
			placeholder="Second Name"
			onChange={this.onEmailChange}
			value={this.state.email}
			required/>
		  <input
			className="form-control form-control-lg"
			type="email" aria-describedby="emailHelp"
			placeholder="Company Name"
			onChange={this.onEmailChange}
			value={this.state.email}
			required/>
		  <input
			className="form-control form-control-lg"
			type="email" aria-describedby="emailHelp"
			placeholder="Enter email"
			onChange={this.onEmailChange}
			value={this.state.email}
			required/>
		  <input
			className="form-control form-control-lg"
			type="password" aria-describedby="emailHelp"
			placeholder="Password"
			onChange={this.onPasswordChange}
			value={this.state.password}
			required/>
		  <input
			className="form-control form-control-lg"
			type="password" aria-describedby="emailHelp"
			placeholder="Reply Password"
			onChange={this.onPasswordChange}
			value={this.state.password}
			required/>
		  <button
			className="btn btn-primary btn-lg btn-block"
			type="submit">
			Sign On
		  </button>
		</form>
		<p className="mt-5 mb-2 text-muted">&copy; 2018</p>
	  </div>
	);
  }
}

export default SignOnPage;
