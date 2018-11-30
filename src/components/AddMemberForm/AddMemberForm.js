import React, { Component } from 'react';
import PropTypes from 'prop-types';
import './AddMemberForm.css';

export default class AddMemberForm extends Component {
	static propTypes = {
    formData: PropTypes.object.isRequired,
    onSubmit: PropTypes.func.isRequired,
    onChange: PropTypes.func.isRequired,
	};
	
  render() {
    return (
			<form onSubmit={this.props.onSubmit}>
				<div>
					<label htmlFor="name">Name</label>
					<input
						type="text"
						name="name"
						value={this.props.formData.name}
						onChange={this.props.onChange}
						required
					/>
				</div>
				<div>
					<label htmlFor="company">Company</label>
					<input
						type="text"
						name="company"
						value={this.props.formData.company}
						onChange={this.props.onChange}
						required
					/>
				</div>
				<div>
					<label htmlFor="status">Status</label>
					<select 
						name="status" 
						value={this.props.formData.status} 
						onChange={this.props.onChange}
					>
						<option value="NA">Select Status</option>
						<option value="closed">Closed</option>
						<option value="active">Active</option>
						<option value="idle">Idle</option>
					</select>
				</div>
				<div>
					<label htmlFor="notes">Notes</label>
					<textarea 
						name="notes" 
						value={this.props.formData.notes} 
						onChange={this.props.onChange} 
						required
					/>
				</div>
				<div className="addmember_submit">
					<button type="submit" className="btn">Add member</button>
				</div>
			</form>
    );
  }
}
