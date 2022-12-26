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
                            <p>- Sister &Eacute;melyne in Burundi (Kirundi only)<br />o Mother Superior of the family Witnesses of Divine Mercy (TMD)<br />o omikburundi@gmail.com<br />- Mrs. (Doctor) Rosa Cento (Italian and English)<br />o President of the Oasi Association in Italy&nbsp;<br />o rcento@oasi.en.it<br />- Mrs. Jocelyne de Stadelhofen in Switzerland (French and English)<br />o jocelynedestadelhofen@gmail.com<br />- President of the Oasi Association in France (French)<br />o oasismisericorde@orange.fr<br />- Mr. Gabriel Legault (French and English)<br />o President of the Oasi Association in Canada<br />o gabylegault@gmail.com</p>
                            </div>
                            {/*Column 2 */}
                           
                            <div className="col-md-3 col-sm-6">
                                <h3>Main Orphanage, Bujumbura</h3>
                                <div className="card-footer">
                                    <div className="card-text">
                                        <div id="map-google-burundi">
                                            {/* <iframe loading="lazy"
                                               </iframe> */}
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