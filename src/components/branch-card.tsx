
import type { Branch, BranchStatus } from '@/lib/types';
import { Card, CardContent, CardHeader, CardTitle } from './ui/card';
import { Badge } from './ui/badge';
import { cn } from '@/lib/utils';
import { Clock, MapPin, Phone, Zap } from 'lucide-react';
import Image from 'next/image';

interface BranchCardProps {
  branch: Branch;
  isSelected: boolean;
  onSelect: () => void;
  style?: React.CSSProperties;
}

const statusToVariant: Record<BranchStatus, "default" | "secondary" | "destructive" | "outline"> = {
    activa: "secondary",
    inactiva: "outline",
    proxima: "default",
    urgencias: "destructive",
}

const BranchCard = ({ branch, isSelected, onSelect, ...props }: BranchCardProps) => {
  const handleKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === 'Enter' || e.key === ' ') {
      e.preventDefault();
      onSelect();
    }
  };

  return (
    <Card 
        className={cn(
            "cursor-pointer border-2 bg-slate-900/50 backdrop-blur-sm transition-all duration-300 hover:border-primary/80 hover:-translate-y-1 overflow-hidden",
            "opacity-0 animate-fade-in-up",
            isSelected ? 'border-primary shadow-2xl shadow-primary/10' : 'border-slate-800'
        )}
        onClick={onSelect}
        onKeyDown={handleKeyDown}
        role="button"
        tabIndex={0}
        aria-label={`Seleccionar sucursal ${branch.name}`}
        {...props}
    >
        <div className="relative h-40 w-full">
            <Image
                src={branch.imageUrl}
                alt={`Imagen de la sucursal ${branch.name}`}
                fill
                className="object-cover"
                sizes="(max-width: 1024px) 100vw, 33vw"
                data-ai-hint="funeral home building"
            />
        </div>
        <CardHeader className="flex-row gap-4 items-start p-4">
          <div className="flex-1">
            <CardTitle className="text-base font-semibold text-foreground">{branch.name}</CardTitle>
             <p className="text-xs text-muted-foreground flex items-center gap-1.5 mt-1">
                <MapPin className="h-3 w-3" />
                {branch.city}, {branch.state}
            </p>
          </div>
          <Badge variant={statusToVariant[branch.status]} className={cn('text-xs capitalize')}>
            {branch.status === 'urgencias' && <Zap className="h-3 w-3 mr-1.5" />}
            {branch.status}
          </Badge>
        </CardHeader>
        <CardContent className="p-4 pt-0 text-sm space-y-2">
            <div className="flex items-center gap-2 text-muted-foreground">
                <Clock className="h-4 w-4 text-primary/80" />
                <span>{branch.schedule}</span>
            </div>
             <div className="flex items-center gap-2 text-muted-foreground">
                <Phone className="h-4 w-4 text-primary/80" />
                <span>{branch.phone}</span>
            </div>
            <div className="flex flex-wrap gap-1.5 pt-2">
                {branch.services.slice(0,3).map(service => (
                    <Badge key={service} variant="outline" className="text-xs py-0.5 px-1.5 font-light">{service}</Badge>
                ))}
                {branch.services.length > 3 && (
                     <Badge variant="outline" className="text-xs py-0.5 px-1.5 font-light">+{branch.services.length - 3} más</Badge>
                )}
            </div>
        </CardContent>
    </Card>
  )
}

export default BranchCard;
