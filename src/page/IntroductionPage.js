import React from 'react';

import Language from '../component/Language';
import ReactDOM from 'react-dom';
import ReactFullpage from '@fullpage/react-fullpage';
import { Container, Row, Col, Form, Button } from 'react-bootstrap';
import store from '../store/index.js';
import './IntroductionPage.scss';
import { getInitList } from '../store/actionCreators.js';
import $ from 'jquery';
import { Link, Redirect, withRouter } from 'react-router-dom';
import { TweenMax, Power2, TimelineLite } from 'gsap/TweenMax';
import 'animate.css/animate.min.css';
import ScrollAnimation from 'react-animate-on-scroll';
import anime from 'animejs';

class IntroductionPage extends React.Component {
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
  componentDidMount() {}

  render() {
    return (
      <>
        <Container fluid={true} className="IntroductionPage pt-5">
          <Row className="describe">
            <Col className="">
              <h3 className="text-center pt-3">基本介紹</h3>
              <h4 className="text-center  pt-3">Respiratory purification</h4>
              <div>
                <p className="intro-content mx-auto text-center  pt-3">
                  BACKGROUND AND OBJECTIVES: The use of volatile anesthetics in
                  cardiac surgery is not recent. Since the introduction of
                  halothane in clinical practice, several cardiac surgery
                  centers started to use these anesthetics constantly. CONTENT:
                  In the last years a great number of studies haveshown that the
                  volatile anesthetics have a protecting effect against
                  myocardial ischemic dysfunction. Experimental evidences have
                  shown that the halogenated anesthetics have cardioprotective
                  effects that cannot be only explained by coronary flow
                  alterations or by the balance between myocardium available and
                  consumed oxygen. In addition to that, the use of volatile
                  anesthetics during extracorporeal circulation (ECC) in cardiac
                  surgery plays an important role. Recent studies have proven
                  that these agents have cardioprotective.
                </p>
              </div>
            </Col>
          </Row>

          <Row className="Advantage">
            <Col className="">
              <h3 className="text-center pt-3">治療優勢</h3>
              <h4 className="text-center  pt-3">Respiratory purification</h4>
              <div>
                <p className="intro-content mx-auto text-center  pt-3">
                  BACKGROUND AND OBJECTIVES: The use of volatile anesthetics in
                  cardiac surgery is not recent. Since the introduction of
                  halothane in clinical practice, several cardiac surgery
                  centers started to use these anesthetics constantly. CONTENT:
                  In the last years a great number of studies haveshown that the
                  volatile anesthetics have a protecting effect against
                  myocardial ischemic dysfunction. Experimental evidences have
                  shown that the halogenated anesthetics have cardioprotective
                  effects that cannot be only explained by coronary flow
                  alterations or by the balance between myocardium available and
                  consumed oxygen. In addition to that, the use of volatile
                  anesthetics during extracorporeal circulation (ECC) in cardiac
                  surgery plays an important role. Recent studies have proven
                  that these agents have cardioprotective.
                </p>
              </div>
            </Col>
          </Row>
          <Row className="pt-5">
            <Col>
              <img
                src="/images/Group_122.svg"
                alt=""
                className="d-block mx-auto"
              />
              <h3 className="text-center py-3">Step name</h3>
              <div>
                <p className="d-block mx-auto text-center">
                  The use of volatile anesthetics in cardiac surgery is not
                  recent. Since the introduction of halothane in clinical
                  practice, several cardiac
                </p>
              </div>
            </Col>
            <Col>
              <img
                src="/images/Group_123.svg "
                alt=""
                className="d-block mx-auto"
              />
              <h3 className="text-center py-3">Step name</h3>
              <div>
                <p className="d-block mx-auto text-center">
                  The use of volatile anesthetics in cardiac surgery is not
                  recent. Since the introduction of halothane in clinical
                  practice, several cardiac
                </p>
              </div>
            </Col>
            <Col>
              <img
                src="/images/Group_124.svg"
                alt=""
                className="d-block mx-auto"
              />
              <h3 className="text-center py-3">Step name</h3>
              <div>
                <p className="d-block mx-auto text-center">
                  The use of volatile anesthetics in cardiac surgery is not
                  recent. Since the introduction of halothane in clinical
                  practice, several cardiac
                </p>
              </div>
            </Col>
          </Row>

          <Row className="colorArea mt-5 pb-5">
            <Col>
              <h3 className="text-center pt-3">團隊介紹</h3>
              <h4 className="text-center pt-3">Respiratory purification</h4>
              <p className="pt-3 team-intro mx-auto">
                BACKGROUND AND OBJECTIVES: The use of volatile anesthetics in
                cardiac surgery is not recent. Since the introduction of
                halothane in clinical practice, several cardiac surgery centers
                started to use these anesthetics constantly. CONTENT: In the
                last years a great number of studies haveshown that the volatile
                anesthetics have a protecting effect against myocardial ischemic
                dysfunction. Experimental evidences have shown that the
                halogenated anesthetics have cardioprotective effects that
                cannot be only explained by coronary flow alterations or by the
                balance between myocardium available and consumed oxygen. In
                addition to that, the use of volatile anesthetics during
                extracorporeal circulation (ECC) in cardiac surgery plays an
                important role. Recent studies have proven that these agents
                have cardioprotective.
              </p>
            </Col>
          </Row>

          <Row className="mt-5 mb-3">
            <Col sm={5}>
              <div>
                <img
                  src="/images/謝致政.png"
                  alt=""
                  className="d-block ml-auto"
                />
              </div>
            </Col>
            <Col sm={7}>
              <h3>Chih-Cheng Hsieh MD, Ph.D</h3>
              <p className="Personal_profile">
                Attending physician, Department of Surgery, Taipei Veterans
                General Hospital Associate Professor of Surgery, Faculty of
                Medicine, National Yang-Ming University
              </p>

              <ul className="list-unstyled pt-3">
                <li>Medical Expertise</li>
                <li>Lung surgery (lung cancer and benign)</li>
                <li>Esophageal surgery (cancer and benign)</li>
                <li>Esophageal functional disease</li>
                <li>Mediastinal operation</li>
                <li>Endoscopic surgery</li>
                <li>Robotic surgery</li>
                <li>License</li>
                <li>License of physician, Taiwan</li>
                <li>Specialist of Surgery</li>
                <li>Specialist of Thoracic Surgery</li>
                <li>Specialist of Digestive surgery</li>
                <li>Specialist of Endoscopic surgery</li>
                <li>Specialist of Chest medicine and Critical Care</li>
              </ul>
            </Col>
          </Row>

          <Row className="contact">
            <Col>
              <h3 className="text-center mt-5">Contact</h3>
              <div>
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m16!1m12!1m3!1d28912.15753077806!2d121.51682605067246!3d25.06732171652283!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!2m1!1z6Ie65aSn6Yar6Zmi!5e0!3m2!1szh-TW!2stw!4v1563965442530!5m2!1szh-TW!2stw"
                  className="d-block mx-auto"
                  width="60%"
                  height="350px"
                  frameborder="0"
                  allowfullscreen
                ></iframe>
              </div>
            </Col>
          </Row>

          <Row className="contact-text mx-auto pt-3">
            <Col>
              <p>
                The use of volatile anesthetics in cardiac surgery is not
                recent. Since the introduction of halothane in clinical
                practice, several cardiac surgery centers started to use these
                anesthetics constantly.
              </p>
            </Col>
            <Col>
              <Form>
                <Form.Group controlId="">
                  <Form.Control type="email" placeholder="Name" />
                </Form.Group>

                <Form.Group controlId="">
                  <Form.Control type="text" placeholder="Phone number" />
                </Form.Group>

                <Form.Group controlId="">
                  <Form.Control type="text" placeholder="Mail" />
                </Form.Group>

                <Form.Group controlId="exampleForm.ControlTextarea1">
                  <Form.Control as="textarea" rows="3" placeholder="Message" />
                </Form.Group>
                <Button variant="light submitBtn px-4" type="submit" class="">
                  Submit
                </Button>
              </Form>
            </Col>
          </Row>
        </Container>
        <Language />
      </>
    );
  }
}

export default withRouter(IntroductionPage);
