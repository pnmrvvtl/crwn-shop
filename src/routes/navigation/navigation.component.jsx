import './navigation.styles.scss'
import {Link, Outlet} from "react-router-dom";
import React, {useContext} from "react";

import {ReactComponent as CrwnLogo} from "../../assets/crown.svg";
import {UserContext} from "../../context/user.context";
import {signOutUser} from "../../utils/firebase/firebase.utils";
import CartIcon from "../../components/cart-icon/cart-icon.component";
import CartDropdown from "../../components/cart-dropdown/cart-dropdown.component";
import {CartContext} from "../../context/cart,context";


const Navigation = () => {
    const {currentUser} = useContext(UserContext);
    const { isCartOpen } = useContext(CartContext)

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

                    {
                        currentUser ?
                            (<span className='nav-link' onClick={signOutUser}>SIGN OUT</span>)
                            :
                            (<Link className="nav-link" to="/authentication">
                                SIGN IN
                            </Link>)
                    }
                    <CartIcon/>
                </div>
                { isCartOpen && <CartDropdown/>}
            </div>
            <Outlet/>
        </>
    );
};

export default Navigation;
