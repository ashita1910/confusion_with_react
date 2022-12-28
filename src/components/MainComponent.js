import Menu from "./MenuComponent";
import { DISHES } from "../shared/dishes";
import { Component } from "react";
import Header from "./HeaderComponent";
import Footer from "./FooterComponent";
import { Routes, Route, Navigate, useParams } from "react-router-dom";
import Home from "./HomeComponent";
import Contact from "./ContactComponent";
import { COMMENTS } from "../shared/comments";
import { LEADERS } from "../shared/leaders";
import { PROMOTIONS } from "../shared/promotions";
import Dishdetail from "./DishdetailComponent";
import About from "./AboutComponent";

class Main extends Component {
  constructor(props) {
    super(props);

    this.state = {
      dishes: DISHES,
      comments: COMMENTS,
      leaders: LEADERS,
      promotions: PROMOTIONS,
    };
  }

  render() {
    const HomePage = () => {
      return (
        <Home
          dish={this.state.dishes.filter((dish) => dish.featured)[0]}
          leader={this.state.leaders.filter((leader) => leader.featured)[0]}
          promotion={
            this.state.promotions.filter((promotion) => promotion.featured)[0]
          }
        />
      );
    };

    const MenuPage = () => {
      return <Menu dishes={this.state?.dishes} />;
    };

    const DishDetailPage = () => {
      const { id } = useParams();
      return (
        <Dishdetail
          selectedDish={
            this.state?.dishes?.filter((dish) => {
              return dish?.id === parseInt(id);
            })[0]
          }
          comments={this.state?.comments?.filter((comment) => {
            return comment?.dishId === parseInt(id);
          })}
        />
      );
    };

    return (
      <div>
        <Header></Header>
        <Routes>
          <Route path="/home" element={<HomePage />} />
          <Route path="/menu" element={<MenuPage />} exact />
          <Route path="/contactus" element={<Contact />} />
          <Route
            path="/aboutus"
            element={<About leaders={this.state?.leaders} />}
          />
          <Route path="/dishdetail/:id" element={<DishDetailPage />} />
          <Route path="*" element={<Navigate to="/home" />} />
        </Routes>
        <Footer></Footer>
      </div>
    );
  }
}

export default Main;
