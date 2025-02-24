import * as React from 'react'
import { Toaster } from '@renderer/components/ui/toaster'
import { useToast } from '@renderer/hooks/use-toast'
import { crudPills } from '@renderer/utils/data'
import PillTableManager from './PillTableManager'
import PillManager from './PillManager'

export default function ManagerPillTable() {
  const [pills, setPills] = React.useState(crudPills)
  const [editingPill, setEditingPill] = React.useState(null)
  const [isEditDialogOpen, setIsEditDialogOpen] = React.useState(false)
  const [deletingPillId, setDeletingPillId] = React.useState(null)
  const [isNewPillDialogOpen, setIsNewPillDialogOpen] = React.useState(false)
  const { toast } = useToast()

  const handleStatusChange = (id, newStatus) => {
    setPills((prev) =>
      prev.map((pill) =>
        pill.pill_id === id
          ? {
              ...pill,
              status: newStatus,
              ...toast({
                title: 'Status Updated',
                description: `${pill.pill_name} status changed to ${newStatus === 1 ? 'Approved' : 'Pending'}.`,
                variant: newStatus === 1 ? 'default' : 'destructive'
              })
            }
          : pill
      )
    )
  }

  const handleEdit = (pill) => {
    setEditingPill(pill)
    setIsEditDialogOpen(true)
  }

  const handleDelete = (id) => {
    setDeletingPillId(id)
  }

  const confirmDelete = () => {
    const pillToDelete = pills.find((pill) => pill.pill_id === deletingPillId)
    setPills(pills.filter((pill) => pill.pill_id !== deletingPillId))
    setDeletingPillId(null)
    toast({
      title: `${pillToDelete.pill_name} has been successfully deleted.`,
      variant: 'destructive'
    })
  }

  const handleSaveEdit = (editedPill) => {
    setPills((prev) =>
      prev.map((pill) => (pill.pill_id === editedPill.pill_id ? editedPill : pill))
    )
    setIsEditDialogOpen(false)
    setEditingPill(null)
    toast({
      title: `${editedPill.pill_name} has been successfully updated.`
    })
  }

  const handleCreateNewPill = (newPill) => {
    const newPillWithId = { ...newPill, pill_id: Math.max(...pills.map((p) => p.pill_id)) + 1 }
    setPills((prev) => [...prev, newPillWithId])
    setIsNewPillDialogOpen(false)
    toast({
      title: `${newPill.pill_name} has been successfully created.`
    })
  }

  return (
    <div>
      <PillTableManager
        pills={pills}
        onStatusChange={handleStatusChange}
        onEdit={handleEdit}
        onDelete={handleDelete}
        onCreate={() => setIsNewPillDialogOpen(true)}
      />

      <PillManager
        isEditDialogOpen={isEditDialogOpen}
        setIsEditDialogOpen={setIsEditDialogOpen}
        editingPill={editingPill}
        handleSaveEdit={handleSaveEdit}
        deletingPillId={deletingPillId}
        setDeletingPillId={setDeletingPillId}
        confirmDelete={confirmDelete}
        isNewPillDialogOpen={isNewPillDialogOpen}
        setIsNewPillDialogOpen={setIsNewPillDialogOpen}
        handleCreateNewPill={handleCreateNewPill}
      />

      <Toaster />
    </div>
  )
}
