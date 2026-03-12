"use client"

import CrudTablePage from "@/components/layout/crud-table-page"
import { useCustomerStore } from "@/store/useCustomerStore"

export default function PurchasePage() {
  const { Customer, addCustomer, deleteCustomer } = useCustomerStore()

  return (
    <CrudTablePage
      title="customers"
      subtitle="Manage your purchase information"
      data={Customer}
      addItem={addCustomer}
      deleteItem={deleteCustomer}
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
        { key: "phone", label: "phone" },
        { key: "email", label: "email" },
        { key: "Gstn", label: "Gstn" },
        { key: "ballance", label: "ballance" },
      ]}
    />
  )
}