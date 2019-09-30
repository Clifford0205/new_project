import React from 'react';
import './MyNavbar.scss';
import {
  FormControl,
  Button,
  ListGroup,
  Navbar,
  Nav,
  NavDropdown,
  Container,
  Form,
  Row,
  Col,
  ButtonToolbar,
  InputGroup,
  Table,
  Modal,
} from 'react-bootstrap';
import store from '../store/index.js';
import $ from 'jquery';
import { FaPlus, FaPen, FaTrashAlt } from 'react-icons/fa';

import { Link, Redirect, withRouter } from 'react-router-dom';

import {
  InputChangeAction,
  memberRegisterAction,
  cleanlocalstorage,
  logoutModalCloseAction,
} from '../store/actionCreators.js';

class LogoutModal extends React.Component {
  constructor(props) {
    super(props);
    this.state = store.getState();
    store.subscribe(this.handleStoreChange);
    console.log(this.state);
  }

  handleStoreChange = () => {
    this.setState(store.getState());
    // console.log('store change');
  };

  handleCleanStorage = () => {
    localStorage.removeItem('user');
    let action = '';
    action = cleanlocalstorage();
    store.dispatch(action);
    action = logoutModalCloseAction();
    store.dispatch(action);
    this.props.history.push('/');
  };

  //生命週期:一開始載入資料
  componentDidMount() {}

  render() {
    return (
      <>
        <Modal show={this.state.showModalLogout} onHide={this.props.close}>
          <Modal.Header closeButton>
            <Modal.Title>Modal heading</Modal.Title>
          </Modal.Header>
          <Modal.Body>
            <Container>
              <Row>
                <h4>確定要登出嗎?</h4>
              </Row>
            </Container>
          </Modal.Body>
          <Modal.Footer>
            <Button variant="secondary" onClick={this.handleCleanStorage}>
              登出
            </Button>
            <Button variant="primary" onClick={this.props.close}>
              取消
            </Button>
          </Modal.Footer>
        </Modal>
      </>
    );
  }
}

export default withRouter(LogoutModal);
