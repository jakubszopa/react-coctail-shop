import React, { useState } from "react";
import { useCartContext } from "./cartContext";

const SingleItem = ({id, name, description, price }) => {

    const { addToCart } = useCartContext()

    const [amount, setAmount ] = useState(1);

    return <article className="single-item">
        <div className="description">
            <h4>{name}</h4>
            <p>{description}</p>
            <span className="price">{price}</span>
        </div>
        <div className="amount-and-order">
            <div className="amount">
                <p>Amount</p>
                <input type='number' className="amount-box" placeholder="1" onChange={(e) => setAmount(+e.target.value)} />
            </div>
            <button className="add-button" onClick={() => {
                console.log(id, amount);
                addToCart(id, amount)}}>
                +Add
            </button>
        </div>
    </article>
}

export default SingleItem;