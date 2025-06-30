import { Button } from "@/components/ui/button";
import { PlusCircle } from "lucide-react";
import { branches } from "@/lib/data";
import { BranchesTable } from "./components/branches-table";
import Header from "@/components/header";

export default function AdminPage() {
  return (
    <div className="min-h-screen flex flex-col">
       <Header />
       <main className="flex-1 container mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="flex items-center justify-between mb-8">
            <div>
                 <h1 className="text-3xl font-bold tracking-tight text-foreground">Administración de Sucursales</h1>
                 <p className="text-muted-foreground">Gestiona la información de todas las sucursales de Grupo Naser.</p>
            </div>
          <Button>
            <PlusCircle className="mr-2 h-4 w-4" />
            Agregar Sucursal
          </Button>
        </div>
        <BranchesTable data={branches} />
      </main>
    </div>
  );
}
