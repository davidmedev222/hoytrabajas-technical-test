![Miniatura de prueba técnica](./app/opengraph-image.png)
# HoyTrabajas - Prueba Técnica

Prueba técnica para **Frontend Web Developer Mid** (+3 años de experiencia) desarrollada para [hoytrabajas.com](https://hoytrabajas.com). Solución completa de e-commerce que implementa navegación de productos, gestión de carrito de compras y filtros por presupuesto con arquitectura escalable.

## 📋 Descripción del proyecto

Esta aplicación demuestra las competencias técnicas requeridas implementando las funcionalidades principales de un sistema de e-commerce:

- **Catálogo de productos**: Listado responsivo con información detallada
- **Carrito de compras**: Agregar/eliminar productos con persistencia en memoria
- **Filtro por presupuesto**: Optimización que maximiza productos dentro del límite presupuestario
- **API REST**: Endpoints para gestión de productos y carrito

## 🚀 Tecnologías implementadas

- **Next.js 15**: Framework full-stack con App Router
- **TypeScript**: Tipado estático para mayor robustez
- **SWR**: Data fetching con cache y revalidación automática
- **Zod**: Validación de esquemas con transformaciones de tipos
- **React Hook Form**: Manejo de formularios con resolvers
- **Tailwind CSS**: Diseño responsivo y componentes UI

## 🏗️ Arquitectura y Decisiones Técnicas

## 🏗️ Arquitectura modular y escalable

### Estructura frontend por dominio
```
modules/
├── products/            # Dominio de productos
│   ├── components/      # UI específica de productos
│   ├── services/        # Lógica de negocio
│   └── hooks/           # Estado y efectos reutilizables
├── cart/                # Dominio del carrito
│   ├── components/      # UI específica del carrito 
│   ├── services/        # Integración con API
│   └── hooks/           # Gestión de estado del carrito
├── budget/              # Dominio de presupuesto
│   ├── components/      # Formularios y secciones
│   └── schemas/         # Validaciones Zod
└── layout/              # Componentes de disposición
    └── header/          # Navegación y estructura
```

### Arquitectura API por recursos
```
app/api/v1/
├── products/            # Recurso productos
│   ├── route.ts        # Endpoints HTTP (GET)
│   ├── product.controller.ts  # Orquestación
│   └── product.service.ts     # Lógica de dominio
└── cart/               # Recurso carrito
    ├── route.ts        # Endpoints HTTP (GET/POST/DELETE)
    ├── cart.controller.ts      # Orquestación
    ├── cart.service.ts         # Lógica de dominio
    └── dtos/           # Validación de entrada
        └── add-to-cart-product.dto.ts
```

### Beneficios de la arquitectura modular

**🔧 Escalabilidad Backend:**
- **Separación por recursos**: Cada entidad (products, cart) tiene su propio módulo independiente
- **Patrón Controller-Service-DTO**: Responsabilidades claras entre orquestación, lógica y validación
- **Manejo de errores unificado**: Sistema centralizado para respuestas consistentes
- **Expansión simple**: Agregar nuevos recursos no afecta los existentes

**⚛️ Escalabilidad Frontend:**
- **Separación por dominio**: Cada funcionalidad encapsulada con sus componentes, servicios y estado
- **Co-localización**: Código relacionado agrupado, reduciendo acoplamiento
- **Reutilización**: Hooks y servicios independientes entre módulos
- **Mantenimiento**: Cambios aislados sin efectos secundarios

**🔄 Integración Bidireccional:**
- **Servicios especializados**: Cliente y servidor con responsabilidades diferenciadas
- **Contratos de API**: DTOs garantizan comunicación consistente
- **Type Safety**: Tipos compartidos entre frontend y backend
- **Testing independiente**: Cada capa testeable por separado

### Patrones de escalabilidad implementados

**1. Separación de Responsabilidades**
Cada módulo frontend contiene solo la lógica de su dominio, mientras que cada recurso API maneja únicamente sus operaciones específicas.

**2. Abstracción de Capas**
Los servicios frontend abstraen las llamadas API, los hooks encapsulan el estado, y los controllers backend coordinan sin lógica de negocio.

**3. Validación Distribuida**
DTOs en el backend y schemas Zod en el frontend garantizan validación consistente en ambas capas.

**4. Estado Descentralizado**
Cada módulo maneja su propio estado con SWR, evitando un store global monolítico y facilitando el debugging.

**5. Gestión de Estado Distribuida**
- SWR para cache y sincronización automática
- In-memory storage para datos temporales
- URL state para filtros persistentes
- React Hook Form para estado de formularios

### Tecnologías y validaciones

**Sistema de Validación Unificado**
- DTOs con Zod para validación de entrada en API
- Schemas con transformaciones automáticas en frontend
- Error handling centralizado para respuestas consistentes
- Tipos TypeScript compartidos entre capas

**Gestión de Estado y Data Fetching**
- SWR para cache inteligente y sincronización automática
- Hooks personalizados para encapsulación de lógica de negocio
- Estado distribuido por módulo evitando store global
- Optimistic updates para mejor experiencia de usuario

## 🎯 Funcionalidades desarrolladas

### Productos
- ✅ Lectura de archivo JSON como base de datos
- ✅ API REST con endpoints GET
- ✅ Componentes responsivos con skeleton loading
- ✅ Filtrado por presupuesto en tiempo real

### Carrito
- ✅ Agregar productos con validación de duplicados
- ✅ Eliminar productos individuales
- ✅ Persistencia en memoria del servidor
- ✅ API REST con endpoints POST/DELETE/GET
- ✅ UI con sheet lateral y notificaciones

### Presupuesto
- ✅ Optimización inteligente para maximizar productos
- ✅ Validación de entrada con Zod
- ✅ Integración con URL state
- ✅ Feedback visual con toast notifications

## 🚀 Instrucciones de ejecución

```bash
# Instalar dependencias
pnpm install

# Ejecutar en desarrollo
pnpm dev

# Construir para producción
pnpm build

# Ejecutar en producción
pnpm start
```

## 📊 Justificación de decisiones

### 1. **Arquitectura Modular por Dominio**
- **Por qué**: Separación clara de responsabilidades por funcionalidad
- **Beneficio**: Escalabilidad, mantenibilidad y testing independiente
- **Estructura**: Cada módulo contiene sus services, hooks, components y types

### 2. **Patrón Controller-Service-DTO**
- **Por qué**: Separación clara de responsabilidades en la API
- **Beneficio**: Código mantenible, testeable y escalable
- **Implementación**: Controllers para orquestación, Services para lógica, DTOs para validación

### 3. **Arquitectura API RESTful**
- **Por qué**: Estándar HTTP con endpoints semánticos y códigos de estado
- **Beneficio**: Interfaz predecible y fácil integración frontend/backend
- **Estructura**: GET/POST/DELETE con respuestas unificadas y manejo de errores

### 4. **SWR para Data Fetching**
- **Por qué**: Cache automático, revalidación inteligente y optimistic updates
- **Beneficio**: Mejor UX con datos siempre actualizados y offline-first
- **Implementación**: Hooks personalizados con configuración optimizada

### 5. **Validación Declarativa con Zod**
- **Por qué**: Type safety en runtime con transformaciones automáticas y DTOs
- **Beneficio**: Prevención de errores, validación consistente y mejor DX
- **Integración**: zodResolver + React Hook Form + API validation

## 🔍 Aspectos destacados

- **Arquitectura Limpia**: Separación clara entre capas y responsabilidades
- **Patrones de Diseño**: Service Layer, Custom Hooks, Component Composition
- **Type Safety**: TypeScript + Zod end-to-end con validaciones en runtime
- **Performance**: Optimizaciones de rendering y data fetching inteligente
- **UX/UI**: Loading states, error handling, responsive design y accessibility
- **Code Organization**: Estructura modular escalable y maintable
- **Best Practices**: JSDoc documentation, error boundaries, testing-ready
