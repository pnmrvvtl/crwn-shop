import React, {useContext} from 'react';
import {CartItemContainer, ShoppingIcon, ItemCount} from './cart-icon.styles';
import {CartContext} from "../../context/cart.context";

const CartIcon = () => {
    const {isCartOpen, setIsCartOpen, cartCount} = useContext(CartContext);

    const toggleIsCartOpen = () => {
        setIsCartOpen(!isCartOpen);
    }

    return (
        <CartItemContainer onClick={toggleIsCartOpen}>
            <ShoppingIcon/>
            <ItemCount>{cartCount}</ItemCount>
        </CartItemContainer>
    );
};

export default CartIcon;