import { useEffect, type ReactNode } from "react";
import { Link, Navigate, Route, Routes } from "react-router-dom";
import { PROFILES } from "./app/profiles";
import { Header } from "./components/layout/Header";
import { ErrorState } from "./components/ui/ErrorState";
import { buttonStyles } from "./components/ui/buttonStyles";

const HOME = PROFILES[0].path;

// h1 de la página; el título de la pestaña lo acompaña para que la URL compartida se reconozca.
function Page({ title, children }: { title: string; children: ReactNode }) {
  useEffect(() => {
    document.title = `${title} · TalentoJoven CR`;
  }, [title]);
  return (
    <>
      <h1 className="mb-5 text-2xl font-extrabold tracking-tight sm:text-3xl">{title}</h1>
      {children}
    </>
  );
}

export default function App() {
  return (
    <>
      <Header />
      <main className="mx-auto max-w-7xl px-4 py-6">
        <Routes>
          <Route index element={<Navigate to={HOME} replace />} />
          {PROFILES.map(({ path, title, View }) => (
            <Route key={path} path={path} element={<Page title={title}><View /></Page>} />
          ))}
          <Route
            path="*"
            element={
              <Page title="Página no encontrada">
                <ErrorState
                  title="Esta dirección no existe"
                  message="Revisa el enlace o vuelve a uno de los perfiles del prototipo."
                  action={<Link to={HOME} className={buttonStyles()}>Ir a Estudiante</Link>}
                />
              </Page>
            }
          />
        </Routes>
      </main>
    </>
  );
}
