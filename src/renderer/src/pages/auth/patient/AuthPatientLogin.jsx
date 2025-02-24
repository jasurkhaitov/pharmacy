import { ModeToggle } from '@renderer/service/mode-toggle'
import NavigateToRole from '@renderer/components/shared/NavigateToRole'
import PatientLogin from '@renderer/components/patient/auth/PatientLogin'
import { Card, CardContent, CardHeader, CardTitle } from '@renderer/components/ui/card'

export default function AuthPatientLogin() {
  return (
    <div className="min-h-screen w-full flex items-center justify-center">
      <div className="absolute top-4 flex justify-between w-full px-4">
        <NavigateToRole patient='true'/>

        <ModeToggle />
      </div>

      <Card className="w-full max-w-md mx-4 shadow-xl">
        <CardHeader className="text-center space-y-2">
          <CardTitle className="text-2xl font-bold">Patient Login</CardTitle>
          <p className="text-muted-foreground">Please login to access your account</p>
        </CardHeader>

        <CardContent className="space-y-4">
          <PatientLogin />
        </CardContent>
      </Card>
    </div>
  )
}
