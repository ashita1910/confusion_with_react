import React, { Component } from "react";
import {
  Navbar,
  NavbarBrand,
  NavItem,
  Nav,
  Collapse,
  NavbarToggler,
} from "reactstrap";
import { NavLink } from "react-router-dom";

class Header extends Component {
  constructor(props) {
    super(props);

    this.state = {
      isNavOpen: false,
    };

    this.toggleNav = this.toggleNav.bind(this);
  }

  toggleNav() {
    this.setState({
      isNavOpen: !this.state.isNavOpen,
    });
  }

  render() {
    return (
      <>
        <Navbar dark expand="md">
          <div className="container d-md-flex">
            <NavbarToggler onClick={this.toggleNav} />
            <NavbarBrand className="mr-auto ms-3 ms-md-0" href="/">
              <img
                src="assets/images/logo.png"
                height="30"
                width="41"
                alt="Ristorante Con Fusion"
              />
            </NavbarBrand>
            <Collapse navbar isOpen={this.state.isNavOpen}>
              <Nav navbar>
                <NavItem>
                  <NavLink to="/home" className="nav-link">
                    <span className="fa fa-home fa-lg">Home</span>
                  </NavLink>
                </NavItem>
                <NavItem>
                  <NavLink to="/aboutus" className="nav-link">
                    <span className="fa fa-info fa-lg">About Us</span>
                  </NavLink>
                </NavItem>
                <NavItem>
                  <NavLink to="/menu" className="nav-link">
                    <span className="fa fa-list fa-lg">Menu</span>
                  </NavLink>
                </NavItem>
                <NavItem>
                  <NavLink to="/contactus" className="nav-link">
                    <span className="fa fa-address-card fa-lg">Contact Us</span>
                  </NavLink>
                </NavItem>
              </Nav>
            </Collapse>
          </div>
        </Navbar>
        <div className="p-5 mb-4 jumbotron">
          <div className="container-fluid py-5">
            <h1 className="display-5 fw-bold">Ristorante con Fusion</h1>
            <p className="col-md-8 fs-4">
              We take inspiration from the World's best cuisines, and create a
              unique fusion experience. Our lipsmacking creations will tickle
              your culinary senses!
            </p>
          </div>
        </div>
      </>
    );
  }
}

export default Header;
