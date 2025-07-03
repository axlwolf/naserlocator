
"use client";

import { useState, useMemo, useEffect } from 'react';
import dynamic from 'next/dynamic';

import type { Branch, Service } from '@/lib/types';
import { allServices } from '@/lib/data';

import { Input } from './ui/input';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from './ui/select';
import { Button } from './ui/button';
import BranchCard from './branch-card';
import { LocateIcon, X, MapPinOff } from 'lucide-react';

const MexicoMap = dynamic(() => import('./mexico-map'), { ssr: false });

export default function NaserApp({ branches }: { branches: Branch[] }) {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedService, setSelectedService] = useState<Service | 'all'>('all');
  const [selectedBranch, setSelectedBranch] = useState<Branch | null>(null);
  const [selectedState, setSelectedState] = useState<string | null>(null);

  useEffect(() => {
    const firstUrgent = branches.find(b => b.status === 'urgencias');
    if (firstUrgent) {
      setSelectedBranch(firstUrgent);
      setSelectedState(firstUrgent.state);
    } else if (branches.length > 0) {
      setSelectedBranch(branches[0]);
      setSelectedState(branches[0].state);
    }
  }, [branches]);

  const filteredBranches = useMemo(() => {
    return branches.filter(branch => {
      const matchesSearch = branch.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
                            branch.address.toLowerCase().includes(searchTerm.toLowerCase()) ||
                            branch.city.toLowerCase().includes(searchTerm.toLowerCase());
      const matchesService = selectedService === 'all' || branch.services.includes(selectedService);
      const matchesState = !selectedState || branch.state === selectedState;
      return matchesSearch && matchesService && matchesState;
    });
  }, [branches, searchTerm, selectedService, selectedState]);

  const handleStateClick = (stateName: string | null) => {
    setSelectedState(stateName);
    setSearchTerm('');
    setSelectedService('all');
    
    if (stateName) {
      const firstBranchInState = branches.find(b => b.state === stateName);
      setSelectedBranch(firstBranchInState || null);
    } else {
      const firstUrgent = branches.find(b => b.status === 'urgencias');
      setSelectedBranch(firstUrgent || branches[0] || null);
    }
  }

  const handleLocateNearest = () => {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(position => {
        const userLat = position.coords.latitude;
        const userLng = position.coords.longitude;
        
        let nearestBranch: Branch | null = null;
        let minDistance = Infinity;

        const openBranches = branches.filter(b => b.status === 'activa' || b.status === 'urgencias');

        openBranches.forEach(branch => {
          const lat1 = userLat;
          const lon1 = userLng;
          const lat2 = branch.coordinates.lat;
          const lon2 = branch.coordinates.lng;
          
          const R = 6371; // Earth radius in km
          const dLat = (lat2 - lat1) * Math.PI / 180;
          const dLon = (lon2 - lon1) * Math.PI / 180;
          const a = 
            Math.sin(dLat/2) * Math.sin(dLat/2) +
            Math.cos(lat1 * Math.PI / 180) * Math.cos(lat2 * Math.PI / 180) * 
            Math.sin(dLon/2) * Math.sin(dLon/2); 
          const c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1-a)); 
          const distance = R * c; // Distance in km

          if (distance < minDistance) {
            minDistance = distance;
            nearestBranch = branch;
          }
        });

        if (nearestBranch) {
          setSelectedBranch(nearestBranch);
          setSelectedState(nearestBranch.state);
        }
      });
    } else {
      const nearestUrgent = branches.find(b => b.status === 'urgencias');
      if (nearestUrgent) {
        setSelectedBranch(nearestUrgent);
        setSelectedState(nearestUrgent.state);
      }
    }
  };

  const handleSelectBranch = (branch: Branch) => {
    setSelectedBranch(branch);
    setSelectedState(branch.state);
  }

  const clearStateSelection = () => {
    handleStateClick(null);
  }

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
              Ubicar más cercana
            </Button>
          </div>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        <div className="lg:col-span-2">
            <div className="bg-card/50 p-2 rounded-lg border">
                <MexicoMap 
                    branches={branches}
                    selectedState={selectedState}
                    onStateClick={handleStateClick}
                />
            </div>
        </div>
        <div className="lg:col-span-1 h-[600px] overflow-y-auto pr-2 space-y-4">
            <div className='flex justify-between items-center'>
                <h3 className="text-2xl font-semibold text-foreground">
                {selectedState ? `Sucursales en ${selectedState}` : 'Todas las sucursales'} ({filteredBranches.length})
                </h3>
                {selectedState && (
                    <Button variant="ghost" size="sm" onClick={clearStateSelection}>
                        <X className="mr-2 h-4 w-4" />
                        Quitar filtro
                    </Button>
                )}
            </div>
            {filteredBranches.length > 0 ? (
                filteredBranches.map((branch, index) => (
                    <BranchCard 
                        key={branch.id} 
                        branch={branch} 
                        isSelected={selectedBranch?.id === branch.id}
                        onSelect={() => handleSelectBranch(branch)}
                        style={{ animationDelay: `${index * 75}ms` }}
                    />
                ))
            ) : (
                <div className="flex flex-col items-center justify-center h-full text-center p-8 bg-card/50 rounded-lg border border-dashed">
                    <MapPinOff className="h-12 w-12 text-muted-foreground mb-4" />
                    <h4 className="text-xl font-semibold text-foreground">Sin Resultados</h4>
                    <p className="text-muted-foreground mt-2 mb-4">No se encontraron sucursales que coincidan con tu búsqueda.</p>
                    <Button variant="outline" onClick={() => {
                        setSearchTerm('');
                        setSelectedService('all');
                    }}>
                        Limpiar filtros
                    </Button>
                </div>
            )}
        </div>
      </div>
    </div>
  );
}
