import { UserCheck, UserPlus, Store, Settings } from 'lucide-react'
import { Button } from '@renderer/components/ui/button'
import { Card, CardContent, CardHeader, CardTitle } from '@renderer/components/ui/card'
import { Link } from 'react-router-dom'
import { ModeToggle } from '@renderer/service/mode-toggle'
import NavigateToRole from '@renderer/components/shared/NavigateToRole'

export default function AuthPatient() {
  return (
    <div className="min-h-screen w-full flex items-center justify-center">
      <div className="absolute top-4 flex justify-between w-full px-4">
        <NavigateToRole />
        <ModeToggle />
      </div>

      <Card className="w-full max-w-md mx-4 shadow-xl">
        <CardHeader className="text-center py-6">
          <CardTitle className="text-3xl font-semibold text-primary">Patient Access</CardTitle>
          <p className="text-muted-foreground">Select your account type to proceed</p>
        </CardHeader>

        <CardContent className="space-y-4">
          <Button variant="outline" className="w-full h-16 text-sm justify-start px-6" asChild>
            <Link to="/auth/patient/login">
              <UserCheck className="mr-3 h-5 w-5" />
              Old User (Login)
            </Link>
          </Button>

          <Button variant="outline" className="w-full h-16 text-sm justify-start px-6" asChild>
            <Link to="/auth/patient/register">
              <UserPlus className="mr-3 h-5 w-5" />
              New User (Register)
            </Link>
          </Button>
        </CardContent>
      </Card>
    </div>
  )
}
