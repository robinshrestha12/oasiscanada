import React from 'react';
import './Testimonials.css';
export default function testimonials(){

  return (
  
    <div className="testimonials" >
       <div className='title'>Testimonials</div>
       <div className="alltestimonials" >
       <div className="song" >
      <div className="image">
      <p className="name">Title of Video</p>
      <iframe
        src="https://www.youtube.com/embed/C0DPdy98e4c"
        frameborder="0"
        allow="autoplay; encrypted-media"
        allowfullscreen
        title="video"
        width={300} height={150}
      />{" "}
      </div>
      
      <p className="artist"  >To embed a YouTube video into a React app, we can add an iframe into a React component with the embed video URL as the value of the src prop.</p>
      </div>
      <div className="song" >
      <div className="image">
      <p className="name">Title of Video</p>
      <iframe
        src="https://www.youtube.com/embed/C0DPdy98e4c"
        frameborder="0"
        allow="autoplay; encrypted-media"
        allowfullscreen
        title="video"
        width={300} height={150}
      />{" "}
      </div>
      
      <p className="artist"  >To embed a YouTube video into a React app, we can add an iframe into a React component with the embed video URL as the value of the src prop.</p>
      </div>
      <div className="song" >
      <div className="image">
      <p className="name">Title of Video</p>
      <iframe
        src="https://www.youtube.com/embed/C0DPdy98e4c"
        frameborder="0"
        allow="autoplay; encrypted-media"
        allowfullscreen
        title="video"
        width={300} height={150}
      />{" "}
      </div>
      
      <p className="artist"  >To embed a YouTube video into a React app, we can add an iframe into a React component with the embed video URL as the value of the src prop.</p>
      </div>
      </div>
    </div>
  )
}