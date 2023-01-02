import Menu from "./MenuComponent";
import { Component } from "react";
import Header from "./HeaderComponent";
import Footer from "./FooterComponent";
import {
  Routes,
  Route,
  Navigate,
  useParams,
  useLocation,
  useNavigate,
} from "react-router-dom";
import Home from "./HomeComponent";
import Contact from "./ContactComponent";
import Dishdetail from "./DishdetailComponent";
import About from "./AboutComponent";
import { connect } from "react-redux";

function withRouter(Component) {
  function ComponentWithRouterProp(props) {
    let location = useLocation();
    let navigate = useNavigate();
    let params = useParams();
    return <Component {...props} router={{ location, navigate, params }} />;
  }

  return ComponentWithRouterProp;
}

const matchStateToProps = (state) => {
  return {
    dishes: state?.dishes,
    comments: state?.comments,
    leaders: state?.leaders,
    promotions: state?.promotions,
  };
};

class Main extends Component {
  render() {
    const HomePage = () => {
      return (
        <Home
          dish={this.props.dishes.filter((dish) => dish.featured)[0]}
          leader={this.props.leaders.filter((leader) => leader.featured)[0]}
          promotion={
            this.props.promotions.filter((promotion) => promotion.featured)[0]
          }
        />
      );
    };

    const MenuPage = () => {
      return <Menu dishes={this.props?.dishes} />;
    };

    const DishDetailPage = () => {
      const { id } = useParams();
      return (
        <Dishdetail
          selectedDish={
            this.props?.dishes?.filter((dish) => {
              return dish?.id === parseInt(id);
            })[0]
          }
          comments={this.props?.comments?.filter((comment) => {
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
            element={<About leaders={this.props?.leaders} />}
          />
          <Route path="/dishdetail/:id" element={<DishDetailPage />} />
          <Route path="*" element={<Navigate to="/home" />} />
        </Routes>
        <Footer></Footer>
      </div>
    );
  }
}

export default withRouter(connect(matchStateToProps)(Main));
