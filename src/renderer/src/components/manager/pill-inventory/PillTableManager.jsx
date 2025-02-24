import * as React from 'react'
import { Button } from '@renderer/components/ui/button'
import { Badge } from '@renderer/components/ui/badge'
import { Input } from '@renderer/components/ui/input'
import { Search } from 'lucide-react'
import PillTable from './PillTable'

export default function PillTableManager({ pills, onStatusChange, onEdit, onDelete, onCreate }) {
  const [searchQuery, setSearchQuery] = React.useState('')

  const filteredPills = pills.filter(
    (pill) =>
      pill.pill_name.toLowerCase().includes(searchQuery.toLowerCase()) ||
      pill.pill_desc.toLowerCase().includes(searchQuery.toLowerCase()) ||
      pill.pill_id.toString().includes(searchQuery)
  )

  return (
    <div className="w-full px-4 py-6">
      <div className="flex flex-col gap-4">
        <div className="flex justify-between items-center">
          <h1 className="text-2xl font-bold">Pill Inventory</h1>
          <div className="flex items-center gap-2">
            <Badge variant="outline" className="h-7">
              Total: {pills.length}
            </Badge>
            <Badge variant="outline" className="h-7">
              Pending: {pills.filter((p) => p.status === 0).length}
            </Badge>
            <Button variant="outline" onClick={onCreate}>
              Create New Pill
            </Button>
          </div>
        </div>

        <div className="relative">
          <Search className="absolute left-2 top-2.5 h-4 w-4 text-muted-foreground" />
          <Input
            placeholder="Search pills..."
            className="pl-8"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
          />
        </div>

        <PillTable
          pills={filteredPills}
          onStatusChange={onStatusChange}
          onEdit={onEdit}
          onDelete={onDelete}
        />
      </div>
    </div>
  )
}
