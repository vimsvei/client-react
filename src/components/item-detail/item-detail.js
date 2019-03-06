import React from 'react';

class ItemDetail extends React.Component {
  render() {
	const {src, alt} = this.props;
	return (
	  <div>
		<img src={src} alt={alt} className="rounded-circle"/>
	  </div>
	);
  }
}

export default ItemDetail;
