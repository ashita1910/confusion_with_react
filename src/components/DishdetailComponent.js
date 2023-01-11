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
import { baseUrl } from "../shared/baseUrl";
import CommentForm from "./CommentForm";
import { Loader } from "./LoaderComponent";

function RenderDish({ dish }) {
  if (dish) {
    return (
      <Card>
        <CardImg width="100%" src={baseUrl + dish?.image} alt={dish?.name} />
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

function RenderComments({
  comment,
  addComment,
  commentErrMess,
  dishId,
  postComment,
}) {
  if (commentErrMess) {
    return (
      <>
        <div className="row">
          <div className="col-md-12 text-danger text-center my-3">
            {commentErrMess}
          </div>
        </div>
      </>
    );
  } else if (comment) {
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
        <CommentForm
          addComment={addComment}
          dishId={dishId}
          postComment={postComment}
        />
      </div>
    );
  } else {
    return <div></div>;
  }
}

const Dishdetail = (props) => {
  if (props?.dishesLoading) {
    return <Loader />;
  } else if (props?.errMess) {
    return (
      <>
        <div className="row">
          <div className="col-md-12 text-danger text-center my-3">
            {props?.errMess}
          </div>
        </div>
      </>
    );
  } else if (props?.selectedDish) {
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
            <RenderComments
              comment={props?.comments}
              addComment={props?.addComment}
              commentErrMess={props?.commentErrMess}
              dishId={props?.selectedDish?.id}
              postComment={props?.postComment}
            />
          </div>
        </div>
      </div>
    );
  }
};

export default Dishdetail;
