import React from 'react'
import { Button } from '@renderer/components/ui/button'
import { DialogFooter } from '@renderer/components/ui/dialog'
import InputField from '@renderer/components/shared/InputField'

export default function CreatePillForm({ onSubmit }) {
  const [newPill, setNewPill] = React.useState({
    pill_name: '',
    quantity: 0,
    threshold: 0,
    price: 0,
    weight: 0,
    manufacture_date: '',
    expiry_date: '',
    manufacturer_name: '',
    pill_desc: ''
  })

  const handleCreateNewPillChange = (e, field) => {
    setNewPill((prevPill) => ({ ...prevPill, [field]: e.target.value }))
  }

  const handleFormSubmit = (e) => {
    e.preventDefault()
    onSubmit(newPill)
  }

  return (
    <form onSubmit={handleFormSubmit}>
      <div className="grid gap-4 py-4 max-h-[70vh] overflow-y-auto px-2">
        <InputField
          id="name"
          label="Name"
          value={newPill.pill_name}
          onChange={(e) => handleCreateNewPillChange(e, 'pill_name')}
        />
        <InputField
          id="quantity"
          label="Quantity"
          type="number"
          value={newPill.quantity}
          onChange={(e) => handleCreateNewPillChange(e, 'quantity')}
        />
        <InputField
          id="threshold"
          label="Threshold"
          type="number"
          value={newPill.threshold}
          onChange={(e) => handleCreateNewPillChange(e, 'threshold')}
        />
        <InputField
          id="price"
          label="Price"
          type="number"
          step="0.01"
          value={newPill.price}
          onChange={(e) => handleCreateNewPillChange(e, 'price')}
        />
        <InputField
          id="weight"
          label="Weight (mg)"
          type="number"
          step="0.01"
          value={newPill.weight}
          onChange={(e) => handleCreateNewPillChange(e, 'weight')}
        />
        <InputField
          id="manufacture_date"
          label="Production"
          type="date"
          value={newPill.manufacture_date}
          onChange={(e) => handleCreateNewPillChange(e, 'manufacture_date')}
        />
        <InputField
          id="expiry_date"
          label="Expiry Date"
          type="date"
          value={newPill.expiry_date}
          onChange={(e) => handleCreateNewPillChange(e, 'expiry_date')}
        />
        <InputField
          id="manufacturer_name"
          label="Brand"
          value={newPill.manufacturer_name}
          onChange={(e) => handleCreateNewPillChange(e, 'manufacturer_name')}
        />
        <InputField
          id="pill_desc"
          label="Description"
          value={newPill.pill_desc}
          onChange={(e) => handleCreateNewPillChange(e, 'pill_desc')}
        />
      </div>
      <DialogFooter>
        <Button type="submit">Create Pill</Button>
      </DialogFooter>
    </form>
  )
}
