import React from 'react';
import store from '../store/index.js';
import './Bottomform.scss';
import { Container, Row, Col, Form, Button } from 'react-bootstrap';
import {
  InputChangeAction,
  sendmessageAction,
} from '../store/actionCreators.js';

export class Bottomform extends React.Component {
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

  handleFormInputChange = e => {
    const action = InputChangeAction(e.target.value, e.target.name);
    store.dispatch(action);
  };

  handleFormSend = () => {
    const item = {
      clientname: this.state.clientname,
      phonenumber: this.state.phonenumber,
      mail: this.state.mail,
      message: this.state.message,
    };
    // const stateList = this.state.list;
    // console.log(stateList);
    console.log(item);
    const action = sendmessageAction(item);
    console.log(action);
    store.dispatch(action);
  };
  render() {
    return (
      <div className="Bottomform mx-auto">
        <Row className=" ">
          <Col md={6}>
            <p>
              The use of volatile anesthetics in cardiac surgery is not recent.
              Since the introduction of halothane in clinical practice, several
              cardiac surgery centers started to use these anesthetics
              constantly.
            </p>
          </Col>
          <Col md={6}>
            <input
              type="text"
              placeholder="Name"
              className="forminput mx-auto d-block my-2"
              name="clientname"
              value={this.state.clientname ? this.state.clientname : ''}
              onChange={this.handleFormInputChange}
            />
            <input
              type="text"
              placeholder="Phone number"
              className="forminput mx-auto d-block my-2"
              name="phonenumber"
              value={this.state.phonenumber ? this.state.phonenumber : ''}
              onChange={this.handleFormInputChange}
            />
            <input
              type="text"
              placeholder="Mail"
              className="forminput mx-auto d-block my-2"
              name="mail"
              value={this.state.mail ? this.state.mail : ''}
              onChange={this.handleFormInputChange}
            />
            <input
              type="text"
              placeholder="Message"
              className="forminput mx-auto d-block my-2"
              name="message"
              value={this.state.message ? this.state.message : ''}
              onChange={this.handleFormInputChange}
            />
          </Col>
        </Row>
        <Row>
          <span class="bg-border mx-auto">
            <Button
              variant=" d-block"
              className="sendbtn"
              onClick={this.handleFormSend}
            >
              Send
            </Button>
          </span>
        </Row>
      </div>
    );
  }
}

export default Bottomform;
