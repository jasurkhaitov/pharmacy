import { CheckCircle, Timer, Trash2 } from 'lucide-react'
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow
} from '@renderer/components/ui/table'
import { Badge } from '@renderer/components/ui/badge'
import { useToast } from '@renderer/hooks/use-toast'
import React, { useState } from 'react'
import DeletePillDialog from '../manager/pill-inventory/DeletePillDialog'

export default function SystemAdminTable({ pills, setPills }) {
  const { toast } = useToast()
  const [selectedPillId, setSelectedPillId] = useState(null)
  const [isDialogOpen, setIsDialogOpen] = useState(false)

  const openDeleteDialog = (pillId) => {
    setSelectedPillId(pillId)
    setIsDialogOpen(true)
  }

  const handleDeleteConfirm = () => {
    setPills((prevPills) => {
      const pillToDelete = prevPills.find((p) => p.pill_id === selectedPillId)
      if (pillToDelete) {
        toast({
          title: 'Pill Deleted',
          description: `${pillToDelete.pill_name} has been deleted`,
          variant: 'destructive'
        })
      }
      return prevPills.filter((p) => p.pill_id !== selectedPillId)
    })
    setIsDialogOpen(false)
  }

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
            <TableHead className="w-[80px]">Brand</TableHead>
            <TableHead className="w-[80px]">Status</TableHead>
            <TableHead className="w-[50px]">Delete</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {pills.map((pill) => (
            <TableRow key={pill.pill_id}>
              <TableCell className="font-mono">{pill.pill_id}</TableCell>
              <TableCell className="font-medium">{pill.pill_name}</TableCell>
              <TableCell>{pill.quantity}</TableCell>
              <TableCell>{pill.threshold}%</TableCell>
              <TableCell>${pill.price.toFixed(2)}</TableCell>
              <TableCell>{pill.weight}mg</TableCell>
              <TableCell>{new Date(pill.manufacture_date).toLocaleDateString()}</TableCell>
              <TableCell>{new Date(pill.expiry_date).toLocaleDateString()}</TableCell>
              <TableCell>{pill.manufacturer_name}</TableCell>
              <TableCell>
                <Badge
                  variant={pill.status === 'approved' ? 'success' : 'secondary'}
                  className="flex w-fit items-center gap-1"
                >
                  {pill.status === 'approved' ? (
                    <CheckCircle className="h-3 w-3" />
                  ) : (
                    <Timer className="h-3 w-3" />
                  )}
                  {pill.status.charAt(0).toUpperCase() + pill.status.slice(1)}
                </Badge>
              </TableCell>
              <TableCell>
                <Trash2
                  onClick={() => openDeleteDialog(pill.pill_id)}
                  className="text-red-500 h-4 w-4 cursor-pointer"
                />
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>

      <DeletePillDialog
        isOpen={isDialogOpen}
        onOpenChange={setIsDialogOpen}
        onConfirm={handleDeleteConfirm}
      />
    </div>
  )
}
