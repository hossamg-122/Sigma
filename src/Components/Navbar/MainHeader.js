import React from 'react';
import HeaderIcon from './HeaderIcon';
import Header from './Header';
import { MainHeaderStyle } from './Style';

const mainHeader = ({showMenu, setShowMenu, history}) => {
    return(
        <MainHeaderStyle>
            <HeaderIcon />
            <Header history={history} showMenu={showMenu} setShowMenu={setShowMenu} />
        </MainHeaderStyle>
    )
}

export default mainHeader;