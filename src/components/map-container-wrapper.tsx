
"use client";

import { MapContainer, TileLayer } from 'react-leaflet';
import 'leaflet/dist/leaflet.css';
import type { Branch } from '@/lib/types';
import MapFeatures from './map-features';

interface MapWrapperProps {
  branches: Branch[];
  selectedBranch: Branch | null;
  onMarkerSelect: (branch: Branch) => void;
}

export default function MapWrapper({ branches, selectedBranch, onMarkerSelect }: MapWrapperProps) {
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
