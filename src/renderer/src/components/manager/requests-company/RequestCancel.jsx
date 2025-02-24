import React from 'react'
import { Button } from '@renderer/components/ui/button'
import { X } from 'lucide-react'

export default function RequestCancel({ requestId, currentStatus, handleStatusChange }) {
  return (
    <Button
      variant="outline"
      size="sm"
      onClick={() => handleStatusChange(requestId, 'Cancelled')}
      disabled={currentStatus === 'Cancelled'}
    >
      <X className="h-4 w-4 mr-2" />
      Cancel
    </Button>
  )
}
