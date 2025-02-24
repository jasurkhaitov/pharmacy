import { Dialog, DialogContent, DialogHeader, DialogTitle } from '@renderer/components/ui/dialog'
import { Button } from '@renderer/components/ui/button'

export default function CartDetailsDialog({ item, isOpen, onClose }) {
  if (!item) return null

  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent>
        <DialogHeader>
          <DialogTitle>{item.pill_name}</DialogTitle>
        </DialogHeader>
        <p>{item.pill_desc}</p>
        <ul className="mt-4 space-y-2">
          <li>
            <span className="font-bold">Quantity:</span> {item.quantity}
          </li>
          <li>
            <span className="font-bold">Price:</span> ${item.price.toFixed(2)}
          </li>
          <li>
            <span className="font-bold">Weight:</span> {item.weight}mg
          </li>
          <li>
            <span className="font-bold">Manufacture Date:</span> {item.manufacture_date}
          </li>
          <li>
            <span className="font-bold">Expiry Date:</span> {item.expiry_date}
          </li>
          <li>
            <span className="font-bold">Manufacturer:</span> {item.manufacturer_name}
          </li>
        </ul>
        <div className="flex justify-end mt-4">
          <Button variant="outline" onClick={onClose}>
            Close
          </Button>
        </div>
      </DialogContent>
    </Dialog>
  )
}
