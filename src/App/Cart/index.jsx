import { useCartStore } from "../stores/cart";
import { getTotalPrice } from "../stores/cart";

export default function Cart() {
  const cartItems = useCartStore((state) => state.cartItems);
  const totalPrice = getTotalPrice(cartItems);
  console.log(cartItems);

  return (
    <div>
      <h1>Cart</h1>
      {cartItems.map((cartItem) => (
        <div key={cartItem.id}>
          <h3>{cartItem.name}</h3>
          <p>Price: {cartItem.price} CHF</p>
          <p>Quantity: {cartItem.quantity}</p>
        </div>
      ))}
      <h3>Total Price: {totalPrice} CHF</h3>
    </div>
  );
}
