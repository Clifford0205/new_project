import React from 'react';
import GoBack from '../component/GoBack';
import Language from '../component/Language';
import MyNavbar from '../component/MyNavbar';
import { Container, Row, Col, Form, Button } from 'react-bootstrap';
import store from '../store/index.js';
import './CheckOut.scss';
import $ from 'jquery';
import { Link, Redirect, withRouter } from 'react-router-dom';
import 'animate.css/animate.min.css';
import {
  InputChangeAction,
  getProducteAction,
  deleteCartAction,
  cleanRecipientAction,
  loadZoneAction,
  zoneChangeAction,
  zoneSaveAction,
  cardNumberAction,
} from '../store/actionCreators.js';
import Zone_data from '../component/Zone_data';

class ShoppingCart extends React.Component {
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
    console.log(this.state);
    let url_id = this.props.match.params.id;
    let state_id = this.state.my_id;
    console.log(url_id);
    console.log(state_id);
    let action = '';
    action = getProducteAction();
    store.dispatch(action);

    let cityops = [];
    let townops = [];

    for (let i = 0; i < Zone_data.length; i++) {
      cityops.push(Zone_data[i].城市);
    }

    for (let j = 0; j < Zone_data[0].地區.length; j++) {
      townops.push(Zone_data[0].地區[j]);
    }

    action = loadZoneAction(cityops, townops);
    store.dispatch(action);
  }

  componentDidUpdate() {
    console.log(this.state);
  }

  changeArea = e => {
    let index = Zone_data.findIndex(item => item.城市 === e.target.value);
    let townops = [];
    for (let j = 0; j < Zone_data[index].地區.length; j++) {
      townops.push(Zone_data[index].地區[j]);
    }
    const action = zoneChangeAction(townops);
    store.dispatch(action);
  };

  handleFormInputChange = e => {
    const action = InputChangeAction(e.target.value, e.target.name);
    store.dispatch(action);
  };

  handleAreaState = e => {
    const action = zoneSaveAction(e.target.value, e.target.name);
    store.dispatch(action);
  };

  handleTitleClick = e => {
    console.log(e.target.id);
    let allhide = document.querySelectorAll('.thehide');
    let alltitle = document.querySelectorAll('.the-title');
    for (let i = 0; i < allhide.length; i++) {
      allhide[i].classList.remove('show');
    }
    for (let i = 0; i < alltitle.length; i++) {
      alltitle[i].classList.remove('active');
    }

    document.querySelector(`.${e.target.id}`).classList.add('show');
    document.querySelector(`#${e.target.id}`).classList.add('active');
  };

  handleTitleClick = e => {
    console.log(e.target.id);
    let allhide = document.querySelectorAll('.thehide');
    let alltitle = document.querySelectorAll('.the-title');
    for (let i = 0; i < allhide.length; i++) {
      allhide[i].value = '';
      allhide[i].classList.remove('show');
    }
    for (let i = 0; i < alltitle.length; i++) {
      alltitle[i].classList.remove('active');
    }

    document.querySelector(`.${e.target.id}`).classList.add('show');
    document.querySelector(`#${e.target.id}`).classList.add('active');
  };

  handleClean = () => {
    const action = cleanRecipientAction();
    store.dispatch(action);
  };

  handleCancel = e => {
    //得到點擊欄位的id
    let clickID =
      [].indexOf.call(
        e.target.parentNode.parentNode.children,
        e.target.parentNode
      ) + 1;

    //會員ID
    let member_id = this.state.my_id;

    //點擊以外的留下，傳給API
    let shopping_cart = this.state.my_cart.filter(item => item.id !== clickID);
    let delItem = {
      shopping_cart: { shopping_cart: shopping_cart },
      id: member_id,
    };
    const action = deleteCartAction(delItem);
    store.dispatch(action);
  };

  handleNext = (event, next) => {
    if (event.target.value.length == event.target.maxLength) {
      document.querySelector(`.${next}`).focus();
    }
  };

  handleCardNo = e => {
    let cardnum = '';
    let allcardno = document.querySelectorAll('.cardno');

    for (let i = 0; i < allcardno.length; i++) {
      if (i < 3) {
        cardnum += allcardno[i].value + '-';
      } else {
        cardnum += allcardno[i].value;
      }
    }

    const action = cardNumberAction(cardnum);
    store.dispatch(action);
  };

  render() {
    console.log(this.state);
    return (
      <>
        <GoBack />
        <MyNavbar />
        <Container className="CheckOut">
          <section>
            <img src="/images/2000x.webp" alt="" className="w-100" />
          </section>
          <div className="pb-5">
            <h2 className="text-center">結帳頁面</h2>

            <div className="cart">
              <ul>
                {this.state.my_cart.map(item => (
                  <li key={item.id} className="row">
                    <Link
                      to={'/ProductDetail/' + item.product_id}
                      className="col"
                    >
                      <img src={item.img} alt="" />
                    </Link>
                    <p className="col">購買數量:{item.amount}</p>
                    <p className="col">單價:{item.price}</p>
                    <p className="col ">
                      小計:
                      <span className="subtotal">
                        {item.amount * item.price}
                      </span>
                    </p>

                    <Button
                      className="text-center cancel"
                      onClick={this.handleCancel}
                    >
                      X
                    </Button>
                  </li>
                ))}
              </ul>
              <div>
                <p className="text-right">總計:{this.state.bigTotal}</p>
              </div>
              <div className="order-info">
                <div className="order-title">訂購人資料</div>
                <ul className="">
                  <li>
                    姓名:
                    <input type="text" value={this.state.my_name} readOnly />
                  </li>
                  <li>
                    E-mail:
                    <input type="text" value={this.state.my_mail} readOnly />
                  </li>
                  <li>
                    手機號碼:
                    <input type="text" value={this.state.my_mobile} readOnly />
                  </li>
                </ul>
              </div>

              <div className="Recipient-info">
                <div className="Recipient-title">收件人資料</div>
                <ul className="d-flex   my-3 choose-title">
                  <li
                    className="w-100 text-center the-title active"
                    id="same"
                    onClick={event => {
                      this.handleTitleClick(event);
                      this.handleClean(event);
                    }}
                  >
                    同訂購人
                  </li>
                  <li
                    className="w-100  text-center the-title "
                    id="new"
                    onClick={this.handleTitleClick}
                  >
                    新增資料
                  </li>
                </ul>
                <ul className="thehide same show">
                  <li>
                    姓名: <input type="text" value={this.state.my_name} />
                  </li>
                  <li>
                    E-mail: <input type="text" value={this.state.my_mail} />
                  </li>
                  <li>
                    手機號碼: <input type="text" value={this.state.my_mobile} />
                  </li>
                </ul>

                <ul className="thehide new">
                  <li>
                    姓名:
                    <input
                      type="text"
                      value={this.state.recipient_name}
                      onChange={this.handleFormInputChange}
                      name="recipient_name"
                    />
                  </li>
                  <li>
                    E-mail:
                    <input
                      type="text"
                      value={this.state.recipient_mail}
                      onChange={this.handleFormInputChange}
                      name="recipient_mail"
                    />
                  </li>
                  <li>
                    手機號碼:
                    <input
                      type="text"
                      value={this.state.recipient_mobile}
                      onChange={this.handleFormInputChange}
                      name="recipient_mobile"
                    />
                  </li>
                </ul>

                <div className="row">
                  <Col>
                    <select
                      onChange={e => {
                        this.changeArea(e);
                        this.handleAreaState(e);
                      }}
                      name="delivery_city"
                    >
                      {this.state.cityops.map((item, index) => (
                        <option key={index} value={item}>
                          {item}
                        </option>
                      ))}
                    </select>
                  </Col>
                  <Col>
                    <select
                      onChange={e => {
                        this.handleAreaState(e);
                      }}
                      name="delivery_town"
                    >
                      {this.state.townops.map((item, index) => (
                        <option key={index} value={item}>
                          {item}
                        </option>
                      ))}
                    </select>
                  </Col>

                  <Col>
                    路段地址:
                    <input
                      type="text"
                      value={this.state.recipient_road}
                      onChange={this.handleFormInputChange}
                      name="recipient_road"
                    />
                  </Col>
                </div>
              </div>

              <div className="">
                信用卡卡號:
                <input
                  type="text"
                  name="T1"
                  maxLength="4"
                  size="4"
                  onKeyUp={(event, T2) => this.handleNext(event, 'T2')}
                  className="T1 cardno"
                  onChange={e => this.handleCardNo(e)}
                />
                -
                <input
                  type="text"
                  name="T2"
                  maxLength="4"
                  size="4"
                  onKeyUp={(event, T2) => this.handleNext(event, 'T3')}
                  className="T2 cardno"
                  onChange={e => this.handleCardNo(e)}
                />
                -
                <input
                  type="text"
                  name="T3"
                  maxLength="4"
                  size="4"
                  onKeyUp={(event, T2) => this.handleNext(event, 'T4')}
                  className="T3 cardno"
                  onChange={e => this.handleCardNo(e)}
                />
                -
                <input
                  type="text"
                  name="T4"
                  maxLength="4"
                  size="4"
                  className="T4 cardno"
                  onChange={e => this.handleCardNo(e)}
                />
              </div>

              <div>
                <Button className="ml-auto d-block ">前往結帳</Button>
              </div>
            </div>
            <div className="buy-record thehide">
              <ul></ul>

              <Button
                className="d-block mx-auto  "
                onClick={this.handleModifyPassword}
              >
                修改密碼
              </Button>
            </div>
          </div>
        </Container>

        <Language />
      </>
    );
  }
}

export default withRouter(ShoppingCart);
