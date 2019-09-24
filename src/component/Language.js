import React from 'react';
import './Language.scss';
import { Container, Row, Col } from 'react-bootstrap';
import { languageChangeAction } from '../store/actionCreators.js';
import store from '../store/index.js';
import $ from 'jquery';
import { FaPlus, FaPen, FaTrashAlt } from 'react-icons/fa';

import { Link, Redirect, withRouter } from 'react-router-dom';

class Language extends React.Component {
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
    // $('.switch').click(function(e) {
    //   e.stopPropagation();
    //   $('.lanChange').toggleClass('active');
    // });
  }

  handleChangeLanguage = () => {
    console.log('我被點即了');
    $('.lanChange').toggleClass('active');
    const action = languageChangeAction();
    store.dispatch(action);
  };

  render() {
    return (
      <>
        <div className="myLanguage p-1 d-inline">
          <div
            className="switch  text-center ml-auto"
            onClick={this.handleChangeLanguage}
          >
            <span className="active p-1 lanChange">EN</span>/
            <span className="p-1 lanChange">繁</span>
          </div>
        </div>
      </>
    );
  }
}

export default withRouter(Language);
