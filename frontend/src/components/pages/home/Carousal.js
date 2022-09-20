import React from "react";
import "./Carousal.js";
import { CarausalPics } from "./CarausalPics"
import { Slider } from "react-sleek";
import AliceCarousel, { Classnames } from "react-alice-carousel";
import Card from "./Card";
import "./Card.css";
import slide08 from "../ourwork/images/image018.jpg";
//import { Carousel } from "react-bootstrap";


function Carousal() {
    const settings = {
        infinite: true,
        lazyload: true,
        speed: 300,
        slidesToshow: true,
        centerPadding: 0,
    };


    return (


        < div className="container" >
        
            <img src={slide08} height="400px" width="300" alt="" />
            <p>text</p>
           
        </div >


    )
}
export default Carousal;