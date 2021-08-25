import { useContext } from "react";
import Modal from "./../UI/Modal";
import classes from "./Cart.module.css";
import CartContext from "./../../store/cart-context";
import CartItem from "./CartItem";

const Cart = (props) => {
  const cartCtx = useContext(CartContext);

  const totalAmount = `${cartCtx.totalAmount.toFixed(2)}`;

  const onRemoveItemHandler = (id) => {
    cartCtx.removeItem(id);
  };
  const onAddItemHandler = (item) => {
    cartCtx.addItem({ ...item, amount: 1 });
  };

  const cartItems = (
    <ul className={classes["cart-items"]}>
      {cartCtx.items.map((item) => {
        debugger;
        return (
          <CartItem
            name={item.name}
            price={item.price}
            amount={item.amount * item.price}
            onAdd={onAddItemHandler.bind(null, item)}
            onRemove={onRemoveItemHandler.bind(null, item.id)}
          />
        );
      })}
    </ul>
  );

  return (
    <Modal onClose={props.onClose}>
      <div>
        {cartItems}
        <div className={classes.total}>
          <span>Total Amount</span>
          <span>{totalAmount}</span>
        </div>
        <div className={classes.actions}>
          <button className={classes["button--alt"]} onClick={props.onClose}>
            Close
          </button>
          <button className={classes.button}>Order</button>
        </div>
      </div>
    </Modal>
  );
};

export default Cart;
