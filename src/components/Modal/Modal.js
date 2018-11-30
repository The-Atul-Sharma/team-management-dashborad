import React, { Component } from 'react';
import AddMemberForm from '../AddMemberForm/AddMemberForm';
import './Modal.css';

export default class Modal extends Component {
  render() {
    return (
      <div className={this.props.isModalOpen ? "modal modal--display-block" : "modal modal--display-none"}>
        <section className="modal__content">
          <div>
            <span title="Close" className="modal__close" onClick={this.props.closeModal}>&times;</span>
          </div>
          <AddMemberForm />
        </section>
      </div>
    );
  }
}
