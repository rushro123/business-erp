import { create } from "zustand"

export const useSupplierStore = create((set,get) => ({
  stats: {
    totalSales: 245000,
    totalCustomers: 1248,
    inventoryItems: 532,
    revenueGrowth: 18,
    salesTrend: 12.5,
    customersTrend: 4.3,
    inventoryTrend: -2.1,
    revenueTrend: 3.2,
  },
  suppliers: [],

  addSupplier: (supplier) =>
    set((state) => ({
      suppliers: [...state.suppliers, supplier],
    })),

  deleteSupplier: (id) =>
    set((state) => ({
      suppliers: state.suppliers.filter((supplier) => supplier.id !== id),
    })),

  // 🔥 Derived values
  getTotalSuppliers: () => {
    return get().suppliers.length
  },

//   getReceivables: () => {
//     return get().sales
//       .filter((sale) => sale.status === "Pending")
//       .reduce((acc, sale) => acc + sale.amount, 0)
//   },
//   setStats: (newStats) =>
//     set((state) => ({
//       stats: { ...state.stats, ...newStats },
//     })),
}))