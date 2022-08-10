import {NavigationContainer, LogoContainer, NavLinks, NavLink} from './navigation.styles'
import {Link, Outlet} from "react-router-dom";
import React, {useContext} from "react";

import {ReactComponent as CrwnLogo} from "../../assets/crown.svg";
import {UserContext} from "../../context/user.context";
import {signOutUser} from "../../utils/firebase/firebase.utils";
import CartIcon from "../../components/cart-icon/cart-icon.component";
import CartDropdown from "../../components/cart-dropdown/cart-dropdown.component";
import {CartContext} from "../../context/cart.context";


const Navigation = () => {
    const {currentUser} = useContext(UserContext);
    const { isCartOpen } = useContext(CartContext)

    return (
        <>
            <NavigationContainer>
                <LogoContainer to="/">
                        <CrwnLogo className="logo"/>
                </LogoContainer>
                <NavLinks>
                    <NavLink to="/shop">
                        SHOP
                    </NavLink>

                    {
                        currentUser ?
                            (<NavLink as='span' onClick={signOutUser}>SIGN OUT</NavLink>)
                            :
                            (<NavLink to="/authentication">
                                SIGN IN
                            </NavLink>)
                    }
                    <CartIcon/>
                </NavLinks>
                { isCartOpen && <CartDropdown/>}
            </NavigationContainer>
            <Outlet/>
        </>
    );
};

export default Navigation;
