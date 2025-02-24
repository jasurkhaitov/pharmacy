import { ModeToggle } from '@renderer/service/mode-toggle'
import NavigateToRole from '@renderer/components/shared/NavigateToRole'
import { Card, CardContent, CardHeader, CardTitle } from '@renderer/components/ui/card'
import OwnerRegister from '@renderer/components/owner/auth/OwnerRegister'

export default function AuthOwnerRegister() {
  return (
    <div className="min-h-screen w-full flex items-center justify-center">
      <div className="absolute top-4 flex justify-between w-full px-4">
        <NavigateToRole/>

        <ModeToggle />
      </div>

      <Card className="w-full max-w-2xl mx-4 shadow-xl">
        <CardHeader className="text-center">
          <CardTitle className="text-2xl font-bold">Representative Registration</CardTitle>
          <p className="text-muted-foreground">Please register to create your account</p>
        </CardHeader>

        <CardContent className="space-y-4">
          <OwnerRegister/>
        </CardContent>
      </Card>
    </div>
  )
}
