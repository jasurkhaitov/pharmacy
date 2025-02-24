import { Dialog, DialogContent, DialogHeader, DialogTitle } from '@renderer/components/ui/dialog'
import CartSummaryForm from './CartSummaryForm'

export default function CartSummaryDialog({ isOpen, onClose, totalCost, form }) {
  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent>
        <DialogHeader>
          <DialogTitle>Order Summary</DialogTitle>
        </DialogHeader>
        <CartSummaryForm totalCost={totalCost} form={form} onClose={onClose} />
      </DialogContent>
    </Dialog>
  )
}
