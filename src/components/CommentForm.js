import { Component } from "react";
import { Control, Errors, LocalForm } from "react-redux-form";
import {
  Button,
  Col,
  Label,
  Modal,
  ModalBody,
  ModalHeader,
  Row,
} from "reactstrap";

const required = (val) => val && val?.length;
const minLength = (len) => (val) =>
  val && val?.length && /^[a-zA-Z ]+$/.test(val)
    ? val && val?.length >= len
    : true;
const maxLength = (len) => (val) =>
  val && val?.length >= len && /^[a-zA-Z ]+$/.test(val)
    ? val && val?.length <= len
    : true;
const isCharacter = (val) =>
  val && val?.length ? /^[a-zA-Z ]+$/.test(val) : true;

class CommentForm extends Component {
  constructor(props) {
    super(props);

    this.state = {
      isModalOpen: false,
    };

    this.toggleModal = this.toggleModal.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  toggleModal() {
    this.setState({
      isModalOpen: !this.state.isModalOpen,
    });
  }

  handleSubmit(values) {
    alert(JSON.stringify(values));
    this.toggleModal();
  }

  render() {
    return (
      <>
        <button
          className="btn btn-light btn-outline-secondary my-3"
          onClick={this.toggleModal}
        >
          <i className="fa fa-pencil"></i> Submit Comment
        </button>
        <Modal isOpen={this.state.isModalOpen} toggle={this.toggleModal}>
          <ModalHeader toggle={this.toggleModal}>Submit Comment</ModalHeader>
          <ModalBody>
            <LocalForm onSubmit={(values) => this.handleSubmit(values)}>
              <Row className="form-group">
                <Label htmlFor="rating">Rating</Label>
                <Col className="col-md-12">
                  <Control.select
                    model=".rating"
                    id="rating"
                    name="rating"
                    placeholder="Select"
                    className="form-control"
                  >
                    <option>Select</option>
                    <option>1</option>
                    <option>2</option>
                    <option>3</option>
                    <option>4</option>
                    <option>5</option>
                  </Control.select>
                </Col>
              </Row>
              <Row className="form-group my-3">
                <Label htmlFor="name">Your name</Label>
                <Col className="col-md-12">
                  <Control.text
                    model=".name"
                    id="name"
                    name="name"
                    placeholder="Your name"
                    className="form-control"
                    validators={{
                      required,
                      minLength: minLength(3),
                      maxLength: maxLength(15),
                      isCharacter,
                    }}
                  />
                  <Errors
                    model=".name"
                    className="text-danger"
                    show="touched"
                    messages={{
                      required: "Name is required",
                      minLength: "Must be greater than 2 characters",
                      maxLength: "Must be 15 characters or less",
                      isCharacter: "Name must contain only characters",
                    }}
                  />
                </Col>
              </Row>
              <Row className="form-group my-3">
                <Label htmlFor="comment">Comment</Label>
                <Col className="col-md-12">
                  <Control.textarea
                    model=".comment"
                    id="comment"
                    name="comment"
                    rows={6}
                    placeholder="Comment"
                    className="form-control"
                    validators={{ required }}
                  />
                  <Errors
                    model=".comment"
                    className="text-danger"
                    show="touched"
                    messages={{
                      required: "Comment is required",
                    }}
                  />
                </Col>
              </Row>
              <Row>
                <Col className="col-md-12">
                  <Button color="primary">Submit</Button>
                </Col>
              </Row>
            </LocalForm>
          </ModalBody>
        </Modal>
      </>
    );
  }
}

export default CommentForm;
