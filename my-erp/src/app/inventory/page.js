"use client"

import CrudTablePage from "@/components/layout/crud-table-page"
import { useInventoryStore } from "@/store/useInventoryStore"

export default function InventoryPage() {
  const { Inventory, addInventory, deleteInventory } = useInventoryStore()

  return (
    <CrudTablePage
      title="Inventory"
      subtitle="Manage your inventory information"
      data={Inventory}
      addItem={addInventory}
      deleteItem={deleteInventory}
      searchKey="name"
      fields={[
        {
          name: "Product name",
          label: "Product Name",
          placeholder: "xxx xxx",
        },
        {
          name: "SKU",
          label: "SKU",
          placeholder: "xxx-xxx-xxx",
        },
        {
          name: "Category",
          label: "Category",
          placeholder: "Electronics",
          type: "select",
        },
        {
          name: "stock",
          label: "Stock",
          placeholder: "100",
        },
        {
          name: "Price",
          label: "Price",
          placeholder: "10000",
        }
      ]}
      columns={[
        { key: "Product name", label: "customer Name" },
        { key: "SKU", label: "SKU" },
        { key: "Category", label: "Category" },
        { key: "stock", label: "Stock" },
        { key: "Price", label: "Price" },
      ]}
    />
  )
}