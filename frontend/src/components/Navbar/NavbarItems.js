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
import '../pages/Archdiocese/Archdiocese.js';

function NavbarItems() {
  const { t, i18n } = useTranslation();
  return (
    <div className="NavbarItems navbar">
      <Navbar bg="myNavBackground" variant="dark" fixed="top" expand="sm">
        <Container>
          <Navbar.Brand>
            <h2>{t("title")}</h2>
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
                <NavDropdown.Item href="Archdiocese">{t("Board_Directors")}</NavDropdown.Item>
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
                <NavDropdown.Item href="Archdiocese">{t("Archdiocese_Bujumbura")}</NavDropdown.Item>
              </NavDropdownMenu>
              <Nav.Link href="testimonials">{t("Testimonials")}</Nav.Link>
              <NavDropdownMenu title={t("projects")} id="collapsible-nav-dropdown" alignRight>
                <DropdownSubmenu href="#projectCur" title={t("current_projects")}>
                  <NavDropdown.Item href="#School1">{t("School")} / {t("Sidewalk")}</NavDropdown.Item>
                  <NavDropdown.Item href="#School2">{t("School")} / {t("Washroom")}</NavDropdown.Item>
                  <NavDropdown.Item href="#School3">{t("Medclinik")}</NavDropdown.Item>
                  <NavDropdown.Item href="#School4">{t("Schresidence")}</NavDropdown.Item>
                  <NavDropdown.Item href="#School5">{t("Staff_school")}</NavDropdown.Item>
                  <NavDropdown.Item href="#School6">{t("Miniproject")}</NavDropdown.Item>
                </DropdownSubmenu>
                <NavDropdown.Divider />
                <DropdownSubmenu href="#projectComp" title={t("Compprojects")}>
                  <NavDropdown.Item href="#ProjectComp1">{t("Orp_resident")}</NavDropdown.Item>
                  <NavDropdown.Item href="#ProjectComp2">{t("Sis_noviciat")}</NavDropdown.Item>
                  <NavDropdown.Item href="#ProjectComp1">{t("Chapel")}</NavDropdown.Item>
                  <NavDropdown.Item href="#ProjectComp1">{t("Land_Purchase")}</NavDropdown.Item>
                  <NavDropdown.Item href="#ProjectComp1">{t("Mini_Store")}</NavDropdown.Item>
                </DropdownSubmenu>
              </NavDropdownMenu>

              <Nav.Link href="Ourwork">{t("News")}</Nav.Link>
              <Nav.Link href="Contact">{t("Contactus")}</Nav.Link>
              <Nav.Link href="Login">{t("Login")}</Nav.Link>
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
