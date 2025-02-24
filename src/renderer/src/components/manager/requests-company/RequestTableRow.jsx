import React from 'react'
import { TableCell, TableRow } from '@renderer/components/ui/table'
import RequestStatusBadge from './RequestStatusBadge'
import RequestActions from './RequestActions'
import RequestDelete from './RequestDelete'
import RequestApprove from './RequestApprove'
import RequestCancel from './RequestCancel'

export default function RequestTableRow({
  request,
  handleStatusChange,
  setRequestToDelete,
  handleDelete
}) {
  return (
    <TableRow key={request.manager_request_id}>
      <TableCell className="font-mono">{request.manager_request_id}</TableCell>
      <TableCell>{request.pill_id}</TableCell>
      <TableCell>
        <RequestStatusBadge status={request.status} />
      </TableCell>
      <TableCell>
        <RequestCancel
          requestId={request.manager_request_id}
          currentStatus={request.status}
          handleStatusChange={handleStatusChange}
        />
      </TableCell>
      <TableCell>
        <RequestApprove
          requestId={request.manager_request_id}
          currentStatus={request.status}
          handleStatusChange={handleStatusChange}
        />
      </TableCell>
      <TableCell>
        <RequestActions
          request={request}
          handleStatusChange={handleStatusChange}
          setRequestToDelete={setRequestToDelete}
        />
      </TableCell>
      <TableCell>
        <RequestDelete
          requestToDelete={request.manager_request_id}
          handleDelete={handleDelete}
          setRequestToDelete={setRequestToDelete}
        />
      </TableCell>
    </TableRow>
  )
}
