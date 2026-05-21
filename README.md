# ReservaYa 🍽️

Sistema de reservas online para restaurantes. Permite a los usuarios buscar restaurantes, ver detalles, hacer reservas y recibir confirmación. Incluye un panel administrativo para la gestión de reservas.

**Desarrollado por:** Kevin Correal · Leonardo Guzmán · Saleth Ibarra

---

## Tecnologías

| Tecnología | Versión | Uso |
|---|---|---|
| Angular | 21.x | Framework principal (standalone + lazy loading) |
| TypeScript | 5.9.x | Lenguaje |
| Tailwind CSS | 4.x | Estilos (`@import "tailwindcss"` en `styles.css`) |
| Vitest | 4.x | Tests unitarios |
| Angular Router | 21.x | Navegación SPA |
| Angular Signals | — | Estado compartido de reservas (`ReservationService`) |
| @angular/animations | 21.x | Transiciones de ruta y barra de progreso |

---

## Arquitectura del proyecto

La aplicación combina **componentes standalone** (cargados con lazy loading en las rutas) y **módulos NgModule** para agrupar el layout y la página de inicio, importados desde el componente raíz.

```
ReservaYa/
├── public/                                # Assets estáticos (servidos en build)
│   └── Logo.ico
│
├── src/
│   ├── app/
│   │   ├── data/                          # Capa de datos
│   │   │   ├── restaurantes.interface.ts  # Interface RestaurantesData
│   │   │   └── restaurantes.data.ts       # Catálogo estático de restaurantes
│   │   │
│   │   ├── services/                      # Servicios globales
│   │   │   └── reservation.service.ts     # Estado de reserva (signals + computed)
│   │   │
│   │   ├── features/                      # Funcionalidades por ruta
│   │   │   ├── home/
│   │   │   │   ├── home.module.ts         # Agrupa componentes del inicio
│   │   │   │   ├── components/
│   │   │   │   │   ├── hero/              # Banner principal
│   │   │   │   │   ├── restaurantes/      # Lista de restaurantes
│   │   │   │   │   ├── info/              # Sección informativa
│   │   │   │   │   └── footer/            # Pie de página
│   │   │   │   └── pages/home-pages/      # Página contenedora (/inicio)
│   │   │   │
│   │   │   ├── busqueda/                  # Búsqueda y filtrado
│   │   │   ├── detalle/                   # Ficha del restaurante + selector de reserva
│   │   │   ├── reserva/                   # Formulario de datos del cliente
│   │   │   ├── confirmacion/              # Resumen y código de reserva
│   │   │   └── admin/                     # Panel administrativo
│   │   │
│   │   ├── layout/
│   │   │   ├── layout.module.ts           # Exporta la barra de navegación
│   │   │   └── navbar/
│   │   │
│   │   ├── app.routes.ts                  # Rutas con loadComponent (lazy)
│   │   ├── app.config.ts                  # Router, animaciones, scroll restoration
│   │   ├── app.ts                         # Raíz: navbar, outlet, barra de carga
│   │   ├── app.html
│   │   └── app.spec.ts
│   │
│   ├── index.html
│   ├── main.ts                            # Bootstrap (`bootstrapApplication`)
│   └── styles.css                         # Tailwind + variables de tema
│
├── angular.json                           # Configuración Angular CLI
├── package.json                           # Dependencias
├── tsconfig.json                          # Configuración TypeScript
├── tsconfig.app.json
├── tsconfig.spec.json
├── .postcssrc.json                        # Plugin PostCSS de Tailwind
└── .editorconfig
```

Cada feature incluye su par `.ts` / `.html` y, en la mayoría de casos, un `.spec.ts` para pruebas unitarias.

---

## Estado compartido

`ReservationService` (`providedIn: 'root'`) centraliza el flujo de reserva con **Angular signals**:

| Signal / computed | Descripción |
|---|---|
| `restauranteId`, `fecha`, `hora`, `personas` | Datos elegidos en detalle |
| `nombre`, `telefono`, `correo`, `notas` | Datos del formulario en `/reserva` |
| `codigoReserva` | Código generado al confirmar (`RY-YYYYMMDD-XXXX`) |
| `fechaFormateada`, `fechaCorta` | Fechas legibles en español (locale `es-CO`) |

Los componentes `Detalle`, `Reserva` y `Confirmacion` inyectan este servicio para leer y escribir el estado entre rutas.

---

## Flujo de navegación

```
/  →  redirige a /inicio
/inicio
   │
   ▼
/busqueda
   │
   ▼
/detalle  o  /detalle/:nombre
   │
   ▼
/reserva  ──── (formulario válido) ────►  /confirmacion
                                              │
                                              ▼
                                          /inicio

/admin  (acceso independiente — panel del restaurante)
```

El componente raíz muestra siempre el **navbar** y una **barra de progreso** superior durante las transiciones de ruta.

---

## Rutas

| Ruta | Componente | Descripción |
|---|---|---|
| `/` | — | Redirección a `/inicio` |
| `/inicio` | `HomePages` | Página principal (hero, restaurantes, info, footer) |
| `/busqueda` | `Busqueda` | Búsqueda y filtrado de restaurantes |
| `/detalle` | `Detalle` | Detalle del restaurante (sin parámetro en URL) |
| `/detalle/:nombre` | `Detalle` | Detalle identificado por nombre del restaurante |
| `/reserva` | `Reserva` | Formulario para completar la reserva |
| `/confirmacion` | `Confirmacion` | Pantalla de reserva confirmada |
| `/admin` | `Admin` | Panel de gestión para el restaurante |

Las rutas de features usan **`loadComponent`** (lazy loading) para reducir el bundle inicial.

---

## Paleta de colores

Definida en `src/styles.css` con `@theme` de Tailwind v4:

| Variable | Color | Uso |
|---|---|---|
| `--color-primary` | `#E8602A` | Naranja — botones, acentos, logo |
| `--color-secondary` | `#AD461D` | Naranja oscuro — hover |
| `--color-background` | `#F8F7F4` | Fondo crema — páginas |
| `--color-surface` | `#0E0E0E` | Negro — sidebar admin, navbar |
| `--color-dark` | `#333333` | Texto principal |
| `--color-light` | `#FFFFFF` | Texto claro - Superficies claras |
| `--color-gray` | `#A9A9A9` | Texto secundario |
| `--color-success` | `#4CAF50` | Verde — estado confirmado |
| `--color-error` | `#F44336` | Rojo — estado cancelado |

---

## Modelo de datos

```typescript
interface RestaurantesData {
  id: number;
  name: string;
  description: string;
  location: string;
  image: string;       // URL imagen del restaurante
  imageFood: string;   // URL imagen de comida
  rating: number;      // 0 - 5
  value: string;       // '$' | '$$' | '$$$'
  category: string;    // Italiana, Mariscos, etc.
  schedule: string;
  phone: string;
  page: string;
  popular: boolean;
}
```

---

## Vistas principales

### Detalle (`/detalle`, `/detalle/:nombre`)
- Información del restaurante desde `RESTAURANTES`
- Selector de fecha, hora y número de personas
- Persistencia en `ReservationService` al continuar a reserva

### Reserva (`/reserva`)
- Resumen de la reserva (restaurante, fecha, hora, personas, dirección)
- Formulario: nombre, teléfono, correo, notas especiales
- Checkbox de aceptación de términos
- Botón "Confirmar reserva" (activo solo si `formValido`)

### Confirmación (`/confirmacion`)
- Ícono de éxito y detalles desde `ReservationService`
- Código único de reserva formato `RY-YYYYMMDD-XXXX`
- Botones: agregar al calendario / volver al inicio

### Admin (`/admin`)
- **Sidebar:** Reservas, Mesas, Horarios, Estadísticas, Reseñas, Perfil
- **Stats cards:** Reservas hoy, Mesas disponibles, % Ocupación
- **Tabla de reservas:** con estados Confirmada / Pendiente / Cancelada
- **Gráfico de barras:** Ocupación semanal

---

## Instalación y uso

```bash
# Clonar el repositorio
git clone https://github.com/KevinnC18/ReservaYa.git
cd ReservaYa

# Instalar dependencias
npm install --legacy-peer-deps

# Servidor de desarrollo
npm start
# → http://localhost:4200

# Ejecutar tests
npm test

# Build de producción
npm run build
```

---

## Tests

Pruebas unitarias con **Vitest** y el builder `@angular/build:unit-test`. Hay **12 archivos** `.spec.ts` distribuidos en features, layout y raíz.

```bash
npm test
```

| Área | Archivos spec | Enfoque |
|---|---|---|
| Home | `hero`, `restaurantes`, `info`, `footer`, `home-pages` | Componentes de inicio |
| Flujo reserva | `reserva`, `confirmacion`, `detalle` | Formulario, confirmación, detalle |
| Admin | `admin` | Panel, estados, estadísticas |
| Layout / app | `navbar`, `app` | Navegación y bootstrap |
| Búsqueda | `busqueda` | Listado y filtros |

---

## Licencia

Este proyecto es de carácter académico y pertenece al grupo de:
Kevin Correal, Leonardo Guzmán y Saleth Ibarra.

## Repositorios

- **Repositorio principal:** [KevinnC18/ReservaYa](https://github.com/KevinnC18/ReservaYa)
- **Fork:** [leonardeco/ReservaYa](https://github.com/leonardeco/ReservaYa)
