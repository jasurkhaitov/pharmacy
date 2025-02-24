import React from 'react'
import { Button } from '../ui/button'
import { Link } from 'react-router-dom'
import { ArrowLeftFromLine } from 'lucide-react'

export default function NavigateToRole({patient}) {
  return (
    <Link to={patient ? '/auth/patient' : '/'}>
      <Button variant="outline">
        <ArrowLeftFromLine />
      </Button>
    </Link>
  )
}
