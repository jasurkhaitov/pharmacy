import { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { toast } from '@renderer/hooks/use-toast'
import StoreManagerRegisterForm from './StoreManagerRegisterForm'

export default function RegistrationPage() {
  const [isLoading, setIsLoading] = useState(false)
  const navigate = useNavigate()

  const onSubmit = async (values) => {
    setIsLoading(true)

    try {
      await new Promise((resolve) => setTimeout(resolve, 1000))

      setIsLoading(false)
      toast({
        title: 'Registration Successful',
        description: 'You have successfully registered!'
      })

      navigate('/store-manager')
    } catch (error) {
      setIsLoading(false)
      toast({
        title: 'Registration Failed',
        description: error.message || 'An unexpected error occurred.',
        variant: 'destructive'
      })
    }
  }

  const handleValidationError = (errors) => {
    Object.values(errors).forEach((error) => {
      toast({
        title: 'Validation Error',
        description: error.message,
        variant: 'destructive'
      })
    })
  }

  return (
    <div>
      <StoreManagerRegisterForm
        onSubmit={onSubmit}
        isLoading={isLoading}
        handleValidationError={handleValidationError}
      />
      <div className="text-center text-sm mt-5">
        <p>
          Already have an account?{' '}
          <Link to="/auth/store-manager/login" className="text-blue-500 hover:underline">
            Login here
          </Link>
        </p>
      </div>
    </div>
  )
}
