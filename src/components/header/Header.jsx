import React, { useContext, useState } from "react";
import "./Header.css";
import ProfileTooltip from "../Profile_Tooltip/ProfileTooltip";
import { useNavigate } from "react-router-dom";
import {authenticationContext} from '../../App'
import { AuthContext } from "../../hooks/AuthContext";

function Header() {

    const {user,handleProfileTooltip,tooltip}=useContext(AuthContext)

    const navigate=useNavigate()     

    return (
        <div>
            <div className="header-container z-50">
                <div className="logo">
                    <img
                        src="images/olx_logo.png"
                        alt=""
                        className="w-12 lg:w-32 md:w-12"
                        onClick={()=>navigate('/')}
                    />
                </div>
                <div className="location-container">
                    <img src="icons/loupe.png" alt="" className="w-4" />
                    <input type="text" placeholder="location..." />
                    <img src="icons/down-arrow.png" alt="" className="w-4" />
                </div>
                <div className="search-box">
                    <input type="text" placeholder="search...." />
                    <div className="search-btn">
                        <img src="icons/loupe.png" alt="" className="w-4" />
                    </div>
                </div>
                <div className="lang-selector relative cursor-pointer">
                    <h4>English</h4>
                    <img
                        src="icons/down-arrow.png"
                        alt=""
                        className="w-8 transition duration-500 ease-in-out"
                    />
                   
                </div>
                {user?
                <div className="login-btn" onClick={handleProfileTooltip} >
                    
                    <div className="user-profile flex gap-2 items-center justify-center">
                        <img
                            src="https://cdn-icons-png.flaticon.com/512/666/666201.png"
                            alt=""
                            className="w-8"
                        />
                        <img
                            src="icons/down-arrow.png"
                            alt=""
                            className="w-8 transition duration-500 ease-in-out"
                            
                        />                        
                    </div>
                   {tooltip&& <ProfileTooltip />}
                </div>
                :<button className="underline underline-offset-2" onClick={()=>navigate('/login')}>Login</button>}

                <div onClick={()=>user?navigate('/sell'):navigate('/login')} className="sell-btn cursor-pointer">
                    <span>Sell</span>
                </div>
            </div>
            {/* Outlet component */}
        </div>
    );
}

export default Header;
