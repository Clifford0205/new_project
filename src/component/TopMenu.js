import React from 'react';
import './TopMenu.scss';
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

class TopMenu extends React.Component {
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
    // $('html').click(function() {
    //   $('.transition').removeClass('active');
    // });
    $('.menu').click(function(e) {
      e.stopPropagation();
      $('.transition').toggleClass('active');
      // $('body').toggleClass('menu-open');
    });
  }

  render() {
    return (
      <>
        <div className="TopMenu  m-5">
          <div className="hanburger menu transition">
            <div class="bar bar1 transition"></div>
            <div class="bar bar2 transition"></div>
            <div class="bar bar3 transition"></div>
          </div>

          <div className="my-nav-all transition">
            <ul className="my-nav-bar">
              <li>註冊</li>
              <li>登入</li>
              <li>登入</li>
              <li>登入</li>
              <li>登入</li>
              <li>
                <Link to="/case" url={'http://localhost:3000/case'}>
                  商品專區
                </Link>
              </li>
              <li>聯絡我們</li>
            </ul>
          </div>
        </div>
      </>
    );
  }
}

export default withRouter(TopMenu);
