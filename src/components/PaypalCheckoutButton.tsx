// import {
//   PayPalScriptProvider,
//   PayPalButtons,
//   usePayPalScriptReducer,
// } from "@paypal/react-paypal-js";
// import { PayPalScriptOptions } from "@paypal/paypal-js/types/script-options";
// import { PayPalButtonsComponentProps } from "@paypal/paypal-js/types/components/buttons";

// const paypalScriptOptions: PayPalScriptOptions = {
//   "client-id":
//     "AaUpVv8WDVM5uezwsQo79K6YBKmqm3EeLSOx5TFTX4RM2_ephwW68aJ4_ASXYPjbI8OyuXchwgkQ7bRl",
//   currency: "USD",
// };
// function Button() {
//   /**
//    * usePayPalScriptReducer use within PayPalScriptProvider
//    * isPending: not finished loading(default state)
//    * isResolved: successfully loaded
//    * isRejected: failed to load
//    */
//   const [{ isPending }] = usePayPalScriptReducer();
//   const paypalbuttonTransactionProps: PayPalButtonsComponentProps = {
//     style: { layout: "vertical" },
//     createOrder(data: any, actions: any) {
//       return actions.order.create({
//         purchase_units: [
//           {
//             amount: {
//               value: "0.01",
//             },
//           },
//         ],
//       });
//     },
//     onApprove(data: any, actions: any) {
//       /**
//        * data: {
//        *   orderID: string;
//        *   payerID: string;
//        *   paymentID: string | null;
//        *   billingToken: string | null;
//        *   facilitatorAccesstoken: string;
//        * }
//        */
//       return actions.order.capture({}).then((details: any) => {
//         alert(
//           "Transaction completed by" +
//             (details?.payer.name.given_name ?? "No details")
//         );

//         alert("Data details: " + JSON.stringify(data, null, 2));
//       });
//     },
//   };
//   return (
//     <>
//       {isPending ? <h2>Load Smart Payment Button...</h2> : null}
//       <PayPalButtons {...paypalbuttonTransactionProps} />
//     </>
//   );
// }
// export default function App() {
//   return (
//     <div className="App">
//       <h1>Hello PayPal</h1>
//       <PayPalScriptProvider options={paypalScriptOptions}>
//         <Button />
//       </PayPalScriptProvider>
//     </div>
//   );
// }

//************************************************************************* */
import React, { useState } from "react";
import { PayPalScriptOptions } from "@paypal/paypal-js/types/script-options";

import { PayPalScriptProvider, PayPalButtons } from "@paypal/react-paypal-js";

// type PayPalScriptProvider<T> = (props:{ value:T, children?:any })=>any
// const Provider = PayPalScriptProvider as unknown as PayPalScriptProvider<any>
const paypalScriptOptions: PayPalScriptOptions = {
  "client-id":
    "AaUpVv8WDVM5uezwsQo79K6YBKmqm3EeLSOx5TFTX4RM2_ephwW68aJ4_ASXYPjbI8OyuXchwgkQ7bRl",
  currency: "USD",
};
const PaypalCheckoutButton = (props: any) => {
  const { product } = props;

  const [paidFor, setPaidFor] = useState(false);
  const [error, setError] = useState(null);

  const handleApprove = (orderId: any) => {
    setPaidFor(true);
  };

  if (paidFor) {
    alert("Thank You for purchasing from Eazy2Code");
  }

  if (error) {
    alert(error);
  }

  return (
    <PayPalScriptProvider options={paypalScriptOptions}>
      <PayPalButtons
        createOrder={(data: any, actions: any) => {
          return actions.order.create({
            purchase_units: [
              {
                amount: {
                  currency_code: "USD",
                  value: "0.01",
                },
              },
            ],
            application_context: {
              shipping_preference: "NO_SHIPPING", // default is "GET_FROM_FILE"
            },
          });
        }}
        onApprove={(data: any, actions: any) => {
          return actions.order.capture().then(function (details: any) {
            alert("Transaction completed by " + details.payer.name.given_name);

            return fetch("/paypal-transaction-complete", {
              method: "post",
              body: JSON.stringify({
                orderID: data.orderID,
              }),
            });
          });
        }}
      />
    </PayPalScriptProvider>
  );
};

export default PaypalCheckoutButton;
//****************************************************************** */
// import React, { useState } from "react";
// import { PayPalScriptProvider, PayPalButtons } from "@paypal/react-paypal-js";

// const PaypalCheckoutButton = (props: any) => {
//   const { product } = props;

//   const [paidFor, setPaidFor] = useState(false);
//   const [error, setError] = useState(null);

//   const handleApprove = (orderId: any) => {
//     setPaidFor(true);
//   };

//   if (paidFor) {
//     alert("Thank You for purchasing from Eazy2Code");
//   }

//   if (error) {
//     alert(error);
//   }

//   return (
//     <PayPalScriptProvider>
//       <PayPalButtons
//         onClick={(data: any, actions: any) => {
//           const hasAlreadyBoughtCourse = false;
//           if (hasAlreadyBoughtCourse) {
//             setError("You Already bough this course");
//             return actions.reject();
//           } else {
//             return actions.resolve();
//           }
//           ``;
//         }}
//         createOrder={(data: any, actions: any) => {
//           return actions.order.create({
//             purchase_units: [
//               {
//                 description: product.description,
//                 amount: {
//                   value: product.price,
//                 },
//               },
//             ],
//           });
//         }}
//         onApprove={async (data: any, action: any) => {
//           const order = await action.order.capture();
//           console.log("order", order);

//           handleApprove(data.orderID);
//         }}
//         onCancel={() => {}}
//         onError={(err) => {
//           setError(err);
//           console.log("PayPal Checkout onError", err);
//         }}
//       />
//     </PayPalScriptProvider>
//   );
// };

// export default PaypalCheckoutButton;
