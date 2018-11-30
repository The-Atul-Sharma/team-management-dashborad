import React, { Component } from 'react';
import { connect } from 'react-redux';
import Header from '../../components/Header/Header';
import Modal from '../../components/Modal/Modal';
import AddMemberForm from '../../components/AddMemberForm/AddMemberForm';
import MemberTable from '../../containers/MemberTable/MemberTable';
import { addMember } from '../../actions/member';

const generateKey = () => {
  return `${ new Date().getTime() }`;
};

const today  = new Date();

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isModalOpen: false,
      formData: {
        id: null,
        name: '',
        company: '',
        status: 'NA',
        notes: '',
        lastUpdated: today.toLocaleDateString("en-US"),
        isChecked: false,
      },
      membersList: [],
    };
  }

  modalToggle = () => {
    this.setState({
        isModalOpen: !this.state.isModalOpen,
    });
  }

  handleAddNewMember = event => {
    this.setState({
      formData: {
        ...this.state.formData, id: generateKey(), [event.target.name]: event.target.value,
      },
    });
  }

  addNewMember = event => {
    event.preventDefault();
    this.props.addMember(this.state.formData);
    this.setState({
      isModalOpen: !this.state.isModalOpen,
      formData: {
        id: null,
        name: '',
        company: '',
        status: 'NA',
        notes: '',
        lastUpdated: today.toLocaleDateString("en-US"),
        isChecked: false,
      },
    });
  }

  static getDerivedStateFromProps(nextProps, prevState) {
    if (prevState.membersList.length !== nextProps.membersList.length) {
      return {
        membersList: nextProps.membersList,
      };
    }

    return null;
	}

  render() {
    return (
      <div>
        <Header addMember={this.modalToggle} />
        <Modal isModalOpen={this.state.isModalOpen} closeModal={this.modalToggle}>
          <AddMemberForm formData={this.state.formData} onChange={this.handleAddNewMember} onSubmit={this.addNewMember} />
        </Modal>
        <MemberTable membersList={this.state.membersList} />
      </div>
    );
  }
}

function mapStateToProps(state) {
  return {
    membersList: state.members.membersList,
  };
}

export default connect(
  mapStateToProps,
  { addMember }
)(App);