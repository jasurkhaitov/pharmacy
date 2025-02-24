import { Button } from '@renderer/components/ui/button'
import { Link } from 'react-router-dom'

export default function NotFoundPage() {
  return (
    <div className="flex items-center justify-center min-h-screen bg-gradient-to-r from-purple-400 via-pink-500 to-red-500">
      <div className="text-center">
        <h1 className="mb-4 text-6xl font-semibold text-white">404</h1>
        <p className="mb-4 text-lg text-white">Oops! Looks like you're lost.</p>
        <div className="animate-bounce">
          <svg className="mx-auto h-16 w-16 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 19l9 2-9-18-9 18 9-2zm0 0v-8"/>
          </svg>
        </div>
        <p className="mt-4 text-gray-100">Let's get you back on track.</p>
        <Button asChild className="mt-8">
          <Link to="/">
            Return Home
          </Link>
        </Button>
      </div>
    </div>
  )
}
