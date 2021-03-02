import React from 'react';
import {Modal} from './Style'
 const modal = props => {
    
    return (
        <Modal style={{
            transform:props.show ? 'translateY(0)' : 'translateY(-100vh)',
            opacity : props.show ? 1 : 0,
        }}>
            {props.children}
        </Modal>
    );
};


export default modal;
