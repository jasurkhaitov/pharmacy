import * as React from 'react'
import { CheckCircle, Timer, Edit, Trash2 } from 'lucide-react'
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow
} from '@renderer/components/ui/table'
import { Button } from '@renderer/components/ui/button'
import { Badge } from '@renderer/components/ui/badge'
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger
} from '@renderer/components/ui/dropdown-menu'

export default function PillTable({ pills, onStatusChange, onEdit, onDelete }) {
  return (
    <div className="rounded-md border">
      <Table>
        <TableHeader>
          <TableRow>
            <TableHead className="w-[50px]">ID</TableHead>
            <TableHead className="w-[100px]">Name</TableHead>
            <TableHead className="w-[80px]">Quantity</TableHead>
            <TableHead className="w-[80px]">Threshold</TableHead>
            <TableHead className="w-[80px]">Price</TableHead>
            <TableHead className="w-[80px]">Weight</TableHead>
            <TableHead className="w-[100px]">Production</TableHead>
            <TableHead className="w-[100px]">Expiry</TableHead>
            <TableHead className="w-[100px]">SupplierId</TableHead>
            <TableHead className="w-[80px]">Brand</TableHead>
            <TableHead className="w-[80px]">Status</TableHead>
            <TableHead className="w-[50px]">Actions</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {pills.map((pill) => (
            <TableRow key={pill.pill_id}>
              <TableCell className="font-mono">{pill.pill_id}</TableCell>
              <TableCell className="font-medium">{pill.pill_name}</TableCell>
              <TableCell>{pill.quantity}</TableCell>
              <TableCell>{pill.threshold}%</TableCell>
              <TableCell>${pill.price}</TableCell>
              <TableCell>{pill.weight}mg</TableCell>
              <TableCell>{new Date(pill.manufacture_date).toLocaleDateString()}</TableCell>
              <TableCell>{new Date(pill.expiry_date).toLocaleDateString()}</TableCell>
              <TableCell>{pill.supplier_id}</TableCell>
              <TableCell>{pill.manufacturer_name}</TableCell>
              <TableCell>
                <Badge
                  variant={pill.status === 1 ? 'success' : 'secondary'}
                  className="flex w-fit items-center gap-1"
                >
                  {pill.status === 1 ? (
                    <CheckCircle className="h-3 w-3" />
                  ) : (
                    <Timer className="h-3 w-3" />
                  )}
                  {pill.status === 1 ? 'Approved' : 'Pending'}
                </Badge>
              </TableCell>
              <TableCell>
                <DropdownMenu>
                  <DropdownMenuTrigger asChild>
                    <Button variant="ghost" className="h-8 w-8 p-0">
                      <span className="sr-only">Open menu</span>
                      •••
                    </Button>
                  </DropdownMenuTrigger>
                  <DropdownMenuContent align="end">
                    <DropdownMenuItem onClick={() => onStatusChange(pill.pill_id, 1)}>
                      Mark as Approved
                    </DropdownMenuItem>
                    <DropdownMenuItem onClick={() => onStatusChange(pill.pill_id, 0)}>
                      Mark as Pending
                    </DropdownMenuItem>
                    <DropdownMenuItem onClick={() => onEdit(pill)}>
                      <Edit className="mr-2 h-4 w-4" />
                      Edit
                    </DropdownMenuItem>
                    <DropdownMenuItem onClick={() => onDelete(pill.pill_id)}>
                      <Trash2 className="mr-2 h-4 w-4" />
                      Delete
                    </DropdownMenuItem>
                  </DropdownMenuContent>
                </DropdownMenu>
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </div>
  )
}
