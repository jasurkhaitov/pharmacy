import { Dialog, DialogContent, DialogHeader, DialogTitle } from '@renderer/components/ui/dialog'
import { Button } from '@renderer/components/ui/button'
import { useCart } from '@renderer/hooks/useReducer'

export function PillDetailsDialog({ pill, onClose }) {
  const { state, dispatch } = useCart()

  const isInCart = state.items.some((item) => item.pill_id === pill?.pill_id)

  const handleAddToCart = () => {
    dispatch({ type: 'ADD_TO_CART', payload: pill })
  }

  const handleRemoveFromCart = () => {
    dispatch({ type: 'REMOVE_FROM_CART', payload: pill.pill_id })
  }

  if (!pill) return null

  return (
    <Dialog open={!!pill} onOpenChange={onClose}>
      <DialogContent>
        <DialogHeader>
          <DialogTitle>{pill.pill_name}</DialogTitle>
        </DialogHeader>
        <p>{pill.pill_desc}</p>
        <ul className="mt-4 space-y-2">
          <li>
            <span className="font-bold">Quantity:</span> {pill.quantity}
          </li>
          <li>
            <span className="font-bold">Price:</span> ${pill.price.toFixed(2)}
          </li>
          <li>
            <span className="font-bold">Weight:</span> {pill.weight}mg
          </li>
          <li>
            <span className="font-bold">Manufacture Date:</span> {pill.manufacture_date}
          </li>
          <li>
            <span className="font-bold">Expiry Date:</span> {pill.expiry_date}
          </li>
          <li>
            <span className="font-bold">Manufacturer:</span> {pill.manufacturer_name}
          </li>
        </ul>
        <div className="flex justify-end mt-4 space-x-2">
          <Button variant="outline" onClick={onClose}>
            Close
          </Button>
          {isInCart ? (
            <Button variant="destructive" onClick={handleRemoveFromCart}>
              Remove from Cart
            </Button>
          ) : (
            <Button onClick={handleAddToCart}>Add to Cart</Button>
          )}
        </div>
      </DialogContent>
    </Dialog>
  )
}
