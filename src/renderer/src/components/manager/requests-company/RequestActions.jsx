// RequestActions.js
import * as React from 'react'
import { X, Check } from 'lucide-react'
import { Button } from '@renderer/components/ui/button'
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger
} from '@renderer/components/ui/dropdown-menu'

const RequestActions = ({ request, handleStatusChange, setRequestToDelete }) => {
  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button variant="ghost" className="h-8 w-8 p-0">
          <span className="sr-only">Open menu</span>
          •••
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent align="end">
        <DropdownMenuItem onClick={() => handleStatusChange(request.manager_request_id, 'pending')}>
          Mark as Pending
        </DropdownMenuItem>
        <DropdownMenuItem
          onClick={() => handleStatusChange(request.manager_request_id, 'supplied')}
        >
          Mark as Supplied
        </DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  )
}

export default RequestActions
