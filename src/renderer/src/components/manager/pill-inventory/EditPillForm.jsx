import InputField from '@renderer/components/shared/InputField'
import React from 'react'

export default function EditPillForm({ editingPill, onChange }) {
  return (
    <form id="pill-form">
      <div className="grid gap-4 py-4 max-h-[70vh] overflow-y-auto">
        <InputField
          id="name"
          label="Name"
          value={editingPill.pill_name || ''}
          onChange={(e) => onChange('pill_name', e.target.value)}
        />

        <InputField
          id="quantity"
          label="Quantity"
          type="number"
          value={editingPill.quantity || 0}
          onChange={(e) => onChange('quantity', parseInt(e.target.value, 10) || 0)}
        />

        <InputField
          id="threshold"
          label="Threshold"
          type="number"
          value={editingPill.threshold || 0}
          onChange={(e) => onChange('threshold', parseInt(e.target.value, 10) || 0)}
        />

        <InputField
          id="price"
          label="Price"
          type="number"
          step="0.01"
          value={editingPill.price || 0.0}
          onChange={(e) => onChange('price', parseFloat(e.target.value) || 0.0)}
        />

        <InputField
          id="weight"
          label="Weight (mg)"
          type="number"
          step="0.01"
          value={editingPill.weight || 0.0}
          onChange={(e) => onChange('weight', parseFloat(e.target.value) || 0.0)}
        />

        <InputField
          id="manufacture_date"
          label="Manufacture Date"
          type="date"
          value={editingPill.manufacture_date || ''}
          onChange={(e) => onChange('manufacture_date', e.target.value)}
        />

        <InputField
          id="expiry_date"
          label="Expiry Date"
          type="date"
          value={editingPill.expiry_date || ''}
          onChange={(e) => onChange('expiry_date', e.target.value)}
        />

        <InputField
          id="manufacturer_name"
          label="Brand"
          value={editingPill.manufacturer_name || ''}
          onChange={(e) => onChange('manufacturer_name', e.target.value)}
        />

        <InputField
          id="pill_desc"
          label="Description"
          value={editingPill.pill_desc || ''}
          onChange={(e) => onChange('pill_desc', e.target.value)}
        />
      </div>
    </form>
  )
}
