import React from 'react';
import { IoIosClose } from "react-icons/io";

const CartModal = ({ cartItems, onClose }) => {
    return (
        <div className="cart-modal">
            <div className="cart-header">
                <h2>Your Cart</h2>
                <IoIosClose onClick={onClose} size={30} />
            </div>
            <div className="cart-items">
                {cartItems.map((item, index) => (
                    <div key={index} className="cart-item">
                        <h6 className="d-inline m-2">Candy Name: {item.name}</h6>
                        <h6 className="d-inline m-2">Price: ₹{item.price}</h6>
                       <h6 className="d-inline m-2"> Detail: {item.detail}</h6> 
                    </div>
                ))}
            </div>
        </div>
    );
};

export default CartModal;
