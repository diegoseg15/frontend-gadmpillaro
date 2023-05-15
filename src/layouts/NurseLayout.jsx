import React, { useState } from "react";
import { Sidebar } from "../components/Sidebar"; // importa el componente Sidebar desde "../components/Sidebar"
import { Header } from "../components/Header";
import { Footer } from "../components/Footer/Footer";

// define la función AdminLayout y recibe un objeto props
export function NurseLayout(props) {
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
        <div className="relative w-full h-screen">
          <div className="absolute top-0 w-full">
            <Header stateMenu={stateMenu} />
          </div>
          <div className="md:h-5/6 sm:h-4/5 h-3/4 w-full overflow-y-scroll overflow-hidden mt-16">
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
