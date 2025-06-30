export type Service = "Velación" | "Cremación" | "Traslados" | "Embalsamamiento" | "Capillas" | "Gestoría";

export type BranchStatus = "activa" | "inactiva" | "proxima" | "urgencias";

export interface Branch {
  id: string;
  name: string;
  address: string;
  city: string;
  state: string;
  coordinates: {
    lat: number;
    lng: number;
  };
  phone: string;
  emergencyPhone?: string;
  schedule: string;
  services: Service[];
  status: BranchStatus;
  imageUrl: string;
  manager: string;
}
