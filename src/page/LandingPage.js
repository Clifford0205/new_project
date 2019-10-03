import React from 'react';
import MyNavbar from '../component/MyNavbar';
import Language from '../component/Language';
import MapContainer from '../component/GoogleMap';
import ReactDOM from 'react-dom';
import ReactFullpage from '@fullpage/react-fullpage';
import { Container, Row, Col, Form, Button } from 'react-bootstrap';
import store from '../store/index.js';
import './LandingPage.scss';
import { getInitList } from '../store/actionCreators.js';
import $ from 'jquery';
import { Link, Redirect, withRouter } from 'react-router-dom';
import { TweenMax, Power2, TimelineLite } from 'gsap/TweenMax';
import 'animate.css/animate.min.css';
import ScrollAnimation from 'react-animate-on-scroll';
import anime from 'animejs';
import {} from 'react-icons/fa';
import MyGooglemap from '../component/GoogleMap';
import Bottomform from '../component/Bottomform';

class LandingPage extends React.Component {
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
    const action = getInitList();
    store.dispatch(action);

    TweenMax.to('.bigLogo', 0.5, {
      scaleX: 2,
      scaleY: 2,
      opacity: 1,
    });

    TweenMax.to('.bigLogo', 4, {
      rotation: 360,
      repeat: -1,
    });

    $('.text-part1, .text-part2').each(function() {
      $(this).html(
        $(this)
          .text()
          .replace(/([^\x00-\x80]|\w)/g, "<span class='letter'>$&</span>")
      );
    });

    anime
      .timeline({ loop: true })
      .add({
        targets: '.text-part1 .letter',
        scale: [4, 1],
        opacity: [0, 1],
        translateZ: 0,
        easing: 'easeOutExpo',
        duration: 950,
        delay: function(el, i) {
          return 70 * i;
        },
      })
      .add({
        targets: '.text-part1',
        opacity: 0,
        duration: 1000,
        easing: 'easeOutExpo',
        delay: 1000,
      });

    anime
      .timeline({ loop: true })
      .add({
        targets: '.text-part2 .letter',
        scale: [4, 1],
        opacity: [0, 1],
        translateZ: 0,
        easing: 'easeOutExpo',
        duration: 950,
        delay: function(el, i) {
          return 30 * i;
        },
      })
      .add({
        targets: '.text-part2',
        opacity: 0,
        duration: 1000,
        easing: 'easeOutExpo',
        delay: 1000,
      });

    $(window).scroll(function() {
      var scrollPos = $(window).scrollTop();
      var windowHeight = $(window).height();
    });

    $('.blood').click(function() {
      $(this).toggleClass('iamclicked');
      $('body').toggleClass('clickednow');
      $(this)
        .siblings()
        .toggleClass('hidenow');
      $('.clickshow').toggleClass('showit');
    });

    $('.lung').click(function() {
      $('.clickshow').toggleClass('showit');
      $(this).toggleClass('iamclicked');
      $('body').toggleClass('clickednow');
      $(this)
        .siblings()
        .toggleClass('hidenow');
    });
  }

  onLeave(origin, destination, direction) {
    console.log('Leaving section ' + origin.index);
  }

  afterLoad(origin, destination, direction) {
    let body = document.getElementsByTagName('body');
    console.log('After load: ' + destination.index);
    console.log(body[0].className);
  }

  render() {
    return (
      <>
        <MyNavbar />
        <ReactFullpage
          anchors={[
            'firstPage',
            'secondPage',
            'thirdPage',
            'fourthPage',
            'fifthPage',
          ]}
          sectionsColor={[]}
          scrollOverflow={true}
          onLeave={this.onLeave.bind(this)}
          afterLoad={this.afterLoad.bind(this)}
          render={({ state, fullpageApi }) => {
            let data = this.state.list;

            // console.log(data);
            return (
              <div id="fullpage-wrapper" className="LandingPage">
                <div className="section section1">
                  <Container fluid={true} className="theVision">
                    <Row>
                      <Col className="">
                        <div className="imgarea d-flex">
                          <div className="mx-auto  align-self-center">
                            <img
                              src={'/images/Big.svg'}
                              width="100px"
                              className="mx-auto d-block align-self-center bigLogo"
                            />
                            <h2 className="text-center text-part1">
                              The health
                            </h2>
                            <h2 className="text-center text-part2">
                              impacts of air polltion
                            </h2>
                          </div>
                        </div>
                      </Col>
                    </Row>
                    <Row>
                      <Col className="arrowDown">
                        <div className="text-center">SCROLL</div>
                        <div>
                          <img
                            src="/images/icon_Slippery_down.svg"
                            className="text-center d-block mx-auto"
                            alt=""
                          />
                        </div>
                      </Col>
                    </Row>
                  </Container>
                </div>

                <div className="section secondPage">
                  <Container fluid={true} className=" aboutus">
                    <Row className="arrowTop">
                      <Col>
                        <div>
                          <img
                            src="/images/icon_Slippery_up.svg"
                            className="text-center d-block mx-auto"
                            alt=""
                          />
                        </div>
                      </Col>
                    </Row>
                    <Row className="content">
                      <Col className="align-self-center">
                        <div className="page2-textArea d-flex">
                          <div className="mx-auto  align-self-center">
                            <h2 className="text-center page2-title">
                              <span className="p-sm-3">
                                <img src="/images/icon_story.svg" alt="" />
                                Respiratory purification
                              </span>
                            </h2>
                            {data.map(item => (
                              <p className="aboutArticle mx-auto">
                                {this.state.chinese
                                  ? item.aboutus.chinese
                                  : item.aboutus.english}
                                {/* {console.log(item.aboutus)} */}
                              </p>
                            ))}
                            {/* <p className="aboutArticle mx-auto">
                              {this.state.chinese
                                ? data[0].aboutus.chinese
                                : data[0].aboutus.english}
                              {console.log(data[0].aboutus)}
                            </p> */}
                          </div>
                        </div>
                      </Col>
                    </Row>
                    <Row className="arrowDown">
                      <Col>
                        <div className="text-center">SCROLL</div>
                        <div>
                          <img
                            src="/images/icon_Slippery_down.svg"
                            className="text-center d-block mx-auto"
                            alt=""
                          />
                        </div>
                      </Col>
                    </Row>
                  </Container>
                </div>

                <div className="section thirdPage">
                  <Container fluid={true} className="item2">
                    <Row className="arrowTop">
                      <Col>
                        <div>
                          <img
                            src="/images/icon_Slippery_up.svg"
                            className="text-center d-block mx-auto"
                            alt=""
                          />
                        </div>
                      </Col>
                    </Row>
                    <Row className="content">
                      <Col className="align-self-center">
                        <div className="page3-textArea d-flex">
                          <div className="mx-auto  align-self-center">
                            <h2 className="text-center page2-title">
                              <span className="p-sm-3">
                                <img src="/images/icon_story.svg" alt="" />
                                Respiratory purification
                              </span>
                            </h2>
                            {data.map(item => (
                              <p className="aboutArticle mx-auto">
                                {this.state.chinese
                                  ? item.item2.chinese
                                  : item.item2.english}
                              </p>
                            ))}
                          </div>
                        </div>
                      </Col>
                    </Row>
                    <Row className="arrowDown">
                      <Col>
                        <div className="text-center">SCROLL</div>
                        <div>
                          <img
                            src="/images/icon_Slippery_down.svg"
                            className="text-center d-block mx-auto"
                            alt=""
                          />
                        </div>
                      </Col>
                    </Row>
                  </Container>
                </div>

                {/* 第四頁器官 */}
                <div className="section fourthPage">
                  <Container fluid={true} className=" organs-page">
                    <Row className="arrowTop">
                      <Col>
                        <div>
                          <img
                            src="/images/icon_Slippery_up.svg"
                            className="text-center d-block mx-auto"
                            alt=""
                          />
                        </div>
                      </Col>
                    </Row>
                    <Row className="content">
                      <Col className="align-self-center">
                        <h2 className="text-center page4-title transition">
                          <span className="p-sm-3 title-text">
                            <img
                              src="/images/icon_select.svg"
                              alt=""
                              className="transition"
                            />
                            Select service
                          </span>
                        </h2>

                        <div className="organs d-flex  justify-content-center">
                          {/* 血管的圖片 */}
                          <div className="blood  transition">
                            <img
                              src="/images/血管.svg"
                              alt=""
                              className="transition"
                            />

                            <div className="clickshow transition">
                              <p className="text-center">Blood purification</p>

                              <span className="bg-border mx-auto">
                                <Link to="/productlist">
                                  <Button
                                    variant=" d-block"
                                    className="sendbtn"
                                  >
                                    Click
                                  </Button>
                                </Link>
                              </span>
                            </div>
                          </div>
                          {/* 肺的圖片 */}
                          <div className="lung  transition">
                            <img
                              src="/images/肺.svg"
                              alt=""
                              className="transition"
                            />

                            <div className="clickshow transition">
                              <p className="text-center">
                                Respiratory purification
                              </p>

                              <span class="bg-border mx-auto">
                                <Link to="/case">
                                  <Button
                                    variant=" d-block"
                                    className="sendbtn"
                                  >
                                    Click
                                  </Button>
                                </Link>
                              </span>
                            </div>
                          </div>
                          {/* <Link
                            to="/case"
                            url={'http://localhost:3000/case'}
                            author={'adele'}
                            perPage={10}
                          >
                          </Link> */}
                        </div>
                      </Col>
                    </Row>

                    <Row className="arrowDown">
                      <Col>
                        <div className="text-center">SCROLL</div>
                        <div>
                          <img
                            src="/images/icon_Slippery_down.svg"
                            className="text-center d-block mx-auto"
                            alt=""
                          />
                        </div>
                      </Col>
                    </Row>
                  </Container>
                </div>

                <div className="section fifthPage">
                  <Container fluid={true} className="contact-page">
                    <Row className="arrowTop">
                      <Col>
                        <div>
                          <img
                            src="/images/icon_Slippery_up.svg"
                            className="text-center d-block mx-auto"
                            alt=""
                          />
                        </div>
                      </Col>
                    </Row>
                    <Row className="content">
                      <Col className="align-self-center">
                        <h2 className="text-center page5-title">
                          <span className="p-2">
                            <img src="/images/icon_mail.svg" alt="" />
                            Contact
                          </span>
                        </h2>
                        <div
                          id="map"
                          className="mx-auto mt-4 position-relative"
                        >
                          <MyGooglemap />
                        </div>
                        <Bottomform />
                      </Col>
                    </Row>
                  </Container>
                </div>
              </div>
            );
          }}
        />
        <Language />
      </>
    );
  }

  // render() {
  //   return (
  //     <>
  //       <TopMenu />
  //       <Container fluid={true} className="LandingPage">
  //         <Row>
  //           <Col className="">
  //             <div className="imgarea d-flex">
  //               <div className="mx-auto  align-self-center">
  //                 <img
  //                   src={'/images/Big.svg'}
  //                   width="100px"
  //                   className="mx-auto d-block align-self-center bigLogo"
  //                 />
  //                 <h2 className="text-center text-part1">The health</h2>
  //                 <h2 className="text-center text-part2">
  //                   impacts of air polltion
  //                 </h2>
  //               </div>
  //             </div>
  //           </Col>
  //         </Row>
  //         <Row>
  //           <Col className="">
  //             <div className="aboutas">
  //               <p>
  //                 Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quae
  //                 cumque a molestiae sit quo sint cum repellendus error nemo
  //                 maxime, corporis facilis, debitis sequi recusandae nihil,
  //                 porro perspiciatis neque minima. Quia fuga qui eum nostrum
  //                 culpa natus consequuntur cum saepe! Maiores inventore cum
  //                 libero vitae saepe sed cupiditate? Beatae ex amet hic,
  //                 repellat veritatis incidunt autem! Modi iusto voluptate
  //                 obcaecati cum, voluptas ducimus. Et a illo, culpa magni quas
  //                 repellat minus sequi consequatur molestiae mollitia fugit
  //                 dolorum explicabo quam iure, id unde, eum iusto suscipit
  //                 eligendi eveniet saepe beatae repellendus error. Porro quia
  //                 velit unde expedita vel, dicta voluptatibus quidem quam.
  //                 Aperiam adipisci mollitia quod repellat ipsa rerum nobis harum
  //                 impedit perferendis animi quis illo soluta, veniam sunt alias
  //                 provident officiis. Illo, suscipit quo sapiente explicabo,
  //                 cupiditate consectetur recusandae odit minima accusamus non
  //                 placeat. Inventore et beatae at deleniti aspernatur est
  //                 eligendi, consequatur quasi consequuntur in excepturi
  //                 voluptatum iste doloremque ipsa nam assumenda. Veritatis,
  //                 maxime necessitatibus? Iusto quibusdam eius nihil, adipisci
  //                 aut, facilis rerum earum qui cumque deserunt odio. Sequi animi
  //                 aliquam dolorem nam deleniti. Magnam placeat rerum ipsa.
  //                 Vitae, similique. Dolore, saepe nulla minima assumenda, aut
  //                 est consectetur illum sed quis ipsa fuga sapiente praesentium
  //                 sint, blanditiis nesciunt dolorum! Explicabo suscipit, nihil
  //                 odio, id saepe blanditiis, maxime veniam placeat corporis
  //                 molestias quidem? Minima explicabo earum perspiciatis
  //                 perferendis optio, neque laborum et dignissimos. Nobis
  //                 architecto provident necessitatibus, excepturi beatae quisquam
  //                 quam ea velit aspernatur accusamus, perferendis, perspiciatis
  //                 tenetur officiis! Neque nisi magnam fugit beatae, autem non
  //                 molestiae. Vel ducimus, repudiandae laboriosam sed beatae ad,
  //                 cupiditate iste similique iure ipsam culpa rem nostrum
  //                 voluptate! Voluptatibus illum esse cupiditate molestias, quis
  //                 quae saepe consequatur nesciunt deleniti totam ex
  //                 necessitatibus beatae nemo adipisci inventore nobis
  //                 perferendis rerum delectus nisi illo ipsa non laudantium ipsum
  //                 sapiente. Perferendis neque pariatur explicabo voluptates
  //                 error et quas.
  //               </p>
  //             </div>
  //           </Col>
  //         </Row>
  //       </Container>
  //       <Container fluid={true}></Container>
  //     </>
  //   );
  // }
}
// ReactDOM.render(<FullpageWrapper />, document.getElementById("react-root"));

export default withRouter(LandingPage);
