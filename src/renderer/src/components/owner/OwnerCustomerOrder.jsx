import React from 'react'
import OwnerTable from './OwnerTable'

export default function OwnerCustomerOrder() {
  return (
    <div className="w-full px-4 py-6">
      <div className="flex flex-col gap-4">
        <h1 className="text-2xl font-bold">
          The representative can handle customer orders and submit requests to the manager
        </h1>

        <OwnerTable />
      </div>
    </div>
  )
}
