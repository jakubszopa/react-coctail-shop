import { useEffect, useRef, useState } from "react";
import { FaShoppingCart } from "react-icons/fa";
import { useCartContext } from "./cartContext";

const CartonIcon = () => {

    const { cart } = useCartContext();

    const [amount, setAmount] = useState(0);

    const cartRef = useRef(null);

    useEffect(() => {
        setAmount(cart.totalAmount);
        let timer = setTimeout(() => {
            cartRef.current.classList.remove('scale-animation');
        }, 2000);
        cartRef.current.classList.add('scale-animation');
        return () => clearTimeout(timer);
    }, [cart]);

    return (
        <button id="cart-container" ref={cartRef}>
            <FaShoppingCart />
            <p>Your Cart</p>
            <span id="number-of-orders">{amount}</span>
        </button>
    )
}

export default CartonIcon;