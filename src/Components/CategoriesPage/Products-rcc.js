import React, { Component } from "react";
import { ProductStyle } from "./style";
import ProductGrid from "./ProductGrid";
import { GET_LABELED_PRODS } from "../../app/Actions/index";
import { connect } from "react-redux";

class Products extends Component {
  state = {
    products: [],
  };

  componentDidMount() {
    this.props.GET_LABELED_PRODS();
  }
  componentDidUpdate() {
    if (
      this.props.gstate.labeledProds.labeledProds.prods &&
      this.state.products.length === 0
    ) {
      this.setState({
        products: this.props.gstate.labeledProds.labeledProds.prods.find(
          (label) => label.labelName === this.props.match.params.labelName
        ),
      });
    }
  }

  render() {
    return this.state.products.products ? (
      <>
        <h1 style={{textAlign: 'center'}}>{this.state.products.labelName}</h1>
        <ProductStyle>
          {this.state.products.products.map((product) => {
            return <ProductGrid key={product.id} product={product} />;
          })}
        </ProductStyle>
      </>
    ) : (
      <></>
    );
  }
}

const mapStateToProps = (state) => {
  return { gstate: state };
};

export default connect(mapStateToProps, { GET_LABELED_PRODS })(Products);
