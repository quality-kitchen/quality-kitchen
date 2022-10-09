import React from "react";
// import logo from '../../images/logo.png';
import logowhite from '../../images/logo-whitebg.png'
import './style.css'

export default function ComingSoon() {
    return (
        <div className="text-3xl font-bold ">
                <img className="logo-image" src={logowhite} alt="logo" />
                <h1 className="center">Coming Soon ...</h1>
        </div>
            
        
    )
}