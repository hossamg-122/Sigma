import React, { useState } from "react";
import { CategoryPageStyle } from "./style";
import SubCategory from "./SubCategory";
import SubCategoryMobile from "./SubCategoryMobile";
import CategoryProducts from "./CategoryProducts";
import { Overlay } from "../PopUp/style";

const CategoriesPage = (props) => {
  const [sub, setSub] = useState(false);
  const handleClick = () => {
    setSub(!sub);
  };
  return (
    <CategoryPageStyle>
       <SubCategory parentProps={props} />
      {sub && (
        <div>
          <SubCategoryMobile parentProps={props} setSub={()=>{setSub(!sub)}} />
          <Overlay onClick={() => setSub(!sub)}/>
        </div>
      )}
      <CategoryProducts parentProps={props} handleClick={handleClick} />
    </CategoryPageStyle>
  );
};

export default CategoriesPage;
