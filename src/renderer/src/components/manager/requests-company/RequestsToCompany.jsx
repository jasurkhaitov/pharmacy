import * as React from 'react'
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow
} from '@renderer/components/ui/table'
import { Toaster } from '@renderer/components/ui/toaster'
import { useToast } from '@renderer/hooks/use-toast'
import { managerRequests } from '@renderer/utils/data'
import RequestTableRow from './RequestTableRow'

export default function RequestsToCompany() {
  const [requests, setRequests] = React.useState(managerRequests)
  const [requestToDelete, setRequestToDelete] = React.useState(null)
  const { toast } = useToast()

  const handleStatusChange = (requestId, newStatus) => {
    setRequests(
      requests.map((request) => {
        if (request.manager_request_id === requestId) {
          const updatedRequest = { ...request, status: newStatus }
          toast({
            title: 'Status Updated',
            description: `Request ${requestId} status changed to ${newStatus}.`,
            variant: newStatus === 'supplied' ? 'default' : 'destructive'
          })
          return updatedRequest
        }
        return request
      })
    )
  }

  const handleDelete = () => {
    if (requestToDelete) {
      setRequests(requests.filter((request) => request.manager_request_id !== requestToDelete))
      toast({
        title: 'Request Deleted',
        description: `Request ${requestToDelete} has been deleted.`,
        variant: 'destructive'
      })
      setRequestToDelete(null)
    }
  }

  return (
    <div className="w-auto rounded-md">
      <Table className="w-auto border">
        <TableHeader>
          <TableRow>
            <TableHead className="w-[100px]">RequestID</TableHead>
            <TableHead className="w-[100px]">PillID</TableHead>
            <TableHead className="w-[150px]">Status</TableHead>
            <TableHead className="w-[150px]">Cancel</TableHead>
            <TableHead className="w-[150px]">Approve</TableHead>
            <TableHead className="w-[100px]">Actions</TableHead>
            <TableHead className="w-[100px]">Delete</TableHead>
          </TableRow>
        </TableHeader>

        <TableBody>
          {requests.map((request) => (
            <RequestTableRow
              key={request.manager_request_id}
              request={request}
              handleStatusChange={handleStatusChange}
              setRequestToDelete={setRequestToDelete}
              handleDelete={handleDelete}
            />
          ))}
        </TableBody>
      </Table>
      <Toaster />
    </div>
  )
}
