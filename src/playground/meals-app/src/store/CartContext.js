import CartContext from "./cart-context";

const CartProvider = (props) => {
  const cartContext = {
    items: [0],
    totalAmount: 0,
    addItem: (item) => console.log("Ceia"),
    removeItem: (id) => {},
  };
  return (
    <CartContext.Provider value={cartContext}>
      {props.children}
    </CartContext.Provider>
  );
};

export default CartProvider;
