import React from 'react';
import $ from 'jquery';
import './header-user-info.css';

const HeaderPopover = () => {
  return (
	<div className="card" style="width: 18rem;">
	  <div className="card-body">
		<h5 className="card-title">Special title treatment</h5>
		<p className="card-text">With supporting text below as a natural lead-in to additional content.</p>
		<a href="#" className="btn btn-primary">Go somewhere</a>
	  </div>
	</div>
  );
};

class HeaderUserInfo extends React.Component {
  
  componentDidMount() {
	$('[data-toggle="popover"]').popover();
  }
  
  render() {
	
	return (
	  <div className="header-user-info border-primary rounded-circle">
		<button className="button-user-info"
				type="button"
				data-toggle="popover"
				data-placement="bottom"
				title="Popover title"
		  // data-content={ headerPopover }
		>
		  <i className="material-icons header-icons">
			person
		  </i>
		</button>
	  </div>
	);
  }
}

export default HeaderUserInfo;
