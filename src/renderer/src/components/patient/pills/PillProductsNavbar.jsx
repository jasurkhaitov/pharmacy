import { Card, CardHeader } from '@renderer/components/ui/card'

import { ModeToggle } from '@renderer/service/mode-toggle'
import { Button } from '../../ui/button'
import { Link } from 'react-router-dom'
import CartBadge from '../user/CartBadge'

export default function PillProductsNavbar() {
  return (
    <Card className="mb-6">
      <CardHeader>
        <div className="flex items-center justify-between">
          <Link to={'/patient'}>
            <Button variant="outline">View Diseases</Button>
          </Link>

          <div className="flex items-center space-x-2">
            <CartBadge />

            <Button variant="outline" size="icon">
              <ModeToggle />
            </Button>
          </div>
        </div>
      </CardHeader>
    </Card>
  )
}
