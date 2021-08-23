import CartContext from "./cart-context";

const CartProvider = (props) => {
  const cartContext = {
    item: [],
    totalAmount: "",
    addItem: (item) => {},
    removeItem: (id) => {},
  };
  return (
    <CartContext.Provider value={cartContext}>
      {props.children}
    </CartContext.Provider>
  );
};

export default CartProvider;
