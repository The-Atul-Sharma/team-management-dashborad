import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import SingleMemberList from '../../components/SingleMemberList/SingleMemberList';
import './MemberTable.css';
import { deleteMember, sortMembersList, checkedMember, checkedAllMembers } from '../../actions/member';
import arrow_up_icon from '../../assets/icons/arrow_up.svg';

class MemberTable extends Component {
  static propTypes = {
    membersList: PropTypes.array.isRequired,
  };

  constructor(props) {
    super(props);
    this.state = {
      isAllChecked: false,
      isSortIconRotate: false,
      sortOrder: true, // For Asc true and Desc false
    }; 
  }

  handleSingleCheckbox = (memberInfo) => {
    this.props.checkedMember(memberInfo);
  }

  selectAllCheckbox = () => {
    this.props.checkedAllMembers(!this.state.isAllChecked);
    this.setState({
      isAllChecked: !this.state.isAllChecked,
    });
  }

  deleteMember = memberId => {
    this.props.deleteMember(memberId);
  }

  sortMembersList(sortBy) {
    this.props.sortMembersList(sortBy, this.state.sortOrder);
    this.setState({
      isSortIconRotate: !this.state.isSortIconRotate,
      sortOrder: !this.state.sortOrder,
    });
  }

  render() {
    return (
      <div className="membertable">
        <table>
          <thead>
            <tr>
              <th>
                <label className="checkbox">
                  <input
                      type="checkbox"
                      checked={this.state.isAllChecked ? true : false}
                      onChange={this.selectAllCheckbox}
                  />
                  <span className="checkbox__checkmark"></span>
                </label>
              </th>
              <th>
                <div>
                  <span 
                    className="membertable__label"
                    onClick={() => this.sortMembersList('name')}
                  >Name</span>
                  <img 
                    src={arrow_up_icon} 
                    alt="arrow_up"
                    className={this.state.isSortIconRotate ? "membertable__icon membertable__icon-rotate" : "membertable__icon"}
                    onClick={() => this.sortMembersList('name')}
                  />
                </div>
              </th>
              <th>
                <span 
                  className="membertable__label"
                  onClick={() => this.sortMembersList('company')}
                >Company</span>
                <img 
                  src={arrow_up_icon} 
                  alt="arrow_up" 
                  className={this.state.isSortIconRotate ? "membertable__icon membertable__icon-rotate" : "membertable__icon"}
                  onClick={() => this.sortMembersList('company')}
                />
              </th>
              <th>
                <span 
                  className="membertable__label"
                  onClick={() => this.sortMembersList('status')}
                >Status</span>
                <img 
                  src={arrow_up_icon} 
                  alt="arrow_up" 
                  className={this.state.isSortIconRotate ? "membertable__icon membertable__icon-rotate" : "membertable__icon"}
                  onClick={() => this.sortMembersList('status')}
                />
              </th>
              <th>
                <span 
                  className="membertable__label"
                  onClick={() => this.sortMembersList('lastUpdated')}
                >Last Updated</span>
                <img 
                  src={arrow_up_icon} 
                  alt="arrow_up" 
                  className={this.state.isSortIconRotate ? "membertable__icon membertable__icon-rotate" : "membertable__icon"}
                  onClick={() => this.sortMembersList('lastUpdated')}
                />
              </th>
              <th>
                <span 
                  className="membertable__label"
                  onClick={() => this.sortMembersList('notes')}
                >Notes</span>
                <img 
                  src={arrow_up_icon} 
                  alt="arrow_up" 
                  className={this.state.isSortIconRotate ? "membertable__icon membertable__icon-rotate" : "membertable__icon"}
                  onClick={() => this.sortMembersList('notes')}
                />
              </th>
              <th></th>
            </tr>
          </thead>
          <tbody>
            {this.props.membersList.map( member => {
              return <SingleMemberList key={member.id} member={member} handleCheckbox={this.handleSingleCheckbox} 
                deleteMember={this.deleteMember} />
            })}
          </tbody>
        </table>
      </div>
    );
  }
}

export default connect(
  null,
  { deleteMember, sortMembersList, checkedMember, checkedAllMembers }
)(MemberTable);
