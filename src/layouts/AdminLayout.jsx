import React from "react";
import { Sidebar } from "../components/Sidebar"; // importa el componente Sidebar desde "../components/Sidebar"

// define la función AdminLayout y recibe un objeto props
export function AdminLayout(props) {
  const { children } = props; // extrae la propiedad children del objeto props y la almacena en una variable constante

  // retorna una estructura de JSX
  return (
    <>
      <div className="flex lg:flex-row overflow-hidden">
        {/* Crea una rejilla con 12 columnas */}
        <div className="h-screen lg:w-60">
          {/* Define una columna con un ancho de 2 columnas */}
          <Sidebar /> {/* Renderiza el componente Sidebar */}
        </div>
        <div className="w-full h-screen overflow-y-scroll overflow-hidden">
          {children}
        </div>{" "}
        {/* Define otra columna con un ancho de 10 columnas y renderiza el contenido de la propiedad children */}
      </div>
    </>
  );
}
