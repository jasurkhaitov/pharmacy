import React from 'react'
import EditPillDialog from './EditPillDialog'
import DeletePillDialog from './DeletePillDialog'
import CreatePillDialog from './CreatePillDialog'

export default function PillManager({
  isEditDialogOpen,
  setIsEditDialogOpen,
  editingPill,
  handleSaveEdit,
  deletingPillId,
  setDeletingPillId,
  confirmDelete,
  isNewPillDialogOpen,
  setIsNewPillDialogOpen,
  handleCreateNewPill
}) {
  return (
    <>
      <EditPillDialog
        isOpen={isEditDialogOpen}
        onOpenChange={setIsEditDialogOpen}
        pill={editingPill}
        onSave={handleSaveEdit}
      />

      <DeletePillDialog
        isOpen={deletingPillId !== null}
        onOpenChange={() => setDeletingPillId(null)}
        onConfirm={confirmDelete}
      />

      <CreatePillDialog
        isOpen={isNewPillDialogOpen}
        onOpenChange={setIsNewPillDialogOpen}
        onCreate={handleCreateNewPill}
      />
    </>
  )
}
