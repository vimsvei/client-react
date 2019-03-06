import React from 'react';
import Spinner from "../components/spinner";

class HeaderContainers extends React.Component {
  render() {
	const {loading} = this.props;
	
	if (loading) {
	  return <Spinner/>;
	}
  }
}

export default HeaderContainers;
