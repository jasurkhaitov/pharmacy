import * as React from 'react'
import { CheckCircle, Timer, XCircle } from 'lucide-react'
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow
} from '@renderer/components/ui/table'
import { Badge } from '@renderer/components/ui/badge'
import CustomerOrderActions from './CustomerOrderActions'
import CustomerOrderDelete from './CustomerOrderDelete'

export default function CustomerOrdersTable({ orders, onStatusChange, onDeleteOrder }) {
  const getStatusBadge = (status) => {
    switch (status) {
      case 'completed':
        return (
          <Badge variant="success" className="flex w-fit items-center gap-1">
            <CheckCircle className="h-3 w-3" />
            Completed
          </Badge>
        )
      case 'pending':
        return (
          <Badge variant="secondary" className="flex w-fit items-center gap-1">
            <Timer className="h-3 w-3" />
            Pending
          </Badge>
        )
      case 'cancelled':
        return (
          <Badge variant="destructive" className="flex w-fit items-center gap-1">
            <XCircle className="h-3 w-3" />
            Cancelled
          </Badge>
        )
      default:
        return (
          <Badge variant="outline" className="flex w-fit items-center gap-1">
            {status}
          </Badge>
        )
    }
  }

  return (
    <div className="rounded-md border">
      <Table>
        <TableHeader>
          <TableRow>
            <TableHead className="w-[50px]">ID</TableHead>
            <TableHead className="w-[100px]">CustomerID</TableHead>
            <TableHead className="w-[100px]">Pill ID</TableHead>
            <TableHead className="w-[100px]">Order Date</TableHead>
            <TableHead className="w-[80px]">Quantity</TableHead>
            <TableHead className="w-[100px]">Brand</TableHead>
            <TableHead className="w-[100px]">Total Price</TableHead>
            <TableHead className="w-[80px]">Status</TableHead>
            <TableHead className="w-[50px]">Actions</TableHead>
            <TableHead className="w-[50px]">Delete</TableHead>
          </TableRow>
        </TableHeader>

        <TableBody>
          {orders.map((order) => (
            <TableRow key={order.order_id} className="w-full">
              <TableCell className="font-mono">{order.order_id}</TableCell>
              <TableCell>{order.customer_id}</TableCell>
              <TableCell>{order.pill_id}</TableCell>
              <TableCell>{new Date(order.order_date).toLocaleDateString()}</TableCell>
              <TableCell>{order.quantity}</TableCell>
              <TableCell>{order.manufacturer_name}</TableCell>
              <TableCell>${order.total_price.toFixed(2)}</TableCell>
              <TableCell>{getStatusBadge(order.status)}</TableCell>
              <TableCell>
                <CustomerOrderActions orderId={order.order_id} onStatusChange={onStatusChange} />
              </TableCell>
              <TableCell>
                <CustomerOrderDelete orderId={order.order_id} onDeleteOrder={onDeleteOrder} />
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </div>
  )
}
