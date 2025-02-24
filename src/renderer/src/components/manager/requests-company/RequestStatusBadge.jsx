import { CheckCircle, Timer, Package } from 'lucide-react'
import { Badge } from '@renderer/components/ui/badge'

const RequestStatusBadge = ({ status }) => {
  switch (status) {
    case 'supplied':
      return (
        <Badge variant="success" className="flex w-fit items-center gap-1">
          <CheckCircle className="h-3 w-3" />
          Supplied
        </Badge>
      )
    case 'pending':
      return (
        <Badge variant="secondary" className="flex w-fit items-center gap-1">
          <Timer className="h-3 w-3" />
          Pending
        </Badge>
      )
    case 'approved':
      return (
        <Badge variant="successfull" className="flex w-fit items-center gap-1">
          <Package className="h-3 w-3" />
          Approved
        </Badge>
      )
    default:
      return (
        <Badge variant="destructive" className="flex w-fit items-center gap-1">
          x {status}
        </Badge>
      )
  }
}

export default RequestStatusBadge
