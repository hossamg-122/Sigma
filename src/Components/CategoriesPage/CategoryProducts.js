import React, { useState, useEffect, Fragment } from "react";
import { connect } from "react-redux";
import {
  GET_CAT_PRODS,
  GET_MORE_CAT_PRODS,
  GET_MORE_SUB_CAT_PRODS,
  GET_SUB_CAT_PRODS,
  GET_GROUPS,
  GET_GROUP_PRODS,
  GET_MORE_GROUP_PRODS,
} from "../../app/Actions/index";
import Spinner from "react-bootstrap/Spinner";
import ProductList from "./ProductList";
import Button from "../Button/Button";
import { ReactComponent as List } from "../../media/list.svg";
import { ReactComponent as Grid } from "../../media/grid.svg";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChevronDown } from "@fortawesome/free-solid-svg-icons";
import { faBars } from "@fortawesome/free-solid-svg-icons";
import { faThLarge } from "@fortawesome/free-solid-svg-icons";

import {
  CategoryProductsStyles,
  Control,
  H3,
  Select,
  Display,
  Option,
  ProductsList,
  ProductsGrid,
  SubArrowContainer,
  CategoryArrowContainer,
  CategorySelectContainer,
  SortContainer,
  ViewContainer,
} from "./style";
import ProductGrid from "./ProductGrid";

const CategoryProducts = (props) => {
  useEffect(() => {
    window.scrollTo(0, 0);
    if (props.parentProps.match.params.subCatId !== "0") {
      var subCatId = props.parentProps.match.params.subCatId;
      props.GET_SUB_CAT_PRODS(subCatId);
      props.GET_GROUPS(subCatId);
    } else {
      var catId = props.parentProps.match.params.catId;
      props.GET_CAT_PRODS(catId);
    }
  }, []);

  const [grid, setGrid] = useState(true);
  const [spinner, setSpinner] = useState("none");

  const optionsRenderMachine = () => {
    if (
      props.parentProps.match.params.subCatId !== "0" &&
      props.gstate.groups.groups[0]
    ) {
      return props.gstate.groups.groups.map((group) => {
        return <Option value={group.id}>{group.name}</Option>;
      });
    }
  };
  const onGroupSelect = (e) => {
    var groupId = e.target.value;
    // var cat = props.parentProps.match.params.cat;
    // var catId = props.parentProps.match.params.catId;
    // var subCat = props.parentProps.match.params.subCat;
    var subCatId = props.parentProps.match.params.subCatId;
    props.GET_GROUP_PRODS(subCatId, groupId);
  };

  const nextPageRequester = () => {
    setSpinner("block");
    setTimeout(() => {
      setSpinner("none");
    }, 1000);
    // GET_MORE_SUB_CAT_PRODS
    if (props.gstate.catProds.groupId !== null) {
      let groupId = props.gstate.catProds.groupId;
      var cat = props.parentProps.match.params.cat;
      var subCat = props.parentProps.match.params.subCat;
      var subCatId = props.parentProps.match.params.subCatId;
      var currentProdsQty = props.gstate.catProds.catProds.length;
      var alreadyLoadedFromNextPage = currentProdsQty % 10;
      var pageNumberToRequest = Math.floor(currentProdsQty / 10);
      props.GET_MORE_GROUP_PRODS(
        subCatId,
        groupId,
        pageNumberToRequest,
        alreadyLoadedFromNextPage
      );
    } else if (props.parentProps.match.params.subCat !== "0") {
      var cat = props.parentProps.match.params.cat;
      var subCat = props.parentProps.match.params.subCat;
      var subCatId = props.parentProps.match.params.subCatId;
      var currentProdsQty = props.gstate.catProds.catProds.length;
      var alreadyLoadedFromNextPage = currentProdsQty % 10;
      var pageNumberToRequest = Math.floor(currentProdsQty / 10);
      props.GET_MORE_SUB_CAT_PRODS(
        subCatId,
        pageNumberToRequest,
        alreadyLoadedFromNextPage
      );
    } else {
      //GET_MORE_CAT_PRODS
      var cat = props.parentProps.match.params.cat;
      var catId = props.parentProps.match.params.catId;
      var currentProdsQty2 = props.gstate.catProds.catProds.length;
      var alreadyLoadedFromNextPage2 = currentProdsQty2 % 10;
      var pageNumberToRequest2 = Math.floor(currentProdsQty2 / 10);
      props.GET_MORE_CAT_PRODS(
        catId,
        pageNumberToRequest2,
        alreadyLoadedFromNextPage2
      );
    }
  };

  return (
    <CategoryProductsStyles>
      <H3>
        {props.parentProps.match.params.cat}{" "}
        {props.parentProps.match.params.subCat !== "0"
          ? ` / ${props.parentProps.match.params.subCat}`
          : null}
        <SubArrowContainer onClick={() => props.handleClick()}>
          <FontAwesomeIcon icon={faChevronDown} />
        </SubArrowContainer>
      </H3>
      <Control>
        <SortContainer>
          {props.parentProps.match.params.subCat !== "0" ? (
            <Fragment>
              <p>Sort by</p>
              <CategorySelectContainer>
                <Select onChange={onGroupSelect}>
                  <Option value="Sort by" disabled selected>
                    Sort by
                  </Option>
                  {optionsRenderMachine()}
                </Select>

                <CategoryArrowContainer>
                  <FontAwesomeIcon icon={faChevronDown} />
                </CategoryArrowContainer>
              </CategorySelectContainer>
            </Fragment>
          ) : null}
        </SortContainer>

        <ViewContainer>
          &nbsp; &nbsp; <span>View as : </span> &nbsp; &nbsp;
          <Display
            onClick={() => setGrid(true)}
            className={`${grid ? "active" : ""}`}
          >
            <FontAwesomeIcon
              icon={faThLarge}
              style={{ color: `${!grid ? "#70707080" : "white"}` }}
            />
          </Display>
          <Display
            onClick={() => setGrid(false)}
            className={`${!grid ? "active" : ""}`}
          >
            <FontAwesomeIcon
              icon={faBars}
              style={{ color: `${!grid ? "white" : "#70707080"}` }}
            />
          </Display>
        </ViewContainer>
      </Control>
      {grid ? (
        <ProductsGrid>
          {props.gstate.catProds.catProds ? (
            props.gstate.catProds.catProds.map((product) => (
              <ProductGrid key={product.id} product={product} />
            ))
          ) : (
            <div className="loader"></div>
          )}
        </ProductsGrid>
      ) : (
        <ProductsList>
          {props.gstate.catProds.catProds ? (
            props.gstate.catProds.catProds.map((product) => (
              <ProductList key={product.id} product={product} />
            ))
          ) : (
            <div className={"loader"}></div>
          )}
        </ProductsList>
      )}
      {props.gstate.catProds.catProds && (
        <>
          <Spinner
            style={{
              opacity: "50%",
              margin: "20px auto 20px",
              display: spinner,
            }}
            animation="border"
            variant="danger"
          />
          <Button
            text="View More"
            style={{ marginTop: "50px" }}
            handleFunction={nextPageRequester}
          />
        </>
      )}
    </CategoryProductsStyles>
  );
};

const mapStateToProps = (state) => {
  return { gstate: state };
};

export default connect(mapStateToProps, {
  GET_CAT_PRODS,
  GET_MORE_CAT_PRODS,
  GET_MORE_SUB_CAT_PRODS,
  GET_SUB_CAT_PRODS,
  GET_GROUPS,
  GET_GROUP_PRODS,
  GET_MORE_GROUP_PRODS,
})(CategoryProducts);
