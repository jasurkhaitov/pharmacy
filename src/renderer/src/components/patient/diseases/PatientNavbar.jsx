import { Card, CardDescription, CardHeader, CardTitle } from '@renderer/components/ui/card'

import LogoIcon from '../../../assets/Logo.webp'

import { ModeToggle } from '@renderer/service/mode-toggle'
import { Button } from '../../ui/button'
import { Link } from 'react-router-dom'
import CartBadge from '../user/CartBadge'

export default function PatientNavbar() {
  return (
    <Card className="mb-6">
      <CardHeader>
        <div className="flex items-center justify-between">
          <div className="flex items-center space-x-2">
            <img
              src={LogoIcon}
              className="w-11 h-11 -translate-y-[1px]"
              alt="Pharmacy Management System"
            />
            <div>
              <CardTitle className="mb-1">Pharmacy Management System</CardTitle>
              <CardDescription className="text-xs">
                Browse and choose a pill based on the illness
              </CardDescription>
            </div>
          </div>
          <div className="flex items-center space-x-2">
            <CartBadge />

            <Button variant="outline" size="icon">
              <ModeToggle />
            </Button>

            <Link to={'/'}>
              <Button variant="outline">Change Role</Button>
            </Link>
          </div>
        </div>
      </CardHeader>
    </Card>
  )
}
