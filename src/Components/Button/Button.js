import React from "react";
import { ButtonStyle, ButtonItem, ButtonTotal } from "./style";

const button = ({ text, total, handleFunction, style }) => {
  return total != null ? (
    <ButtonStyle>
      <ButtonItem>{text}</ButtonItem>
      <ButtonTotal>Total: £{total.toFixed(2)} </ButtonTotal>
    </ButtonStyle>
  ) : (
    <ButtonStyle
      style={style}
      onClick={(e) => handleFunction(e)}
    >
      {text}
    </ButtonStyle>
  );
};

export default button;
