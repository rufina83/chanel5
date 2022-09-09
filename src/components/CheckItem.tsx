import { Card } from "react-bootstrap";

type StoreItemProps = {
  imgUrl: string;
};
export function CheckItem({ imgUrl }: StoreItemProps) {
  return (
    <Card>
      <Card.Img
        variant="top"
        src={imgUrl}
        height="400px"
        style={{ objectFit: "cover" }}
      />
    </Card>
  );
}

// import { Card } from "react-bootstrap";
// import React from "react";
// import "./style.css";
// import ProductImage from "../images/product.jpg";
// // import PaypalCheckoutButton from "./PaypalCheckoutButton";

// export function CheckItem() {
//   const product = {
//     description: "Checkout",
//     price: 100,
//   };

//   return (
//     <div className="checkout">
//       <h1> Checkout</h1>
//       <p className="checkout-title">Great Order!</p>
//       <p className="checkout-description">Shipping up to 3 days !!!</p>
//       <img className="product-image" src={ProductImage} alt="Product Image" />
//       <div className="separator"></div>
//       <div className="paypal">
//         <p className="checkout-title">PAY WITH PAYPAL</p>
//         <div className="paypal-button-container">
//           {/* <PaypalCheckoutButton product={product} /> */}
//         </div>
//       </div>
//     </div>
//   );
// }
