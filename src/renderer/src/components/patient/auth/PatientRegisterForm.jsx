import { zodResolver } from '@hookform/resolvers/zod'
import { useForm } from 'react-hook-form'
import * as z from 'zod'

import { Form } from '@renderer/components/ui/form'
import { Button } from '@renderer/components/ui/button'
import Loader from '@renderer/utils/Loader'
import { toast } from '@renderer/hooks/use-toast'
import { Link } from 'react-router-dom'
import PatientRegisterFormFields from './PatientRegisterFormFields'

const formSchema = z.object({
  email: z.string().email({ message: 'Please enter a valid email address.' }),
  password: z.string().min(8, { message: 'Password must be at least 8 characters long.' }),
  name: z.string().min(2, { message: 'Name must be at least 2 characters long.' }),
  tel_number: z
    .string()
    .regex(/^\+?[1-9]\d{1,14}$/, { message: 'Please enter a valid telephone number.' }),
  address: z.string().min(5, { message: 'Please enter a valid address.' }),
  age: z.number().int().min(18, { message: 'You must be at least 18 years old to register.' })
})

export default function PatientRegisterForm({ onSubmit, isLoading }) {
  const form = useForm({
    resolver: zodResolver(formSchema),
    defaultValues: {
      email: '',
      password: '',
      name: '',
      tel_number: '',
      address: '',
      age: 18
    }
  })

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
        className="grid grid-cols-1 lg:grid-cols-2 gap-8"
      >
        <PatientRegisterFormFields control={form.control} />

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
            <Link to="/auth/patient/login" className="text-blue-500 hover:underline">
              Login here
            </Link>
          </p>
        </div>
      </form>
    </Form>
  )
}
