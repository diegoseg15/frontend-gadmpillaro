import React, { useState } from "react";
import { Link } from "react-router-dom";

export function Sidebar() {
  const [openSubMenu, setOpenSubMenu] = useState("");
  function stateSubMenu(event, state) {
    event.preventDefault();
    state === openSubMenu ? setOpenSubMenu("") : setOpenSubMenu(state);
  }
  return (
    <div>
      <aside class="flex flex-row lg:flex-col lg:w-auto w-64 h-screen px-5 py-8 overflow-y-auto border-r rtl:border-r-0 rtl:border-l bg-primary border-gray-700">
        {/* <Link to="/">
          <img class="w-auto h-7" src="" alt="" />
        </Link> */}

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

              <button
                class="flex items-center w-full px-3 py-2 text-gray-600 transition-colors duration-300 rounded-lg dark:text-gray-200 hover:bg-gray-100 dark:hover:bg-gray-800 dark:hover:text-gray-200 hover:text-gray-700"
                onClick={(event) => stateSubMenu(event, "bodega")}
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

                <span class="mx-2 text-sm font-medium">Bodega</span>
              </button>
              <div
                className={
                  openSubMenu === "bodega"
                    ? "bg-slate-600 rounded-lg"
                    : "hidden"
                }
              >
                <Link
                  class="flex items-center pl-8 py-2 text-gray-600 transition-colors duration-300 rounded-lg dark:text-gray-200 hover:bg-gray-100 dark:hover:bg-gray-800 dark:hover:text-gray-200 hover:text-gray-700"
                  to="/inventario-bodega"
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
                  to="/formulario-bodega"
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

                  <span class="mx-2 text-sm font-medium">Nuevo Producto</span>
                </Link>
              </div>

              <button
                className="flex items-center w-full px-3 py-2 text-gray-600 transition-colors duration-300 rounded-lg dark:text-gray-200 hover:bg-gray-100 dark:hover:bg-gray-800 dark:hover:text-gray-200 hover:text-gray-700"
                onClick={(event) => stateSubMenu(event, "cocina")}
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  className="w-5 h-5 fill-white"
                >
                  <path d="M0 0h24v24H0z" fill="none" />
                  <path d="M11 9H9V2H7v7H5V2H3v7c0 2.12 1.66 3.84 3.75 3.97V22h2.5v-9.03C11.34 12.84 13 11.12 13 9V2h-2v7zm5-3v8h2.5v8H21V2c-2.76 0-5 2.24-5 4z" />
                </svg>

                <span class="mx-2 text-sm font-medium">Cocina</span>
              </button>

              <div
                className={
                  openSubMenu === "cocina"
                    ? "bg-slate-600 rounded-lg"
                    : "hidden"
                }
              >
                <Link
                  class="flex items-center pl-8 py-2 text-gray-600 transition-colors duration-300 rounded-lg dark:text-gray-200 hover:bg-gray-100 dark:hover:bg-gray-800 dark:hover:text-gray-200 hover:text-gray-700"
                  to="/inventario-cocina"
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
                  to="/formulario-cocina"
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

                  <span class="mx-2 text-sm font-medium">Nuevo Producto</span>
                </Link>
              </div>

              <button
                class="flex items-center w-full px-3 py-2 text-gray-600 transition-colors duration-300 rounded-lg dark:text-gray-200 hover:bg-gray-100 dark:hover:bg-gray-800 dark:hover:text-gray-200 hover:text-gray-700"
                onClick={(event) => stateSubMenu(event, "medicina")}
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 96 960 960"
                  className="w-5 h-5 fill-white"
                >
                  <path d="M450 819h60V699h120v-60H510V519h-60v120H330v60h120v120ZM140 976q-24 0-42-18t-18-42V396q0-24 18-42t42-18h180V236q0-24 18-42t42-18h200q24 0 42 18t18 42v100h180q24 0 42 18t18 42v520q0 24-18 42t-42 18H140Zm0-60h680V396H140v520Zm240-580h200V236H380v100ZM140 916V396v520Z" />
                </svg>

                <span class="mx-2 text-sm font-medium">Medicinas</span>
              </button>

              <div
                className={
                  openSubMenu === "medicina"
                    ? "bg-slate-600 rounded-lg"
                    : "hidden"
                }
              >
                <Link
                  class="flex items-center pl-8 py-2 text-gray-600 transition-colors duration-300 rounded-lg dark:text-gray-200 hover:bg-gray-100 dark:hover:bg-gray-800 dark:hover:text-gray-200 hover:text-gray-700"
                  to="/inventario-medicinas"
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
                  to="/formulario-medicinas"
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

                  <span class="mx-2 text-sm font-medium">Nuevo Producto</span>
                </Link>
              </div>
            </div>

            <div class="space-y-3 ">
              <label class="px-3 text-xs text-gray-500 uppercase dark:text-gray-400">
                Documentación
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
                  class="w-5 h-5"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    d="M4.098 19.902a3.75 3.75 0 005.304 0l6.401-6.402M6.75 21A3.75 3.75 0 013 17.25V4.125C3 3.504 3.504 3 4.125 3h5.25c.621 0 1.125.504 1.125 1.125v4.072M6.75 21a3.75 3.75 0 003.75-3.75V8.197M6.75 21h13.125c.621 0 1.125-.504 1.125-1.125v-5.25c0-.621-.504-1.125-1.125-1.125h-4.072M10.5 8.197l2.88-2.88c.438-.439 1.15-.439 1.59 0l3.712 3.713c.44.44.44 1.152 0 1.59l-2.879 2.88M6.75 17.25h.008v.008H6.75v-.008z"
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

                <span class="mx-2 text-sm font-medium">Manual</span>
              </Link>
            </div>
          </nav>
        </div>
      </aside>
    </div>
  );
}
