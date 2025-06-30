
"use client"

import { useState } from "react"
import { PlusCircle } from "lucide-react"

import { branches as initialBranches } from "@/lib/data"
import type { Branch } from "@/lib/types"

import { Button } from "@/components/ui/button"
import { useToast } from "@/hooks/use-toast"
import { BranchesTable } from "./branches-table"
import { BranchForm } from "./branch-form"

import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog"
import {
  AlertDialog,
  AlertDialogAction,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
} from "@/components/ui/alert-dialog"

export function ManageBranches() {
  const { toast } = useToast()
  const [branchesData, setBranchesData] = useState<Branch[]>(initialBranches)
  const [isFormOpen, setIsFormOpen] = useState(false)
  const [isAlertOpen, setIsAlertOpen] = useState(false)
  const [editingBranch, setEditingBranch] = useState<Branch | null>(null)
  const [branchToDelete, setBranchToDelete] = useState<Branch | null>(null)

  const handleAddNew = () => {
    setEditingBranch(null)
    setIsFormOpen(true)
  }

  const handleEdit = (branch: Branch) => {
    setEditingBranch(branch)
    setIsFormOpen(true)
  }

  const handleDelete = (branch: Branch) => {
    setBranchToDelete(branch)
    setIsAlertOpen(true)
  }

  const confirmDelete = () => {
    if (branchToDelete) {
      setBranchesData(prev => prev.filter(b => b.id !== branchToDelete.id))
      toast({
        title: "Sucursal Eliminada",
        description: `La sucursal "${branchToDelete.name}" ha sido eliminada.`,
      })
    }
    setIsAlertOpen(false)
    setBranchToDelete(null)
  }
  
  const handleCloseDialog = () => {
    setIsFormOpen(false)
    setEditingBranch(null)
  }

  const handleSubmitForm = (data: Branch) => {
    const isEditing = !!editingBranch;
    
    if (isEditing) {
      setBranchesData(prev => prev.map(b => b.id === data.id ? data : b))
    } else {
      setBranchesData(prev => [data, ...prev])
    }
    
    handleCloseDialog()
    toast({
        title: isEditing ? "Sucursal Actualizada" : "Sucursal Creada",
        description: `La sucursal "${data.name}" ha sido guardada exitosamente.`,
    })
  }

  return (
    <>
      <div className="flex items-center justify-between mb-8">
        <div>
          <h1 className="text-3xl font-bold tracking-tight text-foreground">Administración de Sucursales</h1>
          <p className="text-muted-foreground">Gestiona la información de todas las sucursales de Grupo Naser.</p>
        </div>
        <Button onClick={handleAddNew}>
          <PlusCircle className="mr-2 h-4 w-4" />
          Agregar Sucursal
        </Button>
      </div>

      <BranchesTable data={branchesData} onEdit={handleEdit} onDelete={handleDelete} />

      <Dialog open={isFormOpen} onOpenChange={setIsFormOpen}>
        <DialogContent className="sm:max-w-3xl">
          <DialogHeader>
            <DialogTitle>{editingBranch ? 'Editar' : 'Agregar'} Sucursal</DialogTitle>
            <DialogDescription>
              Completa la información de la sucursal. Haz clic en guardar cuando termines.
            </DialogDescription>
          </DialogHeader>
          <BranchForm
            key={editingBranch?.id ?? 'new'}
            initialData={editingBranch}
            onSubmit={handleSubmitForm}
            onCancel={handleCloseDialog}
          />
        </DialogContent>
      </Dialog>
      
      <AlertDialog open={isAlertOpen} onOpenChange={setIsAlertOpen}>
        <AlertDialogContent>
          <AlertDialogHeader>
            <AlertDialogTitle>¿Estás seguro de que quieres eliminar esta sucursal?</AlertDialogTitle>
            <AlertDialogDescription>
              Esta acción no se puede deshacer. Esto eliminará permanentemente la sucursal
              <span className="font-semibold text-foreground"> "{branchToDelete?.name}"</span>.
            </AlertDialogDescription>
          </AlertDialogHeader>
          <AlertDialogFooter>
            <AlertDialogCancel>Cancelar</AlertDialogCancel>
            <AlertDialogAction onClick={confirmDelete} className="bg-destructive hover:bg-destructive/90">
                Eliminar
            </AlertDialogAction>
          </AlertDialogFooter>
        </AlertDialogContent>
      </AlertDialog>
    </>
  )
}
