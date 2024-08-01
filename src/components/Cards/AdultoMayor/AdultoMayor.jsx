import React, { useState } from "react";

export function AdultoMayor(props) {
  const { codigo, nombre, apellido } = props;
  const [openSettings, setOpenSettings] = useState("");

  // Función para manejar el estado de configuración
  function stateSettings(event, cod) {
    event.preventDefault();
    cod === openSettings ? setOpenSettings("") : setOpenSettings(cod);
  }

  return (
    <>
      {/* Contenedor del perfil del adulto mayor */}
      <div className="m-3 w-full max-w-sm border rounded-xl shadow bg-primary border-gray-700">
        <div className="flex relative justify-end px-4 pt-4">
          {/* Botón de configuración */}
          <button
            id="dropdownButton"
            data-dropdown-toggle="dropdown"
            className="inline-block text-gray-500 dark:text-gray-400 hover:bg-gray-700 focus:ring-4 focus:outline-none focus:ring-gray-700 rounded-lg text-sm p-1.5"
            type="button"
            onClick={(event) => stateSettings(event, codigo)}
          >
            <span className="sr-only">Open dropdown</span>
            {/* Icono de configuración */}
            <svg
              className="w-6 h-6"
              aria-hidden="true"
              fill="currentColor"
              viewBox="0 0 20 20"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path d="M6 10a2 2 0 11-4 0 2 2 0 014 0zM12 10a2 2 0 11-4 0 2 2 0 014 0zM16 12a2 2 0 100-4 2 2 0 000 4z" />
            </svg>
          </button>
          {/* Menú desplegable de configuración */}
          <div
            id="dropdown"
            className={
              openSettings === codigo
                ? "absolute text-base list-none divide-y divide-gray-100 rounded-lg shadow w-44 bg-gray-500"
                : "hidden"
            }
          >
            <ul className="py-2">
              <li>
                <a
                  href="#"
                  className="block px-4 py-2 text-sm hover:bg-gray-600 text-gray-200 hover:text-white"
                >
                  Editar
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="block px-4 py-2 text-sm hover:bg-gray-600 text-gray-200 hover:text-white"
                >
                  Eliminar
                </a>
              </li>
            </ul>
          </div>
        </div>
        <div className="flex flex-col items-center pb-10">
          {/* Imagen del perfil del adulto mayor */}
          <img
            className="w-32 h-32 mb-3 rounded-full shadow-lg"
            src="/docs/images/people/profile-picture-3.jpg"
            alt="Bonnie image"
          />
          {/* Nombre del adulto mayor */}
          <h5 className="mb-1 text-xl font-medium text-white">
            {`${nombre} ${apellido}`}
          </h5>
          {/* Información adicional del adulto mayor */}
          <span className="text-sm text-gray-400">Adulto Mayor</span>
          <span className="text-sm text-gray-400">Adulto Mayor</span>
          <span className="text-sm text-gray-400">Adulto Mayor</span>
          <span className="text-sm text-gray-400">Adulto Mayor</span>
          {/* Botón para ver la receta */}
          <div className="flex mt-4 space-x-3 md:mt-6">
            <a
              href="#"
              className="inline-flex items-center px-6 py-2 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
            >
              Ver la receta
            </a>
          </div>
        </div>
      </div>
    </>
  );
}
