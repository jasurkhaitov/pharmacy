import SystemAdmin from '@renderer/components/admin/SystemAdmin'
import Navbar from '@renderer/components/shared/Navbar'
import React from 'react'

export default function SystemAdminPage() {
  return (
    <div className='max-w-[1920px] px-3 mx-auto py-5'>
      <Navbar />
      <SystemAdmin />
    </div>
  )
}
