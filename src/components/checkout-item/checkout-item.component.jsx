import React, {useContext} from 'react';
import './checkout-item.styles.scss';
import {CartContext} from "../../context/cart.context";


const CheckoutItem = ({cartItem}) => {
    const {name, imageUrl, price, id, quantity} = cartItem;
    const {clearItemFromCart, removeItemFromCart, addItemToCart} = useContext(CartContext);

    const onClearHandler = () => clearItemFromCart(cartItem);
    const onIncHandler = () => addItemToCart(cartItem);
    const onDecHandler = () => removeItemFromCart(cartItem);

    return (
        <div className='checkout-item-container'>
            <div className="image-container">
                <img src={imageUrl} alt={`${name}`}/>
            </div>
            <span className='name'>{name}</span>
            <span className='quantity'>
                <div className='arrow' onClick={onDecHandler}> &#10094;</div>
                    <span className='value'>{quantity}</span>
                <div className='arrow' onClick={onIncHandler}> &#10095;</div>
            </span>
            <span className='price'>{price}</span>
            <div className="remove-button" onClick={onClearHandler}>&#10005;</div>
        </div>
    );
};

export default CheckoutItem;