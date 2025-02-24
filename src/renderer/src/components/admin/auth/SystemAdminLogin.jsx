import { useState } from 'react'
import { zodResolver } from '@hookform/resolvers/zod'
import { useForm } from 'react-hook-form'
import * as z from 'zod'
import { useNavigate } from 'react-router-dom'

import { Button } from '@renderer/components/ui/button'
import { Form, FormControl, FormField, FormItem, FormLabel } from '@renderer/components/ui/form'
import { Input } from '@renderer/components/ui/input'
import { toast } from '@renderer/hooks/use-toast'
import Loader from '@renderer/utils/Loader'

const formSchema = z.object({
  email: z.string().email({
    message: 'Please enter a valid email address.'
  }),
  password: z.string().min(8, {
    message: 'Password must be at least 8 characters long.'
  }),
  name: z.string().min(2, {
    message: 'Name must be at least 2 characters long.'
  })
})

export default function SystemAdminLogin() {
  const [isLoading, setIsLoading] = useState(false)

  const navigate = useNavigate()

  const form = useForm({
    resolver: zodResolver(formSchema),
    defaultValues: {
      email: '',
      password: '',
      name: ''
    }
  })

  const onSubmit = async (values) => {
    setIsLoading(true)

    try {
      await new Promise((resolve) => setTimeout(resolve, 1000))

      setIsLoading(false)
      toast({
        title: 'Successfully authenticated',
        description: 'You have Successfully authenticated!'
      })

      navigate('/system-admin')
    } catch (error) {
      setIsLoading(false)
      toast({
        title: 'Authentication Failed',
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
    <Form {...form}>
      <form
        onSubmit={form.handleSubmit(onSubmit, (errors) => handleValidationError(errors))}
        className="grid grid-cols-1 gap-8"
      >
        <div className="space-y-3">
          <FormField
            control={form.control}
            name="email"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Email</FormLabel>
                <FormControl>
                  <Input placeholder="email@example.com" {...field} />
                </FormControl>
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="password"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Password</FormLabel>
                <FormControl>
                  <Input type="password" placeholder="********" {...field} />
                </FormControl>
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="name"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Name</FormLabel>
                <FormControl>
                  <Input placeholder="John Doe" {...field} />
                </FormControl>
              </FormItem>
            )}
          />
        </div>

        <div className="pt-1 w-full">
          <Button type="submit" className="w-full" disabled={isLoading}>
            {isLoading ? (
              <div className="flex items-center justify-center space-x-2">
                <Loader />
              </div>
            ) : (
              'Register'
            )}
          </Button>
        </div>
      </form>
    </Form>
  )
}
