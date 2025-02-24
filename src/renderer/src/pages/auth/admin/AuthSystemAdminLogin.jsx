import { ModeToggle } from '@renderer/service/mode-toggle'
import NavigateToRole from '@renderer/components/shared/NavigateToRole'
import { Card, CardContent, CardHeader, CardTitle } from '@renderer/components/ui/card'
import SystemAdminLogin from '@renderer/components/admin/auth/SystemAdminLogin'

export default function AuthSystemAdminLogin() {
  return (
    <div className="min-h-screen w-full flex items-center justify-center">
      <div className="absolute top-4 flex justify-between w-full px-4">
        <NavigateToRole/>

        <ModeToggle />
      </div>

      <Card className="w-full max-w-md mx-4 shadow-xl">
        <CardHeader className="text-center">
          <CardTitle className="text-2xl font-bold">System Admin</CardTitle>
          <p className="text-muted-foreground">Please login to create your account</p>
        </CardHeader>

        <CardContent className="space-y-4">
          <SystemAdminLogin/>
        </CardContent>
      </Card>
    </div>
  )
}
