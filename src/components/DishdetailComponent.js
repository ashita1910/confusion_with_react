import React from "react";
import { Link } from "react-router-dom";
import {
  Breadcrumb,
  BreadcrumbItem,
  Card,
  CardBody,
  CardImg,
  CardText,
  CardTitle,
} from "reactstrap";
import CommentForm from "./CommentForm";

function RenderDish({ dish }) {
  if (dish) {
    return (
      <Card>
        <CardImg width="100%" src={dish?.image} alt={dish?.name} />
        <CardBody>
          <CardTitle>{dish?.name}</CardTitle>
          <CardText>{dish?.description}</CardText>
        </CardBody>
      </Card>
    );
  } else {
    return <div></div>;
  }
}

function RenderComments({ comment }) {
  if (comment) {
    return (
      <div>
        <h4>Comments</h4>
        <ul className="list-group list-group-flush">
          {comment?.map((commentObj) => {
            return (
              <li className="list-group-item" key={commentObj?.id + 1}>
                <p>{commentObj?.comment}</p>
                <p className="mb-0">
                  -- {commentObj?.author},{" "}
                  {new Intl.DateTimeFormat("en-US", {
                    year: "numeric",
                    month: "short",
                    day: "2-digit",
                  }).format(new Date(Date.parse(commentObj?.date)))}
                </p>
              </li>
            );
          })}
        </ul>
        <CommentForm />
      </div>
    );
  } else {
    return <div></div>;
  }
}

const Dishdetail = (props) => {
  if (props?.selectedDish) {
    return (
      <div className="container">
        <div className="row">
          <Breadcrumb>
            <BreadcrumbItem>
              <Link to="/menu">Menu</Link>
            </BreadcrumbItem>
            <BreadcrumbItem active>DishDetail</BreadcrumbItem>
          </Breadcrumb>
          <div className="col-12">
            <h3>DishDetail</h3>
            <hr />
          </div>
        </div>
        <div className="row">
          <div className="col-12 col-md-5">
            <RenderDish dish={props?.selectedDish} />
          </div>
          <div className="col-12 col-md-5 mt-4">
            <RenderComments comment={props?.comments} />
          </div>
        </div>
      </div>
    );
  }
};

export default Dishdetail;
