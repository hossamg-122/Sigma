import React, { useEffect , useState} from 'react';
import { ProductDetailsWrapper, PageWrapper } from './Style'
import { Backdrop } from '../Review/style'
import ProductSection from './Product Section/ProductSection'
import Review from '../Product Details/Review Section/Review'
import CommentsSection from '../Product Details/Comments Section/CommentsSection'
import { GET_PRODUCT_BY_ID } from "../../app/Actions/index";
import { connect } from "react-redux";
const ProductDetails = (props) => {
    const [modalShow, setModalShow] = React.useState(false);

    useEffect(()=>{  

        window.scrollTo(0, 0);
        props.GET_PRODUCT_BY_ID(props.match.params.id);
       
    },[])

    useEffect(()=>{  
       if(props.gstate.getProductById.product.info) {

           document.title = `Sigma - ${props.gstate.getProductById.product.info.name}`;
           document.querySelector('meta[name="description"]').setAttribute("content",props.gstate.getProductById.product.info.name);
           document.querySelector('meta[property="og:title"]').setAttribute("content",`Sigma - ${props.gstate.getProductById.product.info.name}`);
           document.querySelector('meta[property="og:url"]').setAttribute("content",window.location.href);
           document.querySelector('meta[property="og:image"]').setAttribute("content",props.gstate.getProductById.product.heroImage);
           document.querySelector('meta[property="og:type"]').setAttribute("content","product");
           document.querySelector('meta[property="og:description"]').setAttribute("content",props.gstate.getProductById.product.info.name);
      
       }
    },[props.gstate.getProductById.product.info])

    useEffect(() => {
        return () => {
          document.title = "Sigma Medical supplies Ltd";
          document.querySelector('meta[name="description"]').setAttribute("content",`Sigma Medical supplies Ltd based in the United Kingdom is an effective healthcare distribution company, which specializes, in cost-effective nursing, medical supplies and
          medical equipment to the healthcare market sector.
          Excellence leading medical supply company with outstanding liability customer service
          for many clinics, hospitals and GP's across the UK.
          We hope you enjoy our products as much as we enjoy offering them to you. If you have any questions or comments, please don't hesitate to contact us.`);
          document.querySelector('meta[property="og:title"]').setAttribute("content",`Sigma Medical supplies Ltd`);
          document.querySelector('meta[property="og:url"]').setAttribute("content",window.location.href);
          document.querySelector('meta[property="og:image"]').setAttribute("content","https://scontent.faly3-1.fna.fbcdn.net/v/t1.0-9/p960x960/84894207_100790424843861_2878117246440308736_o.jpg?_nc_cat=106&_nc_sid=85a577&_nc_ohc=EUX5meHCnM8AX8vOvFv&_nc_ht=scontent.faly3-1.fna&tp=6&oh=50ef6fceaf657ba207cca8e984d56197&oe=5F6F1C9F");
          document.querySelector('meta[property="og:type"]').setAttribute("content","product");
          document.querySelector('meta[property="og:description"]').setAttribute("content", `Sigma Medical supplies Ltd based in the United Kingdom is an effective healthcare distribution company, which specializes, in cost-effective nursing, medical supplies and
          medical equipment to the healthcare market sector.
          Excellence leading medical supply company with outstanding liability customer service
          for many clinics, hospitals and GP's across the UK.
          We hope you enjoy our products as much as we enjoy offering them to you. If you have any questions or comments, please don't hesitate to contact us.`);
        };
      }, []);
    
    return (
        <PageWrapper>

            <Backdrop style={{
                transform: modalShow ? 'translateY(-50%,-50%)' : 'translateY(-50%,-50%)',
                opacity: modalShow ? 1 : 0,
                display: !modalShow ? 'none' : null

            }} onClick={() => setModalShow(!modalShow)} />
            {props.gstate.getProductById.product.hasOwnProperty("id") ?
                <>
                    <ProductDetailsWrapper>
                    
                        <ProductSection product= {props.gstate.getProductById.product} />
                    </ProductDetailsWrapper>
                    <Review modalShow={modalShow} setModalShow={setModalShow} product={props.gstate.getProductById.product} />
                    <ProductDetailsWrapper>
                        <CommentsSection />
                    </ProductDetailsWrapper>
                    
                </>:
                <div className="loader"></div>
                }

        </PageWrapper>
    )
}

const mapStateToProps = (state) => {
    return { gstate: state };
};

export default connect(mapStateToProps, { GET_PRODUCT_BY_ID })(
    ProductDetails
);