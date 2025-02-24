import { CheckCircle, Clock, XCircle } from 'lucide-react'

export function OwnerStatus({ status }) {
  const statusStyles = {
    new: 'text-green-500',
    pending: 'text-yellow-500',
    canceled: 'text-red-500'
  }

  const icons = {
    new: <Clock className="inline-block mr-2 -translate-y-[2px] h-4 w-4 text-green-500" />,
    pending: (
      <CheckCircle className="inline-block mr-2 -translate-y-[2px] h-4 w-4 text-yellow-500" />
    ),
    canceled: <XCircle className="inline-block mr-2 -translate-y-[2px] h-4 w-4 text-red-500" />
  }

  return (
    <span className={statusStyles[status]}>
      {icons[status]}
      {status.charAt(0).toUpperCase() + status.slice(1)}
    </span>
  )
}
