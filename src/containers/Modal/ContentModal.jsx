import React, { Component } from 'react';
import Aux from '../../../hoc/Aux';
import Modal from 'react-bootstrap/Modal';
import Button  from 'react-bootstrap/Button';
import Backdrop from './Backdrop/Backdrop';


import './ContentModal.scss';

class ContentModal extends Component {
  state = {
        modalOpen: true
    }

  shouldComponentUpdate ( nextProps, nextState ) {
    return nextProps.show !== this.props.show || nextProps.children !== this.props.children;
  }

  componentWillUpdate () {
    console.log('willUpdate');
  }

  modalCloseHandler = () => {
    console.log(this.nextProps);
    this.props.history.push('/content');

  }

  modalContinueHandler = () => {
    this.props.history.push('/content/content');
  }
    render() {
      return (
        <Aux>
          <Backdrop show={this.state.modalOpen} clicked={!this.state.modalOpen} />
            <h2>Title: {this.props.title}</h2>
          <div
              className="Modal"
              style={{
                  transform: this.props.show ? 'translateY(0)' : 'translateY(-100vh)',
                  opacity: this.props.show ? '1' : '0'
              }}>
              {this.props.children}
          </div>
        <Modal
          {...this.props}

          size="lg"
          aria-labelledby="contained-modal-title-vcenter"
          centered >
          <Modal.Header>
            <Modal.Title id="contained-modal-title-vcenter">
              Title: {this.props.title}
            </Modal.Title>
          </Modal.Header>
          <Modal.Body>
            <h4>Article</h4>
            <p>Content: {this.props.content}</p>

            <p>
              {this.props.children}
            </p>
          </Modal.Body>
          <Modal.Footer>
            <Button onClick={this.props.onClose}>Close</Button>
          </Modal.Footer>
        </Modal>
        </Aux>
      )
  }
}


export default ContentModal;