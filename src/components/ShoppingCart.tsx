import { Offcanvas, Stack } from "react-bootstrap";
import { useShoppingCart } from "../context/ShoppingCartContext";
import { formatCurrency } from "../utilities/formatCurrency";
import { CartItem } from "./CartItem";
import storeItems from "../data/items.json";
import { Button } from "react-bootstrap";
import { Link, useNavigate, useParams, useLocation } from "react-router-dom";

type ShoppingCartProps = {
  isOpen: boolean;
};

export function ShoppingCart({ isOpen }: ShoppingCartProps) {
  const navigate = useNavigate();

  const { closeCart, cartItems } = useShoppingCart();
  const checkoutHandler = () => {
    // navigate("/payment");
    navigate("/checkout");
  };
  return (
    <Offcanvas show={isOpen} onHide={closeCart} placement="end">
      <Offcanvas.Header closeButton>
        <Offcanvas.Title>Cart</Offcanvas.Title>
      </Offcanvas.Header>
      <Offcanvas.Body>
        <Stack gap={3}>
          {cartItems.map((item) => (
            <CartItem key={item.id} {...item} />
          ))}

          <div className=" d-flex align-items-center justify-content-center  fw-bold fs-5 ">
            Total
            {formatCurrency(
              cartItems.reduce((total, cartItem) => {
                const item = storeItems.find((i) => i.id === cartItem.id);
                return total + (item?.price || 0) * cartItem.quantity;
              }, 0)
            )}
          </div>

          <Button
            onClick={() => checkoutHandler()}
            // variant="success"
            type="button"
            style={{ backgroundColor: "orange", border: "none" }}
            size="sm"
          >
            Proceed to Checkout
          </Button>
        </Stack>
      </Offcanvas.Body>
    </Offcanvas>
  );
}
