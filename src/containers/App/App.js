import React, { Component } from 'react';
import Header from '../../components/Header/Header';
import Modal from '../../components/Modal/Modal';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isModalOpen: false,
    };
  }

  modalToggle = () => {
    this.setState({
        isModalOpen: !this.state.isModalOpen
    });
  }

  render() {
    return (
      <div>
        <Header addMember={this.modalToggle} />
        <Modal isModalOpen={this.state.isModalOpen} closeModal={this.modalToggle} />
      </div>
    );
  }
}

export default App;
