import { create } from "zustand"

export const useInventoryStore = create((set,get) => ({
  
  Inventory: [],

  addInventory: (Inventory) =>
    set((state) => ({
      Inventory: [...state.Inventory, Inventory],
    })),

  deleteInventory: (id) =>
    set((state) => ({
      Inventory: state.Inventory.filter((Inventory) => Inventory.id !== id),
    })),

  // 🔥 Derived values
  getTotalInventorys: () => {
    return get().Inventory.length
  },

  getReceivables: () => {
    return get().Inventory
      .filter((Inventory) => Inventory.status === "Pending")
      .reduce((acc, Inventory) => acc + Inventory.amount, 0)
  },
}))
