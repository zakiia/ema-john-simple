import React from "react";

const Cart = ({ cart }) => {
  return (
    <div>
      <h3>Order Summery</h3>
      <p>Selected item: {cart.length}</p>
    </div>
  );
};

export default Cart;
