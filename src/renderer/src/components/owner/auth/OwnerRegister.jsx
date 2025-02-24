import { useState } from 'react'
import { useForm } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'
import * as z from 'zod'
import { toast } from '@renderer/hooks/use-toast'
import { useNavigate } from 'react-router-dom'
import { Form } from '@renderer/components/ui/form'
import { Button } from '@renderer/components/ui/button'
import { Input } from '@renderer/components/ui/input'
import Loader from '@renderer/utils/Loader'
import { Link } from 'react-router-dom'
import { FormField, FormControl, FormItem, FormLabel } from '@renderer/components/ui/form'

const formSchema = z.object({
  email: z.string().email({ message: 'Please enter a valid email address.' }),
  password: z.string().min(8, { message: 'Password must be at least 8 characters long.' }),
  name: z.string().min(2, { message: 'Name must be at least 2 characters long.' }),
  tel_number: z
    .string()
    .regex(/^\+?[1-9]\d{1,14}$/, { message: 'Please enter a valid telephone number.' })
})

export default function OwnerRegister() {
  const [isLoading, setIsLoading] = useState(false)
  const navigate = useNavigate()

  const form = useForm({
    resolver: zodResolver(formSchema),
    defaultValues: {
      email: '',
      password: '',
      name: '',
      tel_number: ''
    }
  })

  const handleSubmit = async (values) => {
    setIsLoading(true)
    try {
      await new Promise((resolve) => setTimeout(resolve, 1000))
      setIsLoading(false)
      toast({
        title: 'Registration Successful',
        description: 'You have successfully registered!'
      })
      navigate('/owner')
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
    <div className="space-y-3">
      <Form {...form}>
        <form
          onSubmit={form.handleSubmit(handleSubmit, (errors) => handleValidationError(errors))}
          className="grid grid-cols-1 lg:grid-cols-2 gap-8"
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
          </div>

          <div className="space-y-3">
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
            <FormField
              control={form.control}
              name="tel_number"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Telephone Number</FormLabel>
                  <FormControl>
                    <Input placeholder="+1234567890" {...field} />
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

          <div className="text-center mt-4 text-sm">
            <p>
              Already have an account?{' '}
              <Link to="/auth/owner/login" className="text-blue-500 hover:underline">
                Login here
              </Link>
            </p>
          </div>
        </form>
      </Form>
    </div>
  )
}
