import { create } from "zustand";

export const useCartStore = create((set) => ({
  cartItems: [],

  addToCart: (id, name, image, price, quantity) =>
    set((state) => ({
      cartItems: state.cartItems.find((cartItem) => cartItem.id === id)
        ? state.cartItems.map((cartItem) =>
            cartItem.id === id
              ? { ...cartItem, quantity: cartItem.quantity + quantity }
              : cartItem
          )
        : [
            ...state.cartItems,
            {
              id: id,
              name: name,
              image: image,
              price: price,
              quantity: quantity,
            },
          ],
    })),
}));

export const getTotalPrice = (cartItems) => {
  return cartItems.reduce(
    (total, item) => total + item.price * item.quantity,
    0
  );
};
