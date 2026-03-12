"use client"

import * as React from "react"
import { Check, ChevronsUpDown } from "lucide-react"

import { cn } from "@/lib/utils"
import { Button } from "@/components/ui/button"
import {
  Command,
  CommandEmpty,
  CommandGroup,
  CommandInput,
  CommandItem,
} from "@/components/ui/command"

import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover"

import { ScrollArea } from "@/components/ui/scroll-area"

const frameworks = [
  "Electronics",
  "Computers & Accessories",
  "Mobile Phones",
  "Office Supplies",
  "Furniture",
  "Stationery",
  "Appliances",
  "Tools & Hardware",
  "Software",
  "Networking Equipment",
  "Storage Devices",
  "Printers & Scanners",
  "Security Systems",
  "Packaging Materials",
  "Cleaning Supplies",
  "Medical Supplies",
  "Food & Beverages",
  "Clothing & Apparel",
  "Automotive Parts",
  "Miscellaneous",
]

export function ComboboxBasic({ value, onChange }) {
  const [open, setOpen] = React.useState(false)

  return (
    <Popover open={open} onOpenChange={setOpen}>
      
      <PopoverTrigger asChild>
        <Button
          variant="outline"
          role="combobox"
          className="w-full justify-between"
        >
          {value || "Select category"}
          <ChevronsUpDown className="ml-2 h-4 w-4 opacity-50" />
        </Button>
      </PopoverTrigger>

      <PopoverContent className="w-full p-0">

        <Command>

          <CommandInput placeholder="Search category..." />

          <CommandEmpty>No category found.</CommandEmpty>

          <ScrollArea className="h-60" scrollbars="vertical">
            <CommandGroup>

              {frameworks.map((framework) => (
                <CommandItem
                  key={framework}
                  value={framework}
                  onSelect={(currentValue) => {
                    onChange(currentValue)
                    setOpen(false)
                  }}
                >
                  <Check
                    className={cn(
                      "mr-2 h-4 w-4",
                      value === framework ? "opacity-100" : "opacity-0"
                    )}
                  />
                  {framework}
                </CommandItem>
              ))}

            </CommandGroup>
          </ScrollArea>

        </Command>

      </PopoverContent>
    </Popover>
  )
}