import React, { useState } from "react";
import ReactDOM from "react-dom";
import Carousel from "react-simply-carousel";
import CarouselPics, { CarausalPics } from "./CarausalPics";
import "./MultiCarausal.css";

function MultiCarousal() {
  const [activeSlide, setActiveSlide] = useState(0);

  return (
    <div>
      <Carousel
        updateOnItemClick
        containerProps={{
          style: {
            width: "100%",
            justifyContent: "space-between"
          }
        }}
        activeSlideIndex={activeSlide}
        activeSlideProps={{
          style: {
            background: "blue"
          }
        }}
        onRequestChange={setActiveSlide}
        forwardBtnProps={{
          children: ">",
          style: {
            width: 60,
            height: 60,
            minWidth: 60,
            alignSelf: "center"
          }
        }}
        backwardBtnProps={{
          children: "<",
          style: {
            width: 60,
            height: 60,
            minWidth: 60,
            alignSelf: "center"
          }
        }}
        itemsToShow={3}
        speed={400}
      >
      
       {/* {Array.from({ length: 10 }).map((item, index) => (
          <div
            style={{
              background: "red",
              width: 300,
              height: 400,
              border: "1px solid white",
              textAlign: "center",
              lineHeight: "240px",
              boxSizing: "border-box"
            }}
            key={index}
          >
            {index}
          </div>
        ))}
        */}
        {CarausalPics.map((pics,index) => (
            <div className="imageAlign">
           
          
                <img src={`${pics.image}`} alt={pics.title} />
                <p>{pics.text}</p>
            </div>
        )
            
        )
        

        }

      </Carousel>
    </div>
  );
}


export default MultiCarousal;