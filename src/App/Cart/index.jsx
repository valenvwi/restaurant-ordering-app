import { useCartStore } from "../stores/cart";
import { getTotalPrice } from "../stores/cart";
import "../index.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSquareMinus, faSquarePlus } from "@fortawesome/free-solid-svg-icons";
import emptyShoppingCart from "../../assets/Empty-ShoppingCart.png";
import { useNavigate } from "react-router-dom";
import { motion } from "framer-motion";

export default function Cart() {
  const cartItems = useCartStore((state) => state.cartItems);
  const totalPrice = getTotalPrice(cartItems);
  const increaseQuantity = useCartStore((state) => state.increaseQuantity);
  const decreaseQuantity = useCartStore((state) => state.decreaseQuantity);
  const navigate = useNavigate();

  function backToMenu() {
    navigate("/");
  }

  if (cartItems.length === 0) {
    return (
      <div className="container vh-100 d-flex flex-column align-items-center justify-content-center">
        <img src={emptyShoppingCart} alt="emptyShoppingCart" width="150px" />
        <h3 className="text-center mt-5">Your cart is empty </h3>
        <motion.button
          className="btn btn-primary my-3"
          whileHover={{ scale: 1.2 }}
          onClick={backToMenu}
        >
          Shop now
        </motion.button>
      </div>
    );
  }

  return (
    <div className="container mt-5 py-5">
      <h2 className="ms-2">Your Cart</h2>
      {cartItems.map((cartItem) => (
        <div className="card p-3 m-3" key={cartItem.id}>
          <div className="row">
            <div className="col-md-4 d-flex justify-content-center align-items-center">
              {/* Image on medium and larger screens */}
              <img
                src={cartItem.image}
                alt={cartItem.name}
                width="200px"
                className="mx-2 square-img d-none d-sm-none d-md-block"
              />
              {/* Image on small and smaller screens */}
              <img
                src={cartItem.image}
                alt={cartItem.name}
                width="95%"
                className="mx-2 square-img d-sm-block d-md-none"
              />
            </div>
            <div className="col-md-8 p-3 text-center d-flex flex-column justify-content-center align-items-center">
              {/* Text on medium and larger screens */}
              <div className="mx-2 d-none d-sm-none d-md-block pb-2">
                <h1 className="m-3">{cartItem.name}</h1>
                <h5 className="fw-normal">Price: {cartItem.price} CHF</h5>
              </div>
              {/* Text on small and smaller screens */}
              <div className="mx-2 d-sm-block d-md-none">
                <h4 className="m-1">{cartItem.name}</h4>
                <p>Price: {cartItem.price} CHF</p>
              </div>
              <div className="d-flex align-text-center justify-content-center">
                <motion.button
                  className="btn icon icon-minus-margin"
                  whileHover={{ scale: 1.2 }}
                  onClick={() => decreaseQuantity(cartItem.id)}
                >
                  <FontAwesomeIcon icon={faSquareMinus} size="xl" />
                </motion.button>
                <h5 className="p-2 d-none d-sm-none d-md-block">
                  Quantity: {cartItem.quantity}
                </h5>
                <h6 className="p-2 d-sm-block d-md-none">
                  Quantity: {cartItem.quantity}
                </h6>
                <motion.button
                  className="btn icon"
                  whileHover={{ scale: 1.2 }}
                  onClick={() => increaseQuantity(cartItem.id)}
                >
                  <FontAwesomeIcon icon={faSquarePlus} size="xl" />
                </motion.button>
              </div>
            </div>
          </div>
        </div>
      ))}
      <h3 className="text-end m-4">Total Price: {totalPrice} CHF</h3>
    </div>
  );
}
