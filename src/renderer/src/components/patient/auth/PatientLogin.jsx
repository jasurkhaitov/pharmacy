import { useState } from 'react'
import { toast } from '@renderer/hooks/use-toast'
import { Link, useNavigate } from 'react-router-dom'
import LoginForm from '@renderer/components/shared/LoginForm'

export default function PatientLogin() {
  const [isLoading, setIsLoading] = useState(false)
  const navigate = useNavigate()

  const handleSubmit = async (values) => {
    setIsLoading(true)

    try {
      await new Promise((resolve) => setTimeout(resolve, 1000))

      setIsLoading(false)
      toast({
        title: 'Login Successful',
        description: 'You have successfully logged in!'
      })

      navigate('/patient')
    } catch (error) {
      setIsLoading(false)
      toast({
        title: 'Login Failed',
        description: error.message || 'An unexpected error occurred.',
        variant: 'destructive'
      })
    }
  }

  return (
    <div className="space-y-3">
      <LoginForm onSubmit={handleSubmit} isLoading={isLoading} />
      <div className="text-center text-sm">
        <p>
          Don’t have an account?{' '}
          <Link to="/auth/patient/register" className="text-blue-500 hover:underline">
            Register here
          </Link>
        </p>
      </div>
    </div>
  )
}
