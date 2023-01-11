import React from "react";
import { Link } from "react-router-dom";
import {
  Breadcrumb,
  BreadcrumbItem,
  Card,
  CardImg,
  CardImgOverlay,
  CardTitle,
} from "reactstrap";
import { baseUrl } from "../shared/baseUrl";
import { Loader } from "./LoaderComponent";

function RenderMenuItem({ dish }) {
  return (
    <Card>
      <Link to={`/dishdetail/${dish?.id}`}>
        <CardImg width="100%" src={baseUrl + dish?.image} alt={dish?.name} />
        <CardImgOverlay>
          <CardTitle>{dish?.name}</CardTitle>
        </CardImgOverlay>
      </Link>
    </Card>
  );
}

const Menu = (props) => {
  if (props?.dishes?.isLoading) {
    return <Loader />;
  } else if (props?.dishes?.errMess) {
    return (
      <>
        <div className="row">
          <div className="col-md-12 text-danger text-center my-3">
            {props?.dishes?.errMess}
          </div>
        </div>
      </>
    );
  } else {
    const menu = props?.dishes?.dishes?.map((dish) => {
      return (
        <div className="col-12 col-md-5 m-1" key={dish?.id}>
          <RenderMenuItem
            dish={dish}
            dishesLoading={props?.dishes?.dishesLoading}
            errMess={props?.dishes?.errMess}
          />
        </div>
      );
    });
    return (
      <div className="container">
        <div className="row">
          <Breadcrumb>
            <BreadcrumbItem>
              <Link to="/home">Home</Link>
            </BreadcrumbItem>
            <BreadcrumbItem active>Menu</BreadcrumbItem>
          </Breadcrumb>
          <div className="col-12">
            <h3>Menu</h3>
            <hr />
          </div>
        </div>
        <div className="row">{menu}</div>
      </div>
    );
  }
};

export default Menu;
