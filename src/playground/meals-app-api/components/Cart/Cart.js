import CartItem from "./CartItem";
import Modal from "./../UI/Modal";
import classes from "./Cart.module.css";

const Cart = (props) => {
  const cartItems = (
    <ul className={classes["cart-items"]}>
      {[{ key: "12", id: "c1", name: "Sushi", amount: 2, price: 12.99 }].map(
        (item) => (
          <CartItem />
        )
      )}
    </ul>
  );

  return (
    <Modal onCloseModal={props.onClose}>
      <div>
        {cartItems}
        <div className={classes.total}>
          <span>Total Amount</span>
          <span>totalAmount</span>
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
