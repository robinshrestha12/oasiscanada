import React from 'react';
import AliceCarousel from 'react-alice-carousel';
import 'react-alice-carousel/lib/alice-carousel.css';
import slide05 from "../ourwork/images/image012.jpg"
import slide06 from "../ourwork/images/image014.jpg"
import slide07 from "../ourwork/images/image016.jpg"
import slide08 from "../ourwork/images/image018.jpg"
function AliceCarousal() {
const responsive = {
  superLargeDesktop: {
    // the naming can be any, depends on you.
    breakpoint: { max: 4000, min: 3000 },
    items: 5
  },
  desktop: {
    breakpoint: { max: 3000, min: 1024 },
    items: 3
  },
  tablet: {
    breakpoint: { max: 1024, min: 464 },
    items: 2
  },
  mobile: {
    breakpoint: { max: 464, min: 0 },
    items: 1
  }
};
<Carousel responsive={responsive}>
  <div>     <img
                                                    src={slide01} height="400px" width="300px" alt="Img1" /></div>
  <div>Item 2</div>
  <div>Item 3</div>
  <div>Item 4</div>
</Carousel>;
}
export default AliceCarousal;