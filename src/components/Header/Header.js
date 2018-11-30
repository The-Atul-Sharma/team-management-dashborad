import React, { Component } from 'react';
import './Header.css';

export default class Header extends Component {
  render() {
    return (
			<div className="header">
				<div className="header__title">
					<span>Team Members</span>
				</div>
				<div>
					<button className="header__button">Add Member +</button>
				</div>
			</div>
    );
  }
}
