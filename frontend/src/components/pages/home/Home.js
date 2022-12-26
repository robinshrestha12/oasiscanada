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
import slide21 from "../ourwork/images/orphanleft.jpg";
import schoolpic from "../ourwork/images/classroompic.jpg"
import "./Home.css";
import Carousalpictures from './Carousal';
import { useTranslation } from "react-i18next";
import { CarausalPics } from './CarausalPics';
import MultiCarousal from './MultiCarousal';
import LogOut from '../Authentication/Logout';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
//import slide05 from "../ourwork/images/image012.jpg"
import jumbobgimage from "../../assets/Jumbotronpic.png";
//class HomeCarauselComponent extends React.Component {
function HomeCarauselComponent() {
    const { t, i18n } = useTranslation();
    // render() {
    return (
        <div >

            <Container fluid style={{ paddingLeft: '0px', paddingRight: '0px' }}>
                <Row noGutters>
                    <img src={jumbobgimage} class="img-fluid" alt="Responsive image"></img>
                    {/* <Container fluid className={"no-gutters mx-0 px-0"}>
    <Row noGutters={true}> */}

                    {/* <div className='container-fluid'> */}

                    <div className="introscreen">
                        <h2>{t("Home_heading")}</h2>
                        <p>{t("Home_abstract")}</p>

                    </div>
                </Row>
            </Container>

            <Container>
                <Row className="d-flex justify-content-around ">

                    <Card className="custom-class" style={{ width: '18rem' }}>

                        <Card.Body>
                            <Card.Title>{t("Pic_1_Title")}</Card.Title>
                            <Card.Img src={slide21} ></Card.Img>
                            <Card.Text>
                            {t("Pic_1_Description")}
                            </Card.Text>
                            <Button variant="primary">See More ..</Button>
                        </Card.Body>
                    </Card>

                    <Card className="custom-class" style={{ width: '18rem' }}>

                        <Card.Body>
                            <Card.Title>{t("Pic_2_Title")}</Card.Title>
                            <Card.Img src={slide20} ></Card.Img>
                            <Card.Text>
                            {t("Pic_2_Description")}
                            </Card.Text>
                            <Button variant="primary">See More ..</Button>
                        </Card.Body>
                    </Card>
                    <Card className="custom-class" style={{ width: '18rem' }}>

                        <Card.Body>
                            <Card.Title>{t("Pic_3_Title")}</Card.Title>
                            <Card.Img src={schoolpic} ></Card.Img>
                            <Card.Text>
                            {t("Pic_3_Description")}
                            </Card.Text>
                            <Button variant="primary">See More ..</Button>
                        </Card.Body>
                    </Card>
                    <Card className="custom-class" style={{ width: '18rem' }}>

                        <Card.Body>
                            <Card.Title>{t("Pic_4_Title")}</Card.Title>
                            <Card.Img src={slide05} ></Card.Img>
                            <Card.Text>
                            {t("Pic_4_Description")}
                            </Card.Text>
                            <Button variant="primary">See More ..</Button>
                        </Card.Body>
                    </Card>
                    <Card className="custom-class" style={{ width: '18rem' }}>

                        <Card.Body>
                            <Card.Title>{t("Pic_5_Title")}</Card.Title>
                            <Card.Img src={slide05} ></Card.Img>
                            <Card.Text>
                            {t("Pic_5_Description")}
                            </Card.Text>
                            <Button variant="primary">See More ..</Button>
                        </Card.Body>
                    </Card>
                    <Card className="custom-class" style={{ width: '18rem' }}>

                        <Card.Body>
                            <Card.Title>{t("Pic_1_Title")}</Card.Title>
                            <Card.Img src={slide05} ></Card.Img>
                            <Card.Text>
                            {t("Pic_1_Description")}
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

