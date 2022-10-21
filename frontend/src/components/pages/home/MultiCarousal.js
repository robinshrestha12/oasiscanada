import React, { Component } from 'react';
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import slide05 from "../ourwork/images/image012.jpg"
import slide06 from "../ourwork/images/image014.jpg"
import slide07 from "../ourwork/images/image016.jpg"
import slide08 from "../ourwork/images/image018.jpg"

function MultiCarousal() {

  const responsive = {
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 4,
      slidesToSlide: 3 // optional, default to 1.
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 3,
      slidesToSlide: 2 // optional, default to 1.
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1,
      slidesToSlide: 1 // optional, default to 1.
    }
  };
  return (
    <div>
      <Carousel
        swipeable={false}
        draggable={false}
        showDots={true}
        responsive={responsive}
        ssr={true} // means to render carousel on server-side.
        infinite={true}
        // autoPlay={this.props.deviceType !== "mobile" ? true : false}
        autoPlaySpeed={1000}
        keyBoardControl={true}
        customTransition="all .5"
        transitionDuration={500}
        containerClass="carousel-container"
        removeArrowOnDeviceType={["tablet", "mobile"]}
        // deviceType={this.props.deviceType}
        dotListClass="custom-dot-list-style"
        itemClass="carousel-item-padding-40-px"
      >

        <div> 
          <img src={slide05} height="400px" width="300px" alt="Img1" />
        </div>
        <div>
        <img src={slide06} height="400px" width="300px" alt="Img1" />
        </div>
        <div>
        <img src={slide07} height="400px" width="300px" alt="Img1" />
        </div>
        <div>
        <img  src={slide08} height="400px" width="300px" alt="Img1" />
        </div>
      </Carousel>

    </div>

  )
}


export default MultiCarousal;