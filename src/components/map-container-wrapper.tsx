
"use client";

import { MapContainer, TileLayer, Marker, Popup, useMap } from 'react-leaflet';
import L from 'leaflet';
import 'leaflet/dist/leaflet.css';
import { useEffect } from 'react';
import type { Branch } from '@/lib/types';
import { Button } from './ui/button';
import { Navigation } from 'lucide-react';

const createIcon = (color: string, size: number = 32, pulse: boolean = false) => {
    return L.divIcon({
        html: `
            <div class="${pulse ? 'animate-pulse' : ''}" style="position: relative; width: ${size}px; height: ${size}px;">
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="${size}" height="${size}" fill="${color}" stroke="#0F172A" stroke-width="1">
                    <path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7z"/>
                    <circle cx="12" cy="9" r="2.5" fill="#0F172A" />
                </svg>
            </div>
        `,
        className: 'bg-transparent border-0',
        iconSize: [size, size],
        iconAnchor: [size / 2, size],
    });
};

const defaultIcon = createIcon("#94a3b8");
const selectedIcon = createIcon("#D4AF37", 40);
const emergencyIcon = createIcon("#f87171", 40, true);

interface MapProps {
    branches: Branch[];
    selectedBranch: Branch | null;
    onMarkerSelect: (branch: Branch) => void;
}

function MapFeatures({ branches, selectedBranch, onMarkerSelect }: MapProps) {
  const map = useMap();

  useEffect(() => {
    if (selectedBranch) {
      map.flyTo([selectedBranch.coordinates.lat, selectedBranch.coordinates.lng], 14, {
        animate: true,
        duration: 1.5,
      });
    }
  }, [selectedBranch, map]);

  const getDirections = (branch: Branch) => {
    window.open(`https://www.google.com/maps/dir/?api=1&destination=${branch.coordinates.lat},${branch.coordinates.lng}`, '_blank');
  };

  return (
    <>
      {branches.map(branch => {
        const isSelected = selectedBranch?.id === branch.id;
        const isEmergency = branch.status === 'urgencias';
        let icon = defaultIcon;
        if (isSelected) {
            icon = selectedIcon;
        } else if (isEmergency) {
            icon = emergencyIcon;
        }

        return (
            <Marker
                key={branch.id}
                position={[branch.coordinates.lat, branch.coordinates.lng]}
                icon={icon}
                eventHandlers={{
                    click: () => {
                        onMarkerSelect(branch);
                    },
                }}
            >
                <Popup autoPan={false}>
                    <div className="text-foreground p-1 space-y-2">
                       <h4 className="font-bold">{branch.name}</h4>
                       <p className="text-xs text-muted-foreground">{branch.address}</p>
                       <Button size="sm" className="w-full" onClick={() => getDirections(branch)}>
                            <Navigation className="mr-2 h-4 w-4"/>
                            Cómo llegar
                       </Button>
                    </div>
                </Popup>
            </Marker>
        )
      })}
    </>
  );
}

export default function InteractiveMap({ branches, selectedBranch, onMarkerSelect }: MapProps) {
  const initialPosition: [number, number] = [23.6345, -102.5528];
  const initialZoom = 5;

  return (
    <MapContainer 
        center={initialPosition} 
        zoom={initialZoom} 
        scrollWheelZoom={true} 
        className="h-[600px] w-full rounded-lg z-0"
    >
        <TileLayer
            attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors &copy; <a href="https://carto.com/attributions">CARTO</a>'
            url="https://{s}.basemaps.cartocdn.com/dark_all/{z}/{x}/{y}{r}.png"
        />
        <MapFeatures 
            branches={branches}
            selectedBranch={selectedBranch}
            onMarkerSelect={onMarkerSelect}
        />
    </MapContainer>
  );
}
