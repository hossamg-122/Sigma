import React, { useState, useEffect } from "react";
import {
  CategoriesStyle,
  SubCategories,
  SubCategoryName,
  CategoriesContainer,
} from "./Style";
import { GET_CAT_PRODS } from "../../app/Actions/index";

import { connect } from "react-redux";

const FirstCategories = (props) => {
  const [categories1, setCategoris1] = useState([]);
  const [categories2, setCategoris2] = useState([]);
  const [categories3, setCategoris3] = useState([]);

  useEffect(() => {
    if (
      props.gstate.getCategories.categoris &&
      props.gstate.getCategories.categoris[0]
    ) {
      var unsortedCategories = props.gstate.getCategories.categoris;
      function dynamicSort(property) {
        var sortOrder = 1;

        if (property[0] === "-") {
          sortOrder = -1;
          property = property.substr(1);
        }

        return function (a, b) {
          if (sortOrder === -1) {
            return b[property].localeCompare(a[property]);
          } else {
            return a[property].localeCompare(b[property]);
          }
        };
      }
      var sortedCategories = unsortedCategories.sort(dynamicSort("name"));

      setCategoris1(sortedCategories);
      setCategoris2(sortedCategories.slice(10, 20));
      setCategoris3(sortedCategories.slice(20, 30));
    }
  }, [props.gstate.getCategories.categoris]);

  return (
    <CategoriesStyle>
      <CategoriesContainer>
        {categories1.length ? (
          <SubCategories>
            {categories1.map((category) => (
              <SubCategoryName
                onClick={() => {
                  props.GET_CAT_PRODS(category.id);
                  props.history.push(`/categories/${category.name}/${category.id}/0/0`);
                }}
                // to={`/categories/${category.name}/${category.id}/0/0`}
                key={category.id}
              >
                {category.name}
              </SubCategoryName>
            ))}
          </SubCategories>
        ) : null}
        {/* {categories2.length ? (
          <SubCategories>
            {categories2.map((category) => (
              <SubCategoryName
                onClick={() => {
                  props.GET_CAT_PRODS(category.id);
                }}
                to={`/categories/${category.name}/${category.id}/0/0`}
                key={category.id}
              >
                {category.name}
              </SubCategoryName>
            ))}
          </SubCategories>
        ) : null}
        {categories3.length ? (
          <SubCategories>
            {categories3.map((category) => (
              <SubCategoryName
                onClick={() => {
                  props.GET_CAT_PRODS(category.id);
                }}
                to={`/categories/${category.name}/${category.id}/0/0`}
                key={category.id}
              >
                {category.name}
              </SubCategoryName>
            ))}
          </SubCategories>
        ) : null} */}
      </CategoriesContainer>
    </CategoriesStyle>
  );
};

const mapStateToProps = (state) => {
  return { gstate: state };
};

export default connect(mapStateToProps, { GET_CAT_PRODS })(FirstCategories);
