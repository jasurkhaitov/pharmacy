import { ShoppingCart } from 'lucide-react'
import { Button } from '../../ui/button'
import { Badge } from '../../ui/badge'

import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetTrigger
} from '@renderer/components/ui/sheet'
import Cart from './Cart'
import { useCart } from '@renderer/hooks/useReducer'

export default function CartBadge() {
  const { state } = useCart()

  return (
    <div className="flex items-center space-x-2">
      <Sheet>
        <SheetTrigger>
          <Button variant="outline" size="icon">
            <ShoppingCart className="h-[1.2rem] w-[1.2rem]" />
          </Button>
        </SheetTrigger>
        <SheetContent>
          <SheetHeader>
            <SheetTitle className="px-5">Your Cart</SheetTitle>
          </SheetHeader>
          <Cart />
        </SheetContent>
      </Sheet>

      <Badge variant="secondary">{state.items.length}</Badge>
    </div>
  )
}
