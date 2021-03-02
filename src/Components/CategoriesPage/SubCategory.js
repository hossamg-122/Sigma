import React, {useEffect, useState} from "react";
import { connect } from "react-redux";
import {GET_SUB_CAT_PRODS, GET_GROUPS} from "../../app/Actions/index"
import { SubCategoryStyle,Title, Subs } from "./style";

const SubCategory = (props) => {
    const subCatList = props.gstate.getSubcategoriesById.subcategories[props.parentProps.match.params.catId];
    const [x, setX]=useState(false);
    useEffect(()=>{
        if(props.gstate.allProds.allProds[0]){
            let index= Math.floor( Math.random()*props.gstate.allProds.allProds.length)
            setX(index)
        }
    },[props.gstate.allProds.allProds])
    return (
        <div className="cat-page-left-cont">
        <SubCategoryStyle className="cat-page-left-cont-subs" >
            <Title>
            CATEGORIES
            </Title>
            <Subs>
                {
                    subCatList && subCatList.map(sub => (
                    <p
                     key={sub.id}
                     style={{color:sub.subCategoryName ===props.parentProps.match.params.subCat? "#AA2C4A" : null}}
                     onClick={()=>{
                     props.parentProps.history.push(`/categories/${props.parentProps.match.params.cat}/${props.parentProps.match.params.catId}/${sub.subCategoryName}/${sub.id}`);
                     props.GET_SUB_CAT_PRODS(sub.id);
                     props.GET_GROUPS(sub.id);
                    }}
                    >
                        {sub.subCategoryName}
                    </p>
                    ))
                }
            </Subs>
            
        </SubCategoryStyle>
        <br/>
        {/* <div className="home-ad-cont "> */}
       {x && <span style={{position:"relative", cursor:"pointer"}}  onClick={()=>{props.parentProps.history.push(`/product-details/${props.gstate.allProds.allProds[x].id}`)}}> 
           <img 
           title={props.gstate.allProds.allProds[x].name}
            style={{width:"100%", border:"#aa2c4a42 1px solid", padding:"0 0 10% 0" , backgroundColor:"#f1f1f"}}  
            src={props.gstate.allProds.allProds[x].heroImage}
           
            />
            <small style={{position:"absolute", bottom:"5px", left:"5px", color:"grey"}}>{props.gstate.allProds.allProds[x].name}</small>
        </span>}
            
        {/* </div > */}
        </div>
    )
}

const mapStateToProps = (state) => {
    return { gstate: state };
  };
  
  export default connect(mapStateToProps, {GET_SUB_CAT_PRODS, GET_GROUPS})(
    SubCategory
  );
  
  

