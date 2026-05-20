# ReservaYa 🍽️

Sistema de reservas online para restaurantes. Permite a los usuarios buscar restaurantes, ver detalles, hacer reservas y recibir confirmación. Incluye un panel administrativo para la gestión de reservas.

**Desarrollado por:** KevinnC18 · leonardeco

---

## Tecnologías

| Tecnología | Versión | Uso |
|---|---|---|
| Angular | 21.1.2 | Framework principal |
| TypeScript | 5.x | Lenguaje |
| Tailwind CSS | 4.x | Estilos |
| Vitest | 4.x | Tests unitarios |
| Angular Router | 21.x | Navegación SPA |

---

## Arquitectura del proyecto

```
ReservaYa/
├── src/
│   ├── app/
│   │   ├── data/                          # Capa de datos
│   │   │   ├── restaurantes.interface.ts  # Interface RestaurantesData
│   │   │   └── restaurantes.data.ts       # Data estática de restaurantes
│   │   │
│   │   ├── features/                      # Módulos por funcionalidad
│   │   │   ├── home/                      # Página de inicio
│   │   │   │   ├── components/
│   │   │   │   │   ├── hero/              # Banner principal
│   │   │   │   │   ├── restaurantes/      # Lista de restaurantes
│   │   │   │   │   ├── info/              # Sección informativa
│   │   │   │   │   └── footer/            # Pie de página
│   │   │   │   └── pages/home-pages/      # Página contenedora
│   │   │   │
│   │   │   ├── busqueda/                  # Búsqueda de restaurantes
│   │   │   │   └── busqueda.ts / .html
│   │   │   │
│   │   │   ├── detalle/                   # Detalle del restaurante
│   │   │   │   └── detalle.ts / .html
│   │   │   │
│   │   │   ├── reserva/                   # Formulario de reserva
│   │   │   │   ├── reserva.ts
│   │   │   │   ├── reserva.html
│   │   │   │   └── reserva.spec.ts
│   │   │   │
│   │   │   ├── confirmacion/              # Confirmación de reserva
│   │   │   │   ├── confirmacion.ts
│   │   │   │   ├── confirmacion.html
│   │   │   │   └── confirmacion.spec.ts
│   │   │   │
│   │   │   └── admin/                     # Panel administrativo
│   │   │       ├── admin.ts
│   │   │       ├── admin.html
│   │   │       └── admin.spec.ts
│   │   │
│   │   ├── layout/                        # Componentes de layout
│   │   │   └── navbar/                    # Barra de navegación
│   │   │
│   │   ├── app.routes.ts                  # Definición de rutas
│   │   ├── app.config.ts                  # Configuración global
│   │   ├── app.ts                         # Componente raíz
│   │   └── app.html                       # Template raíz
│   │
│   ├── index.html                         # HTML de entrada
│   ├── main.ts                            # Bootstrap de la app
│   └── styles.css                         # Estilos globales + variables CSS
│
├── angular.json                           # Configuración Angular CLI
├── package.json                           # Dependencias
└── tsconfig.json                          # Configuración TypeScript
```

---

## Flujo de navegación

```
/inicio
   │
   ▼
/busqueda  ──────────────────────────────────────────────────────┐
   │                                                             │
   ▼                                                             │
/detalle                                                         │
   │                                                             │
   ▼                                                             │
/reserva  ──── (completar formulario) ────►  /confirmacion       │
                                                  │              │
                                                  ▼              │
                                              /inicio ◄──────────┘

/admin  (acceso independiente — panel del restaurante)
```

---

## Rutas

| Ruta | Componente | Descripción |
|---|---|---|
| `/inicio` | `HomePages` | Página principal con lista de restaurantes |
| `/busqueda` | `Busqueda` | Búsqueda y filtrado de restaurantes |
| `/detalle` | `Detalle` | Información completa del restaurante |
| `/reserva` | `Reserva` | Formulario para completar la reserva |
| `/confirmacion` | `Confirmacion` | Pantalla de reserva confirmada |
| `/admin` | `Admin` | Panel de gestión para el restaurante |

Todas las rutas usan **lazy loading** para optimizar el tiempo de carga inicial.

---

## Paleta de colores

| Variable | Color | Uso |
|---|---|---|
| `--color-primary` | `#E8602A` | Naranja — botones, acentos, logo |
| `--color-secondary` | `#AD461D` | Naranja oscuro — hover |
| `--color-background` | `#F8F7F4` | Fondo crema — páginas |
| `--color-surface` | `#0E0E0E` | Negro — sidebar admin, navbar |
| `--color-dark` | `#333333` | Texto principal |
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

### Reserva (`/reserva`)
- Resumen de la reserva (restaurante, fecha, hora, personas, dirección)
- Formulario: nombre, teléfono, correo, notas especiales
- Checkbox de aceptación de términos
- Botón "Confirmar reserva" (activo solo si acepta términos)

### Confirmación (`/confirmacion`)
- Ícono de éxito
- Detalles completos de la reserva
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

El proyecto cuenta con **36 tests unitarios** usando Vitest + Angular Testing Library.

```bash
npm test
```

```
Test Files  12 passed (12)
Tests       36 passed (36)
```

| Componente | Tests | Cobertura |
|---|---|---|
| Reserva | 7 | Formulario, validación de términos, navegación |
| Confirmacion | 7 | Código de reserva, datos, navegación |
| Admin | 11 | Secciones, estados, gráfico, estadísticas |
| Otros | 11 | Home, Busqueda, Detalle, Navbar, App |

---

## Repositorios

- **Repositorio principal:** [KevinnC18/ReservaYa](https://github.com/KevinnC18/ReservaYa)
- **Fork:** [leonardeco/ReservaYa](https://github.com/leonardeco/ReservaYa)
