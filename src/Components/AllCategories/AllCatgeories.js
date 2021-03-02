import React from "react";
import { connect } from "react-redux";
import { Link } from "react-router-dom";
import {
  CategoryList,
  CategoryName,
  MobileCategories,
  CloseBtn,
} from "./Style";
import { GET_CATEGORIES, GET_CAT_PRODS } from "../../app/Actions/index";




const AllCategories = (props) => {
  function handleClick(id){
    props.GET_CAT_PRODS(id);
    props.showControl();
  }
  return (
    <MobileCategories style={props.style}>
      <CategoryList>
        <div style={{ textAlign: "right" }}>
          <CloseBtn onClick={() => {props.showControl()}}> x </CloseBtn>
        </div>
        {props.gstate.getCategories.categoris.map((category, index) => {
          return <Link key={index}  to={`/categories/${category.name}/${category.id}/0/0`} onClick={()=>{handleClick(category.id)}}>
                  <CategoryName>{category.name}</CategoryName>
                </Link>
        })}
      </CategoryList>
    </MobileCategories>
  );
};

const mapStateToProps = (state) => {
  return { gstate: state };
};

export default connect(mapStateToProps, { GET_CATEGORIES, GET_CAT_PRODS })(
  AllCategories
);
