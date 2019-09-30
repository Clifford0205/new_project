import React from 'react';
import GoBack from '../component/GoBack';
import Language from '../component/Language';
import MyNavbar from '../component/MyNavbar';
import { Container, Row, Col, Form, Button } from 'react-bootstrap';
import store from '../store/index.js';
import './MemberEdit.scss';
import $ from 'jquery';
import { Link, Redirect, withRouter } from 'react-router-dom';
import 'animate.css/animate.min.css';
import {
  InputChangeAction,
  editMemberAction,
} from '../store/actionCreators.js';

class BloodStudies extends React.Component {
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
  }

  handleFormInputChange = e => {
    const action = InputChangeAction(e.target.value, e.target.name);
    store.dispatch(action);
  };

  handleMemberModify = () => {
    const edit_data = {
      m_mail: this.state.my_mail,
      m_password: this.state.my_pswd,
      m_name: this.state.my_name,
      m_mobile: this.state.my_mobile,
      m_birthday: this.state.my_birthday,
      shopping_cart: this.state.my_cart,
      id: this.state.my_id,
    };

    const action = editMemberAction(edit_data);
    console.log(action);
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

  render() {
    console.log(this.state);
    return (
      <>
        <GoBack />
        <MyNavbar />
        <Container className="MemberEdit">
          <section>
            <img src="/images/2000x.webp" alt="" className="w-100" />
          </section>
          <Container className="CaseStudies pb-5">
            <h2 className="text-center">會員中心</h2>
            <ul className="d-flex   my-5 choose-title">
              <li
                class="w-100 text-center the-title active"
                id="profile"
                onClick={this.handleTitleClick}
              >
                編輯個人檔案
              </li>
              <li
                class="w-100  text-center the-title "
                id="password"
                onClick={this.handleTitleClick}
              >
                修改密碼
              </li>
            </ul>

            <div className="profile thehide show">
              <ul class="">
                <li>
                  姓名:
                  <input
                    type="text"
                    value={this.state.my_name}
                    name="my_name"
                    onChange={this.handleFormInputChange}
                    className="form-control"
                  />
                </li>

                <li>
                  E-MAIL:
                  <input
                    type="text"
                    value={this.state.my_mail}
                    name="my_mail"
                    onChange={this.handleFormInputChange}
                    className="form-control"
                  />
                </li>

                <li>
                  手機號碼:
                  <input
                    type="text"
                    value={this.state.my_mobile}
                    name="my_mobile"
                    onChange={this.handleFormInputChange}
                    className="form-control"
                  />
                </li>

                <li>
                  生日:
                  <input
                    type="date"
                    value={this.state.my_birthday}
                    name="my_birthday"
                    onChange={this.handleFormInputChange}
                    className="form-control"
                  />
                </li>
              </ul>

              <Button
                className="d-block mx-auto"
                onClick={this.handleMemberModify}
              >
                修改資料
              </Button>
            </div>
            <div className="password thehide">
              <ul>
                <li>
                  原本密碼:
                  <input type="text" />
                </li>
              </ul>
            </div>
          </Container>
        </Container>

        <Language />
      </>
    );
  }
}

export default withRouter(BloodStudies);
