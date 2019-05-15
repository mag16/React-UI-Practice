import React from 'react';
import './Header.css';

import ImageThumbnail from './ImageThumbnail';
import Clock from './Clock';
import HeaderContent from './HeaderContent';

const HeaderContainer = () => {
    return (
        <div className="header-container">
            <ImageThumbnail />
            <Clock/>
            <HeaderContent/>

        </div>
    )


}

export default HeaderContainer
