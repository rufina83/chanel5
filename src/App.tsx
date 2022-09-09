import { Routes, Route } from "react-router-dom";
import { Container } from "react-bootstrap";
import { Home } from "./pages/Home";
import { Store } from "./pages/Store";
import { New } from "./pages/New";
import { Check } from "./pages/Check";
import { Navbar } from "./components/Navbar";
import { ShoppingCartProvider } from "./context/ShoppingCartContext";
import React from "react";
import "./App.css";
// import { CheckItem } from "./components/CheckItem";
import { PayPalScriptProvider } from "@paypal/react-paypal-js";

function App() {
  return (
    <ShoppingCartProvider>
      <PayPalScriptProvider
        options={{ "client-id": process.env.REACT_APP_PAYPAL_CLIENT_ID! }}
      >
        <Navbar />
        <Container className="mb-4">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/store" element={<Store />} />
            <Route path="/new" element={<New />} />
            <Route path="/checkout" element={<Check />} />

            <Route
              path="/"
              element={
                <>
                  <Check />
                </>
              }
            />
          </Routes>
        </Container>
      </PayPalScriptProvider>
    </ShoppingCartProvider>
  );
}

export default App;
