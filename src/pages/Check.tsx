// import checkItems from "../data/itemabout.json";
// import { Col, Row } from "react-bootstrap";
// import { CheckItem } from "../components/CheckItem";
import React from "react";
import "./style.css";
import ProductImage from "../images/product.jpg";
import PaypalCheckoutButton from "../components/PaypalCheckoutButton";
// import PaypalBtn from "react-paypal-checkout";
// import { PayPalButton } from "react-paypal-button-v2";

export function Check() {
  const product = {
    description: "Check",
    price: 100,
  };
  return (
    <div className="checkout">
      <h1> Checkout </h1>
      <p className="checkout-title" style={{ textAlign: "center" }}>
        Great Order!
      </p>
      <p className="checkout-description">Shipping up to 3 days !!!</p>
      <img className="product-image" src={ProductImage} alt="Product Image" />
      <div className="separator"></div>
      <div className="paypal">
        <p className="checkout-title">PAY WITH PAYPAL</p>
        <div className="paypal-button-container">
          <PaypalCheckoutButton product={product} />
        </div>
      </div>
    </div>
  );
}
