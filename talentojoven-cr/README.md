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

Abre la dirección que muestra la terminal (normalmente http://localhost:5173) y usa el selector de perfil de la barra superior. Cada perfil tiene su propia dirección: `/estudiante`, `/empresa` e `/institucion`; cualquier otra muestra una página 404.

| Comando | Qué hace |
|---|---|
| `npm run dev` | Servidor de desarrollo con recarga en vivo |
| `npm run typecheck` | Revisa los tipos de TypeScript |
| `npm run build` | Revisa tipos y genera la versión de producción en `dist/` |
| `npm run preview` | Sirve la versión de producción para probarla |
| `npm run lint` | Revisa el código con ESLint |
| `npm test` | Corre las pruebas (Vitest, Testing Library y jest-axe) |

La integración continua (`.github/workflows/ci.yml`) corre `npm ci`, typecheck, lint, pruebas y build en cada PR.

## Publicar en Vercel

La configuración vive en `vercel.json`: instala con `npm ci --ignore-scripts`, corre `npm run build` y publica `dist/`. Además:

- Envía cualquier ruta que no sea un archivo a `index.html`, para que `/empresa` o `/institucion` abran bien al recargar o compartir el enlace.
- Guarda en caché por un año los archivos de `assets/`, que llevan un hash en el nombre.
- Agrega encabezados de seguridad básicos.

Para crear el proyecto:

1. En Vercel, **Add New → Project** e importa el repositorio de GitHub.
2. En **Root Directory** elige `talentojoven-cr`. Vercel detecta Vite y toma el resto de `vercel.json`.
3. En **Node.js Version** usa 22.x, la misma que la CI.
4. Pulsa **Deploy**. Cada push a `main` publica a producción y cada PR recibe su propia vista previa.

No hace falta configurar variables de entorno: el prototipo no tiene backend.

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
│   └── ui/            Button, Card, Chip, Modal, Select, StatusBadge, ChartCard, EmptyState, ErrorState…
├── features/          Un módulo por perfil, con sus componentes y hooks
│   ├── student/       StudentView, JobCard, CvModal, useJobFilters
│   ├── company/       CompanyView, HiringTimeline
│   └── government/    GovernmentView, KpiCard
├── app/               Perfiles y rutas (profiles.ts)
├── data/              Datos de ejemplo y cifras del programa (jobs, courses, stats, student, program)
├── types/             Tipos de TypeScript compartidos
├── lib/               Utilidades (cn, format)
├── test/              Configuración y pruebas de accesibilidad
├── App.tsx            Rutas por perfil y página 404
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

Abre la app a pantalla completa (F11), entra a `/estudiante`, `/empresa` e `/institucion` y captura cada una. En Estudiante, abre también el modal del CV.

## Limitaciones y próximos pasos

- Las postulaciones y los cursos iniciados no se guardan al recargar.
- Sin autenticación real: el selector de perfil es una simulación.
- Siguientes pasos sugeridos: API real o mock con MSW, y división del bundle (Recharts) para bajar de 500 kB.

## Tecnologías

React 18, TypeScript, Vite, Tailwind CSS 3, React Router, Radix Dialog, Lucide React y Recharts. Pruebas con Vitest.
