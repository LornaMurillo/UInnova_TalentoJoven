import { useState } from "react";
import type { Role } from "./types";
import { Header } from "./components/layout/Header";
import { StudentView } from "./features/student/StudentView";
import { CompanyView } from "./features/company/CompanyView";
import { GovernmentView } from "./features/government/GovernmentView";

const TITLES: Record<Role, string> = {
  student: "Tu primer empleo empieza aquí",
  company: "Contrata talento joven con incentivos",
  government: "Impacto nacional del programa",
};

export default function App() {
  const [role, setRole] = useState<Role>("student");
  return (
    <>
      <Header role={role} onChange={setRole} />
      <main className="mx-auto max-w-7xl px-4 py-6">
        <h1 className="mb-5 text-2xl font-extrabold tracking-tight sm:text-3xl">{TITLES[role]}</h1>
        {role === "student" && <StudentView />}
        {role === "company" && <CompanyView />}
        {role === "government" && <GovernmentView />}
      </main>
    </>
  );
}
