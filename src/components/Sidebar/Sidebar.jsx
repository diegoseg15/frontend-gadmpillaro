import React, { useState } from "react";
import { Link } from "react-router-dom";
import FotoPerfil from "../../assets/imgs/EscudoPillaro.jpg";

export function Sidebar() {
  const [openSubMenu, setOpenSubMenu] = useState("");
  const TipoInventario = [
    {
      tipo: "bodega",
      codigo: "003",
    },
    {
      tipo: "cocina",
      codigo: "004",
    },
    {
      tipo: "medicina",
      codigo: "005",
    },
  ];
  function stateSubMenu(event, cod) {
    event.preventDefault();
    cod === openSubMenu ? setOpenSubMenu("") : setOpenSubMenu(cod);
  }

  return (
    <div>
      <aside class="flex flex-col lg:w-auto w-52 h-screen px-5 py-8 overflow-y-auto border-r rtl:border-r-0 rtl:border-l bg-primary border-gray-700">
        {/* <Link to="/">
          <img class="w-auto h-7" src="" alt="" />
        </Link> */}
        <div className="flex flex-wrap justify-center">
          <img
            class="w-24 h-24 mb-3 rounded-full shadow-lg"
            src={FotoPerfil}
            alt="imagen de perfil"
          />
          <h5 class="mb-1 text-xl font-medium text-gray-900 dark:text-white">
            Diego Segovia
          </h5>
          <span class="text-sm text-gray-500 dark:text-gray-400">
            Administrador
          </span>
        </div>

        <div class="flex flex-row lg:flex-col justify-between flex-1 mt-6">
          <nav class="-mx-3 space-y-6">
            <div class="space-y-3">
              <Link
                class="flex items-center px-3 py-2 text-gray-600 transition-colors duration-300 rounded-lg dark:text-gray-200 hover:bg-gray-100 dark:hover:bg-gray-800 dark:hover:text-gray-200 hover:text-gray-700"
                to="/"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke-width="1.5"
                  stroke="currentColor"
                  class="w-5 h-5"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    d="M3.75 3v11.25A2.25 2.25 0 006 16.5h2.25M3.75 3h-1.5m1.5 0h16.5m0 0h1.5m-1.5 0v11.25A2.25 2.25 0 0118 16.5h-2.25m-7.5 0h7.5m-7.5 0l-1 3m8.5-3l1 3m0 0l.5 1.5m-.5-1.5h-9.5m0 0l-.5 1.5m.75-9l3-3 2.148 2.148A12.061 12.061 0 0116.5 7.605"
                  />
                </svg>
                <span class="mx-2 text-sm font-medium">Dashboard</span>
              </Link>
            </div>

            <div class="space-y-3">
              <label class="px-3 text-xs text-gray-500 uppercase dark:text-gray-400">
                Inventarios
              </label>
              {TipoInventario.map((invTipo) => (
                <>
                  <button
                    class="flex items-center w-full px-3 py-2 text-gray-600 transition-colors duration-300 rounded-lg dark:text-gray-200 hover:bg-gray-100 dark:hover:bg-gray-800 dark:hover:text-gray-200 hover:text-gray-700"
                    onClick={(event) => stateSubMenu(event, invTipo.codigo)}
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke-width="1.5"
                      stroke="currentColor"
                      class="w-6 h-6"
                    >
                      <path
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        d="M20.25 7.5l-.625 10.632a2.25 2.25 0 01-2.247 2.118H6.622a2.25 2.25 0 01-2.247-2.118L3.75 7.5M10 11.25h4M3.375 7.5h17.25c.621 0 1.125-.504 1.125-1.125v-1.5c0-.621-.504-1.125-1.125-1.125H3.375c-.621 0-1.125.504-1.125 1.125v1.5c0 .621.504 1.125 1.125 1.125z"
                      />
                    </svg>

                    <span class="mx-2 text-sm font-medium">
                      {invTipo.tipo[0].toUpperCase() +
                        invTipo.tipo.substring(1)}
                    </span>
                  </button>
                  <div
                    className={
                      openSubMenu === invTipo.codigo
                        ? "bg-slate-600 rounded-lg"
                        : "hidden"
                    }
                  >
                    <Link
                      class="flex items-center pl-8 py-2 text-gray-600 transition-colors duration-300 rounded-lg dark:text-gray-200 hover:bg-gray-100 dark:hover:bg-gray-800 dark:hover:text-gray-200 hover:text-gray-700"
                      to={`/inventario/${invTipo.tipo.toLowerCase()}`}
                    >
                      <svg
                        class="w-5 h-5"
                        viewBox="0 0 20 20"
                        fill="none"
                        stroke="currentColor"
                        stroke-width="2"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                      >
                        <rect
                          x="3"
                          y="4"
                          width="14"
                          height="14"
                          rx="2"
                          ry="2"
                        ></rect>
                        <line x1="4" y1="8" x2="16" y2="8"></line>
                        <line x1="4" y1="12" x2="16" y2="12"></line>
                        <line x1="8" y1="16" x2="8" y2="12"></line>
                        <line x1="12" y1="16" x2="12" y2="12"></line>
                      </svg>

                      <span class="mx-2 text-sm font-medium">Existencia</span>
                    </Link>
                    <Link
                      class="flex items-center pl-8 py-2 text-gray-600 transition-colors duration-300 rounded-lg dark:text-gray-200 hover:bg-gray-100 dark:hover:bg-gray-800 dark:hover:text-gray-200 hover:text-gray-700"
                      to={`/formulario/${invTipo.tipo.toLowerCase()}`}
                    >
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke-width="1.5"
                        stroke="currentColor"
                        class="w-5 h-5"
                      >
                        <path
                          stroke-linecap="round"
                          stroke-linejoin="round"
                          d="M3.75 12h16.5m-16.5 3.75h16.5M3.75 19.5h16.5M5.625 4.5h12.75a1.875 1.875 0 010 3.75H5.625a1.875 1.875 0 010-3.75z"
                        />
                      </svg>

                      <span class="mx-2 text-sm font-medium">
                        Nuevo Producto
                      </span>
                    </Link>
                    <Link
                      class="flex items-center pl-8 py-2 text-gray-600 transition-colors duration-300 rounded-lg dark:text-gray-200 hover:bg-gray-100 dark:hover:bg-gray-800 dark:hover:text-gray-200 hover:text-gray-700"
                      to={`/exportar_proveedor/${invTipo.tipo.toLowerCase()}`}
                    >
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke-width="1.5"
                        stroke="currentColor"
                        class="w-6 h-6"
                      >
                        <path
                          stroke-linecap="round"
                          stroke-linejoin="round"
                          d="M20.25 7.5l-.625 10.632a2.25 2.25 0 01-2.247 2.118H6.622a2.25 2.25 0 01-2.247-2.118L3.75 7.5m8.25 3v6.75m0 0l-3-3m3 3l3-3M3.375 7.5h17.25c.621 0 1.125-.504 1.125-1.125v-1.5c0-.621-.504-1.125-1.125-1.125H3.375c-.621 0-1.125.504-1.125 1.125v1.5c0 .621.504 1.125 1.125 1.125z"
                        />
                      </svg>

                      <span class="mx-2 text-sm font-medium">Proveedor</span>
                    </Link>
                  </div>
                </>
              ))}
            </div>

            <div class="space-y-3 ">
              <label class="px-3 text-xs text-gray-500 uppercase dark:text-gray-400">
                Varios
              </label>

              <Link
                class="flex items-center px-3 py-2 text-gray-600 transition-colors duration-300 rounded-lg dark:text-gray-200 hover:bg-gray-100 dark:hover:bg-gray-800 dark:hover:text-gray-200 hover:text-gray-700"
                href="#"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke-width="1.5"
                  stroke="currentColor"
                  class="w-6 h-6"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    d="M19.5 14.25v-2.625a3.375 3.375 0 00-3.375-3.375h-1.5A1.125 1.125 0 0113.5 7.125v-1.5a3.375 3.375 0 00-3.375-3.375H8.25m.75 12l3 3m0 0l3-3m-3 3v-6m-1.5-9H5.625c-.621 0-1.125.504-1.125 1.125v17.25c0 .621.504 1.125 1.125 1.125h12.75c.621 0 1.125-.504 1.125-1.125V11.25a9 9 0 00-9-9z"
                  />
                </svg>

                <span class="mx-2 text-sm font-medium">Registros</span>
              </Link>

              <Link
                class="flex items-center px-3 py-2 text-gray-600 transition-colors duration-300 rounded-lg dark:text-gray-200 hover:bg-gray-100 dark:hover:bg-gray-800 dark:hover:text-gray-200 hover:text-gray-700"
                href="#"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke-width="1.5"
                  stroke="currentColor"
                  class="w-6 h-6"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    d="M12 6.042A8.967 8.967 0 006 3.75c-1.052 0-2.062.18-3 .512v14.25A8.987 8.987 0 016 18c2.305 0 4.408.867 6 2.292m0-14.25a8.966 8.966 0 016-2.292c1.052 0 2.062.18 3 .512v14.25A8.987 8.987 0 0018 18a8.967 8.967 0 00-6 2.292m0-14.25v14.25"
                  />
                </svg>

                <span class="mx-2 text-sm font-medium">Manual</span>
              </Link>

              <Link
                class="flex items-center px-3 py-2 text-gray-600 transition-colors duration-300 rounded-lg dark:text-gray-200 hover:bg-gray-100 dark:hover:bg-gray-800 dark:hover:text-gray-200 hover:text-gray-700"
                href="#"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke-width="1.5"
                  stroke="currentColor"
                  class="w-5 h-5"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    d="M10.343 3.94c.09-.542.56-.94 1.11-.94h1.093c.55 0 1.02.398 1.11.94l.149.894c.07.424.384.764.78.93.398.164.855.142 1.205-.108l.737-.527a1.125 1.125 0 011.45.12l.773.774c.39.389.44 1.002.12 1.45l-.527.737c-.25.35-.272.806-.107 1.204.165.397.505.71.93.78l.893.15c.543.09.94.56.94 1.109v1.094c0 .55-.397 1.02-.94 1.11l-.893.149c-.425.07-.765.383-.93.78-.165.398-.143.854.107 1.204l.527.738c.32.447.269 1.06-.12 1.45l-.774.773a1.125 1.125 0 01-1.449.12l-.738-.527c-.35-.25-.806-.272-1.203-.107-.397.165-.71.505-.781.929l-.149.894c-.09.542-.56.94-1.11.94h-1.094c-.55 0-1.019-.398-1.11-.94l-.148-.894c-.071-.424-.384-.764-.781-.93-.398-.164-.854-.142-1.204.108l-.738.527c-.447.32-1.06.269-1.45-.12l-.773-.774a1.125 1.125 0 01-.12-1.45l.527-.737c.25-.35.273-.806.108-1.204-.165-.397-.505-.71-.93-.78l-.894-.15c-.542-.09-.94-.56-.94-1.109v-1.094c0-.55.398-1.02.94-1.11l.894-.149c.424-.07.765-.383.93-.78.165-.398.143-.854-.107-1.204l-.527-.738a1.125 1.125 0 01.12-1.45l.773-.773a1.125 1.125 0 011.45-.12l.737.527c.35.25.807.272 1.204.107.397-.165.71-.505.78-.929l.15-.894z"
                  />
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"
                  />
                </svg>

                <span class="mx-2 text-sm font-medium">Configuración</span>
              </Link>
              <button class="flex w-full items-center px-3 py-2 text-gray-600 transition-colors duration-300 rounded-lg dark:text-gray-200 hover:bg-gray-100 dark:hover:bg-gray-800 dark:hover:text-gray-200 hover:text-gray-700">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  class="w-5 h-5"
                  viewBox="0 0 512 512"
                >
                  <path
                    d="M304 336v40a40 40 0 01-40 40H104a40 40 0 01-40-40V136a40 40 0 0140-40h152c22.09 0 48 17.91 48 40v40M368 336l80-80-80-80M176 256h256"
                    fill="none"
                    stroke="currentColor"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="32"
                  />
                </svg>

                <span class="mx-2 text-sm font-medium">Cerrar Sesión</span>
              </button>
            </div>
          </nav>
        </div>
      </aside>
    </div>
  );
}
