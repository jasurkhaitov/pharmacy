import { useState } from 'react'
import { zodResolver } from '@hookform/resolvers/zod'
import { useForm } from 'react-hook-form'
import * as z from 'zod'

import { toast } from '@renderer/hooks/use-toast'
import { Link, useNavigate } from 'react-router-dom'
import LoginForm from '@renderer/components/shared/LoginForm'

const formSchema = z.object({
  email: z.string().email({
    message: 'Please enter a valid email address.'
  }),
  password: z.string().min(8, {
    message: 'Password must be at least 8 characters long.'
  })
})

export default function OwnerLogin() {
  const [isLoading, setIsLoading] = useState(false)

  const navigate = useNavigate()

  const form = useForm({
    resolver: zodResolver(formSchema),
    defaultValues: {
      email: '',
      password: ''
    }
  })

  const onSubmit = async (values) => {
    setIsLoading(true)

    try {
      await new Promise((resolve) => setTimeout(resolve, 1000))

      setIsLoading(false)
      toast({
        title: 'Login Successful',
        description: 'You have successfully logged in!'
      })

      navigate('/owner')
    } catch (error) {
      setIsLoading(false)
      toast({
        title: 'Login Failed',
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
      <LoginForm form={form} onSubmit={onSubmit} isLoading={isLoading} />
      <div className="text-center text-sm mt-5">
        <p>
          Don’t have an account?{' '}
          <Link to="/auth/owner/register" className="text-blue-500 hover:underline">
            Register here
          </Link>
        </p>
      </div>
    </div>
  )
}
