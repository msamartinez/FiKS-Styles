import React from "react";
import { cart } from "../global/cart";

function OrderSummary(props) {
  const { items, totalPrice } = props;

  return (
    <div>
      <h2>Order Summary</h2>
      <ul>
        {items.map(item => (
          <li key={item.id}>{item.name} - ${item.price}</li>
        ))}
      </ul>
      <p>Total Price: ${totalPrice}</p>
      <button onClick={() => console.log('Confirm cart')}>Confirm Cart</button>
    </div>
  );
}

export default OrderSummary;