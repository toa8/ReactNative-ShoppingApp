import create from "zustand";

const useBasketStore = create((set) => ({
  basket: [],
  amount: 0,

  addItem: (item) => set((state) => ({ basket: [...state.basket, item] })),
  getAmount: (itemPrice) =>
    set((state) => ({ amount: state.amount + itemPrice })),
  clearBasket: () => set({ basket: [], amount: 0 }),
  deleteItem: (basket, idx) => {
    let newBasket = [...basket];
    newBasket.splice(idx, 1);
    set({ basket: newBasket });
  },
  minusAmount: (x) => set((state) => ({ amount: state.amount - x })),
}));

export default useBasketStore;
