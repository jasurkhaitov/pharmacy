import {
  Form,
  FormField,
  FormItem,
  FormLabel,
  FormControl,
  FormMessage
} from '@renderer/components/ui/form'
import { Input } from '@renderer/components/ui/input'
import { Button } from '@renderer/components/ui/button'
import { toast } from '@renderer/hooks/use-toast'
import { useState } from 'react'
import Loader from '@renderer/utils/loader'

export default function CartSummaryForm({ totalCost, form, onClose }) {
  const [isLoading, setIsLoading] = useState(false)

  const handlePaymentSubmit = async (data) => {
    setIsLoading(true)
    try {
      await new Promise((resolve) => setTimeout(resolve, 2000))
      toast({
        title: 'Your payment has been submitted successfully'
      })
      onClose()
    } catch (error) {
      toast({
        title: 'Something went wrong. Please try again',
        variant: 'destructive'
      })
    } finally {
      setIsLoading(false)
    }
  }

  return (
    <div>
      <p className="text-lg font-semibold mb-4">Total Cost: ${totalCost.toFixed(2)}</p>
      <Form {...form}>
        <form onSubmit={form.handleSubmit(handlePaymentSubmit)} className="space-y-4">
          <FormField
            control={form.control}
            name="cardNumber"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Visa Card Number</FormLabel>
                <FormControl>
                  <Input placeholder="Enter your card number" {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <div className="flex space-x-4">
            <FormField
              control={form.control}
              name="expiryDate"
              render={({ field }) => (
                <FormItem className="flex-1">
                  <FormLabel>Expiry Date</FormLabel>
                  <FormControl>
                    <Input placeholder="MM/YY" {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="cvv"
              render={({ field }) => (
                <FormItem className="flex-1">
                  <FormLabel>CVV</FormLabel>
                  <FormControl>
                    <Input placeholder="123" {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
          </div>
          <div className="flex justify-end">
            <Button type="submit" disabled={isLoading}>
              {isLoading ? (
                <span className="flex items-center gap-1">
                  <Loader />
                  Processing...
                </span>
              ) : (
                'Submit Payment'
              )}
            </Button>
          </div>
        </form>
      </Form>
    </div>
  )
}
