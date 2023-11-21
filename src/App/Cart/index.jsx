import { useCartStore } from "../stores/cart";
import { getTotalPrice } from "../stores/cart";
import "../index.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSquareMinus, faSquarePlus } from "@fortawesome/free-solid-svg-icons";

export default function Cart() {
  const cartItems = useCartStore((state) => state.cartItems);
  const totalPrice = getTotalPrice(cartItems);
  const increaseQuantity = useCartStore((state) => state.increaseQuantity);
  const decreaseQuantity = useCartStore((state) => state.decreaseQuantity);

  return (
    <div className="container">
      <h1>Your Cart</h1>
      {cartItems.map((cartItem) => (
        <div className="card p-3 m-3" key={cartItem.id}>
          <div className="row">
            <div className="col-md-4">
              <img
                src={cartItem.image}
                alt={cartItem.name}
                width="250px"
                height="250px"
                className="mx-2"
              />
            </div>
            <div className="col-md-8 p-3 text-center">
              <h1 className="m-3">{cartItem.name}</h1>
              <h4>Price: {cartItem.price} CHF</h4>
              <div className="d-flex align-text-center justify-content-center p-4">
                <button
                  className="btn icon icon-minus-margin"
                  onClick={() => decreaseQuantity(cartItem.id)}
                >
                  <FontAwesomeIcon icon={faSquareMinus} size="xl" />
                </button>
                <h5 className="p-2">Quantity: {cartItem.quantity}</h5>
                <button
                  className="btn icon"
                  onClick={() => increaseQuantity(cartItem.id)}
                >
                  <FontAwesomeIcon icon={faSquarePlus} size="xl" />
                </button>
              </div>
            </div>
          </div>
        </div>
      ))}
      <h3 className="text-end m-3">Total Price: {totalPrice} CHF</h3>
    </div>
  );
}
