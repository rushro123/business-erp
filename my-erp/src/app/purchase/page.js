"use client"

import CrudTablePage from "@/components/layout/crud-table-page"
import { usePurchaseStore } from "@/store/usePurchaseStore"

export default function PurchasePage() {
  const { Purchase, addPurchase, deletePurchase } = usePurchaseStore()

  return (
    <CrudTablePage
      title="Purchases"
      subtitle="Manage your purchase information"
      data={Purchase}
      addItem={addPurchase}
      deleteItem={deletePurchase}
      searchKey="name"
      fields={[
        {
          name: "name",
          label: "Vendor Name",
          placeholder: "ABC Corporation",
        },
        {
          name: "amount",
          label: "Amount",
          placeholder: "10000",
        },
      ]}
      columns={[
        { key: "invoice", label: "Invoice #" },
        { key: "date", label: "Date" },
        { key: "name", label: "Vendor" },
        { key: "amount", label: "Amount" },
        { key: "status", label: "Status" },
      ]}
    />
  )
}