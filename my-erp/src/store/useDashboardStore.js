import { create } from "zustand"

export const useDashboardStore = create((set,get) => ({
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
  sales: [],

  addSale: (sale) =>
    set((state) => ({
      sales: [...state.sales, sale],
    })),

  deleteSale: (id) =>
    set((state) => ({
      sales: state.sales.filter((sale) => sale.id !== id),
    })),

  // 🔥 Derived values
  getTotalSales: () => {
    return get().sales.reduce((acc, sale) => acc + sale.amount, 0)
  },

  getReceivables: () => {
    return get().sales
      .filter((sale) => sale.status === "Pending")
      .reduce((acc, sale) => acc + sale.amount, 0)
  },
  setStats: (newStats) =>
    set((state) => ({
      stats: { ...state.stats, ...newStats },
    })),
}))