import React from 'react';

import GoBack from '../component/GoBack';
import Language from '../component/Language';
import ReactDOM from 'react-dom';
import ReactFullpage from '@fullpage/react-fullpage';
import { Container, Row, Col, Form, Button } from 'react-bootstrap';
import store from '../store/index.js';
import './BloodStudies.scss';
import ReactSVG from 'react-svg';
import { setCaesfilter, getLungCaseAction } from '../store/actionCreators.js';
import $ from 'jquery';
import { Link, Redirect, withRouter } from 'react-router-dom';
import { TweenMax, Power2, TimelineLite } from 'gsap/TweenMax';
import 'animate.css/animate.min.css';
import ScrollAnimation from 'react-animate-on-scroll';
import anime from 'animejs';
import ReactPaginate from 'react-paginate';
import PropTypes from 'prop-types';

class BloodStudies extends React.Component {
  constructor(props) {
    super(props);
    this.state = store.getState();
    store.subscribe(this.handleStoreChange);
    console.log(this.state);
    // this.state = {
    //   smallItem: [],
    //   offset: 0,
    //   perPage: 9,
    //   totalLength: 0,
    // };
  }

  handleStoreChange = () => {
    this.setState(store.getState());
    // console.log('store change');
  };

  //生命週期:一開始載入資料
  componentDidMount() {
    const action = getLungCaseAction();
    store.dispatch(action);
    console.log(this.state);
  }

  toggleImg = async e => {
    let filterimg = document.querySelectorAll('.filterimg');
    for (var i = 0; i < filterimg.length; i++) {
      filterimg[i].classList.remove(
        'active2',
        'active3',
        'active4',
        'active5',
        'active6'
      );
    }
    e.target.classList.toggle('active1');
    // console.log(e.target.classList[1] == undefined);
    let sendid = e.target.classList[1] == undefined ? '' : '';
    const action = setCaesfilter(sendid);
    await store.dispatch(action);
    await console.log(this.state.casefilter);
  };

  toggleImg2 = async e => {
    console.log(e.target);
    let filterimg = document.querySelectorAll('.filterimg');
    for (var i = 0; i < filterimg.length; i++) {
      filterimg[i].removeClass(
        'active1',
        'active3',
        'active4',
        'active5',
        'active6'
      );
    }
    e.target.classList.toggle('active2');
    let sendid = e.target.classList[1] == undefined ? '' : e.target.id;
    const action = setCaesfilter(sendid);
    await store.dispatch(action);
    await console.log(this.state.casefilter);
  };

  toggleImg3 = e => {
    console.log(e.target);
    let filterimg = document.querySelectorAll('.filterimg');
    for (var i = 0; i < filterimg.length; i++) {
      filterimg[i].classList.remove(
        'active1',
        'active2',
        'active4',
        'active5',
        'active6'
      );
    }
    e.target.classList.toggle('active3');
    let sendid = e.target.classList[1] == undefined ? '' : e.target.id;
    const action = setCaesfilter(sendid);
    store.dispatch(action);
  };

  toggleImg4 = e => {
    console.log(e.target);
    let filterimg = document.querySelectorAll('.filterimg');
    for (var i = 0; i < filterimg.length; i++) {
      filterimg[i].classList.remove(
        'active1',
        'active2',
        'active3',
        'active5',
        'active6'
      );
    }
    e.target.classList.toggle('active4');
    let sendid = e.target.classList[1] == undefined ? '' : e.target.id;
    const action = setCaesfilter(sendid);
    store.dispatch(action);
  };

  toggleImg5 = e => {
    console.log(e.target);
    let filterimg = document.querySelectorAll('.filterimg');
    for (var i = 0; i < filterimg.length; i++) {
      filterimg[i].classList.remove(
        'active1',
        'active2',
        'active3',
        'active4',
        'active6'
      );
    }
    e.target.classList.toggle('active5');
    let sendid = e.target.classList[1] == undefined ? '' : e.target.id;
    const action = setCaesfilter(sendid);
    store.dispatch(action);
  };

  toggleImg6 = e => {
    console.log(e.target);
    let filterimg = document.querySelectorAll('.filterimg');
    for (var i = 0; i < filterimg.length; i++) {
      filterimg[i].classList.remove(
        'active1',
        'active2',
        'active3',
        'active4',
        'active5'
      );
    }
    e.target.classList.toggle('active6');
    let sendid = e.target.classList[1] == undefined ? '' : e.target.id;
    const action = setCaesfilter(sendid);
    store.dispatch(action);
  };

  render() {
    console.log(this.state);
    let data = this.state.lungcaselist;
    console.log(data);

    // if (this.state.casefilter && this.state.casefilter.trim() !== '') {
    //   data = this.state.smallItem.filter(item =>
    //     item.tag.includes(this.state.casefilter)
    //   );
    // }

    return (
      <>
        <GoBack />

        <Container className="CaseStudies pb-5">
          <Row>
            <Col>
              <h3 className="text-center pt-5">Case Studies</h3>
            </Col>
          </Row>
          <Row className="classification pt-3 ">
            <Col>
              <div
                className={
                  this.state.casefilter ? 'filterimg' : 'active1 filterimg'
                }
                id="all"
                onClick={this.toggleImg}
              ></div>
            </Col>
            <Col>
              <div
                className="filterimg"
                id="cig"
                onClick={this.toggleImg2}
              ></div>
            </Col>
            <Col>
              <div
                className="filterimg"
                id="house"
                onClick={this.toggleImg3}
              ></div>
            </Col>
            <Col>
              <div
                className="filterimg"
                id="wind"
                onClick={this.toggleImg4}
              ></div>
            </Col>
            <Col>
              <div
                className="filterimg"
                id="factory"
                onClick={this.toggleImg5}
              ></div>
            </Col>
            <Col>
              <div
                className="filterimg"
                id="sick"
                onClick={this.toggleImg6}
              ></div>
            </Col>
          </Row>

          <Container className="lotsCase">
            <Row>
              {this.state.lungcaselist.map(item => (
                <Col sm="4" key={item.id}>
                  <Link to={'/casedetail/' + item.id}>
                    <img
                      src={item.img}
                      alt=""
                      width="100%"
                      className="linkimg"
                    />
                    <h5 className="linktitle">
                      {this.state.chinese
                        ? item.chinese.title
                        : item.english.title}
                    </h5>
                    <p className="linktext">
                      {this.state.chinese
                        ? item.chinese.text
                        : item.english.text}
                    </p>
                  </Link>
                </Col>
              ))}
            </Row>
            <Row></Row>
          </Container>
        </Container>

        <Language />
      </>
    );
  }
}

export default withRouter(BloodStudies);
