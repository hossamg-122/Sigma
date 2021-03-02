import React, { useState, useEffect } from "react";
import { ProductStyle } from "./style";
import ProductGrid from "./ProductGrid";
import { GET_LABELED_PRODS } from "../../app/Actions/index";
import { connect } from "react-redux";

const Products = (props) => {
  const [products, setproducts] = useState([]);
  var isProductsReady = props.gstate.labeledProds.labeledProds.prods;
  useEffect(() => {
    if(!isProductsReady){
      props.GET_LABELED_PRODS();
    }
   
  }, []);

  useEffect(() => {
    
    if ( isProductsReady && products.length === 0) {
      setproducts({
        products: props.gstate.labeledProds.labeledProds.prods.find(
          (label) => label.labelName === props.match.params.labelName
        ),
      });
    }
  });

  return products.products ? (
    <div>
      <h1 style={{ textAlign: "center" , marginTop:"35px"}}>{products.products.labelName}</h1>
      <ProductStyle>
        {products.products.products.map((product) => (
          <ProductGrid key={product.id} product={product} />
        ))}
      </ProductStyle>
    </div>
  ) : (
    <></>
  );
};

const mapStateToProps = (state) => {
  return { gstate: state };
};

export default connect(mapStateToProps, { GET_LABELED_PRODS })(Products);
