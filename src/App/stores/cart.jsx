import { create } from "zustand";

export const useCartStore = create((set) => ({
  cartItems: [],
  cartUpdated: false,

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
      cartUpdated: true,
    })),

  increaseQuantity: (id) =>
    set((state) => ({
      cartItems: state.cartItems.find((cartItem) => cartItem.id === id)
        ? state.cartItems.map((cartItem) =>
            cartItem.id === id
              ? { ...cartItem, quantity: cartItem.quantity + 1 }
              : cartItem
          )
        : [...state.cartItems],
    })),

  decreaseQuantity: (id) =>
    set((state) => ({
      cartItems: state.cartItems.find(
        (cartItem) => cartItem.id === id && cartItem.quantity > 1
      )
        ? state.cartItems.map((cartItem) =>
            cartItem.id === id
              ? { ...cartItem, quantity: cartItem.quantity - 1 }
              : cartItem
          )
        : state.cartItems.filter((cartItem) => cartItem.id !== id),
    })),

  deleteFromCart: (id) =>
    set((state) => ({
      cartItems: state.cartItems.filter((cartItem) => cartItem.id !== id),
    })),
}));

export const getTotalPrice = (cartItems) => {
  return cartItems.reduce(
    (total, item) => total + item.price * item.quantity,
    0
  );
};
