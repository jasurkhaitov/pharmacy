import CartItem from './CartItem'

export default function CartList({ items, onIncrement, onDecrement, onRemove, onViewDetails }) {
  const totalCost = items.reduce((total, item) => total + item.price * item.quantity, 0)

  return (
    <div className="w-full space-y-4 px-2 cartSlider overflow-y-auto max-h-[83vh]">
      {items.map((item, index) => (
        <CartItem
          key={index}
          item={item}
          onIncrement={onIncrement}
          onDecrement={onDecrement}
          onRemove={onRemove}
          onViewDetails={onViewDetails}
        />
      ))}
      <div className="text-lg font-bold">Total: ${totalCost.toFixed(2)}</div>
    </div>
  )
}
