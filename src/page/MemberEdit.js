import React from 'react';
import GoBack from '../component/GoBack';
import Language from '../component/Language';
import MyNavbar from '../component/MyNavbar';
import { Container, Row, Col, Form, Button } from 'react-bootstrap';
import store from '../store/index.js';
import './BloodStudies.scss';
import $ from 'jquery';
import { Link, Redirect, withRouter } from 'react-router-dom';
import 'animate.css/animate.min.css';

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

  render() {
    console.log(this.state);
    return (
      <>
        <GoBack />
        <MyNavbar />
        <Container className="CaseStudies pb-5">
          <h2>{this.state.my_name}</h2>
        </Container>

        <Language />
      </>
    );
  }
}

export default withRouter(BloodStudies);
