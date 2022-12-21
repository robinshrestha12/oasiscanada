import React, { Component } from 'react';
import { Carousel, Container, Row, Col } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import { render } from '@testing-library/react';
import slide01 from "../ourwork/images/image001.jpg"
import slide02 from "../ourwork/images/image004.jpg"
import slide03 from "../ourwork/images/image007.jpg"
import slide04 from "../ourwork/images/image009.jpg"
import slide05 from "../ourwork/images/image012.jpg"
import slide06 from "../ourwork/images/image014.jpg"
import slide07 from "../ourwork/images/image016.jpg"
import slide08 from "../ourwork/images/image018.jpg"
import slide20 from "../ourwork/images/Foodgiving.jpg"
import slide21 from "../ourwork/images/orphanleft.jpg"
import "./Home.css";
import Carousalpictures from './Carousal';
import { CarausalPics } from './CarausalPics';
import MultiCarousal from './MultiCarousal';
import LogOut from '../Authentication/Logout';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
//import slide05 from "../ourwork/images/image012.jpg"
import jumbobgimage from "../../assets/Jumbotronpic.png";
//class HomeCarauselComponent extends React.Component {
function HomeCarauselComponent() {
   // render() {
        return (
            <div >
                
            <Container fluid style={{paddingLeft: '0px', paddingRight: '0px'}}>
<Row noGutters>
<img src={jumbobgimage} class="img-fluid" alt="Responsive image"></img>
{/* <Container fluid className={"no-gutters mx-0 px-0"}>
    <Row noGutters={true}> */}
       
                    {/* <div className='container-fluid'> */}
                      
                            <div className="introscreen">
                                <h2>Une orphelinat aupres des enfants demunis que la Providence nous amene !</h2>
                                <p>Ce site est le site de l'association OASIS Mère de Miséricorde, associée à la fondation OASI muvyeyi w'ikigongwe au Burundi</p>

                            </div>
    </Row>
    </Container>

    <Container>
    <Row className="d-flex justify-content-around ">

           <Card className="custom-class" style={{ width: '18rem' }}>
      
      <Card.Body>
        <Card.Title>We save them</Card.Title>
      <Card.Img src={slide21} ></Card.Img>
        <Card.Text>
         This baby's mother died giving birth. The father couldn't keep the child.
        </Card.Text>
        <Button variant="primary">See More ..</Button>
      </Card.Body>
    </Card>

     <Card className="custom-class" style={{ width: '18rem' }}>
      
      <Card.Body>
        <Card.Title>We feed them</Card.Title>
      <Card.Img src={slide20} ></Card.Img>
        <Card.Text>
          Some quick example text to build on the card title and make up the
          bulk of the card's content.
        </Card.Text>
        <Button variant="primary">See More ..</Button>
      </Card.Body>
    </Card>
    <Card className="custom-class" style={{ width: '18rem' }}>
      
      <Card.Body>
        <Card.Title>We love them</Card.Title>
      <Card.Img src={slide05} ></Card.Img>
        <Card.Text>
          Some quick example text to build on the card title and make up the
          bulk of the card's content.
        </Card.Text>
        <Button variant="primary">See More ..</Button>
      </Card.Body>
    </Card>
    <Card className="custom-class" style={{ width: '18rem' }}>
      
      <Card.Body>
        <Card.Title>We educate them</Card.Title>
      <Card.Img src={slide05} ></Card.Img>
        <Card.Text>
          Some quick example text to build on the card title and make up the
          bulk of the card's content.
        </Card.Text>
        <Button variant="primary">See More ..</Button>
      </Card.Body>
    </Card>
    <Card className="custom-class" style={{ width: '18rem' }}>
      
      <Card.Body>
        <Card.Title>We catechise them</Card.Title>
      <Card.Img src={slide05} ></Card.Img>
        <Card.Text>
          Some quick example text to build on the card title and make up the
          bulk of the card's content.
        </Card.Text>
        <Button variant="primary">See More ..</Button>
      </Card.Body>
    </Card>
    <Card className="custom-class" style={{ width: '18rem' }}>
      
      <Card.Body>
        <Card.Title>Former Orphans Share</Card.Title>
      <Card.Img src={slide05} ></Card.Img>
        <Card.Text>
          Some quick example text to build on the card title and make up the
          bulk of the card's content.
        </Card.Text>
        <Button variant="primary">See More ..</Button>
      </Card.Body>
    </Card>


    

                        <Carousel>

                            <Carousel.Item>
                                <div className="row">
                                    <div className="col-md-6">
                                        <div className="single-box">
                                            <div className="image-area">
                                                <img
                                                    src={slide01} height="400px" width="300px" alt="Img1" />
                                                <div className="image-text">
                                                    <h2>previous condition</h2>
                                                    <p>He used to live....in ..desctiption</p>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-md-6">
                                        <div className="single-box">
                                            <div className="image-area">
                                                <img
                                                    src={slide02} height="400px" width="300px" alt="Img1" />
                                                <div className="image-text">
                                                    <h2>Current condition</h2>
                                                    <p>He has improved a lot...desctiption</p>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>

                            </Carousel.Item>
                            <Carousel.Item>
                                <div className="row">
                                    <div className="col-md-6">
                                        <div className="single-box">
                                            <div className="image-area">
                                                <img
                                                    src={slide03} height="400px" width="300px" alt="Img1" />
                                                <div className="image-text">
                                                    <h2>previous condition</h2>
                                                    <p>He used to live....in ..desctiption</p>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-md-6">
                                        <div className="single-box">
                                            <div className="image-area">
                                                <img
                                                    src={slide04} height="400px" width="300px" alt="Img1" />
                                                <div className="image-text">
                                                    <h2>Current condition</h2>
                                                    <p>He has improved a lot...desctiption</p>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>

                            </Carousel.Item>
                            <Carousel.Item>
                                <div className="row">
                                    <div className="col-md-6">
                                        <div className="single-box">
                                            <div className="image-area">
                                                <img
                                                    src={slide05} height="400px" width="300px" alt="Img1" />
                                                <div className="image-text">
                                                    <h2>previous condition</h2>
                                                    <p>He used to live....in ..desctiption</p>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-md-6">
                                        <div className="single-box">
                                            <div className="image-area">
                                                <img
                                                    src={slide06} height="400px" width="300px" alt="Img1" />
                                                <div className="image-text">
                                                    <h2>Current condition</h2>
                                                    <p>He has improved a lot...desctiption</p>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>

                            </Carousel.Item>
                            <Carousel.Item>
                                <div className="row">
                                    <div className="col-md-6">
                                        <div className="single-box">
                                            <div className="image-area">
                                                <img
                                                    src={slide07} height="400px" width="300px" alt="Img1" />
                                                <div className="image-text">
                                                    <h2>previous condition</h2>
                                                    <p>He used to live....in ..desctiption</p>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-md-6">
                                        <div className="single-box">
                                            <div className="image-area">
                                                <img
                                                    src={slide08} height="400px" width="300px" alt="Img1" />
                                                <div className="image-text">
                                                    <h2>Current condition</h2>
                                                    <p>He has improved a lot...desctiption</p>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>

                            </Carousel.Item>

                        </Carousel>

                      
                        

                {/* </Row>
                </Container> */}
                <div className="row">
                    <h1>---</h1>
                </div>


                <div className="row">
                    <MultiCarousal />

                </div>
                </Row>
</Container>
            </div>
        );
    }
//}
export default HomeCarauselComponent;

