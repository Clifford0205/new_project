import React from 'react';
import GoBack from '../component/GoBack';
import Language from '../component/Language';
import MyNavbar from '../component/MyNavbar';
import { Container, Row, Col, Form, Button } from 'react-bootstrap';
import store from '../store/index.js';
import './ShoppingCart.scss';
import $ from 'jquery';
import { Link, Redirect, withRouter } from 'react-router-dom';
import 'animate.css/animate.min.css';
import {
  InputChangeAction,
  getProducteAction,
  deleteCartAction,
} from '../store/actionCreators.js';

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
  }

  handleFormInputChange = e => {
    const action = InputChangeAction(e.target.value, e.target.name);
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

  render() {
    return (
      <>
        <GoBack />
        <MyNavbar />
        <Container className="ShoppingCart">
          <section>
            <img src="/images/2000x.webp" alt="" className="w-100" />
          </section>
          <Container className="CaseStudies pb-5">
            <h2 className="text-center">購物車和訂單紀錄</h2>
            <ul className="d-flex   my-3 choose-title">
              <li
                className="w-100 text-center the-title active"
                id="cart"
                onClick={this.handleTitleClick}
              >
                我的購物車
              </li>
              <li
                className="w-100  text-center the-title "
                id="buy-record"
                onClick={this.handleTitleClick}
              >
                購買紀錄
              </li>
            </ul>

            <div className="cart thehide show">
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
          </Container>
        </Container>

        <Language />
      </>
    );
  }
}

export default withRouter(ShoppingCart);
