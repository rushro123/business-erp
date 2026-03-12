"use client"

import CrudTablePage from "@/components/layout/crud-table-page"
import { useDashboardStore } from "@/store/useDashboardStore"

export default function SalesPage() {
  const { sales,addSale,deleteSale } = useDashboardStore()

  return (
    <CrudTablePage
      title="Sales"
      subtitle="Manage your sales invoices"
      data={sales}
      addItem={addSale}
      deleteItem={deleteSale}
      searchKey="customer"
      fields={[
        {
          name: "customer",
          label: "Customer Name",
          placeholder: "ABC Pvt Ltd",
        },
        {
          name: "amount",
          label: "Amount",
          placeholder: "15000",
        },
      ]}
      columns={[
        { key: "invoice", label: "Invoice #" },
        { key: "date", label: "Date" },
        { key: "customer", label: "Customer" },
        { key: "amount", label: "Amount" },
        { key: "status", label: "Status" },
      ]}
    />
  )
}