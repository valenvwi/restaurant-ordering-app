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
    <div className="container mt-5 pt-5">
      <h2 className="ms-2">Your Cart</h2>
      {cartItems.map((cartItem) => (
        <div className="card p-3 m-3" key={cartItem.id}>
          <div className="row">
            <div className="col-md-4 d-flex justify-content-center align-items-center">
              <img
                src={cartItem.image}
                alt={cartItem.name}
                width="95%"
                className="mx-2 square-img"
              />
            </div>
            <div className="col-md-8 p-3 text-center ">
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
