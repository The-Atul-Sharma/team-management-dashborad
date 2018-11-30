import React, { Component } from 'react';
import PropTypes from 'prop-types';
import './Modal.css';

export default class Modal extends Component {
  static propTypes = {
    isModalOpen: PropTypes.bool.isRequired,
    closeModal: PropTypes.func.isRequired,
    children: PropTypes.element.isRequired,
  };
  
  render() {
    return (
      <div className={this.props.isModalOpen ? "modal modal--display-block" : "modal modal--display-none"}>
        <section className="modal__content">
          <div>
            <span title="Close" className="modal__close" onClick={this.props.closeModal}>&times;</span>
          </div>
          {this.props.children}
        </section>
      </div>
    );
  }
}
