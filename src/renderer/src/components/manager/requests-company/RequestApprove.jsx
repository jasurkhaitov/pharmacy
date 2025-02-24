import React from 'react'
import { Button } from '@renderer/components/ui/button'
import { Check } from 'lucide-react'

export default function RequestApprove({ requestId, currentStatus, handleStatusChange }) {
  return (
    <Button
      variant="outline"
      size="sm"
      onClick={() => handleStatusChange(requestId, 'approved')}
      disabled={currentStatus === 'approved' || currentStatus === 'supplied'}
    >
      <Check className="h-4 w-4 mr-2" />
      Approve
    </Button>
  )
}
