import React, { Component } from "react";
import { Control, Errors, Form } from "react-redux-form";
import { Link } from "react-router-dom";
import {
  Breadcrumb,
  BreadcrumbItem,
  Button,
  Col,
  Label,
  Row,
} from "reactstrap";

const required = (val) => val && val?.length;
const minLength = (len) => (val) =>
  val && val?.length && !isNaN(Number(val)) ? val?.length >= len : true;
const maxLength = (len) => (val) =>
  val && val?.length && !isNaN(Number(val)) ? val?.length <= len : true;
const isNumber = (val) => (val && val?.length ? !isNaN(Number(val)) : true);
const validEmail = (val) =>
  val && val?.length
    ? /^[A-Za-z0-9._%-+]+@[A-Za-z0-9._%-+]+\.[A-Za-z]{2,4}$/.test(val)
    : true;

class Contact extends Component {
  constructor(props) {
    super(props);

    // this.state = {
    //   firstname: "",
    //   lastname: "",
    //   telnum: "",
    //   email: "",
    //   agree: false,
    //   contactType: "Tel.",
    //   message: "",
    //   touched: {
    //     firstname: false,
    //     lastname: false,
    //     telnum: false,
    //     email: false,
    //     message: false,
    //   },
    //   errors: {
    //     firstname: "",
    //     lastname: "",
    //     telnum: "",
    //     email: "",
    //     message: "",
    //   },
    //   control: {
    //     firstname: "First name",
    //     lastname: "Last name",
    //     telnum: "Contact tel.",
    //     email: "Email",
    //     message: "Feedback",
    //   },
    // };

    this.submitHandler = this.submitHandler.bind(this);
    // this.inputHandler = this.inputHandler.bind(this);
    // this.handleBlur = this.handleBlur.bind(this);
  }

  // inputHandler(event) {
  //   this.setState({
  //     [event?.target?.name]: event?.target?.value,
  //   });
  // }

  async submitHandler(values) {
    await this.props.postFeedback(values);
    this.props.resetFeedbackForm();
  }

  // handleBlur = (field) => (evt) => {
  //   this.setState({
  //     touched: { ...this.state.touched, [field]: true },
  //     errors: {
  //       ...this.state.errors,
  //       [field]:
  //         this.state[field].localeCompare("") === 0
  //           ? `${this.state.control[field]} is required`
  //           : "",
  //     },
  //   });
  //   if (
  //     this.state.touched.telnum &&
  //     this.state.telnum.length > 0 &&
  //     this.state.telnum.length < 10
  //   ) {
  //     this.setState({
  //       errors: {
  //         ...this.state.errors,
  //         telnum: "Tel. number cannot be less than 10 digits",
  //       },
  //     });
  //   } else if (this.state.touched.telnum && this.state.telnum.length > 10) {
  //     this.setState({
  //       errors: {
  //         ...this.state.errors,
  //         telnum: "Tel. number cannot be greater than 10 digits",
  //       },
  //     });
  //   } else if (
  //     this.state.touched.telnum &&
  //     this.state.telnum.length > 0 &&
  //     !/^\d+$/.test(this.state.telnum)
  //   ) {
  //     this.setState({
  //       errors: {
  //         ...this.state.errors,
  //         telnum: "Tel. number can only contain digits",
  //       },
  //     });
  //   }
  //   if (
  //     this.state.touched.email &&
  //     this.state.email.length > 0 &&
  //     this.state.email.split("").filter((x) => x === "@").length === 0
  //   ) {
  //     this.setState({
  //       errors: {
  //         ...this.state.errors,
  //         email: "Email should contain atleast 1 @ symbol",
  //       },
  //     });
  //   }
  // };

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
            <Form
              model="feedback"
              onSubmit={(values) => this.submitHandler(values)}
            >
              <Row className="form-group mb-4">
                <Label md={2} for="firstname">
                  First Name
                </Label>
                <Col className="col-md-10">
                  <Control.text
                    model=".firstname"
                    name="firstname"
                    id="firstname"
                    placeholder="First name"
                    className="form-control"
                    validators={{ required }}
                  />
                  <Errors
                    className="text-danger"
                    model=".firstname"
                    show="touched"
                    messages={{
                      required: "First name is required",
                    }}
                  />
                </Col>
              </Row>
              <Row className="form-group mb-4">
                <Label md={2} for="lastname">
                  Last Name
                </Label>
                <Col className="col-md-10">
                  <Control.text
                    model=".lastname"
                    name="lastname"
                    id="lastname"
                    placeholder="Last name"
                    className="form-control"
                    validators={{ required }}
                  />
                  <Errors
                    className="text-danger"
                    model=".lastname"
                    show="touched"
                    messages={{
                      required: "Last name is required",
                    }}
                  />
                </Col>
              </Row>
              <Row className="form-group mb-4">
                <Label md={2} for="telnum">
                  Contact Tel.
                </Label>
                <Col className="col-md-10">
                  <Control.text
                    model=".telnum"
                    name="telnum"
                    id="telnum"
                    placeholder="Tel. number"
                    className="form-control"
                    validators={{
                      required,
                      minLength: minLength(10),
                      maxLength: maxLength(10),
                      isNumber,
                    }}
                  />
                  <Errors
                    className="text-danger"
                    model=".telnum"
                    show="touched"
                    messages={{
                      required: "Contact tel. is required",
                      minLength: "Contact tel. connot be less than 10 digits",
                      maxLength:
                        "Contact tel. cannot be greater than 10 digits",
                      isNumber: "Contact tel. must contain only numbers",
                    }}
                  />
                </Col>
              </Row>
              <Row className="form-group mb-4">
                <Label md={2} for="email">
                  Email
                </Label>
                <Col className="col-md-10">
                  <Control.text
                    model=".email"
                    name="email"
                    id="email"
                    placeholder="Email"
                    className="form-control"
                    validators={{ required, validEmail }}
                  />
                  <Errors
                    className="text-danger"
                    model=".email"
                    show="touched"
                    messages={{
                      required: "Email is required",
                      validEmail: "Email is invalid",
                    }}
                  />
                </Col>
              </Row>
              <Row className="form-group mb-4">
                <Label md={2} for="agree"></Label>
                <Col className="col-md-8">
                  <div className="form-check">
                    <Label check>
                      <Control.checkbox
                        model=".agree"
                        name="agree"
                        id="agree"
                        className="form-check-input"
                      />
                      <strong> May we contact you?</strong>
                    </Label>
                  </div>
                </Col>
                <Col className="col-md-2">
                  <Control.select
                    model=".contactType"
                    name="contactType"
                    id="contactType"
                    className="form-control"
                  >
                    <option>Select</option>
                    <option>Tel.</option>
                    <option>Email</option>
                  </Control.select>
                </Col>
              </Row>
              <Row className="form-group mb-4">
                <Label md={2} for="message">
                  Feedback
                </Label>
                <Col className="col-md-10">
                  <Control.textarea
                    model=".message"
                    name="message"
                    id="Feedback"
                    className="form-control"
                    validators={{ required }}
                  />
                  <Errors
                    className="text-danger"
                    model=".message"
                    show="touched"
                    messages={{
                      required: "Feedback is required",
                    }}
                  />
                </Col>
              </Row>
              <Button>Submit</Button>
            </Form>
          </div>
        </div>
      </div>
    );
  }
}

export default Contact;
