import * as React from 'react'
import { Input } from '@renderer/components/ui/input'
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow
} from '@renderer/components/ui/table'
import { Search } from 'lucide-react'
import { conditions } from '@renderer/utils/data'
import { Link } from 'react-router-dom'

export default function PatientIllnesses() {
  const [searchQuery, setSearchQuery] = React.useState('')

  const filteredConditions = conditions.filter(
    (condition) =>
      condition.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
      condition.description.toLowerCase().includes(searchQuery.toLowerCase())
  )

  return (
    <div className="w-full px-5 flex flex-col gap-3">
      <div className="flex items-center px-3">
        <h2 className="text-2xl font-bold">Medical Conditions Reference</h2>
      </div>

      <div className="relative">
        <Search className="absolute left-2 top-2.5 h-4 w-4 text-muted-foreground" />
        <Input
          placeholder="Search conditions..."
          className="pl-8"
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
        />
      </div>

      <div className="rounded-md border">
        <Table>
          <TableHeader>
            <TableRow>
              <TableHead className="w-[150px]">ID</TableHead>
              <TableHead className="w-[250px]">Condition</TableHead>
              <TableHead>Description</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {filteredConditions.map((condition) => (
              <TableRow key={condition.id} className="cursor-pointer hover:bg-muted">
                <Link to={`/illness/${condition.id}`} className="contents">
                  <TableCell className="font-mono text-sm">{condition.id}</TableCell>
                  <TableCell className="font-medium">{condition.name}</TableCell>
                  <TableCell>{condition.description}</TableCell>
                </Link>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </div>

      <p className="text-sm text-muted-foreground px-3">
        Showing {filteredConditions.length} of {conditions.length} conditions
      </p>
    </div>
  )
}
