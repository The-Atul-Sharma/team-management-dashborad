import React, { Component } from 'react';
import Header from '../../components/Header/Header';
import Modal from '../../components/Modal/Modal';
import AddMemberForm from '../../components/AddMemberForm/AddMemberForm';

class App extends Component {
  constructor(props) {
    super(props);
    const today  = new Date();
    this.state = {
      isModalOpen: false,
      formData: {
        name: '',
        company: '',
        status: 'NA',
        notes: '',
        date: today.toLocaleDateString("en-US"),
      },
    };
  }

  modalToggle = () => {
    this.setState({
        isModalOpen: !this.state.isModalOpen,
    });
  }

  addNewMember = () => {
    console.log("state", this.state.formData);
  }

  handleAddNewMember = event => {
    this.setState({
      formData: {
        ...this.state.formData, [event.target.name]: event.target.value,
      },
    });
  }

  render() {
    return (
      <div>
        <Header addMember={this.modalToggle} />
        <Modal isModalOpen={this.state.isModalOpen} closeModal={this.modalToggle}>
          <AddMemberForm formData={this.state.formData} onSubmit={this.addNewMember} onChange={this.handleAddNewMember} />
        </Modal>
      </div>
    );
  }
}

export default App;
