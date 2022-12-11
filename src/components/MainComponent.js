import Menu from "./MenuComponent";
import { DISHES } from "../shared/dishes";
import { Component } from "react";
import Header from "./HeaderComponent";
import Footer from "./FooterComponent";
import { Routes, Route, Navigate } from "react-router-dom";
import Home from "./HomeComponent";
import Contact from "./ContactComponent";
import { COMMENTS } from "../shared/comments";
import { LEADERS } from "../shared/leaders";
import { PROMOTIONS } from "../shared/promotions";

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

    return (
      <div>
        <Header></Header>
        <Routes>
          <Route path="/home" element={<HomePage />} />
          <Route path="/menu" element={<MenuPage />} exact />
          <Route path="/contactus" element={<Contact />} />
          <Route path="*" element={<Navigate to="/home" />} />
        </Routes>
        <Footer></Footer>
      </div>
    );
  }
}

export default Main;
