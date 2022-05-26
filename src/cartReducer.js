import React from 'react';

const cartReducer = (state, action) => {

    const calculateTotalPrice = () => {
        let totalPrice = 0;

        state.cart.forEach(item => {
            totalPrice = totalPrice + (item.price * item.amount)
            // console.log(totalPrice, item.price, item.amount)
        });

        // console.log(parseFloat(totalPrice).toFixed(2))

        return +parseFloat(totalPrice).toFixed(2);
    }

  if (action.type === 'ADD_ITEM') {

    let PriceToAdd = 0;
    let newCart = state.cart.map((item) => {
      if (item.id === action.payload.id) {
        PriceToAdd = +parseFloat(item.price * action.payload.amount).toFixed(2);
        return { ...item, amount: item.amount + action.payload.amount};
      }
      return item;
    });
    console.log(calculateTotalPrice(), PriceToAdd)
    return {
      ...state,
      cart: newCart,
      totalAmount: state.totalAmount + action.payload.amount,
      totalPrice: parseFloat(+(calculateTotalPrice() + PriceToAdd)).toFixed(2),
    };
  }
};

export default cartReducer;
