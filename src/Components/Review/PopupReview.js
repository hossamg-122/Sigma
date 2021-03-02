import React from 'react';
import {Modal} from '../Review/style'
 const PopupReview = props => {
    
    return (
        <Modal style={{
            transform:props.show ? 'translateY(-50%,-50%)' : 'translate(-50%,-50%)',
            display: !props.show ?  "none": null,
            opacity : props.show ? 1 : 0,
        }}>
            {props.children}
        </Modal>
    );
};


export default PopupReview;