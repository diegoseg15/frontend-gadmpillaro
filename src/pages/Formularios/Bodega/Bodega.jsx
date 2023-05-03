import React from "react";

export default function Bodega() {
  return (
    <div>
      <div class="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4 flex flex-col my-2">
        <div class="-mx-3 md:flex mb-6">
          <div class="md:w-full px-3">
            <label
              class="block uppercase tracking-wide text-grey-darker text-xs font-bold mb-2"
              for="grid-descripcion"
            >
              Descripción
            </label>
            <input
              class="appearance-none block w-full text-gray-800 border border-gray-400 rounded-lg py-3 px-7 mb-3"
              id="grid-descripcion"
              placeholder="Almohadas"
            />
          </div>
        </div>
        <div class="-mx-3 md:flex mb-6">
          <div class="md:w-full px-3">
            <label
              class="block uppercase tracking-wide text-grey-darker text-xs font-bold mb-2"
              for="grid-descripcion"
            >
              Especificaciones
            </label>
            <input
              class="appearance-none block w-full text-gray-800 border border-gray-400 rounded-lg py-3 px-7 mb-3"
              id="grid-descripcion"
              placeholder="Color Negro"
            />
          </div>
        </div>
        <div class="-mx-3 md:flex mb-2">
          <div class="relative md:w-1/2 px-3 mb-6 md:mb-0">
            <label
              class="block uppercase tracking-wide text-grey-darker text-xs font-bold mb-2"
              for="grid-unidad"
            >
              Unidad
            </label>
            <select
              class="appearance-none block w-full text-gray-800 border border-gray-400 rounded-lg py-3 px-7 mb-3"
              id="grid-unidad"
              type="text"
            >
              <option>Seleccionar la Unidades</option>
              <option>Unidad</option>
              <option>Kilogramos</option>
              <option>Libras</option>
            </select>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke-width="1.5"
              stroke="currentColor"
              class="absolute right-7 bottom-4 lg:bottom-7 w-4 h-4"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                d="M19.5 8.25l-7.5 7.5-7.5-7.5"
              />
            </svg>
          </div>

          <div class="md:w-1/2 px-3">
            <label
              class="block uppercase tracking-wide text-grey-darker text-xs font-bold mb-2"
              for="grid-number"
            >
              Consumo Máximo
            </label>
            <input
              class="appearance-none block w-full text-gray-800 border border-gray-400 rounded-lg py-3 px-7 mb-3"
              id="grid-number"
              type="number"
            />
          </div>

          <div class="md:w-1/2 px-3">
            <label
              class="block uppercase tracking-wide text-grey-darker text-xs font-bold mb-2"
              for="grid-text"
            >
              Proveedor
            </label>
            <input
              class="appearance-none block w-full text-gray-800 border border-gray-400 rounded-lg py-3 px-7 mb-3"
              id="grid-number"
              type="text"
            />
          </div>
        </div>
        <div class="-mx-3 md:flex mb-2">
          <div class="md:w-1/2 px-3">
            <label
              class="block uppercase tracking-wide text-grey-darker text-xs font-bold mb-2"
              for="grid-text"
            >
              Costo
            </label>
            <input
              class="appearance-none block w-full text-gray-800 border border-gray-400 rounded-lg py-3 px-7 mb-3"
              id="grid-number"
              type="text"
            />
          </div>
          <div class="md:w-1/2 px-3">
            <label
              class="block uppercase tracking-wide text-grey-darker text-xs font-bold mb-2"
              for="grid-number"
            >
              Fecha de Caducidad
            </label>
            <input
              class="appearance-none block w-full text-gray-800 border border-gray-400 rounded-lg py-3 px-7 mb-3"
              id="grid-number"
              type="date"
            />
          </div>
        </div>
      </div>
    </div>
  );
}
