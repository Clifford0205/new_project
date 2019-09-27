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
} from 'react-bootstrap';
import store from '../store/index.js';
import $ from 'jquery';
import { FaPlus, FaPen, FaTrashAlt } from 'react-icons/fa';

import { Link, Redirect, withRouter } from 'react-router-dom';
import RegisterModal from './RegisterModal';
import LoginModal from './LoginModal';
import {
  memberModalShowAction,
  memberModalCloseAction,
  loginModalShowAction,
  loginModalCloseAction,
} from '../store/actionCreators.js';

class MyNavbar extends React.Component {
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
  componentDidMount() {
    $('.hanburger').click(function(e) {
      e.stopPropagation();
      console.log($(this));
      $(this).toggleClass('active');
      $('.my-nav-all').toggleClass('show');
      $('body').toggleClass('menu-open');
    });
  }

  // hanldleOpenRegister = () => {
  //   alert('000');
  // };

  // 開啟註冊視窗
  hanldleOpenRegister = () => {
    console.log(this.state);
    const action = memberModalShowAction();
    store.dispatch(action);
  };

  // 關閉註冊視窗
  hanldleCloseRegister = () => {
    const action = memberModalCloseAction();
    store.dispatch(action);
  };

  // 開啟登入視窗
  hanldleOpenLogin = () => {
    console.log(this.state);
    const action = loginModalShowAction();
    store.dispatch(action);
  };

  // 關閉登入視窗
  hanldleCloseLogin = () => {
    const action = loginModalCloseAction();
    store.dispatch(action);
  };

  render() {
    return (
      <>
        <div className="MyNav">
          <Container>
            <div className="my-navbar">
              <div className="hanburger">
                <span className="hanburger-icon">
                  <div className="bar bar1 transition"></div>
                  <div className="bar bar2 transition"></div>
                  <div className="bar bar3 transition"></div>
                </span>
              </div>
              <div className="my-nav-all transition">
                <ul className="my-navbar-nav">
                  <li onClick={this.hanldleOpenRegister}>註冊</li>
                  <li onClick={this.hanldleOpenLogin}>登入</li>
                  <li>商品專區</li>
                  <li>關於我們</li>
                  <li>關於我們</li>
                </ul>
              </div>
            </div>
          </Container>
          <RegisterModal
            show={this.state.showModalRegister}
            close={this.hanldleCloseRegister}
          />
          <LoginModal
            show={this.state.showModalLogin}
            close={this.hanldleCloseLogin}
          />
        </div>
      </>
    );
  }
}

export default withRouter(MyNavbar);
