import React, { Component } from "react";
import { Nav, Navbar, NavbarBrand, NavDropdown, NavItem, MenuItem, Container } from 'react-bootstrap';
import "bootstrap/dist/css/bootstrap.min.css";
import "./Footer.css"
import { Carousel, Row, Col } from 'react-bootstrap';
class AppFooter extends Component {
    render() {
        return (
            <div id="footer1" className="footer-bottom"  >
                <div className="footer">
                    <div className="container">
                        <Container>
                            <Row className="d-flex justify-content-around">
                                <Col md="auto">
                                    <h3>Contact Us</h3>
                                    <div className="ContactDetails">
                                    <p>- Sister &Eacute;melyne in Burundi (Kirundi only)<br />
                                    <ul>
                                        Mother Superior of the family Witnesses of Divine Mercy (TMD)
                                        <li>omikburundi@gmail.com</li>
                                    </ul>
                               
                                    
                                    - Mrs. (Doctor) Rosa Cento (Italian and English)<br />
                                    <ul>
                                        President of the Oasi Association in Italy
                                        <li>rcento@oasi.en.it</li>
                                    </ul>
                                    
                                 
                                    - Mrs. Jocelyne de Stadelhofen in Switzerland (French and English)<br />
                                    <ul>
                                        <li>jocelynedestadelhofen@gmail.com</li>                                       
                                    </ul>
                                  
                                   
                                    - President of the Oasi Association in France (French)<br />
                                    <ul>
                                        <li>oasismisericorde@orange.fr</li>                                        
                                    </ul>
                                   
                                    - Mr. Gabriel Legault (French and English)<br />
                                    <ul>
                                        President of the Oasi Association in Canada
                                        <li>gabylegault@gmail.com</li>
                                    </ul>
                                    </p>
                                    </div>
                                   
                                </Col>
                                <Col md="auto">
                                    <h3>Main Orphanage, Bujumbura</h3>
                                    <div className="card-footer">
                                        <div className="card-text">
                                            <div id="map-google-burundi">
                                                {/* <iframe loading="lazy"
                                               </iframe> */}
                                            </div>
                                        </div>

                                    </div>
                                </Col>
                            </Row>

                        </Container>
                       
                    </div>
                </div>
                <div className="footer-bottom-text">
                    <p className="text-xl-center">
                        &copy; {new Date().getFullYear()} Oasis Muvyeyi w'Ikigongwe, Burundi- All Rights Reserved.
                    </p>
                </div>
            </div>

        )
    }
}
export default AppFooter;