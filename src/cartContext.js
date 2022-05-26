import React, { useReducer, useContext } from 'react';
import cartReducer from './cartReducer';

const CartContext = React.createContext();

const initialCart = {
  cart: [
    {
      id: 1,
      name: 'Mimosa',
      description: 'This is a Mimosa',
      price: 19.99,
      amount: 0,
    },
    {
      id: 2,
      name: 'Mimosa2',
      description: 'This is a Mimosa',
      price: 19.99,
      amount: 0,
    },
    {
      id: 3,
      name: 'Mimosa3',
      description: 'This is a Mimosa',
      price: 19.99,
      amount: 0,
    },
    {
      id: 4,
      name: 'Mimosa4',
      description: 'This is a Mimosa',
      price: 19.99,
      amount: 0,
    }
  ],
  totalAmount: 0,
  totalPrice: 0,
};

const CartProvider = ({ children }) => {
  const addToCart = (id, amount) => {
    cartDispatch({ type: 'ADD_ITEM', payload: { id: id, amount: amount } });
  };

  const deleteOne = (id) => {
      cartDispatch({type: 'DELETE_ONE_ITEM', payload: id})
  }

  const addOne = (id) => {
      cartDispatch({type: 'ADD_ONE_ITEM', payload: id})
  }

  const deleteAll = (id) => {
      cartDispatch({type: 'DELETE_ALL', payload: id})
  }

  const [cart, cartDispatch] = useReducer(cartReducer, initialCart);

  return (
    <CartContext.Provider value={{ cart, addToCart, deleteOne, addOne, deleteAll }}>{children}</CartContext.Provider>
  );
};

export const useCartContext = () => {
  return useContext(CartContext);
};

export { CartContext, CartProvider };
