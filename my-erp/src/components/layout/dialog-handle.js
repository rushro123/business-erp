import { Button } from "@/components/ui/button";
import { useState, useRef } from "react";
import {
  Dialog,
  DialogClose,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { ComboboxBasic } from "../fidgets/compoInput";
import { Field, FieldGroup } from "@/components/ui/field";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";

export function DialogDemo({ btnText, title, fields, onSubmit }) {
  const [formData, setFormData] = useState({});
  const dialogCloseRef = useRef(null);

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    // Validate all fields are filled and not empty
    const allFieldsFilled = fields.every((field) => {
      const value = formData[field.name]?.trim();
      return value && value.length > 0;
    });

    if (!allFieldsFilled) {
      alert("Please fill in all fields");
      return;
    }

    onSubmit(formData);
    setFormData({});
    dialogCloseRef.current?.click();
  };
  return (
    <Dialog>
      <DialogTrigger asChild>
        <Button>{btnText}</Button>
      </DialogTrigger>

      <DialogContent className="sm:max-w-sm">
        <DialogHeader>
          <DialogTitle>{title}</DialogTitle>
        </DialogHeader>

        <form onSubmit={handleSubmit} className=" !space-y-4">
          {fields.map((field) => (
            <div key={field.name} className=" !space-y-4">
              <Label>{field.label}</Label>
              {field.type === "select" ? (
                <ComboboxBasic
                  value={formData[field.name] || ""}
                  onChange={(value) =>
                    setFormData({
                      ...formData,
                      [field.name]: value,
                    })
                  }
                />
              ) : (
                <Input
                  name={field.name}
                  placeholder={field.placeholder}
                  value={formData[field.name] || ""}
                  onChange={handleChange}
                />
              )}
            </div>
          ))}

          <DialogFooter>
            <DialogClose asChild>
              <Button
                ref={dialogCloseRef}
                className={"!p-1 bg-red-400 text-red-50"}
                variant="outline"
              >
                Cancel
              </Button>
            </DialogClose>

            <Button type="submit">Save</Button>
          </DialogFooter>
        </form>
      </DialogContent>
    </Dialog>
  );
}
