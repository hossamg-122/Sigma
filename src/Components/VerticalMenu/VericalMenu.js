import React from 'react';
import {Menu} from './Style'
 const VerticalMenu = props => {

    return (
        <Menu style={{
            display:props.show ? 'block' : 'none',
            transform:props.show ? 'translateX(0)' : 'translateX(-100vh)',
            transition: props.show ? 'all 0.8s': null,
            opacity : props.show ? 1 : 0,
        }}>
            {props.children}
        </Menu>
    );
};


export default VerticalMenu;