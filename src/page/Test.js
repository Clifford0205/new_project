import React from 'react';

import Language from '../component/Language';
import Pagination from '../component/Pagination';
import MyNavbar from '../component/MyNavbar';

import { Container, Row, Col, Form, Button, Carousel } from 'react-bootstrap';
import store from '../store/index.js';
import './ProductList.scss';
import ReactSVG from 'react-svg';
import { setCaesfilter, getProducteAction } from '../store/actionCreators.js';
import $ from 'jquery';
import { Link, Redirect, withRouter } from 'react-router-dom';
import { TweenMax, Power2, TimelineLite } from 'gsap/TweenMax';
import 'animate.css/animate.min.css';
import ScrollAnimation from 'react-animate-on-scroll';
import anime from 'animejs';
import ReactPaginate from 'react-paginate';
import PropTypes from 'prop-types';

class Test extends React.Component {
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
    const action = getProducteAction();
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
      filterimg[i].classList.remove(
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
    let data = this.state.productList;
    console.log(data);

    if (this.state.casefilter && this.state.casefilter.trim() !== '') {
      data = this.state.productList.filter(item =>
        item.tag.includes(this.state.casefilter)
      );
    }

    // Get current posts
    const indexOfLastPost = this.state.currentPage * this.state.postPerPage;

    const indexOfFirstPost = indexOfLastPost - this.state.postPerPage;

    const currentPosts = data.slice(indexOfFirstPost, indexOfLastPost);

    if (this.state.productList.length === 0) return null;

    return (
      <>
        {/* <GoBack /> */}

        <MyNavbar />
        <Carousel>
          <Carousel.Item>
            <img
              className="d-block w-100"
              src="holder.js/800x400?text=First slide&bg=373940"
              alt="First slide"
            />
            <Carousel.Caption>
              <h3>First slide label</h3>
              <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
            </Carousel.Caption>
          </Carousel.Item>
          <Carousel.Item>
            <img
              className="d-block w-100"
              src="holder.js/800x400?text=Second slide&bg=282c34"
              alt="Third slide"
            />

            <Carousel.Caption>
              <h3>Second slide label</h3>
              <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
            </Carousel.Caption>
          </Carousel.Item>
          <Carousel.Item>
            <img
              className="d-block w-100"
              src="holder.js/800x400?text=Third slide&bg=20232a"
              alt="Third slide"
            />

            <Carousel.Caption>
              <h3>Third slide label</h3>
              <p>
                Praesent commodo cursus magna, vel scelerisque nisl consectetur.
              </p>
            </Carousel.Caption>
          </Carousel.Item>
        </Carousel>
        <Language />
      </>
    );
  }
}

export default withRouter(Test);
