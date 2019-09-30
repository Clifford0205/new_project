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
    const m_data = {
      m_mail: this.state.my_mail,
      m_name: this.state.my_name,
      m_mobile: this.state.my_mobile,
      m_birthday: this.state.my_birthday,
    };

    const action = editMemberAction(m_data);
    console.log(action);
    store.dispatch(action);
  };

  render() {
    console.log(this.state);
    return (
      <>
        <GoBack />
        <MyNavbar />
        <div className="MemberEdit">
          <section>
            <img src="/images/2000x.webp" alt="" className="w-100" />
          </section>
          <Container className="CaseStudies pb-5">
            <h2 className="text-center">會員中心</h2>
            <h3 className="text-center">我的個人檔案</h3>
            <ul>
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
          </Container>
        </div>

        <Language />
      </>
    );
  }
}

export default withRouter(BloodStudies);
