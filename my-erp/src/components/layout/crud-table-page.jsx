"use client"

import { useState } from "react"
import { Card, CardContent } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Badge } from "@/components/ui/badge"
import { Trash2 } from "lucide-react"
import { DialogDemo as FormDialog } from "@/components/layout/dialog-handle"

import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table"

export default function CrudTablePage({
  title,
  subtitle,
  data,
  addItem,
  deleteItem,
  fields,
  columns,
  searchKey,
}) {
  const [search, setSearch] = useState("")

  const filteredData = (data || []).filter((item) =>
  columns.some((col) =>
    (item?.[col.key] || "")
      .toString()
      .toLowerCase()
      .includes(search.toLowerCase())
  )
)

  const handleAdd = (formData) => {
    const newItem = {
      id: Date.now(),
      invoice: "INV-" + Date.now(),
      date: new Date().toLocaleDateString(),
      ...formData,
      amount: Number(formData.amount),
      status: "Pending",
    }

    addItem(newItem)
  }

  return (
    <div className="p-2 min-h-screen flex flex-col gap-4 mt-2 pt-5">

      {/* Header */}
      <div className="flex justify-between items-center mb-6">
        <div>
          <h1 className="text-2xl font-bold">{title}</h1>
          <p className="text-muted-foreground">{subtitle}</p>
        </div>

        <FormDialog
          btnText={`New ${title}`}
          title={`Add ${title}`}
          onSubmit={handleAdd}
          fields={fields}
        />
      </div>

      {/* Table */}
      <Card>
        <CardContent className="p-6 space-y-4">
          <Input
            placeholder={`Search ${title.toLowerCase()}...`}
            value={search}
            onChange={(e) => setSearch(e.target.value)}
          />

          <Table>
            <TableHeader>
              <TableRow>
                {columns.map((col) => (
                  <TableHead key={col.key}>{col.label}</TableHead>
                ))}
                <TableHead>Actions</TableHead>
              </TableRow>
            </TableHeader>

            <TableBody>
              {filteredData.length > 0 ? (
                filteredData.map((item) => (
                  <TableRow key={item.id}>
                    {columns.map((col) => (
                      <TableCell key={col.key}>
                        {col.key === "amount"
                          ? `₹${item[col.key].toLocaleString()}`
                          : item[col.key]}
                      </TableCell>
                    ))}

                    <TableCell>
                      <Trash2
                        size={16}
                        className="cursor-pointer text-red-500"
                        onClick={() => deleteItem(item.id)}
                      />
                    </TableCell>
                  </TableRow>
                ))
              ) : (
                <TableRow>
                  <TableCell colSpan={columns.length + 1} className="text-center">
                    No records found
                  </TableCell>
                </TableRow>
              )}
            </TableBody>
          </Table>
        </CardContent>
      </Card>
    </div>
  )
}