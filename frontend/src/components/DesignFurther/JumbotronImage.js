import React from "react";
//import Jumbotron from 'react-bootstrap/Jumbotron';
//import Container from 'react-bootstrap/Container';
//import styled from "styled-components";
import 'bootstrap/dist/css/bootstrap.min.css';
//const Styles =styled.div``;
import './JumbotronImage.css';
import jumbobgimage from "../assets/Jumbotronpic.png";
//console.log(jumbobgimage);
//import { Container, Row, Col } from "react-bootstrap";

function JumbotronImage() {
  return (
    // <div className="container-fluid">
    //   <div className="row">
    //     <div className='jumbotron-bgimage'
    //     >
    //       <><h2 className="mb-4">
    //         <div className="text-white">
    //           Orphelinat l'Oasis
    //         </div>

    //       </h2><p className="mb-4">

    //         </p></>
    //     </div>
    //   </div>
    // </div>
    // <div>
    //   <div className="row">
    //     <img 
    //     src={jumbobgimage}
    //     className="col-lg-12"
    //     alt="Responsive img"
    //     />
    //   </div>
    // </div>
<div>
<img src={jumbobgimage} className="img-fluid w-100 mt-5"   alt="Responsive image"></img>

    {/* <Container fluid style={{paddingLeft: '0px', paddingRight: '0px'}}>
    <Row noGutters>
    <img src={jumbobgimage} class="img-fluid" alt="Responsive image"></img>
    {/* <img className="mw-100" src={jumbobgimage} ></img> */}
    
    {/* </Row>
    </Container> */} 
    </div>
  )
}

// <div className="  p-5 mb-4 rounded-3 text-white text-start" 
// style={{backgroundImage: `url(${jumbobgimage})`, backgroundSize:'cover',backgroundPosition:"center", backgroundRepeat:"no-repeat"}} >
//   <><h2 className="mb-4">
//    Orphelinat l'Oasis
//   </h2><p className="mb-4">

//     </p></>
//   </div>
//   )
// }
export default JumbotronImage;
