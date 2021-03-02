import React, { useState, useEffect } from "react";
import {
  CategoriesStyle,
  SubCategories,
  SubCategoryName,
  CategoriesContainer
} from "./Style";
import {GET_SUBCATEGORIES_BY_ID, GET_SUB_CAT_PRODS, GET_GROUPS} from "../../app/Actions/index"
// import { GET_SUBCATEGORIES_BY_ID } from "../../app/Actions/index";
import { connect } from "react-redux";

const Categories = (props) => {
  const [subcategories1, setSubcategoris1] = useState([]);
  const [subcategories2, setSubcategoris2] = useState([]);
  const [subcategories3, setSubcategoris3] = useState([]);


  
  let isSubcategoriesReady = props.gstate.getSubcategoriesById.subcategories[props.categoryId];
  // useEffect(()=>{
  //   if(!isSubcategoriesReady)
  //   {
  //   props.GET_SUBCATEGORIES_BY_ID(props.categoryId);
  //   }
  // },[])

  useEffect(() => {
    if ( isSubcategoriesReady ) {
      setSubcategoris1(props.gstate.getSubcategoriesById.subcategories[props.categoryId]);
      setSubcategoris2(props.gstate.getSubcategoriesById.subcategories[props.categoryId].slice(5,10));
      setSubcategoris3(props.gstate.getSubcategoriesById.subcategories[props.categoryId].slice(10,15));

    }
  },[props.gstate.getSubcategoriesById.subcategories[props.categoryId]]);

  return (
    <CategoriesStyle>
      <CategoriesContainer>
      {
          (subcategories1.length)?
          <SubCategories>
            {subcategories1.map(sub => (<SubCategoryName  
            onClick={(e)=>{
              e.stopPropagation();
              props.GET_SUB_CAT_PRODS(sub.id);
              props.GET_GROUPS(sub.id);
              props.history.push(`/categories/${sub.categoryName}/${sub.categoryId}/${sub.subCategoryName}/${sub.id}`)
            }}
            
            
            key = {sub.id}>{sub.subCategoryName} 
            </SubCategoryName>
            ))
            }
            </SubCategories> : null
        }
         {/* {
          (subcategories2.length)?
          <SubCategories>
            {subcategories2.map(sub => (<SubCategoryName  
            onClick={()=>{
              props.GET_SUB_CAT_PRODS(sub.id);
              props.GET_GROUPS(sub.id)
            }}
            to={`/categories/${sub.categoryName}/${sub.categoryId}/${sub.subCategoryName}/${sub.id}`}
            key = {sub.id}>{sub.subCategoryName} 
            </SubCategoryName>
            ))
            }
            </SubCategories> : null
        }
         {
          (subcategories3.length)?
          <SubCategories>
            {subcategories3.map(sub => (<SubCategoryName  
            onClick={()=>{
              props.GET_SUB_CAT_PRODS(sub.id);
              props.GET_GROUPS(sub.id)
            }}
            to={`/categories/${sub.categoryName}/${sub.categoryId}/${sub.subCategoryName}/${sub.id}`}
            key = {sub.id}>{sub.subCategoryName} 
            </SubCategoryName>
            ))
            }
            </SubCategories> : null
        } */}
        
       
      </CategoriesContainer>
    </CategoriesStyle>
  );
};

const mapStateToProps = (state) => {
  return { gstate: state };
};

export default connect(mapStateToProps, { GET_SUBCATEGORIES_BY_ID, GET_SUB_CAT_PRODS, GET_GROUPS })(
  Categories
);

