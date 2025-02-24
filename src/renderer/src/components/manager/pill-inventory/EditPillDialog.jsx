import * as React from 'react'
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogFooter
} from '@renderer/components/ui/dialog'
import { Button } from '@renderer/components/ui/button'
import EditPillForm from './EditPillForm'

export default function EditPillDialog({ isOpen, onOpenChange, pill, onSave }) {
  const [editingPill, setEditingPill] = React.useState({
    pill_name: '',
    quantity: 0,
    threshold: 0,
    price: 0.0,
    weight: 0.0,
    manufacture_date: '',
    expiry_date: '',
    manufacturer_name: '',
    pill_desc: ''
  })

  React.useEffect(() => {
    if (pill) setEditingPill(pill)
  }, [pill])

  const handleChange = (field, value) => {
    setEditingPill((prev) => ({
      ...prev,
      [field]: value
    }))
  }

  const handleSubmit = () => {
    onSave(editingPill)
  }

  return (
    <Dialog open={isOpen} onOpenChange={onOpenChange}>
      <DialogContent>
        <DialogHeader>
          <DialogTitle>Edit Pill</DialogTitle>
        </DialogHeader>
        <EditPillForm editingPill={editingPill} onChange={handleChange} />
        <DialogFooter>
          <Button onClick={handleSubmit}>Save changes</Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  )
}
