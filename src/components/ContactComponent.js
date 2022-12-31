import React, { Component } from "react";
import { Link } from "react-router-dom";
import {
  Breadcrumb,
  BreadcrumbItem,
  Button,
  Col,
  Form,
  FormFeedback,
  FormGroup,
  FormText,
  Input,
  Label,
} from "reactstrap";

class Contact extends Component {
  constructor(props) {
    super(props);

    this.state = {
      firstname: "",
      lastname: "",
      telnum: "",
      email: "",
      agree: false,
      contactType: "Tel.",
      message: "",
      touched: {
        firstname: false,
        lastname: false,
        telnum: false,
        email: false,
        message: false,
      },
      errors: {
        firstname: "",
        lastname: "",
        telnum: "",
        email: "",
        message: "",
      },
      control: {
        firstname: "First name",
        lastname: "Last name",
        telnum: "Contact tel.",
        email: "Email",
        message: "Feedback",
      },
    };

    this.submitHandler = this.submitHandler.bind(this);
    this.inputHandler = this.inputHandler.bind(this);
    this.handleBlur = this.handleBlur.bind(this);
  }

  inputHandler(event) {
    this.setState({
      [event?.target?.name]: event?.target?.value,
    });
  }

  submitHandler(event) {
    event.preventDefault();
    alert(JSON.stringify(this.state));
  }

  handleBlur = (field) => (evt) => {
    this.setState({
      touched: { ...this.state.touched, [field]: true },
      errors: {
        ...this.state.errors,
        [field]:
          this.state[field].localeCompare("") === 0
            ? `${this.state.control[field]} is required`
            : "",
      },
    });
    if (
      this.state.touched.telnum &&
      this.state.telnum.length > 0 &&
      this.state.telnum.length < 10
    ) {
      this.setState({
        errors: {
          ...this.state.errors,
          telnum: "Tel. number cannot be less than 10 digits",
        },
      });
    } else if (this.state.touched.telnum && this.state.telnum.length > 10) {
      this.setState({
        errors: {
          ...this.state.errors,
          telnum: "Tel. number cannot be greater than 10 digits",
        },
      });
    } else if (
      this.state.touched.telnum &&
      this.state.telnum.length > 0 &&
      !/^\d+$/.test(this.state.telnum)
    ) {
      this.setState({
        errors: {
          ...this.state.errors,
          telnum: "Tel. number can only contain digits",
        },
      });
    }
    if (
      this.state.touched.email &&
      this.state.email.length > 0 &&
      this.state.email.split("").filter((x) => x === "@").length === 0
    ) {
      this.setState({
        errors: {
          ...this.state.errors,
          email: "Email should contain atleast 1 @ symbol",
        },
      });
    }
  };

  render() {
    return (
      <div className="container">
        <div className="row">
          <Breadcrumb>
            <BreadcrumbItem>
              <Link to="/home">Home</Link>
            </BreadcrumbItem>
            <BreadcrumbItem active>Contact</BreadcrumbItem>
          </Breadcrumb>
          <div className="col-12">
            <h3>Contact</h3>
            <hr />
          </div>
        </div>
        <div className="row row-content">
          <div className="col-12">
            <h3>Location Information</h3>
          </div>
          <div className="col-12 col-sm-4 offset-sm-1">
            <h5>Our Address</h5>
            <address>
              121, Clear Water Bay Road
              <br />
              Clear Water Bay, Kowloon
              <br />
              HONG KONG
              <br />
              <i className="fa fa-phone"></i>: +852 1234 5678
              <br />
              <i className="fa fa-fax"></i>: +852 8765 4321
              <br />
              <i className="fa fa-envelope"></i>:{" "}
              <a href="mailto:confusion@food.net">confusion@food.net</a>
            </address>
          </div>
          <div className="col-12 col-sm-6 offset-sm-1">
            <h5>Map of our Location</h5>
          </div>
          <div className="col-12 col-sm-11 offset-sm-1">
            <div className="btn-group" role="group">
              <a
                role="button"
                className="btn btn-primary"
                href="tel:+85212345678"
              >
                <i className="fa fa-phone"></i> Call
              </a>
              <a role="button" className="btn btn-info">
                <i className="fa fa-skype"></i> Skype
              </a>
              <a
                role="button"
                className="btn btn-success"
                href="mailto:confusion@food.net"
              >
                <i className="fa fa-envelope-o"></i> Email
              </a>
            </div>
          </div>
        </div>
        <div className="row row-content">
          <div className="col-md-12 my-4">
            <h3>Send Us Your Feedback</h3>
          </div>
          <div className="col-md-12">
            <Form onSubmit={this.submitHandler}>
              <FormGroup row>
                <Label md={2} for="firstname">
                  First Name
                </Label>
                <Col className="col-md-10">
                  <Input
                    type="text"
                    name="firstname"
                    id="firstname"
                    placeholder="First name"
                    onChange={this.inputHandler}
                    onBlur={this.handleBlur("firstname")}
                    value={this.state.firstname}
                  />
                  <FormFeedback>{this.state.errors.firstname}</FormFeedback>
                </Col>
              </FormGroup>
              <FormGroup row>
                <Label md={2} for="exampleEmail">
                  Last Name
                </Label>
                <Col className="col-md-10">
                  <Input
                    type="text"
                    name="lastname"
                    id="lastname"
                    placeholder="Last name"
                    onChange={this.inputHandler}
                    onBlur={this.handleBlur("lastname")}
                    value={this.state.lastname}
                  />
                  <FormFeedback>{this.state.errors.lastname}</FormFeedback>
                </Col>
              </FormGroup>
              <FormGroup row>
                <Label md={2} for="exampleEmail">
                  Contact Tel.
                </Label>
                <Col className="col-md-10">
                  <Input
                    type="tel"
                    name="telnum"
                    id="telnum"
                    placeholder="Tel. number"
                    onChange={this.inputHandler}
                    onBlur={this.handleBlur("telnum")}
                    value={this.state.telnum}
                  />
                  <FormFeedback>{this.state.errors.telnum}</FormFeedback>
                </Col>
              </FormGroup>
              <FormGroup row>
                <Label md={2} for="email">
                  Email
                </Label>
                <Col className="col-md-10">
                  <Input
                    type="email"
                    name="email"
                    id="email"
                    placeholder="Email"
                    onChange={this.inputHandler}
                    onBlur={this.handleBlur("email")}
                    value={this.state.email}
                  />
                  <FormFeedback>{this.state.errors.email}</FormFeedback>
                </Col>
              </FormGroup>
              <FormGroup row>
                <Label md={2} for="exampleEmail"></Label>
                <Col className="col-md-8">
                  <Label check>
                    <Input
                      type="checkbox"
                      name="agree"
                      id="agree"
                      onChange={this.inputHandler}
                      value={this.state.agree}
                    />
                    <strong> May we contact you?</strong>
                  </Label>
                </Col>
                <Col className="col-md-2">
                  <Input
                    type="select"
                    name="contactType"
                    id="contactType"
                    onChange={this.inputHandler}
                    value={this.state.contactType}
                  >
                    <option>Tel.</option>
                    <option>Email</option>
                  </Input>
                </Col>
              </FormGroup>
              <FormGroup row>
                <Label md={2} for="message">
                  Feedback
                </Label>
                <Col className="col-md-10">
                  <Input
                    type="textarea"
                    name="message"
                    id="Feedback"
                    onChange={this.inputHandler}
                    onBlur={this.handleBlur("message")}
                    value={this.state.message}
                  />
                  <FormFeedback>{this.state.errors.message}</FormFeedback>
                </Col>
              </FormGroup>
              <Button>Submit</Button>
            </Form>
          </div>
        </div>
      </div>
    );
  }
}

export default Contact;
