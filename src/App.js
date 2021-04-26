import React, { Component } from "react";
import { connect } from "react-redux";
import { fetchCats } from "./actions/catActions";
import CatList from "./CatList";

class App extends Component {
  componentWillMount() {
    console.log(this.props);
    this.props.fetchCats();
  }
  handleLoading = () => {
    if (this.props.loading) {
      return <div>Loading...</div>;
    } else {
      return <CatList cats={this.props.cats} />;
    }
  };
  render() {
    console.log(this.props.loading);
    return (
      <div className="App">
        <h1>CatBook</h1>
        {this.handleLoading}
      </div>
    );
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    fetchCats: () => dispatch(fetchCats()),
  };
};
export default connect(mapDispatchToProps, { fetchCats })(App);
