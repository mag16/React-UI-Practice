import React from 'react';
import './Header.css';



let timestamp = Date();
let a = timestamp.toString();

const HeaderTitle = () => {
    return (
        <div className= "header-title">
            <h1> Lambda School  </h1>
            <p className="lambda-at">@LambdaSchool </p>
           
        </div>
    )

}

export default HeaderTitle;