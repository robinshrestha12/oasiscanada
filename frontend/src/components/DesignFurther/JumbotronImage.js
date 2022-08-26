import React from "react";
//import Jumbotron from 'react-bootstrap/Jumbotron';
//import Container from 'react-bootstrap/Container';
//import styled from "styled-components";

//const Styles =styled.div``;
import './JumbotronImage.css';
import jumbobgimage from "../assets/Jumbotronpic.png";
//console.log(jumbobgimage);
function JumbotronImage(){
    return (
 
<div class="  p-5 mb-4 rounded-3 text-white text-start" 
    style={{backgroundImage: `url(${jumbobgimage})`, backgroundSize:'cover', width:'100%', backgroundPosition:"center", backgroundRepeat:"no-repeat"}} >
      <><h2 class="mb-4">
       Orphelinat l'Oasis
      </h2><p class="mb-4">
         
        </p></>
      </div>
      )
    }
    
export default JumbotronImage;
