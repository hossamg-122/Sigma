import React, { useState } from "react";
import {
  Left,
  Right,
  Line,
  ItemContainer,
  Title,
  Img,
  H6,
  Price,
  Qty,
  ItemPrice,
  Counter,
  BookMarkContainer,
  DeleteIconContainer,
  MyToast,
} from "./style";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPlus, faMinus, faBookmark } from "@fortawesome/free-solid-svg-icons";
import { faBookmark as farBookmark } from "@fortawesome/free-regular-svg-icons";
import { faTrashAlt as deleteItemIcon } from "@fortawesome/free-regular-svg-icons";

const Cart = ({ item, add, sup, deleteProduct}) => {
  const handleBookMark = () => {
    setBooked(!booked);
    setShow(true);
    localStorage.setItem(`${item.productId}`, `${item.productId}`);
  };
  const handleUnBookMark = () => {
    setBooked(!booked);
    setShow(true);
    localStorage.removeItem(`${item.productId}`);
  };
  const [booked, setBooked] = useState(false);
  const [show, setShow] = useState(false);

  return (
    <ItemContainer>
      <Left>
        <Img>
          <img src={item.image ? item.image : "my-backup.png"} alt="" />
        </Img>
        <Title>
          <H6>{item.productName}</H6>
          <Price>
            £{item.price.toFixed(2)}
          </Price>
          <Price>
            {item.isFreeShipping && <span class="badge badge-danger">free shipping</span>}
          </Price>
        </Title>
      </Left>
      <Line />
      <Right>
        <Qty>
          QTY :
          <Counter onClick={() => add(item.productId)}>
            <FontAwesomeIcon icon={faPlus} />
          </Counter>
          <span>{item.quantity}</span>
          <Counter onClick={() => sup(item.productId)}>
            <FontAwesomeIcon icon={faMinus} />
          </Counter>
        </Qty>
        <ItemPrice>
          Item price: <span>£{item.price.toFixed(2)}</span>
        </ItemPrice>
        {item.vat > 0 && 
        <ItemPrice>
          VAT: <span>£{(item.vat*item.quantity).toFixed(2)}</span>
        </ItemPrice>
        }
        <ItemPrice>
          Total price: <span>£{(item.total+(item.vat*item.quantity)).toFixed(2)}</span>
        </ItemPrice>
      </Right>

      <BookMarkContainer>
        {booked || window.localStorage.getItem(`${item.productId}`) ? (
          <div title="Remove from Bookmarks">
            <FontAwesomeIcon
              icon={faBookmark}
              onClick={() => handleUnBookMark()}
            />
          </div>
        ) : (
          <div title="Add To Bookmarks">
            <FontAwesomeIcon
              icon={farBookmark}
              onClick={() => handleBookMark()}
            />
          </div>
        )}
      </BookMarkContainer>
     
      <DeleteIconContainer>
        
          <div title="Delete">
            <FontAwesomeIcon
              icon={deleteItemIcon}
              onClick={() => deleteProduct(item.productId)}
            />
          </div>
       
      </DeleteIconContainer>
      <MyToast onClose={() => setShow(false)} show={show} delay={3000} autohide>
        <MyToast.Header>
          <img src="holder.js/20x20?text=%20" className="rounded mr-2" alt="" />
          <strong className="mr-auto">Cart</strong>
          <small>1 sec ago</small>
        </MyToast.Header>
        <MyToast.Body>
          {item.productName} has been {booked ? "added to" : "removed from"}{" "}
          Bookmarks
        </MyToast.Body>
      </MyToast>
    </ItemContainer>
  );
};

export default Cart;
