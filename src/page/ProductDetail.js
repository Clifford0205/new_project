import React from 'react';

import GoBack from '../component/GoBack';
import Language from '../component/Language';
import ReactDOM from 'react-dom';
import ReactFullpage from '@fullpage/react-fullpage';
import { Container, Row, Col, Form, Button } from 'react-bootstrap';
import store from '../store/index.js';
import './ProductDetail.scss';
import ReactSVG from 'react-svg';
import { getProducteAction } from '../store/actionCreators.js';
import $ from 'jquery';
import { Link, Redirect, withRouter } from 'react-router-dom';
import { TweenMax, Power2, TimelineLite } from 'gsap/TweenMax';
import 'animate.css/animate.min.css';
import ScrollAnimation from 'react-animate-on-scroll';
import anime from 'animejs';

class ProductDetail extends React.Component {
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
  }

  render() {
    console.log(this.state.productList);
    const theProductData = this.state.productList.find(
      item => item.id === +this.props.match.params.id
    );
    console.log(theProductData);
    console.log(theProductData !== undefined);

    if (theProductData === undefined) return null;
    return (
      <div className="ProductDetail">
        <GoBack />

        <Container className="top-area">
          <Row>
            <Col>
              <h3 className="text-center casetitle">
                {this.state.chinese
                  ? theProductData.chinese.title
                  : theProductData.english.title}
              </h3>
            </Col>
          </Row>
          <Row>
            <Col>
              {theProductData.imglist.map(item => (
                <ul key={item.id}>
                  <li>
                    <img src={item.img} alt="" />
                  </li>
                </ul>
              ))}
            </Col>
            <Col md={4} sm={6}>
              <img src={theProductData.img} alt="" width="100%" />
            </Col>
            <Col md={4} sm={6}>
              <p>
                {this.state.chinese
                  ? theProductData.chinese.text
                  : theProductData.english.text}
              </p>
            </Col>
          </Row>
        </Container>

        <Container fluid={true} className="bottom-area p-5">
          <Row>
            <Col md="8" sm="6">
              <h5> {this.state.chinese ? '肺部淨化' : 'Lung purification'}</h5>
              <p>
                {this.state.chinese
                  ? '肺部淨化是透過舒眠麻醉，讓客戶在睡眠狀態下，進行肺葉深部清潔的方式。透過非常細的支氣管鏡，經由迷宮般的氣管及支氣管，抵達肺葉深部，經由精細控制的分區，以特別調製的藥水，將深部附著的污染物帶出，讓肺泡能更無阻礙的呼吸空氣。無需住院治療。'
                  : 'Pulmonary purification is a way to clean the lungs through sleep anesthesia, allowing customers to sleep in a state of sleep. Through the very thin bronchoscope, through the labyrinth of the trachea and bronchus, reaching the deep part of the lungs, through the finely controlled partition, the specially-adapted syrup will bring out the deep-attached contaminants, allowing the alveoli to breathe more unhindered. No hospitalization is required.'}
              </p>
            </Col>

            <Col md="4" sm="6" className="align-self-center">
              <span className="bg-border mx-auto d-block">
                <Button variant=" d-block" className="sendbtn">
                  {this.state.chinese ? '了解更多' : 'More'}
                </Button>
              </span>
            </Col>
          </Row>
        </Container>

        <Language />
      </div>
    );
  }
}

export default withRouter(ProductDetail);
