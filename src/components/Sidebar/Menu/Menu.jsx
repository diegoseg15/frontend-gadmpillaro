import React, { useState } from "react";
import { Link } from "react-router-dom";

export function Menu(props) {
  const { TipoInventario, handleLogout } = props;
  const [openSubMenu, setOpenSubMenu] = useState("");
  function stateSubMenu(event, cod) {
    event.preventDefault();
    cod === openSubMenu ? setOpenSubMenu("") : setOpenSubMenu(cod);
  }

  function stateSubMenuUser(event) {
    event.preventDefault();
    "usuario" === openSubMenu ? setOpenSubMenu("") : setOpenSubMenu("usuario");
  }
  return (
    <>
      <nav className="-mx-3 space-y-4">
        <div>
          <Link
            className="flex items-center px-3 py-2 text-gray-600 transition-colors duration-300 rounded-lg dark:text-gray-200 hover:bg-gray-100 dark:hover:bg-gray-800 dark:hover:text-gray-200 hover:text-gray-700"
            to="/"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth="1.5"
              stroke="currentColor"
              className="w-5 h-5"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M3.75 3v11.25A2.25 2.25 0 006 16.5h2.25M3.75 3h-1.5m1.5 0h16.5m0 0h1.5m-1.5 0v11.25A2.25 2.25 0 0118 16.5h-2.25m-7.5 0h7.5m-7.5 0l-1 3m8.5-3l1 3m0 0l.5 1.5m-.5-1.5h-9.5m0 0l-.5 1.5m.75-9l3-3 2.148 2.148A12.061 12.061 0 0116.5 7.605"
              />
            </svg>
            <span className="mx-2 text-sm font-medium">Dashboard</span>
          </Link>
        </div>

        <div className="space-y-3">
          <label className="px-3 text-xs text-gray-500 uppercase dark:text-gray-400">
            Inventarios
          </label>
          {TipoInventario.map((invTipo) => (
            <span key={invTipo.codinv}>
              <button
                className="flex items-center w-full px-3 py-2 text-gray-600 transition-colors duration-300 rounded-lg dark:text-gray-200 hover:bg-gray-100 dark:hover:bg-gray-800 dark:hover:text-gray-200 hover:text-gray-700"
                onClick={(event) => stateSubMenu(event, invTipo.codinv)}
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth="1.5"
                  stroke="currentColor"
                  className="w-6 h-6"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M20.25 7.5l-.625 10.632a2.25 2.25 0 01-2.247 2.118H6.622a2.25 2.25 0 01-2.247-2.118L3.75 7.5M10 11.25h4M3.375 7.5h17.25c.621 0 1.125-.504 1.125-1.125v-1.5c0-.621-.504-1.125-1.125-1.125H3.375c-.621 0-1.125.504-1.125 1.125v1.5c0 .621.504 1.125 1.125 1.125z"
                  />
                </svg>

                <span className="mx-2 text-sm font-medium capitalize">
                  {invTipo.nominv.toLowerCase()}
                </span>
              </button>
              <div
                className={
                  openSubMenu === invTipo.codinv
                    ? "bg-slate-600 rounded-lg"
                    : "hidden"
                }
              >
                <Link
                  className="flex items-center pl-8 py-2 text-gray-600 transition-colors duration-300 rounded-lg dark:text-gray-200 hover:bg-gray-100 dark:hover:bg-gray-800 dark:hover:text-gray-200 hover:text-gray-700"
                  to={`/inventario/${invTipo.codinv}`}
                >
                  <svg
                    className="w-5 h-5"
                    viewBox="0 0 20 20"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
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

                  <span className="mx-2 text-sm font-medium">Existencia</span>
                </Link>
                <Link
                  className="flex items-center pl-8 py-2 text-gray-600 transition-colors duration-300 rounded-lg dark:text-gray-200 hover:bg-gray-100 dark:hover:bg-gray-800 dark:hover:text-gray-200 hover:text-gray-700"
                  to={`/formulario/${invTipo.codinv}`}
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth="1.5"
                    stroke="currentColor"
                    className="w-5 h-5"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M3.75 12h16.5m-16.5 3.75h16.5M3.75 19.5h16.5M5.625 4.5h12.75a1.875 1.875 0 010 3.75H5.625a1.875 1.875 0 010-3.75z"
                    />
                  </svg>

                  <span className="mx-2 text-sm font-medium">
                    Nuevo Producto
                  </span>
                </Link>
                <Link
                  className="flex items-center pl-8 py-2 text-gray-600 transition-colors duration-300 rounded-lg dark:text-gray-200 hover:bg-gray-100 dark:hover:bg-gray-800 dark:hover:text-gray-200 hover:text-gray-700"
                  to={`/exportar_data/${invTipo.codinv}`}
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="w-5 h-5"
                    viewBox="0 0 24 24"
                    strokeWidth="2"
                    stroke="currentColor"
                    fill="none"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <path stroke="none" d="M0 0h24v24H0z" fill="none"></path>
                    <path d="M4 6c0 1.657 3.582 3 8 3s8 -1.343 8 -3s-3.582 -3 -8 -3s-8 1.343 -8 3"></path>
                    <path d="M4 6v6c0 1.657 3.582 3 8 3c1.118 0 2.183 -.086 3.15 -.241"></path>
                    <path d="M20 12v-6"></path>
                    <path d="M4 12v6c0 1.657 3.582 3 8 3c.157 0 .312 -.002 .466 -.005"></path>
                    <path d="M16 19h6"></path>
                    <path d="M19 16l3 3l-3 3"></path>
                  </svg>
                  <span className="mx-2 text-sm font-medium">Exportar</span>
                </Link>
                <Link
                  className="flex items-center pl-8 py-2 text-gray-600 transition-colors duration-300 rounded-lg dark:text-gray-200 hover:bg-gray-100 dark:hover:bg-gray-800 dark:hover:text-gray-200 hover:text-gray-700"
                  to={`/exportar_proveedor/${invTipo.codinv}`}
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="w-5 h-5"
                    viewBox="0 0 24 24"
                    strokeWidth="2"
                    stroke="currentColor"
                    fill="none"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <path stroke="none" d="M0 0h24v24H0z" fill="none"></path>
                    <path d="M7 17m-2 0a2 2 0 1 0 4 0a2 2 0 1 0 -4 0"></path>
                    <path d="M17 17m-2 0a2 2 0 1 0 4 0a2 2 0 1 0 -4 0"></path>
                    <path d="M5 17h-2v-11a1 1 0 0 1 1 -1h9v12m-4 0h6m4 0h2v-6h-8m0 -5h5l3 5"></path>
                  </svg>
                  <span className="mx-2 text-sm font-medium">
                    Pedir al Proveedor
                  </span>
                </Link>
              </div>
            </span>
          ))}
        </div>

        <div className="space-y-3 ">
          <label className="px-3 text-xs text-gray-500 uppercase dark:text-gray-400">
            Varios
          </label>
          {/* <Link
            className="flex items-center w-full px-3 py-2 text-gray-600 transition-colors duration-300 rounded-lg dark:text-gray-200 hover:bg-gray-100 dark:hover:bg-gray-800 dark:hover:text-gray-200 hover:text-gray-700"
            to={"/enfermería"}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="w-6 h-6"
              viewBox="0 0 24 24"
              strokeWidth="2"
              stroke="currentColor"
              fill="none"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <path stroke="none" d="M0 0h24v24H0z" fill="none" />
              <path d="M12 6c2.941 0 5.685 .847 8 2.31l-2 9.69h-12l-2 -9.691a14.93 14.93 0 0 1 8 -2.309z" />
              <path d="M10 12h4" />
              <path d="M12 10v4" />
            </svg>

            <span className="mx-2 text-sm font-medium">Enfermería</span>
          </Link> */}
          <button
            className="flex items-center w-full px-3 py-2 text-gray-600 transition-colors duration-300 rounded-lg dark:text-gray-200 hover:bg-gray-100 dark:hover:bg-gray-800 dark:hover:text-gray-200 hover:text-gray-700"
            onClick={(event) => stateSubMenuUser(event)}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth="1.5"
              stroke="currentColor"
              className="w-6 h-6"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M15 19.128a9.38 9.38 0 002.625.372 9.337 9.337 0 004.121-.952 4.125 4.125 0 00-7.533-2.493M15 19.128v-.003c0-1.113-.285-2.16-.786-3.07M15 19.128v.106A12.318 12.318 0 018.624 21c-2.331 0-4.512-.645-6.374-1.766l-.001-.109a6.375 6.375 0 0111.964-3.07M12 6.375a3.375 3.375 0 11-6.75 0 3.375 3.375 0 016.75 0zm8.25 2.25a2.625 2.625 0 11-5.25 0 2.625 2.625 0 015.25 0z"
              />
            </svg>

            <span className="mx-2 text-sm font-medium">Usuarios</span>
          </button>
          <div
            className={
              openSubMenu === "usuario" ? "bg-slate-600 rounded-lg" : "hidden"
            }
          >
            <Link
              className="flex items-center pl-8 py-2 text-gray-600 transition-colors duration-300 rounded-lg dark:text-gray-200 hover:bg-gray-100 dark:hover:bg-gray-800 dark:hover:text-gray-200 hover:text-gray-700"
              to={`/usuarios`}
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 96 960 960"
                className="w-6 h-6 fill-gray-200"
              >
                <path d="M640 653q-51 0-84.5-33.5T522 535q0-51 33.5-84.5T640 417q51 0 84.5 33.5T758 535q0 51-33.5 84.5T640 653ZM400 896v-66q0-18.864 9-35.932T433 770q45-32 98.5-47.5T640 707q55 0 108 17t99 46q14 10 23.5 25.5T880 830v66H400Zm55-71v11h370v-11q-39-26-90-42t-95-16q-44 0-95.5 16T455 825Zm185-232q26 0 42-16t16-42q0-26-16-42t-42-16q-26 0-42 16t-16 42q0 26 16 42t42 16Zm0-58Zm0 301ZM120 646v-60h306v60H120Zm0-330v-60h473v60H120Zm349 165H120v-60h380q-11 13-18.727 27.921Q473.545 463.841 469 481Z" />
              </svg>

              <span className="mx-2 text-sm font-medium">Lista Usuarios</span>
            </Link>
            <Link
              className="flex items-center pl-8 py-2 text-gray-600 transition-colors duration-300 rounded-lg dark:text-gray-200 hover:bg-gray-100 dark:hover:bg-gray-800 dark:hover:text-gray-200 hover:text-gray-700"
              to={`/nuevo-usuario`}
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth="1.5"
                stroke="currentColor"
                className="w-6 h-6"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M19 7.5v3m0 0v3m0-3h3m-3 0h-3m-2.25-4.125a3.375 3.375 0 11-6.75 0 3.375 3.375 0 016.75 0zM4 19.235v-.11a6.375 6.375 0 0112.75 0v.109A12.318 12.318 0 0110.374 21c-2.331 0-4.512-.645-6.374-1.766z"
                />
              </svg>

              <span className="mx-2 text-sm font-medium">Agregar Usuario</span>
            </Link>
          </div>
          {/* <Link
        className="flex items-center px-3 py-2 text-gray-600 transition-colors duration-300 rounded-lg dark:text-gray-200 hover:bg-gray-100 dark:hover:bg-gray-800 dark:hover:text-gray-200 hover:text-gray-700"
        href="#"
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth="1.5"
          stroke="currentColor"
          className="w-6 h-6"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M19.5 14.25v-2.625a3.375 3.375 0 00-3.375-3.375h-1.5A1.125 1.125 0 0113.5 7.125v-1.5a3.375 3.375 0 00-3.375-3.375H8.25m.75 12l3 3m0 0l3-3m-3 3v-6m-1.5-9H5.625c-.621 0-1.125.504-1.125 1.125v17.25c0 .621.504 1.125 1.125 1.125h12.75c.621 0 1.125-.504 1.125-1.125V11.25a9 9 0 00-9-9z"
          />
        </svg>

        <span className="mx-2 text-sm font-medium">Registros</span>
      </Link> */}

          <Link
            className="flex items-center px-3 py-2 text-gray-600 transition-colors duration-300 rounded-lg dark:text-gray-200 hover:bg-gray-100 dark:hover:bg-gray-800 dark:hover:text-gray-200 hover:text-gray-700"
            href="#"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth="1.5"
              stroke="currentColor"
              className="w-6 h-6"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M12 6.042A8.967 8.967 0 006 3.75c-1.052 0-2.062.18-3 .512v14.25A8.987 8.987 0 016 18c2.305 0 4.408.867 6 2.292m0-14.25a8.966 8.966 0 016-2.292c1.052 0 2.062.18 3 .512v14.25A8.987 8.987 0 0018 18a8.967 8.967 0 00-6 2.292m0-14.25v14.25"
              />
            </svg>

            <span className="mx-2 text-sm font-medium">Manual</span>
          </Link>

          {/* <Link
            className="flex items-center px-3 py-2 text-gray-600 transition-colors duration-300 rounded-lg dark:text-gray-200 hover:bg-gray-100 dark:hover:bg-gray-800 dark:hover:text-gray-200 hover:text-gray-700"
            to="/configuracion"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth="1.5"
              stroke="currentColor"
              className="w-5 h-5"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M10.343 3.94c.09-.542.56-.94 1.11-.94h1.093c.55 0 1.02.398 1.11.94l.149.894c.07.424.384.764.78.93.398.164.855.142 1.205-.108l.737-.527a1.125 1.125 0 011.45.12l.773.774c.39.389.44 1.002.12 1.45l-.527.737c-.25.35-.272.806-.107 1.204.165.397.505.71.93.78l.893.15c.543.09.94.56.94 1.109v1.094c0 .55-.397 1.02-.94 1.11l-.893.149c-.425.07-.765.383-.93.78-.165.398-.143.854.107 1.204l.527.738c.32.447.269 1.06-.12 1.45l-.774.773a1.125 1.125 0 01-1.449.12l-.738-.527c-.35-.25-.806-.272-1.203-.107-.397.165-.71.505-.781.929l-.149.894c-.09.542-.56.94-1.11.94h-1.094c-.55 0-1.019-.398-1.11-.94l-.148-.894c-.071-.424-.384-.764-.781-.93-.398-.164-.854-.142-1.204.108l-.738.527c-.447.32-1.06.269-1.45-.12l-.773-.774a1.125 1.125 0 01-.12-1.45l.527-.737c.25-.35.273-.806.108-1.204-.165-.397-.505-.71-.93-.78l-.894-.15c-.542-.09-.94-.56-.94-1.109v-1.094c0-.55.398-1.02.94-1.11l.894-.149c.424-.07.765-.383.93-.78.165-.398.143-.854-.107-1.204l-.527-.738a1.125 1.125 0 01.12-1.45l.773-.773a1.125 1.125 0 011.45-.12l.737.527c.35.25.807.272 1.204.107.397-.165.71-.505.78-.929l.15-.894z"
              />
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"
              />
            </svg>

            <span className="mx-2 text-sm font-medium">Configuración</span>
          </Link> */}
          <button
            className="flex w-full items-center px-3 py-2 text-gray-600 transition-colors duration-300 rounded-lg dark:text-gray-200 hover:bg-gray-100 dark:hover:bg-gray-800 dark:hover:text-gray-200 hover:text-gray-700"
            onClick={(event) => handleLogout(event)}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="w-5 h-5"
              viewBox="0 0 512 512"
            >
              <path
                d="M304 336v40a40 40 0 01-40 40H104a40 40 0 01-40-40V136a40 40 0 0140-40h152c22.09 0 48 17.91 48 40v40M368 336l80-80-80-80M176 256h256"
                fill="none"
                stroke="currentColor"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="32"
              />
            </svg>

            <span className="mx-2 text-sm font-medium">Cerrar Sesión</span>
          </button>
        </div>
      </nav>
    </>
  );
}
