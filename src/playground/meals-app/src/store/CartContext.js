import { useReducer } from "react";

import CartContext from "./cart-context";

const cartDefaultState = {
  items: [],
  totalAmount: 0,
};

const cartReducer = (state, action) => {
  switch (action.type) {
    case "ADD":
      const upDatedItems = state.items.concat(action.item);
      const updatedAmount =
        state.totalAmount + action.item.price * action.item.amount;
      return {
        items: upDatedItems,
        totalAmount: updatedAmount,
      };
    default:
      return cartDefaultState;
  }
};

const CartProvider = (props) => {
  const [cartState, dispatchCart] = useReducer(cartReducer, cartDefaultState);

  const addItemToCartHandler = (item) => {
    dispatchCart({ type: "ADD", item: item });
  };

  const cartContext = {
    items: cartState.items,
    totalAmount: cartState.totalAmount,
    addItem: addItemToCartHandler,
    removeAddItem: "",
  };
  return (
    <CartContext.Provider value={cartContext}>
      {props.children}
    </CartContext.Provider>
  );
};

export default CartProvider;
