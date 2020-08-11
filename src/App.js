import React from "react";

import { Header } from "./components";
import { Home, Cart } from "./pages";
import { Route } from "react-router-dom";
import { connect } from "react-redux";
import { setPizzas as setPizzasAction } from "./redux/actioins/pizzas"

// function App() {
//     React.useEffect(() => {
//     fetch('http://localhost:3000/db.json')
//     .then((res) => res.json())
//     .then((data) => {
//       setProducts(data.pizzas)
//     })
//   }, [])

//   return;
// }

class App extends React.Component {
  componentDidMount() {
    fetch("http://localhost:3000/db.json")
      .then((res) => res.json())
      .then((data) => {
        this.props.setPizzas(data.pizzas)
      });
  }

  render() {
    
    return (
      <div className="wrapper">
        <Header />
        <div className="content">
          <Route path="/" render={() => <Home items={this.props.items} />} exact />
          <Route path="/cart" component={Cart} exact />
        </div>
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    items: state.pizzas.items,
  }
}

const mapDispatchToProps = dispatch => {
  return {
    setPizzas: (items) => dispatch(setPizzasAction(items))
  }
}

export default connect(mapStateToProps,mapDispatchToProps )(App);
