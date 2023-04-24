
import React from "react";
import { Checkout} from "./Checkout"; //* im going somewhere with this. give me a minute

function Confirmation() {
  return (
    <div>
      <h2>Thank you for your purchase!</h2>
      <h1>ORDER NUMBER</h1> //! this will be the order number from the database or stripe or whatever 
      <p>Your order has been confirmed and will be shipped soon.</p>
    </div>
  );
}

export default Confirmation;


//* I think something else is missing here so i'll come back to this later

