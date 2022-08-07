import './navigation.styles.scss'
import {Link, Outlet} from "react-router-dom";
import React from "react";

import { ReactComponent as CrwnLogo} from "../../assets/crown.svg";


const Navigation = () => {
    return (
        <>
            <div className="navigation">
                <Link className="logo-container" to="/">
                    <div className="">
                        <CrwnLogo className="logo"/>
                    </div>
                </Link>
                <div className="nav-links-container">
                    <Link className="nav-link" to="/shop">
                        SHOP
                    </Link>
                    <Link className="nav-link" to="/sign-in">
                        SIGN IN
                    </Link>
                </div>
            </div>
            <Outlet/>
        </>
    );
};

export default Navigation;
