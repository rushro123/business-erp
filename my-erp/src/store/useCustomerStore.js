import { create } from "zustand"

export const useCustomerStore = create((set,get) => ({
  
  Customer: [],

  addCustomer: (Customer) =>
    set((state) => ({
      Customer: [...state.Customer, Customer],
    })),

  deleteCustomer: (id) =>
    set((state) => ({
      Customer: state.Customer.filter((Customer) => Customer.id !== id),
    })),

  // 🔥 Derived values
  getTotalCustomer: () => {
    return get().Customer.length
  },

  getReceivables: () => {
    return get().Customer
      .filter((Customer) => Customer.status === "Pending")
      .reduce((acc, Customer) => acc + Customer.amount, 0)
  },
}))