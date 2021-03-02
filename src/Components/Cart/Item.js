import React from "react";
import {
  PlaceItemContainer,
  Title,
  ImgPlace,
  H6,
  Qty,
  ItemPrice,
  Counter,
} from "./style";
import ReactImageFallback from "react-image-fallback";
import fallbackImage from "../../media/my-backup.png";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPlus, faMinus } from "@fortawesome/free-solid-svg-icons";

const Item = ({ item, add, sup }) => {
  return (
    <PlaceItemContainer>
      <ImgPlace>
        <ReactImageFallback
          className="my-image"
          src={item.image}
          alt={item.productName}
          fallbackImage={fallbackImage}
          initialImage="loader.gif"
        />
      </ImgPlace>
      <Title>
        <H6>{item.productName}</H6>
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
          Item Price: <span> £{(item.price).toFixed(2)}</span>
        </ItemPrice>
        {item.vat>0 &&
        <ItemPrice>
          VAT: <span> £{(item.vat*item.quantity).toFixed(2)}</span>
        </ItemPrice>
        }
        <ItemPrice>
          Total Price: <span> £{(item.total+(item.vat*item.quantity)).toFixed(2)}</span>
        </ItemPrice>
        <ItemPrice>
        {item.isFreeShipping && <span class="badge badge-danger">free shipping</span>}
        </ItemPrice>
      </Title>
    </PlaceItemContainer>
  );
};

export default Item;
