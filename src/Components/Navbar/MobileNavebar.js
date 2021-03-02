import React from "react";
import { connect } from "react-redux";
import { Item, NavbarContentMobile, Ul} from "./Style";
import { Link } from "react-router-dom";
import { GET_CATEGORIES, GET_CAT_PRODS } from "../../app/Actions/index";


const MobileNavbar = (props) => {
  return (
    <>
        <NavbarContentMobile>
          <Ul>
            {props.gstate.getCategories.categoris.map((category, index)=>{
              if (index<3) {
                return(
                  <Item key={index}>
                  <Link  to={`/categories/${category.name}/${category.id}/0/0`} onClick={()=>(props.GET_CAT_PRODS(category.id))}>
                    
                      {category.name}
                    
                  </Link>
                </Item>  
                )
              }
             
            })}
            
          </Ul>
        </NavbarContentMobile>
        </>
  );
};

const mapStateToProps = (state) => {
  return { gstate: state };
};

export default connect(mapStateToProps, { GET_CATEGORIES, GET_CAT_PRODS })(
  MobileNavbar
);

