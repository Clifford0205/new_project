import React from 'react';
import MyNavbar from '../component/MyNavbar';
import Language from '../component/Language';
import MapContainer from '../component/GoogleMap';
import ReactDOM from 'react-dom';
import ReactFullpage from '@fullpage/react-fullpage';
import { Container, Row, Col, Form, Button, Carousel } from 'react-bootstrap';
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
    window.addEventListener('scroll', this.handleScroll);
  }

  onLeave(origin, destination, direction) {
    console.log('Leaving section ' + origin.index);
  }

  afterLoad(origin, destination, direction) {
    let body = document.getElementsByTagName('body');
    console.log('After load: ' + destination.index);
    console.log(body[0].className);
  }

  handleScroll = () => {
    console.log('安安');
  };

  render() {
    console.log(this.state);
    return (
      <>
        <MyNavbar />
        <div className="LandingPage">
          <div className="one-page">
            <Carousel>
              <Carousel.Item>
                <img
                  className="d-block slider-img"
                  src="https://shoplineimg.com/5cc80df915c071000101084d/5d146daccb574871584ba324/2000x.webp?source_format=jpg"
                  alt="First slide"
                />
                <Carousel.Caption>
                  <h3>First slide label</h3>
                  <p>
                    Nulla vitae elit libero, a pharetra augue mollis interdum.
                  </p>
                </Carousel.Caption>
              </Carousel.Item>
              <Carousel.Item>
                <img
                  className="d-block slider-img"
                  src="https://shoplineimg.com/5cc80df915c071000101084d/5d146df1b0b0cf001a9f0ce2/2000x.webp?source_format=jpg"
                  alt="Third slide"
                />

                <Carousel.Caption>
                  <h3>Second slide label</h3>
                  <p>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                  </p>
                </Carousel.Caption>
              </Carousel.Item>
              <Carousel.Item>
                <img
                  className="d-block slider-img"
                  src="https://shoplineimg.com/5cc80df915c071000101084d/5d146dc480fd5b002915a6f2/2000x.webp?source_format=jpg"
                  alt="Third slide"
                />

                <Carousel.Caption>
                  <h3>Third slide label</h3>
                  <p>
                    Praesent commodo cursus magna, vel scelerisque nisl
                    consectetur.
                  </p>
                </Carousel.Caption>
              </Carousel.Item>

              <Carousel.Item>
                <img
                  className="d-block slider-img"
                  src="https://shoplineimg.com/5cc80df915c071000101084d/5d146ddac2f1e6002c7b9f93/2000x.webp?source_format=jpg"
                  alt="Third slide"
                />

                <Carousel.Caption>
                  <h3>Third slide label</h3>
                  <p>
                    Praesent commodo cursus magna, vel scelerisque nisl
                    consectetur.
                  </p>
                </Carousel.Caption>
              </Carousel.Item>
            </Carousel>
          </div>

          <div className="one-page"></div>
        </div>
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
