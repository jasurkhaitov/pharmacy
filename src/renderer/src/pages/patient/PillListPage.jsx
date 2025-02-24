import PillProductsNavbar from '@renderer/components/patient/pills/PillProductsNavbar'
import PillProducts from '@renderer/components/patient/pills/PillProducts'
import React from 'react'

export default function PillListPage() {
  return (
    <div className="max-w-[1920px] px-3 mx-auto py-5">
      <PillProductsNavbar />
      <PillProducts />
    </div>
  )
}
