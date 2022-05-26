import React from 'react';
import { useCartContext } from './cartContext';

const Order = () => {
  const { cart } = useCartContext();

  return (
    <>
      <div className='backdrop'></div>
      <article id='order-container'>
        {cart.cart.map((item) => {
          const { name, id, price, amount } = item;
          return (
            <article key={id} className='single-item'>
              <div className='price-and-amount'>
                <div className='description'>
                  {name}
                  {price}
                </div>
                <span className='amount-number'>{amount}</span>
              </div>
              <div className="amount-buttons">
                  <button>+</button>
                  <button>-</button>
              </div>
            </article>
          );
        })}
        <h4>{cart.totalPrice}</h4>
      </article>
    </>
  );
};

export default Order;
