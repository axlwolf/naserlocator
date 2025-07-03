# Roadmap de "Naser Encuentra" - Reconstrucción

Este roadmap detalla el plan de desarrollo para reconstruir la aplicación "Naser Encuentra" desde una base sólida, enfocándonos en la estabilidad y la entrega incremental de funcionalidades.

## Fase 1: El Núcleo - Mapa Interactivo Funcional

El objetivo de esta fase es tener un mapa estable y funcional que muestre todas las sucursales a partir de datos estáticos.

- [x] **Configuración Inicial del Proyecto:** Next.js, TailwindCSS, y ShadCN están listos.
- [x] **Estructura de Datos Estática:** Se ha definido e integrado la estructura de datos completa de las sucursales desde el JSON proporcionado en `src/lib/data.ts`.
- [x] **Implementación de Mapa Estable:** Se reemplazó `react-leaflet` por un mapa SVG interactivo para garantizar la estabilidad y evitar errores de renderizado en el servidor.
- [x] **Visualización de Estados en Mapa SVG:** Se renderizan todos los estados de México, coloreando aquellos que tienen sucursales activas o de urgencia.

## Fase 2: Interfaz de Usuario y Búsqueda

Esta fase se centra en mejorar la experiencia del usuario, permitiéndole interactuar con los datos de forma más eficiente.

- [x] **Lista de Sucursales:** Se ha creado un panel lateral que muestra una lista de todas las sucursales con su información básica en tarjetas interactivas.
- [x] **Sincronización Mapa-Lista:**
    - Al hacer clic en un estado del mapa, la lista se filtra para mostrar sus sucursales.
    - Al hacer clic en una sucursal de la lista, esta se resalta visualmente.
- [x] **Filtros y Búsqueda:**
    - Se ha añadido un campo de texto para buscar sucursales por nombre, ciudad o dirección.
    - Se ha añadido un selector para filtrar sucursales por los servicios que ofrecen.
- [ ] **Geolocalización del Usuario:** Implementar un botón "Encontrar sucursal más cercana" que use la geolocalización del navegador para centrar el mapa y resaltar la sucursal abierta más próxima.

## Fase 3: Panel de Administración (CRUD)

El objetivo es crear una interfaz para que los administradores puedan gestionar la información de las sucursales sin tocar el código.

- [x] **Ruta de Administración Protegida:** Se ha creado la página en `/admin`. (La protección se añadirá más adelante).
- [x] **Tabla de Sucursales:** Se usa un componente de tabla de ShadCN para mostrar todas las sucursales con sus detalles y un filtro.
- [x] **Formulario de Creación y Edición:**
    - Se ha implementado un modal con un formulario para agregar nuevas sucursales o editar las existentes.
    - Se validan los datos del formulario.
- [x] **Funcionalidad de Eliminación:** Se ha añadido un botón para eliminar sucursales, con un diálogo de confirmación para prevenir borrados accidentales.
- [ ] **Persistencia de Datos (Futuro):** Migrar los datos estáticos a una base de datos como Firebase Firestore para que los cambios sean permanentes.

## Fase 4: Pulido y Despliegue

La fase final para asegurar que la aplicación esté lista para producción.

- [x] **Mejoras de UI/UX:** Añadir animaciones sutiles, transiciones y mejorar el diseño general para una experiencia más fluida.
- [x] **Revisión de Accesibilidad (A11y):** Asegurar que la aplicación sea usable por personas con discapacidades.
- [x] **Optimización de Rendimiento:** Analizar y mejorar los tiempos de carga, especialmente si el número de sucursales crece.
- [ ] **Preparación para Despliegue:** Configurar el entorno de producción y desplegar la aplicación.

## Fase 5: Inteligencia Artificial y Mejoras Avanzadas

Una vez que la aplicación sea robusta, añadiremos funcionalidades avanzadas.

- [ ] **Autenticación para Administradores:** Proteger la ruta `/admin` para que solo usuarios autorizados puedan realizar cambios.
- [ ] **Asistente de Búsqueda con IA:**
    - Implementar un chatbot o una barra de búsqueda mejorada con Genkit.
    - El asistente ayudará a los usuarios a encontrar la sucursal ideal respondiendo a preguntas en lenguaje natural (ej. "dónde hay un servicio de velación abierto 24h en Guadalajara").
