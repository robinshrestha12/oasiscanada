import React from 'react';
import './Testimonials.css';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';

export default function testimonials(){
  // const YOUTUBE_PLAYLIST_ITEMS_API = "";

  // async function getServerSideProps() {
  //   const res = await fetch(`${YOUTUBE_PLAYLIST_ITEMS_API}`);
  //   const data = await res.json();
  //   return {
  //     props: {
  //       data
  //     }
  //   }
  // }

  return (
  
    <div className="testimonials" >
       <div className='title'>Testimonials</div>
       <div className="alltestimonials" >
       <div className="song" >
      <div className="image">
      <p className="name">Title of Video</p>
      <iframe
        src="https://www.youtube.com/embed/9Rwhtpq1Vjw"
        frameborder="0"
        allow="autoplay; encrypted-media;fullscreen"  
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
        src="https://www.youtube.com/embed/7BWzWnnutRA"
        frameborder="0"
        allow="autoplay; encrypted-media;fullscreen"    
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
        src="https://www.youtube.com/embed/Ygyy374qYzs"
        frameborder="0"
        allow="autoplay; encrypted-media;fullscreen"  
        allowfullscreen
        title="video"
        width={300} height={150}
      />{" "}
      </div>
      
      <p className="artist"  >To embed a YouTube video into a React app, we can add an iframe into a React component with the embed video URL as the value of the src prop.</p>
      </div>
      </div>
      <Card style={{ width: '18rem' }}>
      <Card.Img variant="top" src="holder.js/100px180" />
      <Card.Body>
        <Card.Title>Card Title</Card.Title>
        <Card.Text>
          Some quick example text to build on the card title and make up the
          bulk of the card's content.
        </Card.Text>
        <Button variant="primary">Go somewhere</Button>
      </Card.Body>
    </Card>
    </div>
  )
}