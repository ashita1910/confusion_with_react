import React, { Component } from "react";
import {
  Navbar,
  NavbarBrand,
  NavItem,
  Nav,
  Collapse,
  NavbarToggler,
  Form,
  Button,
  FormGroup,
  Label,
  Input,
  Modal,
  ModalHeader,
  ModalBody,
  FormFeedback,
} from "reactstrap";
import { NavLink } from "react-router-dom";
import { baseUrl } from "../shared/baseUrl";

class Header extends Component {
  constructor(props) {
    super(props);

    this.state = {
      isNavOpen: false,
      isModalOpen: false,
      errors: {
        username: "",
        password: "",
      },
      control: {
        username: "Username",
        password: "Password",
      },
    };

    this.toggleNav = this.toggleNav.bind(this);
    this.toggleModal = this.toggleModal.bind(this);
    this.handleLogin = this.handleLogin.bind(this);
    this.handleBlur = this.handleBlur.bind(this);
  }

  toggleNav() {
    this.setState({
      isNavOpen: !this.state.isNavOpen,
    });
  }

  toggleModal() {
    this.setState({
      isModalOpen: !this.state.isModalOpen,
    });
  }

  handleLogin(event) {
    event.preventDefault();
    if (this.username.value !== "" && this.password.value !== "") {
      this.toggleModal();
      alert(
        "Username: " +
          this.username.value +
          " Password: " +
          this.password.value +
          " Remember: " +
          this.remember.checked
      );
    }
  }

  handleBlur = (field) => (event) => {
    if (field === "username") {
      this.setState({
        errors: {
          ...this.state.errors,
          [field]:
            this.username.value.localeCompare("") === 0
              ? `${this.state.control[field]} is required`
              : "",
        },
      });
    } else if (field === "password") {
      this.setState({
        errors: {
          ...this.state.errors,
          [field]:
            this.password.value.localeCompare("") === 0
              ? `${this.state.control[field]} is required`
              : "",
        },
      });
    }
  };

  render() {
    return (
      <>
        <Navbar dark expand="md">
          <div className="container d-md-flex">
            <NavbarToggler onClick={this.toggleNav} />
            <NavbarBrand className="mr-auto ms-3 ms-md-0" href="/">
              <img
                src={baseUrl + "images/logo.png"}
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
                <NavItem className="ms-md-auto my-3 mt-md-0">
                  <Button onClick={this.toggleModal} className="btn-warning">
                    Login<span className="fa fa-sign-in fa-lg ms-2"></span>
                  </Button>
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
        <Modal isOpen={this.state.isModalOpen} toggle={this.toggleModal}>
          <ModalHeader toggle={this.toggleModal}>Login</ModalHeader>
          <ModalBody>
            <Form onSubmit={this.handleLogin}>
              <FormGroup>
                <Label htmlFor="username">Username</Label>
                <Input
                  type="text"
                  id="username"
                  name="username"
                  innerRef={(input) => (this.username = input)}
                  onBlur={this.handleBlur("username")}
                />
                <FormFeedback>{this.state.errors.username}</FormFeedback>
              </FormGroup>
              <FormGroup>
                <Label htmlFor="password">Password</Label>
                <Input
                  type="password"
                  id="password"
                  name="password"
                  innerRef={(input) => (this.password = input)}
                  onBlur={this.handleBlur("password")}
                />
                <FormFeedback>{this.state.errors.password}</FormFeedback>
              </FormGroup>
              <FormGroup check>
                <Label check>
                  <Input
                    type="checkbox"
                    name="remember"
                    innerRef={(input) => (this.remember = input)}
                  />
                  Remember me
                </Label>
              </FormGroup>
              <Button
                type="submit"
                value="submit"
                color="primary"
                className="mt-3"
              >
                Login
              </Button>
            </Form>
          </ModalBody>
        </Modal>
      </>
    );
  }
}

export default Header;
