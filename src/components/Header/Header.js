import React, { Component } from 'react';
import PropTypes from 'prop-types';
import './Header.css';

export default class Header extends Component {
	static propTypes = {
		addMember: PropTypes.func.isRequired,
	};

  render() {
    return (
			<div className="header">
				<div className="header__title">
					<span>Team Members</span>
				</div>
				<div className="header__button">
					<button className="btn" onClick={() => this.props.addMember()}>Add Member +</button>
				</div>
			</div>
    );
  }
}
