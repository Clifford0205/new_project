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

import { InputChangeAction } from '../store/actionCreators.js';

class RegisterModal extends React.Component {
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

  //生命週期:一開始載入資料
  componentDidMount() {}

  handleFormInputChange = e => {
    const action = InputChangeAction(e.target.value, e.target.name);
    store.dispatch(action);
  };

  render() {
    return (
      <>
        <Modal show={this.props.show} onHide={this.props.close}>
          <Modal.Header closeButton>
            <Modal.Title>Modal heading</Modal.Title>
          </Modal.Header>
          <Modal.Body>
            <Container>
              <Row>
                <Col md={6}>
                  E-MAIL
                  <input
                    type="text"
                    className="w-100"
                    name="m_mail"
                    onChange={this.handleFormInputChange}
                    value={this.state.m_mail}
                  />
                </Col>
                <Col md={6}>
                  密碼
                  <input
                    type="password"
                    className="w-100"
                    name="m_password"
                    onChange={this.handleFormInputChange}
                    value={this.state.m_password}
                  />
                </Col>
                <Col md={6}>
                  確認密碼
                  <input
                    type="password"
                    className="w-100"
                    name="m_repassword"
                    onChange={this.handleFormInputChange}
                    value={this.state.m_repassword}
                  />
                </Col>
                <Col md={6}>
                  真實姓名
                  <input
                    type="text"
                    className="w-100"
                    name="m_name"
                    onChange={this.handleFormInputChange}
                    value={this.state.m_name}
                  />
                </Col>
                <Col md={6}>
                  手機號碼
                  <input
                    type="text"
                    className="w-100"
                    name="m_mobile"
                    onChange={this.handleFormInputChange}
                    value={this.state.m_mobile}
                  />
                </Col>
                <Col md={6}>
                  生日
                  <input
                    type="date"
                    className="w-100"
                    name="m_birthday"
                    onChange={this.handleFormInputChange}
                    value={this.state.m_birthday}
                  />
                </Col>

                <Col>
                  <Button className="d-block mx-auto">確認送出 </Button>
                </Col>
              </Row>
            </Container>
          </Modal.Body>
          <Modal.Footer>
            <Button variant="secondary">Close</Button>
            <Button variant="primary">Save Changes</Button>
          </Modal.Footer>
        </Modal>
      </>
    );
  }
}

export default withRouter(RegisterModal);
