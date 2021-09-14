import { useReducer } from "react";
import CartContext from "./cart-context";

const CART_DEFAULT_STATE = {
  items: [],
  totalAmount: 0,
};

const cartReducer = (state, action) => {
  switch (action.type) {
    case "ADD":
      const updatedAmount =
        state.totalAmount + action.item.price * action.item.amount;

      const existingCartIndex = state.items.findIndex((item) => {
        return item.id === action.item.id;
      });

      const existingItem = state.items[existingCartIndex];

      let updatedItems;

      if (existingItem) {
        const updatedItem = {
          ...existingItem,
          amount: existingItem.amount + action.item.amount,
        };
        updatedItems = [...state.items];
        updatedItems[existingCartIndex] = updatedItem;
      } else {
        updatedItems = state.items.concat(action.item);
      }

      return {
        items: updatedItems,
        totalAmount: updatedAmount,
      };
    case "REMOVE":
      const cartItemIndexId = state.items.findIndex((item) => {
        return item.id === action.id;
      });

      const existingItemCart = state.items[cartItemIndexId];
      const totalAmount = state.totalAmount - existingItemCart.price;

      let updatedItemsD;

      if (existingItemCart.amount === 1) {
        updatedItemsD = state.items.filter((item) => {
          return item.id !== action.id;
        });
      } else {
        let updatedItem = {
          ...existingItemCart,
          amount: existingItemCart.amount - 1,
        };
        debugger;
        updatedItemsD = [...state.items];
        updatedItemsD[existingItemCart] = updatedItem;
      }
      return {
        items: updatedItemsD,
        totalAmount: totalAmount,
      };

    default:
      return CART_DEFAULT_STATE;
  }
};

const ContextProvider = (props) => {
  const [cartState, dispatchCart] = useReducer(cartReducer, CART_DEFAULT_STATE);
  console.log(cartState.items);

  const addItemHandler = (item) => {
    dispatchCart({ type: "ADD", item: item });
  };

  const removeItemHandler = (id) => {
    dispatchCart({ type: "REMOVE", id: id });
  };

  const cartContext = {
    items: cartState.items,
    totalAmount: cartState.totalAmount,
    addItem: addItemHandler,
    removeItem: removeItemHandler,
  };

  return (
    <CartContext.Provider value={cartContext}>
      {props.children}
    </CartContext.Provider>
  );
};

export default ContextProvider;
