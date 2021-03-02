import React  from "react";
import {useState,useEffect} from 'react';
import { NavbarStyle, Item, DownArrow, NavbarContent, Line ,Ul,AllCategories,PCategory,ViewLink} from "./Style";
import Categories from "./CategorySectionOnHover";
import FirstCategories from "./FirstCategorySectionOnHover";
import MobileNavbar from './MobileNavebar'
import DownArrowImg from '../../media/downArrow.svg'
import MobileCategories from '../AllCategories/AllCatgeories'
import { GET_CATEGORIES, GET_CAT_PRODS } from "../../app/Actions/index";
import { connect } from "react-redux";
 
const Navbar = (props) => {


  const [showCategories,setShowCategories] = useState(false)

  const [categories, setCategories] = useState([]);


  let isCategoriesReady = props.gstate.getCategories.categoris;

  useEffect(()=>{
    props.GET_CATEGORIES();
  },[])

  useEffect(() => {
    if ( isCategoriesReady && props.gstate.getCategories.categoris.length > 0 && categories.length === 0) {
      var cats = 
      setCategories(props.gstate.getCategories.categoris.slice(0,7));
    }
  });
  return (
    <>
    <AllCategories>
      <PCategory>
      Categories
      </PCategory>
      <ViewLink onClick={()=> setShowCategories(!showCategories)} style={{display: showCategories? 'none' : 'block', cursor:"pointer" }}>
      View All
      </ViewLink>
    </AllCategories>
    <MobileCategories  showControl={()=>{setShowCategories(!showCategories)}} style={{display: (!showCategories)? 'none' : 'block' }}/>
      <NavbarStyle>
        <NavbarContent>
          <Ul style={{ padding: "0", marginBottom: "0" }}>
            <Item>
              A - Z &nbsp; &nbsp;
              <DownArrow src={DownArrowImg} />
              <Line />
              <FirstCategories history={props.history}  />
            </Item>
            
            {categories.length > 0  && categories.map((category,index)=> ( <React.Fragment key={index}>
            <Item 
              
              onClick={()=>{
                props.history.push(`/categories/${category.name}/${category.id}/0/0`);
                if(props.location.pathname !== "/"){
                  // to prevent duplicate request .
                  props.GET_CAT_PRODS(category.id);
                }
              }}
              >
              {category.name} &nbsp; &nbsp;<DownArrow src={DownArrowImg} />
              <Line />
              <Categories history={props.history} categoryId = {category.id} category = {category}  />
            </Item>
            
            </React.Fragment>))}
            
          </Ul>
        </NavbarContent>
        <MobileNavbar/>
      </NavbarStyle>
    </>
  );
};

const mapStateToProps = (state) => {
  return { gstate: state };
};

export default connect(mapStateToProps, { GET_CATEGORIES, GET_CAT_PRODS })(
  Navbar
);

