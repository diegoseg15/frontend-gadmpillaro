import React from "react";
import { AdultoMayor } from "../../components/Cards/AdultoMayor/AdultoMayor";

export function Nurse() {
  const AdultoInfo = [
    { id: 1, nombre: "Juan", apellido: "Perez" },
    { id: 2, nombre: "Juan", apellido: "Perez" },
    { id: 3, nombre: "Juan", apellido: "Perez" },
    { id: 4, nombre: "Juan", apellido: "Perez" },
    { id: 5, nombre: "Juan", apellido: "Perez" },
    { id: 6, nombre: "Juan", apellido: "Perez" },
    { id: 7, nombre: "Juan", apellido: "Perez" },
    { id: 8, nombre: "Juan", apellido: "Perez" },
  ];
  return (
    <div className="grid lg:grid-cols-3 sm:grid-cols-2 grid-cols-1 gap-6 lg:px-16 pr-10 pl-4 py-10">
      {AdultoInfo.map((data, index) => (
        <div key={index}>
          <AdultoMayor
            nombre={data.nombre}
            apellido={data.apellido}
            codigo={data.id}
          />
        </div>
      ))}
    </div>
  );
}
