import { Button } from '@renderer/components/ui/button'
import { Trash2 } from 'lucide-react'

export default function CartItem({ item, onIncrement, onDecrement, onRemove, onViewDetails }) {
  return (
    <div className="flex justify-between items-center p-4 gap-4 border rounded-md">
      <div>
        <h2 className="text-lg font-semibold">{item.pill_name}</h2>
        <p className="text-sm text-gray-500">{item.pill_desc}</p>
        <div className="flex items-center mt-2 space-x-3">
          <Button
            size="sm"
            variant="outline"
            onClick={() => onDecrement(item)}
            disabled={item.quantity <= 1}
          >
            -
          </Button>
          <span className="text-sm font-medium">{item.quantity}</span>
          <Button size="sm" variant="outline" onClick={() => onIncrement(item)}>
            +
          </Button>
        </div>
      </div>
      <div className="flex items-center flex-col space-y-4">
        <span className="text-lg font-bold">${(item.price * item.quantity).toFixed(2)}</span>
        <Button size="sm" variant="outline" onClick={() => onViewDetails(item)}>
          View Details
        </Button>
        <button
          className="text-red-500 hover:text-red-700"
          onClick={() => onRemove(item)}
          title="Remove from Cart"
        >
          <Trash2 className="w-5 h-5" />
        </button>
      </div>
    </div>
  )
}
