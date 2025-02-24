import React, { useState } from 'react'
import SystemAdminTable from './SystemAdminTable'
import { Button } from '../ui/button'
import CreatePillDialog from '../manager/pill-inventory/CreatePillDialog'
import { adminCreatePill } from '@renderer/utils/data'
import { useToast } from '@renderer/hooks/use-toast'

export default function SystemAdmin() {
  const { toast } = useToast()
  const [isDialogOpen, setIsDialogOpen] = useState(false)
  const [pills, setPills] = useState(adminCreatePill)

  const handleCreatePill = (newPill) => {
    const createdPill = {
      ...newPill,
      pill_id: Date.now(),
      status: 'pending'
    }

    setPills((prevPills) => [...prevPills, createdPill])

    toast({
      title: `${createdPill.pill_name} has been added and is awaiting verification.`,
      variant: 'default'
    })

    setIsDialogOpen(false)
  }

  return (
    <div className="w-full px-4 py-6">
      <div className="flex flex-col gap-4">
        <div className="flex items-center justify-between">
          <h1 className="text-2xl font-bold">
            Create a new pill and wait for the manager to verify it
          </h1>
          <Button variant="outline" onClick={() => setIsDialogOpen(true)}>
            Create New Pill
          </Button>
        </div>

        <SystemAdminTable pills={pills} setPills={setPills} />

        <CreatePillDialog
          isOpen={isDialogOpen}
          onOpenChange={setIsDialogOpen}
          onCreate={handleCreatePill}
        />
      </div>
    </div>
  )
}
