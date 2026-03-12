"use client"

import CrudTablePage from "@/components/layout/crud-table-page"
import {  useSupplierStore} from "@/store/useSupplierStore"

export default function SupplierPage() {
  const { suppliers, addSupplier, deleteSupplier } = useSupplierStore()

  return (
    <CrudTablePage
      title="Suppliers"
      subtitle="Manage your supplier information"
      data={suppliers}
      addItem={addSupplier}
      deleteItem={deleteSupplier}
      searchKey="name"
      fields={[
        {
          name: "name",
          label: "customer Name",
          placeholder: "xxx xxx",
        },
        {
          name: "phone",
          label: "phone",
          placeholder: "0000000000",
        },
        {
          name: "email",
          label: "email",
          placeholder: "name@domain.com",
        },
        {
          name: "Gstn",
          label: "Gstn",
          placeholder: "gstn",
        },
        {
          name: "ballance",
          label: "ballance",
          placeholder: "10000",
        }
      ]}
      columns={[
        { key: "name", label: "customer Name" },
        { key: "phone", label: "Phone" },
        { key: "email", label: "Email" },
        { key: "Gstn", label: "Gstn" },
        { key: "ballance", label: "Balance" },
        { key: "Price", label: "Price" },
      ]}
    />
  )
}