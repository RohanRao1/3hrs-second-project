import React, { useContext } from "react";
import classes from "./Cart.module.css";
import Modal from "../UI/Modal";
import CartContext from "../../store/cart-context";


const Cart = props => {
  const cartctx = useContext(CartContext);

  const totalAmount = cartctx.totalAmount.toFixed(2);
  const hasItems = cartctx.items.length > 0;

  const cartItems = (
    <ul className={classes["cart-items"]}>
      {cartctx.items.map((item) => (
        <li key={item.id}>
          <div className={classes.cover}>
            <div className={classes.itemname}>{item.name}</div>
            <div className={classes.items}>
              <span className={classes.amt}>Rs. {item.price}</span>
              <span className={classes.totnum}>x {item.amount}</span>
            </div>
          </div>
        </li>
      ))}
    </ul>
  );

    return (
      <Modal onClose={props.onCloseCart}>
        {cartItems}
        <div className={classes.total}>
          <span>Total Amount</span>
          <span>Rs. {totalAmount}</span>
        </div>
        <div className={classes.actions}>
          <button
            className={classes["button--alt"]}
            onClick={props.onCloseCart}
          >
            Close
          </button>
          {hasItems && <button className={classes.button}>Order</button>}
        </div>
      </Modal>
    );

}

export default Cart