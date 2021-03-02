import React from "react";
import { connect } from "react-redux";
import {GET_SUB_CAT_PRODS, GET_GROUPS} from "../../app/Actions/index"
import { SubCategoryMobileStyle,Title, Subs } from "./style";

const SubCategory = (props) => {
  const subCatList = props.gstate.getSubcategoriesById.subcategories[props.parentProps.match.params.catId];
    return (
        <SubCategoryMobileStyle>
            <Title>
            Sub Categories
            </Title>
            <Subs>
                {
                    subCatList && subCatList.map(sub => (
                    <p
                    key={sub.id}
                    onClick={()=>{
                        props.parentProps.history.push(`/categories/${props.parentProps.match.params.cat}/${props.parentProps.match.params.catId}/${sub.subCategoryName}/${sub.id}`);
                        props.GET_SUB_CAT_PRODS(sub.id);
                        props.GET_GROUPS(sub.id);
                        props.setSub();
                    }}
                    >
                        {sub.subCategoryName}
                    </p>
                    ))
                }
            </Subs>
        </SubCategoryMobileStyle>
    )
}


const mapStateToProps = (state) => {
    return { gstate: state };
  };
  
  export default connect(mapStateToProps, {GET_SUB_CAT_PRODS, GET_GROUPS})(
    SubCategory
  );
  
  