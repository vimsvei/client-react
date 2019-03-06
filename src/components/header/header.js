import React from 'react';

import './header.css';
import AppLogo from "../app-logo/app-logo";
import {CreateObjectDialog} from '../dialogs';
import HeaderUserInfo from "../header-user-info";

const Header = () => {
  return (
	<nav className="navbar navbar-expand navbar-dark text-white shadow">
	  <div className="navbar-brand" href="#">
		<div className="row">
		  <AppLogo sizeLogo="36"/>
		  <div className="app-title">
			Architect Archeology
		  </div>
		</div>
	  </div>
	  <div className="navbar-items collapse navbar-collapse">
		<ul className="navbar-nav">
		  <li className="nav-item" id="1">
			<a className="nav-link" href="#">Link</a>
		  </li>
		  <li className="nav-item" id="2">
			<a className="nav-link" href="#">Link</a>
		  </li>
		  <li className="nav-item" id="3">
			<a className="nav-link" href="#">Link</a>
		  </li>
		  <li className="nav-item" id="4">
			<a className="nav-link" href="#">Link</a>
		  </li>
		</ul>
	  </div>
	  <CreateObjectDialog/>
	  <HeaderUserInfo/>
	</nav>
  )
};

export default Header;
