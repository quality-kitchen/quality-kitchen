import React from "react";
import logowhite from '../../assets/images/logo-whitebg.png'

export default function ComingSoon() {
    return (
        <div className="text-3xl font-bold ">
            <img className="logo-image" src={logowhite} alt="logo" />
            <h1>Coming Soon ...</h1>
        </div>
    )
}