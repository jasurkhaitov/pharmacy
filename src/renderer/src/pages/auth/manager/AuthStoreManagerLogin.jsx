import { ModeToggle } from '@renderer/service/mode-toggle'
import NavigateToRole from '@renderer/components/shared/NavigateToRole'
import { Card, CardContent, CardHeader, CardTitle } from '@renderer/components/ui/card'
import StoreManagerLogin from '@renderer/components/manager/auth/StoreManagerLogin'

export default function AuthStoreManagerLogin() {
  return (
    <div className="min-h-screen w-full flex items-center justify-center">
      <div className="absolute top-4 flex justify-between w-full px-4">
        <NavigateToRole />

        <ModeToggle />
      </div>

      <Card className="w-full max-w-md mx-4 shadow-xl">
        <CardHeader className="text-center space-y-2">
          <CardTitle className="text-2xl font-bold">Storage Manager Login</CardTitle>
          <p className="text-muted-foreground">Please login to access your account</p>
        </CardHeader>

        <CardContent className="space-y-4">
          <StoreManagerLogin />
        </CardContent>
      </Card>
    </div>
  )
}
