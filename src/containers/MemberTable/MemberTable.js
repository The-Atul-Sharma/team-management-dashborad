import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import SingleMemberList from '../../components/SingleMemberList/SingleMemberList';
import Filters from '../../components/Filters/Filters';
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
      status: 'NA',
      renderMemberList: props.membersList,
      totalNoOfPages: props.membersList.length,
      currentPage: 1,
      memberPerPage: 8,
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
    console.log("this.state", this.state);
    this.setState({
      totalNoOfPages: this.state.renderMemberList.length,
    });
  }

  sortMembersList(sortBy) {
    this.props.sortMembersList(sortBy, this.state.sortOrder);
    this.setState({
      isSortIconRotate: !this.state.isSortIconRotate,
      sortOrder: !this.state.sortOrder,
    });
  }

  previousPage = () => {
    this.setState({
      currentPage: this.state.currentPage - 1,
    });   
  }

  nextPage = () => {
    this.setState({
      currentPage: this.state.currentPage + 1,
    });
  }

  static getDerivedStateFromProps(nextProps, prevState) {
    if (prevState.isAllChecked !== nextProps.isAllChecked || prevState.totalNoOfPages !== nextProps.totalNoOfPages) {
      return {
        isAllChecked: nextProps.isAllChecked,
      };
    }

    return null;
  }

  componentDidUpdate(prevProps, prevState) {
    if (prevState.totalNoOfPages !== this.props.membersList.length) {
      this.setState({ totalNoOfPages: this.props.membersList.length });
    }
  }

  render() {  
    let indexOfLastMember = this.state.currentPage * this.state.memberPerPage;
    const indexOfFirstMember = indexOfLastMember - this.state.memberPerPage;
    const currentMembers = this.props.membersList.slice(indexOfFirstMember, indexOfLastMember);

    const renderMembers = currentMembers.map(member => {
        return <SingleMemberList key={member.id} 
          member={member} 
          handleCheckbox={this.handleSingleCheckbox} 
          deleteMember={this.deleteMember} 
      />;
    });

    const renderCompanyFilter = this.props.membersList.map((list, index) => {
      return <option key={index} id={index}>{list.company}</option>;
    });

    const selectedMember = this.props.membersList.filter(member => member.isChecked === true);

    return (
      <div className="membertable">
        <Filters 
          indexFirstMember={indexOfFirstMember}
          indexLastMember={indexOfLastMember} 
          totalNoOfPages={this.state.totalNoOfPages} 
          previousPage={this.previousPage} 
          nextPage={this.nextPage} 
          renderCompanyFilter={renderCompanyFilter}
          selectedMemberCount={selectedMember.length}
        />
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
            {renderMembers}
          </tbody>
        </table>
      </div>
    );
  }
}

function mapStateToProps(state) {
  return {
    isAllChecked: state.members.isAllChecked,
  };
}

export default connect(
  mapStateToProps,
  { deleteMember, sortMembersList, checkedMember, checkedAllMembers }
)(MemberTable);
