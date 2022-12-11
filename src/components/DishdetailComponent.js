import React from "react";
import { Card, CardBody, CardImg, CardText, CardTitle } from "reactstrap";

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

function RenderComments({ arr }) {
  if (arr) {
    return (
      <div>
        <h4>Comments</h4>
        <ul className="list-group list-group-flush">
          {arr?.map((commentObj) => {
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
      </div>
    );
  } else {
    return <div></div>;
  }
}

const Dishdetail = (props) => {
  const arr = [
    {
      id: 0,
      comment: "Imagine all the tasty food!",
      author: "John Lemon",
      date: "October 17, 2021",
    },
    {
      id: 1,
      comment: "Eat all of it!",
      author: "Lisa Kudrov",
      date: "November 19, 2020",
    },
    {
      id: 2,
      comment: "Reaching for the stars!",
      author: "Rngo Starry",
      date: "January 10, 2022",
    },
    {
      id: 3,
      comment: "It is your birthday, we are gonna party!",
      author: "25 Cent",
      date: "October 29, 2021",
    },
    {
      id: 4,
      comment: "I am lovin it!",
      author: "Rachel Green",
      date: "March 13, 2022",
    },
  ];

  if (props?.selectedDish) {
    return (
      <div className="container">
        <div className="row mt-4">
          <div className="col-12 col-md-5">
            <RenderDish dish={props?.selectedDish} />
          </div>
          <div className="col-12 col-md-5 mt-4">
            <RenderComments arr={arr} />
          </div>
        </div>
      </div>
    );
  }
};

export default Dishdetail;
