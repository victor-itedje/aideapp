import React from "react";
import "./landing.css"
import { Link } from "react-router-dom";


const ChooseUserType = () => {
    return(
        <>
        <div className="landingcon">
            <p className="headers landingpageheader" >WELCOME TO AIDE!</p>
            <p className="body-par landingsecondheader" >Please select your role to get started:</p>
            <div className="roles" >
                <Link to="/signup"> <div className="userrole">
                <img src="/users-alt.png" alt="" />
                <p>User</p>
                </div>
                </Link>
                <div className="provider-role">
                <img src="/tools.png" alt="" />
                <p>Provider</p>
                </div>
            </div>
        </div>
        </>
    )
}

export default ChooseUserType