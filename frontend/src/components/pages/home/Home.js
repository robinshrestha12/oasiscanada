import React, { Component } from 'react';
import { Carousel } from 'react-bootstrap';
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
import "./Home.css";
import Carousalpictures from './Carousal';
import { CarausalPics } from './CarausalPics';
import MultiCarousal from './MultiCarousal';
import LogOut from '../Authentication/Logout';

class HomeCarauselComponent extends React.Component {
    render() {
        return (
            <div>
                <div className="row">
                    <div className='container-fluid'>
                        <div className="introscreen">
                            <h2>Une orphelinat aupres des enfants demunis que la Providence nous amene !</h2>
                            <p>Ce site est le site de l'association OASIS Mère de Miséricorde, associée à la fondation OASI muvyeyi w'ikigongwe au Burundi</p>

                        </div>

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

                    </div>

                </div>
                <div className="row">
                    <h1>---</h1>
                </div>


                <div className="row">
                    <Carousalpictures />

                </div>

            </div>
        );
    }
}
export default HomeCarauselComponent;

