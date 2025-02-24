import * as React from 'react'
import { Dialog, DialogContent, DialogHeader, DialogTitle } from '@renderer/components/ui/dialog'
import CreatePillForm from './CreatePillForm'

export default function CreatePillDialog({ isOpen, onOpenChange, onCreate }) {
  return (
    <Dialog open={isOpen} onOpenChange={onOpenChange}>
      <DialogContent>
        <DialogHeader>
          <DialogTitle>Create New Pill</DialogTitle>
        </DialogHeader>
        <CreatePillForm onSubmit={onCreate} />
      </DialogContent>
    </Dialog>
  )
}
