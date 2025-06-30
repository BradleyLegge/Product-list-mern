import { create } from "zustand";

const useCartStore = create((set) => ({
  cartItems: [],
  addToCart: (item) =>
    set((state) => {
      const exist = state.cartItems.find((i) => i.id === item.id);
      if (exist) {
        return {
          cartItems: state.cartItems.map((i) =>
            i.id === item.id ? { ...i, quantity: i.quantity + 1 } : i
          ),
        };
      }
      return { cartItems: [...state.cartItems, { ...item, quantity: 1 }] };
    }),
  increaseQuantity: (id) => 
    set((state) => ({
      cartItems: state.cartItems.map((i) => 
      i.id === id ? {...i, quantity: i.quantity + 1} : i)
    })),
  decreaseQuantity: (id) => 
    set((state) => ({
      cartItems: state.cartItems.map((i) => 
      i.id === id ? {...i, quantity: Math.max(1, i.quantity - 1)} : i)
    })),
  removeItem: (id) =>
    set((state) => ({
      cartItems: state.cartItems.filter((item) => item.id !== id),
    })),
  clearCart: () => set({ cartItems: [] }),
  }))

export default useCartStore;