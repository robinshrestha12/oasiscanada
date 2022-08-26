import React from "react";
import { CardImg } from "react-bootstrap";

const Card =({image, title, text})=>{
    return(
    <div className="card">
        <img src={image} alt="Card image"/>
        <h3>{title}</h3>
        <p>{text}</p>
    </div>
    );
};
export default Card;