import React, { useEffect, useState } from "react";
import FotoPerfil from "../../assets/imgs/EscudoPillaro.png";
import { Menu } from "./Menu/Menu";
import Cookies from "universal-cookie/es6";
import { ListaInventariosApi } from "../../API/Articulos";

// Componente de la barra lateral
export function Sidebar() {
  const cookies = new Cookies();
  const [inventario, setInventario] = useState([]);

  // Datos provenientes de la API
  useEffect(() => {
    ListaInventariosApi().then((res) => {
      setInventario(res);
    });
  }, []);

  const handleLogout = (event) => {
    event.preventDefault();
    // Eliminar las cookies
    cookies.remove("codigo_usuario");
    cookies.remove("codigo_empresa");
    cookies.remove("cargo");
    cookies.remove("user");
    cookies.remove("login");

    // Redireccionar a la página de inicio de sesión u otra página
    window.location.href = "/login";
  };

  const { primerNombre, primerApellido } = obtenerNombreApellido(
    cookies.get("user")
  );

  // Renderizado del componente de la barra lateral
  return (
    <div>
      <aside className="SiderbarScroll flex flex-col lg:w-auto w-52 h-screen px-5 lg:pt-5 lg:pb-0 py-10 border-r rtl:border-r-0 rtl:border-l bg-primary border-gray-700 overflow-y-scroll">
        <div className="flex flex-wrap justify-center">
          {/* Renderización de una imagen de perfil */}
          <img
            className="2xl:w-24 2xl:h-24 w-20 h-20 mb-3 shadow-lg"
            src={FotoPerfil}
            alt="imagen de perfil"
          />
          {/* Renderización del nombre del usuario */}
          <h5 className="mb-1 text-xl font-medium text-white">
            {primerNombre} {primerApellido}
          </h5>
          {/* Renderización del rol del usuario */}
          <span className="capitalize text-sm text-gray-400">
            {cookies.get("cargo").toLowerCase()}
          </span>
        </div>

        <div className="flex flex-row lg:flex-col justify-between flex-1 mt-6">
          {/* Renderización del componente de menú */}
          <Menu TipoInventario={inventario} handleLogout={handleLogout} />
        </div>
      </aside>
    </div>
  );
}

function obtenerNombreApellido(nombreCompleto) {
  const nombresApellidos = nombreCompleto.split(" ");
  let primerNombre = "";
  let primerApellido = "";
  if (nombresApellidos.length === 4) {
    primerNombre = nombresApellidos[0];
    primerApellido = nombresApellidos[2];
  } else if (nombresApellidos.length === 2) {
    primerNombre = nombresApellidos[0];
    primerApellido = nombresApellidos[1];
  }

  return { primerNombre, primerApellido };
}
