import React, { Component } from 'react';
import PropTypes from 'prop-types';
import './SingleMemberList.css';
import more_icon from '../../assets/icons/more.svg';
import delete_icon from '../../assets/icons/delete.svg';

export default class SingleMemberList extends Component {
  static propTypes = {
    member: PropTypes.object.isRequired,
    handleCheckbox: PropTypes.func.isRequired,
    deleteMember: PropTypes.func.isRequired,
  };

  handleChange = () => {
    this.props.handleCheckbox(this.props.member);
  }

  render() {
    return (
      <tr>
        <td>
          <label className="checkbox">
            <input
                type="checkbox"
                checked={this.props.member.isChecked ? true : false}
                onChange={() => this.handleChange()}
            />
            <span className="checkbox__checkmark"></span>
          </label>
        </td>
        <td>
          <span>{this.props.member.name}</span>
        </td>
        <td>
          <span>{this.props.member.company}</span>
        </td>
        <td>
          <span>{this.props.member.status}</span>
        </td>
        <td>
          <span>{this.props.member.lastUpdated}</span>
        </td>
        <td>
          <span>{this.props.member.notes}</span>
        </td>
        <td>
          <span className="dropdown">
            <img alt="more_option" src={more_icon} />
            <label>
              <input type="checkbox" />
              <ul>
                <li onClick={() => this.props.deleteMember(this.props.member.id)}>
                  <img src={delete_icon} className="dropdown__icon" alt="delete" />
                  <span className="dropdown__icon-label">Delete</span>
                </li>
              </ul>
            </label>
          </span>
        </td>
      </tr>
    );
  }
}
