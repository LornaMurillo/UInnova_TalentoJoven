# TalentoJoven CR

Prototipo interactivo de una propuesta de innovación pública que conecta a jóvenes estudiantes y graduados de universidades costarricenses y del INA con empresas privadas, con un esquema de incentivos para las empresas:

1. **Meses 1-3:** contrato a prueba acompañado (subsidio decreciente y coaching).
2. **Meses 6 y 12:** bono de permanencia verificado con la CCSS.
3. **Largo plazo:** Sello Empleador Joven con puntos preferenciales en compras públicas (SICOP).

> Todos los datos son **ficticios** y viven en `src/data`, incluidas las empresas (la vista Empresa usa `DEMO_COMPANY` de `jobs.ts`). La barra superior lo indica con la etiqueta "Prototipo · datos simulados". No hay backend ni integraciones reales con eMatrícula, CCSS o SICOP.

## Requisitos

- Node.js 18 o superior
- npm 9 o superior

## Cómo correrlo

```bash
npm install
npm run dev
```

Abre la dirección que muestra la terminal (normalmente http://localhost:5173) y usa el selector de perfil de la barra superior.

| Comando | Qué hace |
|---|---|
| `npm run dev` | Servidor de desarrollo con recarga en vivo |
| `npm run typecheck` | Revisa los tipos de TypeScript |
| `npm run build` | Revisa tipos y genera la versión de producción en `dist/` |
| `npm run preview` | Sirve la versión de producción para probarla |

## Las tres vistas

| Perfil | Contenido |
|---|---|
| **Estudiante** | Conexión con eMatrícula y avance de carrera, puntaje de perfil, CV estándar Harvard en modal (se imprime o guarda como PDF), feed de vacantes con filtros y métricas de impacto, cursos gratuitos de Cisco, Google, AWS y Microsoft |
| **Empresa** | Vacantes y postulaciones, Sello Empleador Joven con puntos SICOP, línea de tiempo del incentivo, red de convenios |
| **Universidad / MTSS** | KPIs globales, contrataciones por institución y área (Recharts), convenios y verificación estudiantil |

## Estructura

```
src/
├── components/
│   ├── layout/        Header con selector de perfil
│   └── ui/            Button, Card, Chip, Modal, SectionTitle (reutilizables)
├── features/          Un módulo por perfil, con sus componentes y hooks
│   ├── student/       StudentView, JobCard, CvModal, useJobFilters
│   ├── company/       CompanyView, HiringTimeline
│   └── government/    GovernmentView, KpiCard, HiresChart
├── data/              Datos de ejemplo (jobs, courses, stats)
├── types/             Tipos de TypeScript compartidos
├── lib/               Utilidades (cn)
├── App.tsx            Selección de perfil
└── main.tsx           Punto de entrada
```

## Buenas prácticas aplicadas

- **Organización por feature:** cada perfil es independiente y fácil de asignar a una persona del equipo.
- **Componentes UI pequeños y reutilizables** en `components/ui`, con el estilo centralizado.
- **Datos separados de la interfaz:** para conectar una API real basta con reemplazar lo que exporta `src/data`.
- **TypeScript estricto** y tipos compartidos en `src/types`.
- **Lógica en hooks:** los filtros de vacantes viven en `useJobFilters`.
- **Diseño con tokens** en `tailwind.config.js` (colores `royal`, `teal`, `line`, `soft`, etc.). Cambia ahí la paleta, no en cada componente.
- **Accesibilidad básica:** filtros con etiqueta, gráficos con tabla de datos para lectores de pantalla, modal que retiene el foco, cierra con Escape y devuelve el foco al botón que lo abrió, `aria-pressed` en filtros, `thead` en las tablas y foco visible.

## Personalizar

- **Colores y tipografías:** `tailwind.config.js` e `index.html`.
- **Vacantes, cursos, cifras y convenios:** archivos de `src/data`.
- **Textos del CV:** `src/features/student/CvModal.tsx`.

## Capturas para las láminas

Abre la app a pantalla completa (F11), elige cada perfil y captura. En Estudiante, abre también el modal del CV.

## Limitaciones y próximos pasos

- Las postulaciones y los cursos iniciados no se guardan al recargar.
- Sin autenticación real: el selector de perfil es una simulación.
- Siguientes pasos sugeridos: enrutamiento por perfil (React Router), API real o mock con MSW, pruebas con Vitest y Testing Library, y ESLint y Prettier.

## Tecnologías

React 18, TypeScript, Vite, Tailwind CSS 3, Lucide React y Recharts.
