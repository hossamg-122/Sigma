import React, { useEffect, useState } from "react";
import { HomeStyle, List, TitlePart, ViewAll, Title, Products } from "./style";
import ProductGrid from "../CategoriesPage/ProductGrid";
import Slider from "../Slider/Slider";
import { GET_FEED_PRODS, GET_LABELED_PRODS } from "../../app/Actions/index";
import { connect } from "react-redux";

const Home = (props) => {
  useEffect(() => {
    props.GET_FEED_PRODS();
    props.GET_LABELED_PRODS();
   
  }, []);

  const handleRoute = (labelName) => {
    props.history.push(`/all-products/${labelName}`);
  };


  const [x, setX]=useState(false);
    useEffect(()=>{
        if(props.gstate.allProds.allProds[0]){
            let index= Math.floor( Math.random()*props.gstate.allProds.allProds.length)
            setX(index)
        }
    },[props.gstate.allProds.allProds])

  return (
    <HomeStyle>
      <Slider />
      
      <div className="home-prods-cont">

      {props.gstate.labeledProds.labeledProds.prods ?
        props.gstate.labeledProds.labeledProds.prods.map((label) => (
          <List key={label.labelName}>
            <TitlePart>
              <Title>{label.labelName}</Title>
              <ViewAll onClick={() => handleRoute(label.labelName)}>
                View All
              </ViewAll>
            </TitlePart>
            <Products>
              {label.products.slice(0, 4).map((product, index) => (
                <ProductGrid key={index} product={product} />
              ))}
            </Products>
          </List>
        )):
        <div className="loader"></div>
        }
        </div>
        <div className="home-ad-cont ">
        {x && <span style={{position:"relative", cursor:"pointer"}}  onClick={()=>{props.history.push(`/product-details/${props.gstate.allProds.allProds[x].id}`)}}> 
           <img 
           title={props.gstate.allProds.allProds[x].name}
            style={{width:"100%", border:"#aa2c4a42 1px solid", padding:"0 0 10% 0" , backgroundColor:"#f1f1f"}}  
            src={props.gstate.allProds.allProds[x].heroImage}
           
            />
            <small style={{position:"absolute", bottom:"5px", left:"5px", color:"grey"}}>{props.gstate.allProds.allProds[x].name}</small>
        </span>}
      </div >
    </HomeStyle>
  );
};
const mapStateToProps = (state) => {
  return { gstate: state };
};

export default connect(mapStateToProps, { GET_FEED_PRODS, GET_LABELED_PRODS })(
  Home
);
