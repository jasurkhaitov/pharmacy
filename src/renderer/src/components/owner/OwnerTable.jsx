import { useState } from 'react'
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow
} from '@renderer/components/ui/table'
import { Button } from '@renderer/components/ui/button'
import { useToast } from '@renderer/hooks/use-toast'
import { ownerTable } from '@renderer/utils/data'
import { OwnerStatus } from './OwnerStatus'

export default function OwnerTable() {
  const { toast } = useToast()
  const [orders, setOrders] = useState(ownerTable)

  const handleApprove = (orderId) => {
    setOrders(
      orders.map((order) => {
        if (order.orderId === orderId) {
          toast({
            title: 'Order Approved',
            description: `Order ${orderId} has been marked as pending.`
          })
          return { ...order, status: 'pending' }
        }
        return order
      })
    )
  }

  const handleCancel = (orderId) => {
    setOrders(
      orders.map((order) => {
        if (order.orderId === orderId) {
          toast({
            title: 'Order Canceled',
            description: `Order ${orderId} has been canceled.`,
            variant: 'destructive'
          })
          return { ...order, status: 'canceled' }
        }
        return order
      })
    )
  }

  return (
    <div className="rounded-md border">
      <Table>
        <TableHeader>
          <TableRow>
            <TableHead className="w-[150px]">Order ID</TableHead>
            <TableHead className="w-[150px]">Customer ID</TableHead>
            <TableHead className="w-[150px]">Order Date</TableHead>
            <TableHead className="w-[150px]">Quantity</TableHead>
            <TableHead className="w-[150px]">Total Price</TableHead>
            <TableHead className="w-[150px]">Status</TableHead>
            <TableHead className="w-[150px]">Approve</TableHead>
            <TableHead className="w-[150px]">Cancel</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {orders.map((order) => (
            <TableRow key={order.orderId}>
              <TableCell>{order.orderId}</TableCell>
              <TableCell>{order.customerId}</TableCell>
              <TableCell>{order.orderDate}</TableCell>
              <TableCell>{order.quantity}</TableCell>
              <TableCell>${order.totalPrice.toFixed(2)}</TableCell>
              <TableCell>
                <OwnerStatus status={order.status} />
              </TableCell>
              <TableCell>
                <Button variant="secondary" onClick={() => handleApprove(order.orderId)}>
                  Approve
                </Button>
              </TableCell>
              <TableCell>
                <Button variant="destructive" onClick={() => handleCancel(order.orderId)}>
                  Cancel
                </Button>
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </div>
  )
}
