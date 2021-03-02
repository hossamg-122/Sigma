import React, { useEffect } from "react";
import { Carousel } from "react-bootstrap";
import { useState } from "react";
import { GET_SLIDER_PRODS } from "../../app/Actions/index";
import ReactImageFallback from "react-image-fallback";
import fallbackImage from "../../media/my-backup.png"
import "../index.css";
import { Link } from "react-router-dom";
import { connect } from "react-redux";

const Slider = (props) => {
  const [index, setIndex] = useState(0);
  const [imgs, setimgs] = useState([]);

  useEffect(() => {
    props.GET_SLIDER_PRODS();
  }, []);
  useEffect(() => {
    if (props.gstate.sliderProds.sliderProds.prods && imgs.length === 0) {
      setimgs({
        imgs: props.gstate.sliderProds.sliderProds.prods,
      });
    }
  });

  const handleSelect = (selectedIndex, e) => {
    setIndex(selectedIndex);
  };

  return (
    <React.Fragment>
      {props.gstate.sliderProds.sliderProds.prods ? 
    <Carousel activeIndex={index} onSelect={handleSelect} id="carousel">
      {imgs.length !== 0 &&
        imgs.imgs.length > 0 &&
        imgs.imgs.map((item, index) => (
          <Carousel.Item key={index} >
            <Link to={`/product-details/${item.productId}`}>
              <ReactImageFallback
                className="d-block my-image"
                src={item.url}
                alt={item.alternative}
                fallbackImage={fallbackImage}
                initialImage="loader.gif"
              />
            </Link>
          </Carousel.Item>
        ))}
    </Carousel> 
    :
    null 
        }
    </React.Fragment>
  );
};

const mapStateToProps = (state) => {
  return { gstate: state };
};

export default connect(mapStateToProps, { GET_SLIDER_PRODS })(Slider);
