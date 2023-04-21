//! ** DUMMY CODE-ISH... NEEDS (maybe) TO BE CHANGED TO WORK WITH STRIPE **
import React, { useState } from "react";
import OrderSummary from "./OrderSummary";
import Confirmation from "./Confirmation";

// Define state variables for billing and shipping information, whether the user is editing the cart, and whether the user has confirmed their purchase
function Checkout() {
  const [billingInfo, setBillingInfo] = useState({
    name: "",
    address: "",
    city: "",
    state: "",
    zip: "",
  });
  const [shippingInfo, setShippingInfo] = useState({
    name: "",
    address: "",
    city: "",
    state: "",
    zip: "",
  });
  const [isEditingCart, setIsEditingCart] = useState(false);
  const [isConfirmed, setIsConfirmed] = useState(false);

  // Define event handlers for changes to the billing and shipping information
  function handleBillingInfoChange(event) {
    const { name, value } = event.target;
    setBillingInfo((prevBillingInfo) => ({
      ...prevBillingInfo,
      [name]: value,
    }));
  }
  
  function handleShippingInfoChange(event) {
    const { name, value } = event.target;
    setShippingInfo((prevShippingInfo) => ({
      ...prevShippingInfo,
      [name]: value,
    }));
  }
  // Define event handlers for the "Edit Cart" and "Pay Now" buttons
  function handleEditCart() {
    setIsEditingCart(true);
  }

  function handlePayNow() {
    setIsConfirmed(true);
  }

  // If the user has confirmed their purchase, render the Confirmation component
  if (isConfirmed) {
    return <Confirmation />;
  }

  // If the user is editing the cart, render the OrderSummary component
  if (isEditingCart) {
    return <OrderSummary />;
  }

  //render the billing and shipping information forms, along with the "Edit Cart" and "Pay Now" buttons
  // this will change depending on how stripe works

  return (
    <div>
      <h2>Checkout</h2>
      <h3>Billing Information</h3>
      <form>
        <label htmlFor="name">Name:</label>
        <input
          type="text"
          id="name"
          name="name"
          value={billingInfo.name}
          onChange={handleBillingInfoChange}
        />
        <br />
        <label htmlFor="address">Address:</label>
        <input
          type="text"
          id="address"
          name="address"
          value={billingInfo.address}
          onChange={handleBillingInfoChange}
        />
        <br />
        <label htmlFor="city">City:</label>
        <input
          type="text"
          id="city"
          name="city"
          value={billingInfo.city}
          onChange={handleBillingInfoChange}
        />
        <br />
        <label htmlFor="state">State:</label>
        <input
          type="text"
          id="state"
          name="state"
          value={billingInfo.state}
          onChange={handleBillingInfoChange}
        />
        <br />
        <label htmlFor="zip">Zip:</label>
        <input
          type="text"
          id="zip"
          name="zip"
          value={billingInfo.zip}
          onChange={handleBillingInfoChange}
        />
      </form>
      <br />
      <h3>Shipping Information</h3>
      <form>
        <label htmlFor="name">Name:</label>
        <input
          type="text"
          id="name"
          name="name"
          value={shippingInfo.name}
          onChange={handleShippingInfoChange}
        />
        <br />
        <label htmlFor="address">Address:</label>
        <input
          type="text"
          id="address"
          name="address"
          value={shippingInfo.address}
          onChange={handleShippingInfoChange}
        />
        <br />
        <label htmlFor="city">City:</label>
        <input
          type="text"
          id="city"
          name="city"
          value={shippingInfo.city}
          onChange={handleShippingInfoChange}
        />
        <br />
        <label htmlFor="state">State:</label>
        <input
          type="text"
          id="state"
          name="state"
          value={shippingInfo.state}
          onChange={handleShippingInfoChange}
        />
        <br />
        <label htmlFor="zip">Zip:</label>
        <input
          type="text"
          id="zip"
          name="zip"
          value={shippingInfo.zip}
          onChange={handleShippingInfoChange}
        />
      </form>
      <br />
      <button onClick={handleEditCart}>Edit Cart</button>
      <button onClick={handlePayNow}>Pay Now</button>
    </div>
  );

  }
export default Checkout;


