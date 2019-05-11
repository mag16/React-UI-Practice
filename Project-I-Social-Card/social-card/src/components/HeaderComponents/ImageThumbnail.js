import React from 'react';
import './Header.css';
import lambdacrest from '../../image/lambdacrest.png';

console.log(lambdacrest);

const ImageThumbnail = () => {
    return <img src={lambdacrest} alt="lambdacrest" className="lambdacrest" />;
}

export default ImageThumbnail;