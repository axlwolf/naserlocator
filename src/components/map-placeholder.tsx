import Image from 'next/image';
import type { Branch } from '@/lib/types';
import { Button } from './ui/button';
import { Card, CardContent } from './ui/card';
import { MapPin, Phone } from 'lucide-react';

interface MapPlaceholderProps {
  selectedBranch: Branch | null;
}

const MapPlaceholder = ({ selectedBranch }: MapPlaceholderProps) => {
  return (
    <Card className="h-[600px] w-full rounded-lg overflow-hidden relative flex flex-col justify-end bg-card shadow-2xl">
      <Image
        src="https://placehold.co/1200x800.png"
        alt="Mapa de México"
        layout="fill"
        objectFit="cover"
        className="opacity-20"
        data-ai-hint="abstract map"
      />
      <div className="absolute inset-0 bg-gradient-to-t from-background via-background/70 to-transparent" />
      
      {selectedBranch && (
        <CardContent className="relative z-10 p-6 space-y-4">
            <h3 className="text-3xl font-bold gradient-text">{selectedBranch.name}</h3>
            <div className="text-muted-foreground space-y-2 text-sm">
                <div className="flex items-start gap-3">
                    <MapPin className="h-5 w-5 text-primary mt-1 flex-shrink-0" />
                    <p>{selectedBranch.address}</p>
                </div>
                <div className="flex items-center gap-3">
                    <Phone className="h-5 w-5 text-primary flex-shrink-0" />
                    <a href={`tel:${selectedBranch.phone}`} className="hover:text-primary transition-colors">{selectedBranch.phone}</a>
                    {selectedBranch.emergencyPhone && (
                        <>
                         <span className='text-xs'>|</span> 
                         <a href={`tel:${selectedBranch.emergencyPhone}`} className="text-destructive/80 hover:text-destructive transition-colors font-semibold">Emergencias: {selectedBranch.emergencyPhone}</a>
                        </>
                    )}
                </div>
            </div>
            <div className="flex gap-4 pt-2">
                <Button variant="secondary">
                    Cómo llegar
                </Button>
                <Button variant="outline">
                    Ver detalles
                </Button>
            </div>
        </CardContent>
      )}
    </Card>
  );
};

export default MapPlaceholder;
