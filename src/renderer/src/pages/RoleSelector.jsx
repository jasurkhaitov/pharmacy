import { UserCheck, Store, Settings, User, Heart } from 'lucide-react'
import { Button } from '@renderer/components/ui/button'
import { Card, CardContent, CardHeader, CardTitle } from '@renderer/components/ui/card'
import { Link } from 'react-router-dom'
import { ModeToggle } from '@renderer/service/mode-toggle'

import Logo from '../assets/Logo.webp'

export default function RoleSelector() {
  return (
    <div className="min-h-screen w-full flex items-center justify-center">
      <div className="absolute top-4 flex justify-end w-full px-4">
        <ModeToggle />
      </div>

      <Card className="w-full max-w-md mx-4 shadow-xl">
        <CardHeader className="text-center flex flex-row items-center space-x-4 justify-center">
          <img src={Logo} className="w-14 h-14" alt="logo icon Pharmacy" />

          <div className="flex flex-col text-start">
            <CardTitle className="text-2xl font-bold">Welcome to Pharmacy</CardTitle>
            <p className="text-muted-foreground">Please select your role to login</p>
          </div>
        </CardHeader>

        <CardContent className="space-y-4">
          <Button variant="outline" className="w-full h-16 text-md justify-start px-6" asChild>
            <Link to="/auth/patient">
              <UserCheck className="mr-3 h-5 w-5" />
              Patient
            </Link>
          </Button>

          <Button variant="outline" className="w-full h-16 text-md justify-start px-6" asChild>
            <Link to="/auth/store-manager/login">
              <Store className="mr-3 h-5 w-5" />
              Store Manager
            </Link>
          </Button>

          <Button variant="outline" className="w-full h-16 text-md justify-start px-6" asChild>
            <Link to="/auth/system-admin">
              <Settings className="mr-3 h-5 w-5" />
              System Admin
            </Link>
          </Button>

          <Button variant="outline" className="w-full h-16 text-md justify-start px-6" asChild>
            <Link to="/auth/owner/login">
              <User className="mr-3 h-5 w-5" />
              Owner
            </Link>
          </Button>
        </CardContent>
      </Card>
    </div>
  )
}
