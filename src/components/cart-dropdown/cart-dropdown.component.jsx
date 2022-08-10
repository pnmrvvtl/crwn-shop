import React, {useContext} from 'react';
import {EmptyMessage,CartItems,CartDropdownContainer} from './cart-dropdown.styles';
import Button from "../button/button.component";
import CartItem from "../cart-item/cart-item.component";
import {CartContext} from "../../context/cart.context";
import {useNavigate} from "react-router-dom";


const CartDropdown = () => {
    const {cartItems} = useContext(CartContext);
    const navigate = useNavigate();

    const goToCheckoutHandler = () => {
        navigate('/checkout')
    }
//todo hide dropdown when click not on the dropdown
    return (
        <CartDropdownContainer>
            <CartItems>
                {cartItems.length ?
                    (cartItems.map(item => <CartItem key={item.id} cartItem={item}/> ))
                    :
                    (<EmptyMessage>Your cart is empty</EmptyMessage>)
                }
            </CartItems>
            <Button onClick={goToCheckoutHandler}>GO TO CHECKOUT</Button>
        </CartDropdownContainer>
    );
};

export default CartDropdown;