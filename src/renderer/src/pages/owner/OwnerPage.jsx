import OwnerCustomerOrder from '@renderer/components/owner/OwnerCustomerOrder'
import Navbar from '@renderer/components/shared/Navbar'
import React from 'react'

export default function OwnerPage() {
  return (
    <div className="max-w-[1920px] px-3 mx-auto py-5">
      <Navbar />
      <OwnerCustomerOrder/>
    </div>
  )
}
