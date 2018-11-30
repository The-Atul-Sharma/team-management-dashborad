import React, { Component } from 'react';
import './SingleMemberList.css';
import more_icon from '../../assets/icons/more.svg';
import delete_icon from '../../assets/icons/delete.svg';

export default class SingleMemberList extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isChecked: props.member.isChecked,
    };
  }

  handleChange = () => {
    this.setState({
      isChecked: !this.props.member.isChecked,
    }, this.props.handleCheckbox(this.props.member, this.state.isChecked));
  }

  render() {
    return (
      <tr>
        <td>
          <label className="checkbox">
            <input
                type="checkbox"
                defaultChecked={this.props.member.isChecked ? true : false}
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
