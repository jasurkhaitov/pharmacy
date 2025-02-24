import * as React from 'react'
import { customerOrders } from '@renderer/utils/data'
import { useToast } from '@renderer/hooks/use-toast'
import { Badge } from '@renderer/components/ui/badge'
import CustomerOrdersTable from './CustomerOrdersTable'

export default function SecondManagerOrders() {
  const [orders, setOrders] = React.useState(customerOrders)
  const { toast } = useToast()

  const handleStatusChange = (orderId, newStatus) => {
    setOrders(
      orders.map((order) =>
        order.order_id === orderId ? { ...order, status: newStatus } : order
      )
    )
    toast({
      title: 'Status Updated',
      description: `Order ${orderId} status changed to ${newStatus}.`,
      variant: newStatus === 'completed' ? 'default' : 'destructive',
    })
  }

  const handleDeleteOrder = (orderId) => {
    setOrders(orders.filter((order) => order.order_id !== orderId))
    toast({
      title: 'Order Deleted',
      description: `Order ${orderId} has been deleted.`,
      variant: 'destructive',
    })
  }

  return (
    <div className="w-full px-4 py-6">
      <div className="flex flex-col gap-4">
        <div className="flex justify-between items-center">
          <h1 className="text-2xl font-bold">Customer Orders</h1>
          <Badge variant="outline" className="h-7">
            Total: {orders.length}
          </Badge>
        </div>
        <CustomerOrdersTable
          orders={orders}
          onStatusChange={handleStatusChange}
          onDeleteOrder={handleDeleteOrder}
        />
      </div>
    </div>
  )
}
