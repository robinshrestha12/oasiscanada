import React, { Component } from "react";
import { Nav, Navbar, NavbarBrand, NavDropdown, NavItem, MenuItem, Container } from 'react-bootstrap';
import "bootstrap/dist/css/bootstrap.min.css";
import "./Footer.css"
class AppFooter extends Component {
    render() {
        return (
            <div id="footer1" className="bottom"  >
                <div className="footer">
                    <div className="container">
                        
                        <div className="row">
                            {/*Column 1 */}
                            <div className="col-md-3 col-sm-6">
                            <h3>Contact Us</h3>
                            <h3>Burundi</h3>
                                <ul>
                                    <ul>Emeline NDAYIKENGURUKIYE</ul>
                                    <ul>Leader of Tenoins de la Misericorde Divine</ul>
                                    <ul>Bujumbura, Burundi</ul>
                                    <ul>omikburundi@gmail.com</ul>
                                </ul>
                            </div>
                            {/*Column 2 */}
                            <div className="col-md-3 col-sm-6">
                           
                            </div>
                            <div className="col-md-3 col-sm-6">
                                <h3>Main Orphanage, Bujumbura</h3>
                                <div className="card-footer">
                                    <div className="card-text">
                                        <div id="map-google-burundi">
                                            <iframe loading="lazy"
                                                src="https://www.google.com/maps/embed/v1/place?q=place_id:ChIJiQFBuWaDwRkRYqHa_a7cqSI&key=AIzaSyDEpYtJ2kzcWljs9UYge7rPPf10pByzMus"></iframe>
                                        </div>
                                    </div>

                                </div>

                            </div>
                        </div>

                    </div>
                </div>
                <div className="footer">
                    <p className="text-xl-center">
                        &copy; {new Date().getFullYear()} Oasis Muvyeyi w'Ikigongwe, Burundi- All Rights Reserved.
                    </p>
                </div>
            </div>

        )
    }
}
export default AppFooter;