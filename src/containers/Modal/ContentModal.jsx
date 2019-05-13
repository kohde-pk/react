import React, { Component } from 'react';
import { withRouter } from 'react-router-dom';

import Modal from 'react-bootstrap/Modal';
import Button  from 'react-bootstrap/Button';
import Backdrop from './Backdrop/Backdrop';

import ContentCard from '../Cards/ContentCard';

import './ContentModal.scss';

class ContentModal extends Component {

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
    this.props.history.replace('/content/content');
  }
    render() {
      return (
        <div>
          <Backdrop show={this.props.show} clicked={this.props.hide} />
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
          centered
        >
          <Modal.Header>
            <Modal.Title id="contained-modal-title-vcenter">
              Title: {this.props.title}
            </Modal.Title>
          </Modal.Header>
          <Modal.Body>
            <h4>Article</h4>
            <p>
              {this.props.children}
            </p>
          </Modal.Body>
          <Modal.Footer>
            <Button onClick={this.modalCloseHandler} bsStyle="success">Close</Button>
          </Modal.Footer>
        </Modal>
        </div>
      )
  }
}

const mapStateToProps = state => {
  
}

export default withRouter(ContentModal);