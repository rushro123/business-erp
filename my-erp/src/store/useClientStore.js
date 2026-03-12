import { create } from "zustand"

export const usePurchaseStore = create((set,get) => ({
  
  Purchase: [],

  addPurchase: (Purchase) =>
    set((state) => ({
      Purchase: [...state.Purchase, Purchase],
    })),

  deletePurchase: (id) =>
    set((state) => ({
      Purchase: state.Purchase.filter((Purchase) => Purchase.id !== id),
    })),

  // 🔥 Derived values
  getTotalPurchases: () => {
    return get().Purchase.length
  },

  getReceivables: () => {
    return get().Purchase
      .filter((Purchase) => Purchase.status === "Pending")
      .reduce((acc, Purchase) => acc + Purchase.amount, 0)
  },
}))