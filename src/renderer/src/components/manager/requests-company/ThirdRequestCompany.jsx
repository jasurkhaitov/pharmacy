import React from 'react'
import RequestsToCompany from './RequestsToCompany'

export default function ThirdRequestCompany() {
  return (
    <div className="px-4 py-6">
      <div className="flex flex-col gap-4">
        <div className="flex justify-between items-center">
          <h1 className="text-2xl font-bold">Requests to Company Representative (Owner)</h1>
        </div>

        <RequestsToCompany />
      </div>
    </div>
  )
}
