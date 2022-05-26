import React from "react";
import { useCartContext } from "./cartContext";
import SingleItem from "./SingleItem";

const Cart = () => {

    const {cart} = useCartContext();

    return (
        <div id="menu-container" >
            {cart.cart.map((item) => {
                return <>
                    <SingleItem key={item.id} {...item} />
                    <hr className="hr" />
                </>
            })}
        </div>
    )
}

export default Cart;