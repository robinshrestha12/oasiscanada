import React, { Component } from 'react';
import '../pages/about/About.js';
import { Nav, Navbar, NavDropdown, NavItem, MenuItem, Container } from 'react-bootstrap';
import { DropdownSubmenu, NavDropdownMenu } from 'react-bootstrap-submenu';
import './NavbarItems.css';
import { useTranslation } from 'react-i18next';
import LanguageSwitcher from '../languageTool/LanguageSwitcher.js';
import "bootstrap/dist/css/bootstrap.min.css";
//import JumbotronImage from '../DesignFurther/JumbotronImage';
import LogOut from '../pages/Authentication/Logout.js';

function NavbarItems() {
  const { t, i18n } = useTranslation();
  return (
    <div className="NavbarItems navbar">
      <Navbar bg="myNavBackground" variant="dark" fixed="top" expand="sm">
        <Container>
          <Navbar.Brand>
            <h2>Oasi Muvyeyi w'Ikigongwe</h2>
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="responsive-navbar-nav" />
          <Navbar.Collapse id="responsive-navbar-nav">
            <Nav className="ms-auto" >
              <Nav.Link href="Home">{t("home_name")}</Nav.Link>
              <NavDropdownMenu title={t("About")} id="about-nav-dropdown" alignRight>
                <NavDropdown.Item href="#vision">{t("Vision")}</NavDropdown.Item>
                <NavDropdown.Divider />
                <NavDropdown.Item href="#mission">{t("Mission")}</NavDropdown.Item>
                <NavDropdown.Divider />
                <NavDropdown.Item href="About">{t("History")}</NavDropdown.Item> 
                <NavDropdown.Item href="#AnnualReport">{t("Annual_Reports")}</NavDropdown.Item>
                <NavDropdown.Item href="#SistersWitness">{t("Sister's_Witness")}</NavDropdown.Item>
                <NavDropdown.Item href="#BoardOfDirectors">{t("Board_Directors")}</NavDropdown.Item>
                <DropdownSubmenu title={t("International_Associations")} id="collapsible-nav-dropdown">
                  <NavDropdown.Item href="#Italy">{t("Italy")}</NavDropdown.Item>
                  <NavDropdown.Item href="#France">{t("France")}</NavDropdown.Item>
                  <NavDropdown.Item href="#Switzerland">{t("Switzerland")}</NavDropdown.Item>
                  <NavDropdown.Item href="#Canada">{t("Canada")}</NavDropdown.Item>
                  <NavDropdown.Item href="#Canada">{t("Archdiocese_Bujumbura")}</NavDropdown.Item>
                  <DropdownSubmenu href="#Others" title={t("Others")}>
                    <NavDropdown.Item href="#Donor1">{t("Archdiocese_Bujumbura")}</NavDropdown.Item>
                    <NavDropdown.Item href="#Donor2">{t("Donor_2")}</NavDropdown.Item>
                    <NavDropdown.Item href="#Donor3">{t("Donor_3")}</NavDropdown.Item>
                  </DropdownSubmenu>
                </DropdownSubmenu>
                <NavDropdown.Item href="#BoardOfDirectors">{t("Archdiocese_Bujumbura")}</NavDropdown.Item>
              </NavDropdownMenu>
              <Nav.Link href="testimonials">Testimonials</Nav.Link>
              <NavDropdownMenu title="Projects" id="collapsible-nav-dropdown" alignRight>
                <DropdownSubmenu href="#projectCur" title="Current Projects">
                  <NavDropdown.Item href="#School1">School/SideWalk</NavDropdown.Item>
                  <NavDropdown.Item href="#School2">School/Washroom</NavDropdown.Item>
                  <NavDropdown.Item href="#School3">Medical Clinic</NavDropdown.Item>
                  <NavDropdown.Item href="#School4">School Residence</NavDropdown.Item>
                  <NavDropdown.Item href="#School5">Staff School</NavDropdown.Item>
                  <NavDropdown.Item href="#School6">Mini Projects</NavDropdown.Item>
                </DropdownSubmenu>
                <NavDropdown.Divider />
                <DropdownSubmenu href="#projectComp" title="Project Completed">
                  <NavDropdown.Item href="#ProjectComp1">Orphanage Residence</NavDropdown.Item>
                  <NavDropdown.Item href="#ProjectComp2">Sisters Residence</NavDropdown.Item>
                  <NavDropdown.Item href="#ProjectComp1">Chapel</NavDropdown.Item>
                  <NavDropdown.Item href="#ProjectComp1">Land Purchase</NavDropdown.Item>
                  <NavDropdown.Item href="#ProjectComp1">Mini-Store</NavDropdown.Item>
                </DropdownSubmenu>
              </NavDropdownMenu>

              <Nav.Link href="Ourwork">News</Nav.Link>
              <Nav.Link href="Contact">Contact Us</Nav.Link>
              <Nav.Link href="Login">Members Login</Nav.Link>
              <Nav.Link href="Donate">{t("Donate")}</Nav.Link>
              <LanguageSwitcher />
              <LogOut/>
            </Nav>
          </Navbar.Collapse>
        </Container>
        
      </Navbar>
    </div>
  )
}

export default NavbarItems;
