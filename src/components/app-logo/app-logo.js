import React from 'react';
import './app-logo.css'
import logo from "../../assets/images/logo.png";

const AppLogo = ({sizeLogo}) => {
  return (
	<img className="app-logo"
		 src={logo}
		 width={sizeLogo} height={sizeLogo}
		 alt="logo app"/>
  );
};

export default AppLogo;
