import React from "react";

function OrderHistory() {
  const orders = [
    {
      date: " ",
      items: ["Item 1", "Item 2", "Item 3"],
    },
  ];

  function handleLogout() {
    props.logout();
  }

  return (
    <div>
      <h2>Order History</h2>
      <button onClick={handleLogout}>Logout</button>
      {orders.map((order, index) => (
        <div key={index}>
          <p>Date: {order.date}</p>
          <ul>
            {order.items.map((item, index) => (
              <li key={index}>{item}</li>
            ))}
          </ul>
        </div>
      ))}
    </div>
  );
}

export default OrderHistory;
