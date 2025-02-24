import * as React from 'react'
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow
} from '@renderer/components/ui/table'
import { pills } from '@renderer/utils/data'
import { PillDetailsDialog } from './PillDetailsDialog'

export default function PillProducts() {
  const [selectedPill, setSelectedPill] = React.useState(null)

  const handleRowClick = (pill) => {
    setSelectedPill(pill)
  }

  const handleCloseDialog = () => {
    setSelectedPill(null)
  }

  return (
    <div className="w-full px-5 flex flex-col gap-3">
      <div className="flex items-center px-3">
        <h1 className="text-2xl font-bold">
          These display a list of pills to assist in treating your condition
        </h1>
      </div>

      {pills.length > 0 ? (
        <div className="rounded-md border">
          <Table className="table-auto">
            <TableHeader>
              <TableRow>
                <TableHead className="w-[150px]">ID</TableHead>
                <TableHead className="w-[250px]">Pill Name</TableHead>
                <TableHead>Description</TableHead>
                <TableHead className="w-[150px]">Price</TableHead>
                <TableHead className="w-[120px]">Quantity</TableHead>
                <TableHead className="w-[120px]">Weight (g)</TableHead>
                <TableHead className="w-[180px]">Manufacturer</TableHead>
              </TableRow>
            </TableHeader>

            <TableBody>
              {pills.map((pill) => (
                <TableRow
                  key={pill.pill_id}
                  className="cursor-pointer hover:bg-muted"
                  onClick={() => handleRowClick(pill)}
                >
                  <TableCell className="font-mono text-sm">{pill.pill_id}</TableCell>
                  <TableCell className="font-medium">{pill.pill_name}</TableCell>
                  <TableCell>{pill.pill_desc}</TableCell>
                  <TableCell>${pill.price.toFixed(2)}</TableCell>
                  <TableCell>{pill.quantity}</TableCell>
                  <TableCell>{pill.weight}</TableCell>
                  <TableCell>{pill.manufacturer_name}</TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </div>
      ) : (
        <p className="text-center text-muted-foreground">No pills found.</p>
      )}

      <PillDetailsDialog pill={selectedPill} onClose={handleCloseDialog} />
    </div>
  )
}
