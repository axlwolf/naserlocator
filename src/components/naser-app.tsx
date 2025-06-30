"use client";

import { useState, useMemo } from 'react';
import dynamic from 'next/dynamic';
import type { Branch, Service } from '@/lib/types';
import { allServices } from '@/lib/data';
import { Input } from './ui/input';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from './ui/select';
import { Button } from './ui/button';
import { LocateIcon, X } from 'lucide-react';
import BranchCard from './branch-card';
import { Skeleton } from './ui/skeleton';

const InteractiveMap = dynamic(() => import('./interactive-map'), {
  ssr: false,
  loading: () => <Skeleton className="h-[600px] w-full rounded-lg" />,
});

interface NaserAppProps {
  branches: Branch[];
}

export default function NaserApp({ branches }: NaserAppProps) {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedService, setSelectedService] = useState<Service | 'all'>('all');
  const [selectedBranch, setSelectedBranch] = useState<Branch | null>(branches.find(b => b.status === 'urgencias') || branches[0] || null);
  
  const filteredBranches = useMemo(() => {
    return branches.filter(branch => {
      const matchesSearch = branch.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
                            branch.address.toLowerCase().includes(searchTerm.toLowerCase()) ||
                            branch.city.toLowerCase().includes(searchTerm.toLowerCase());
      const matchesService = selectedService === 'all' || branch.services.includes(selectedService);
      return matchesSearch && matchesService;
    });
  }, [branches, searchTerm, selectedService]);

  const handleLocateNearest = () => {
    // Placeholder for geolocation logic
    const nearestUrgent = branches.find(b => b.status === 'urgencias');
    if (nearestUrgent) {
      setSelectedBranch(nearestUrgent);
    }
  };

  return (
    <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-8">
      <div className="space-y-4 mb-8">
        <h2 className="text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
          Encuentra una sucursal cerca de ti
        </h2>
        <div className="flex flex-col md:flex-row gap-4">
          <Input 
            placeholder="Buscar por nombre, ciudad o dirección..." 
            className="md:w-1/2"
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
          />
          <div className="flex gap-4">
            <Select value={selectedService} onValueChange={(v) => setSelectedService(v as Service | 'all')}>
              <SelectTrigger className="w-full md:w-[240px]">
                <SelectValue placeholder="Filtrar por servicio" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="all">Todos los servicios</SelectItem>
                {allServices.map(service => (
                  <SelectItem key={service} value={service}>{service}</SelectItem>
                ))}
              </SelectContent>
            </Select>
             <Button onClick={handleLocateNearest} variant="secondary" className="hidden md:flex">
              <LocateIcon className="mr-2 h-4 w-4" />
              Sucursal más cercana
            </Button>
          </div>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        <div className="lg:col-span-2">
            <InteractiveMap 
              branches={filteredBranches}
              selectedBranch={selectedBranch}
              onMarkerSelect={setSelectedBranch}
            />
        </div>
        <div className="lg:col-span-1 h-[600px] overflow-y-auto pr-2 space-y-4">
            <h3 className="text-2xl font-semibold text-foreground">
              Sucursales ({filteredBranches.length})
            </h3>
            {filteredBranches.length > 0 ? (
                filteredBranches.map(branch => (
                    <BranchCard 
                        key={branch.id} 
                        branch={branch} 
                        isSelected={selectedBranch?.id === branch.id}
                        onSelect={() => setSelectedBranch(branch)}
                    />
                ))
            ) : (
                <div className="flex flex-col items-center justify-center h-full text-center p-8 bg-card rounded-lg">
                    <X className="h-12 w-12 text-muted-foreground mb-4" />
                    <p className="text-muted-foreground">No se encontraron sucursales con los filtros seleccionados.</p>
                </div>
            )}
        </div>
      </div>
    </div>
  );
}
