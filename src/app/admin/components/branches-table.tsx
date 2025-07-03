
"use client"

import * as React from "react"
import { MoreHorizontal } from "lucide-react"

import { Button } from "@/components/ui/button"
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"
import { Input } from "@/components/ui/input"
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table"
import { Badge } from "@/components/ui/badge"
import type { Branch, BranchStatus } from "@/lib/types"
import { cn } from "@/lib/utils"

const statusToVariant: Record<BranchStatus, "default" | "secondary" | "destructive" | "outline"> = {
    activa: "secondary",
    inactiva: "outline",
    proxima: "default",
    urgencias: "destructive",
}

interface BranchesTableProps {
    data: Branch[];
    onEdit: (branch: Branch) => void;
    onDelete: (branch: Branch) => void;
}

export function BranchesTable({ data, onEdit, onDelete }: BranchesTableProps) {
  const [filter, setFilter] = React.useState("")
  const filteredData = data.filter(branch => 
    branch.name.toLowerCase().includes(filter.toLowerCase()) || 
    branch.city.toLowerCase().includes(filter.toLowerCase()) ||
    branch.state.toLowerCase().includes(filter.toLowerCase())
  );

  return (
    <div className="w-full">
      <div className="flex items-center py-4">
        <Input
          placeholder="Filtrar sucursales..."
          value={filter}
          onChange={(event) =>
            setFilter(event.target.value)
          }
          className="max-w-sm"
          aria-label="Filtrar sucursales por nombre, ciudad o estado"
        />
      </div>
      <div className="rounded-md border">
        <Table>
          <TableHeader>
             <TableRow>
                <TableHead>Nombre</TableHead>
                <TableHead>Ubicación</TableHead>
                <TableHead>Teléfono</TableHead>
                <TableHead>Estado</TableHead>
                <TableHead>
                  <span className="sr-only">Acciones</span>
                </TableHead>
              </TableRow>
          </TableHeader>
          <TableBody>
            {filteredData.length ? (
              filteredData.map((branch) => (
                <TableRow key={branch.id}>
                  <TableCell className="font-medium">{branch.name}</TableCell>
                  <TableCell>{branch.city}, {branch.state}</TableCell>
                  <TableCell>{branch.phone}</TableCell>
                  <TableCell>
                    <Badge variant={statusToVariant[branch.status]} className="capitalize">
                      {branch.status}
                    </Badge>
                  </TableCell>
                  <TableCell>
                    <DropdownMenu>
                      <DropdownMenuTrigger asChild>
                        <Button variant="ghost" className="h-8 w-8 p-0">
                          <span className="sr-only">Abrir menú</span>
                          <MoreHorizontal className="h-4 w-4" />
                        </Button>
                      </DropdownMenuTrigger>
                      <DropdownMenuContent align="end">
                        <DropdownMenuLabel>Acciones</DropdownMenuLabel>
                        <DropdownMenuItem onClick={() => onEdit(branch)}>
                            Editar
                        </DropdownMenuItem>
                        <DropdownMenuItem
                          onClick={() => navigator.clipboard.writeText(branch.id)}
                        >
                          Copiar ID
                        </DropdownMenuItem>
                        <DropdownMenuSeparator />
                        <DropdownMenuItem 
                            onClick={() => onDelete(branch)}
                            className="text-destructive focus:bg-destructive/10 focus:text-destructive"
                        >
                            Eliminar
                        </DropdownMenuItem>
                      </DropdownMenuContent>
                    </DropdownMenu>
                  </TableCell>
                </TableRow>
              ))
            ) : (
              <TableRow>
                <TableCell colSpan={5} className="h-24 text-center">
                  Sin resultados.
                </TableCell>
              </TableRow>
            )}
          </TableBody>
        </Table>
      </div>
    </div>
  )
}
