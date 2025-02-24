import { useState } from 'react'
import { useCart } from '@renderer/hooks/useReducer'
import CartList from './CartList'
import CartSummaryDialog from './CartSummaryDialog'
import { Button } from '@renderer/components/ui/button'
import { useForm } from 'react-hook-form'
import CartDetailsDialog from './CartDetailsProduct'

export default function Cart() {
  const { state, dispatch } = useCart()
  const [selectedItem, setSelectedItem] = useState(null)
  const [isOrderDialogOpen, setIsOrderDialogOpen] = useState(false)

  const form = useForm({
    defaultValues: {
      cardNumber: '',
      expiryDate: '',
      cvv: ''
    }
  })

  const handleIncrement = (item) => dispatch({ type: 'INCREMENT_ITEM', payload: item.pill_id })
  const handleDecrement = (item) => dispatch({ type: 'DECREMENT_ITEM', payload: item.pill_id })
  const handleRemove = (item) => dispatch({ type: 'REMOVE_FROM_CART', payload: item.pill_id })

  const handleSubmit = (data) => {
    console.log('Payment Info:', data)
    setIsOrderDialogOpen(false)
  }

  return (
    <div className="pt-2 relative">
      {state.items.length > 0 ? (
        <>
          <CartList
            items={state.items}
            onIncrement={handleIncrement}
            onDecrement={handleDecrement}
            onRemove={handleRemove}
            onViewDetails={setSelectedItem}
          />
          <Button className="fixed bottom-5 right-5" onClick={() => setIsOrderDialogOpen(true)}>
            Order Pills
          </Button>
          <CartDetailsDialog
            item={selectedItem}
            isOpen={!!selectedItem}
            onClose={() => setSelectedItem(null)}
          />
          <CartSummaryDialog
            isOpen={isOrderDialogOpen}
            onClose={() => setIsOrderDialogOpen(false)}
            totalCost={state.items.reduce((total, item) => total + item.price * item.quantity, 0)}
            form={form}
            handleSubmit={handleSubmit}
          />
        </>
      ) : (
        <p className="text-gray-500 text-center">Your cart is empty</p>
      )}
    </div>
  )
}
