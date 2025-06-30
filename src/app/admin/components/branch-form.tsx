
"use client"

import { useEffect } from "react"
import { useForm } from "react-hook-form"
import { zodResolver } from "@hookform/resolvers/zod"
import * as z from "zod"

import { Button } from "@/components/ui/button"
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form"
import { Input } from "@/components/ui/input"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Checkbox } from "@/components/ui/checkbox"
import { ScrollArea } from "@/components/ui/scroll-area"
import { Textarea } from "@/components/ui/textarea"
import type { Branch } from "@/lib/types"
import { allServices, allStatuses } from "@/lib/data"
import { cn } from "@/lib/utils"

const formSchema = z.object({
  name: z.string().min(5, { message: "El nombre debe tener al menos 5 caracteres." }),
  address: z.string().min(10, { message: "La dirección es requerida." }),
  city: z.string().min(3, { message: "La ciudad es requerida." }),
  state: z.string().min(3, { message: "El estado es requerido." }),
  lat: z.coerce.number().min(-90, "Latitud inválida.").max(90, "Latitud inválida."),
  lng: z.coerce.number().min(-180, "Longitud inválida.").max(180, "Longitud inválida."),
  phone: z.string().min(10, { message: "El teléfono debe tener al menos 10 dígitos." }),
  emergencyPhone: z.string().optional(),
  schedule: z.string().min(5, { message: "El horario es requerido." }),
  services: z.array(z.enum(allServices)).min(1, { message: "Selecciona al menos un servicio." }),
  status: z.enum(allStatuses),
  manager: z.string().min(3, { message: "El nombre del gerente es requerido." }),
  imageUrl: z.string().url({ message: "URL de imagen no válida." }).optional().or(z.literal('')),
})

type BranchFormValues = z.infer<typeof formSchema>

interface BranchFormProps {
  initialData?: Branch | null
  onSubmit: (values: Branch) => void
  onCancel: () => void
}

export function BranchForm({ initialData, onSubmit, onCancel }: BranchFormProps) {
  const form = useForm<BranchFormValues>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      name: "",
      address: "",
      city: "",
      state: "",
      lat: 23.6345,
      lng: -102.5528,
      phone: "",
      schedule: "L-V 9:00 - 18:00",
      services: [],
      status: "activa",
      manager: "",
      imageUrl: "https://placehold.co/600x400.png",
      ...initialData,
      lat: initialData?.coordinates.lat ?? 23.6345,
      lng: initialData?.coordinates.lng ?? -102.5528,
    },
  })

  useEffect(() => {
    form.reset({
      name: "",
      address: "",
      city: "",
      state: "",
      lat: 23.6345,
      lng: -102.5528,
      phone: "",
      schedule: "L-V 9:00 - 18:00",
      services: [],
      status: "activa",
      manager: "",
      imageUrl: "https://placehold.co/600x400.png",
      ...initialData,
      lat: initialData?.coordinates.lat ?? 23.6345,
      lng: initialData?.coordinates.lng ?? -102.5528,
    })
  }, [initialData, form])

  const processSubmit = (data: BranchFormValues) => {
    const fullBranchData: Branch = {
      id: initialData?.id || crypto.randomUUID(),
      ...data,
      coordinates: {
        lat: data.lat,
        lng: data.lng,
      },
      imageUrl: data.imageUrl || 'https://placehold.co/600x400.png',
    }
    onSubmit(fullBranchData)
  }

  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(processSubmit)}>
        <ScrollArea className="h-[60vh] pr-6">
          <div className="space-y-6">
            <FormField
              control={form.control}
              name="name"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Nombre de la Sucursal</FormLabel>
                  <FormControl>
                    <Input placeholder="Ej. Grupo Naser - Guadalajara Centro" {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="address"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Dirección</FormLabel>
                  <FormControl>
                    <Textarea placeholder="Ej. Av. Hidalgo 472, Zona Centro, 44100 Guadalajara, Jal." {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
             <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <FormField
                control={form.control}
                name="city"
                render={({ field }) => (
                    <FormItem>
                    <FormLabel>Ciudad</FormLabel>
                    <FormControl>
                        <Input placeholder="Ej. Guadalajara" {...field} />
                    </FormControl>
                    <FormMessage />
                    </FormItem>
                )}
                />
                <FormField
                control={form.control}
                name="state"
                render={({ field }) => (
                    <FormItem>
                    <FormLabel>Estado</FormLabel>
                    <FormControl>
                        <Input placeholder="Ej. Jalisco" {...field} />
                    </FormControl>
                    <FormMessage />
                    </FormItem>
                )}
                />
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <FormField
                control={form.control}
                name="lat"
                render={({ field }) => (
                    <FormItem>
                    <FormLabel>Latitud</FormLabel>
                    <FormControl>
                        <Input type="number" step="any" placeholder="20.678" {...field} />
                    </FormControl>
                    <FormMessage />
                    </FormItem>
                )}
                />
                 <FormField
                control={form.control}
                name="lng"
                render={({ field }) => (
                    <FormItem>
                    <FormLabel>Longitud</FormLabel>
                    <FormControl>
                        <Input type="number" step="any" placeholder="-103.353" {...field} />
                    </FormControl>
                    <FormMessage />
                    </FormItem>
                )}
                />
            </div>

             <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <FormField
                control={form.control}
                name="phone"
                render={({ field }) => (
                    <FormItem>
                    <FormLabel>Teléfono</FormLabel>
                    <FormControl>
                        <Input placeholder="33-1234-5678" {...field} />
                    </FormControl>
                    <FormMessage />
                    </FormItem>
                )}
                />
                 <FormField
                control={form.control}
                name="emergencyPhone"
                render={({ field }) => (
                    <FormItem>
                    <FormLabel>Teléfono de Emergencia (Opcional)</FormLabel>
                    <FormControl>
                        <Input placeholder="33-9876-5432" {...field} />
                    </FormControl>
                    <FormMessage />
                    </FormItem>
                )}
                />
            </div>
             <FormField
              control={form.control}
              name="manager"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Gerente</FormLabel>
                  <FormControl>
                    <Input placeholder="Ej. Carlos Mendoza" {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <FormField
                control={form.control}
                name="schedule"
                render={({ field }) => (
                    <FormItem>
                    <FormLabel>Horario</FormLabel>
                    <FormControl>
                        <Input placeholder="Abierto 24 horas" {...field} />
                    </FormControl>
                    <FormMessage />
                    </FormItem>
                )}
                />
                <FormField
                    control={form.control}
                    name="status"
                    render={({ field }) => (
                        <FormItem>
                        <FormLabel>Estado</FormLabel>
                        <Select onValueChange={field.onChange} defaultValue={field.value}>
                            <FormControl>
                            <SelectTrigger>
                                <SelectValue placeholder="Selecciona un estado" />
                            </SelectTrigger>
                            </FormControl>
                            <SelectContent>
                            {allStatuses.map(status => (
                                <SelectItem key={status} value={status} className="capitalize">{status}</SelectItem>
                            ))}
                            </SelectContent>
                        </Select>
                        <FormMessage />
                        </FormItem>
                    )}
                />
            </div>
             <FormField
                control={form.control}
                name="services"
                render={() => (
                    <FormItem>
                        <div className="mb-4">
                            <FormLabel className="text-base">Servicios</FormLabel>
                            <FormDescription>
                                Selecciona todos los servicios que ofrece la sucursal.
                            </FormDescription>
                        </div>
                        <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
                            {allServices.map((item) => (
                            <FormField
                                key={item}
                                control={form.control}
                                name="services"
                                render={({ field }) => {
                                return (
                                    <FormItem
                                        key={item}
                                        className="flex flex-row items-start space-x-3 space-y-0"
                                    >
                                        <FormControl>
                                            <Checkbox
                                                checked={field.value?.includes(item)}
                                                onCheckedChange={(checked) => {
                                                    return checked
                                                    ? field.onChange([...field.value, item])
                                                    : field.onChange(
                                                        field.value?.filter(
                                                        (value) => value !== item
                                                        )
                                                    )
                                                }}
                                            />
                                        </FormControl>
                                        <FormLabel className="font-normal">
                                            {item}
                                        </FormLabel>
                                    </FormItem>
                                )
                                }}
                            />
                            ))}
                        </div>
                        <FormMessage />
                    </FormItem>
                )}
            />
             <FormField
              control={form.control}
              name="imageUrl"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>URL de la Imagen</FormLabel>
                  <FormControl>
                    <Input placeholder="https://placehold.co/600x400.png" {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
          </div>
        </ScrollArea>
        <div className="flex justify-end gap-2 pt-6">
          <Button type="button" variant="ghost" onClick={onCancel}>Cancelar</Button>
          <Button type="submit">Guardar Cambios</Button>
        </div>
      </form>
    </Form>
  )
}
