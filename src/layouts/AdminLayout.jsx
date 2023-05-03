import React, { useState } from "react";
import { Sidebar } from "../components/Sidebar"; // importa el componente Sidebar desde "../components/Sidebar"
import { Header } from "../components/Header";
import { Footer } from "../components/Footer/Footer";

// define la función AdminLayout y recibe un objeto props
export function AdminLayout(props) {
  const { children } = props; // extrae la propiedad children del objeto props y la almacena en una variable constante
  const [openMenu, setOpenMenu] = useState(false);
  function stateMenu(event) {
    event.preventDefault();
    setOpenMenu(!openMenu);
  }
  // retorna una estructura de JSX
  return (
    <>
      <div className="flex lg:flex-row overflow-hidden">
        {/* Crea una rejilla con 12 columnas */}
        <div
          className={`lg:block ${
            openMenu ? "absolute" : "hidden"
          } h-screen w-60`}
        >
          {/* Define una columna con un ancho de 2 columnas */}
          <Sidebar />
          {/* Renderiza el componente Sidebar */}
        </div>
        <div className="relative w-full h-screen">
          <div className="absolute top-0 w-full">
            <Header stateMenu={stateMenu} />
          </div>
          <div className="h-screen overflow-y-scroll overflow-hidden mt-16 pb-28">
            {children}
          </div>
          <div className="absolute bottom-0 w-full">
            <Footer />
          </div>
        </div>
        {/* Define otra columna con un ancho de 10 columnas y renderiza el contenido de la propiedad children */}
      </div>
    </>
  );
}
