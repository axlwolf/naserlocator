# Roadmap de "Naser Encuentra" - Reconstrucción

Este roadmap detalla el plan de desarrollo para reconstruir la aplicación "Naser Encuentra" desde una base sólida, enfocándonos en la estabilidad y la entrega incremental de funcionalidades.

## Fase 1: El Núcleo - Mapa Interactivo Funcional

El objetivo de esta fase es tener un mapa estable y funcional que muestre todas las sucursales a partir de datos estáticos.

- [x] **Configuración Inicial del Proyecto:** Next.js, TailwindCSS, y ShadCN están listos.
- [ ] **Estructura de Datos Estática:** Definir una estructura de datos clara y consistente para las sucursales en `src/lib/data.ts`.
- [ ] **Implementación de Mapa Estable:** Integrar `react-leaflet` asegurando que se renderice únicamente en el lado del cliente para evitar errores de SSR (`window is not defined`).
- [ ] **Visualización de Marcadores:** Renderizar un marcador en el mapa por cada sucursal definida en los datos estáticos.
- [ ] **Popups Informativos:** Al hacer clic en un marcador, mostrar un popup con el nombre y la dirección de la sucursal.

## Fase 2: Interfaz de Usuario y Búsqueda

Esta fase se centra en mejorar la experiencia del usuario, permitiéndole interactuar con los datos de forma más eficiente.

- [ ] **Lista de Sucursales:** Crear un panel lateral que muestre una lista de todas las sucursales con su información básica.
- [ ] **Sincronización Mapa-Lista:**
    - Al hacer clic en una sucursal de la lista, el mapa se centrará en su marcador y lo resaltará.
    - Al hacer clic en un marcador del mapa, la sucursal correspondiente se resaltará y se desplazará a la vista en la lista.
- [ ] **Filtros y Búsqueda:**
    - Añadir un campo de texto para buscar sucursales por nombre, ciudad o dirección.
    - Añadir un selector para filtrar sucursales por los servicios que ofrecen.
- [ ] **Geolocalización del Usuario:** Implementar un botón "Encontrar sucursal más cercana" que use la geolocalización del navegador para centrar el mapa y resaltar la sucursal abierta más próxima.

## Fase 3: Panel de Administración (CRUD)

El objetivo es crear una interfaz para que los administradores puedan gestionar la información de las sucursales sin tocar el código.

- [ ] **Ruta de Administración Protegida:** Crear una nueva página en `/admin`. (La protección se añadirá más adelante).
- [ ] **Tabla de Sucursales:** Usar un componente de tabla de ShadCN para mostrar todas las sucursales con sus detalles.
- [ ] **Formulario de Creación y Edición:**
    - Implementar un modal o una página separada con un formulario para agregar nuevas sucursales o editar las existentes.
    - Validar los datos del formulario.
- [ ] **Funcionalidad de Eliminación:** Añadir un botón para eliminar sucursales, con un diálogo de confirmación para prevenir borrados accidentales.
- [ ] **Persistencia de Datos (Futuro):** Migrar los datos estáticos a una base de datos como Firebase Firestore para que los cambios sean permanentes.

## Fase 4: Inteligencia Artificial y Mejoras Avanzadas

Una vez que la aplicación sea robusta, añadiremos funcionalidades avanzadas.

- [ ] **Autenticación para Administradores:** Proteger la ruta `/admin` para que solo usuarios autorizados puedan realizar cambios.
- [ ] **Asistente de Búsqueda con IA:**
    - Implementar un chatbot o una barra de búsqueda mejorada con Genkit.
    - El asistente ayudará a los usuarios a encontrar la sucursal ideal respondiendo a preguntas en lenguaje natural (ej. "dónde hay un servicio de velación abierto 24h en Guadalajara").

## Fase 5: Pulido y Despliegue

La fase final para asegurar que la aplicación esté lista para producción.

- [ ] **Mejoras de UI/UX:** Añadir animaciones sutiles, transiciones y mejorar el diseño general para una experiencia más fluida.
- [ ] **Revisión de Accesibilidad (A11y):** Asegurar que la aplicación sea usable por personas con discapacidades.
- [ ] **Optimización de Rendimiento:** Analizar y mejorar los tiempos de carga, especialmente si el número de sucursales crece.
- [ ] **Preparación para Despliegue:** Configurar el entorno de producción y desplegar la aplicación.
