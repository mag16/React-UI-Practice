import React from 'react';
import './Footer.css';

import { Mail } from 'react-feather';
import { Heart } from 'react-feather';
import { MessageCircle } from 'react-feather';
import { RefreshCw } from 'react-feather';



const Footer = () => {
    return (
        <div className="footer-emotes">
            
            <MessageCircle />
            <RefreshCw className="refresh" />
            <Heart className="heart"/>
            <Mail className= "mail" />
           
            
        </div>


    )


}

export default Footer;