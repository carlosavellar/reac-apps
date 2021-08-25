import { useReducer } from "react";

import CartContext from "./cart-context";

const cartDefaultState = {
  items: [],
  totalAmount: 0,
};

const cartReducer = (state, action) => {
  switch (action.type) {
    case "ADD":
      const updatedAmount =
        state.totalAmount + action.item.price * action.item.amount;

      const existingItemIndex = state.items.findIndex((item) => {
        return item.id === action.item.id;
      });

      const existingItem = state.items[existingItemIndex];

      let updatedItems;

      if (existingItem) {
        const updatedItem = {
          ...existingItem,
          amount: existingItem.amount + action.item.amount,
        };
        updatedItems = [...state.items];
        updatedItems[existingItemIndex] = updatedItem;
      } else {
        updatedItems = state.items.concat(action.item);
      }

      return {
        items: updatedItems,
        totalAmount: updatedAmount,
      };
    case "REMOVE":
      const itemCartIndex = state.items.findIndex((item) => {
        return item.id === action.id;
      });
      const itemExisting = state.items[itemCartIndex];

      const totalAmount = state.totalAmount - itemExisting.price;

      let subTracedItems;
      if (itemExisting.amount === 1) {
        subTracedItems = state.items.filter((item) => {
          return item.id !== action.id;
        });
      } else {
        const updatedItem = {
          ...itemExisting,
          amount: itemExisting.amount - 1,
        };
        subTracedItems = [...state.items];
        subTracedItems[itemCartIndex] = updatedItem;
      }
      return {
        items: subTracedItems,
        totalAmount: totalAmount,
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

  const removeItemFromCartHandler = (id) => {
    dispatchCart({ type: "REMOVE", id: id });
  };

  const cartContext = {
    items: cartState.items,
    totalAmount: cartState.totalAmount,
    addItem: addItemToCartHandler,
    removeItem: removeItemFromCartHandler,
  };

  return (
    <CartContext.Provider value={cartContext}>
      {props.children}
    </CartContext.Provider>
  );
};

export default CartProvider;
