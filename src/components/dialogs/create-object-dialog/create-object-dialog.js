import React from 'react';
import {bindActionCreators} from 'redux';
import './create-object-dialog.css';
import compose from "../../../utils/compose";
import {withApiService} from "../../hoc";
import {connect} from "react-redux";
import {typesLoaded} from "../../../actions";

const ChoiceTypeObject = ({typesList}) => {
  return (
	<div>
	  <label htmlFor="exampleFormControlSelect1">Example select</label>
	  <select className="form-control form-control-lg" id="typeObjectSelect">
		{
		  typesList.map((typeItem) => {
			return (
			  <option>{typeItem.name}</option>
			);
		  })
		}
	  </select>
	</div>
  );
};

const ModalDialog = ({caption, title}) => {
  return (
	<div>
	  <button type="button"
			  className="btn btn-outline-warning"
			  data-toggle="modal"
			  data-target="#createObjectDialog">
		{caption}
	  </button>
	  <div className="modal fade"
		   id="createObjectDialog" tabIndex="-1" role="dialog"
		   aria-labelledby="exampleModalLabel"
		   aria-hidden="true">
		<div className="modal-dialog modal-dialog-centered"
			 role="document">
		  <div className="modal-content">
			<div className="modal-header text-dark">
			  <h4 className="modal-title">
				{title}
			  </h4>
			  <button type="button"
					  className="close"
					  data-dismiss="modal" aria-label="Close">
				<span aria-hidden="true">&times;</span>
			  </button>
			</div>
			<div className="modal-body text-secondary">
			  <ChoiceTypeObject/>
			</div>
		  </div>
		</div>
	  </div>
	</div>
  );
};

class CreateObjectDialog extends React.Component {
  
  componentDidMount() {
	this.props.getTypeObject();
  }
  
  render() {
	return (
	  <ModalDialog caption="Create" title="Create object"/>
	);
  }
}

const mapStateToProps = ({types}) => {
  return {types};
};

const mapDispatchToProps = {
  typesLoaded
};


export default compose(
  withApiService(),
  connect(mapStateToProps, mapDispatchToProps)
)(CreateObjectDialog);
