import { useState } from 'react'
import { toast } from '@renderer/hooks/use-toast'
import { useNavigate } from 'react-router-dom'
import PatientRegisterForm from './PatientRegisterForm'

export function PatientRegister() {
  const [isLoading, setIsLoading] = useState(false)
  const navigate = useNavigate()

  const handleSubmit = async (values) => {
    setIsLoading(true)
    try {
      await new Promise((resolve) => setTimeout(resolve, 1000))
      setIsLoading(false)
      toast({
        title: 'Registration Successful',
        description: 'You have successfully registered!'
      })
      navigate('/patient')
    } catch (error) {
      setIsLoading(false)
      toast({
        title: 'Registration Failed',
        description: error.message || 'An unexpected error occurred.',
        variant: 'destructive'
      })
    }
  }

  return (
    <div className="space-y-3">
      <PatientRegisterForm onSubmit={handleSubmit} isLoading={isLoading} />
    </div>
  )
}
