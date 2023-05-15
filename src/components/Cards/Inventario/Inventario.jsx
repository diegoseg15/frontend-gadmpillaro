import React from "react";

export function Inventario() {
  return (
    <>
      <div class="bg-white shadow rounded-lg p-4 sm:p-6 xl:p-8 ">
        <div class="mb-4 flex items-center justify-between">
          <div>
            <h3 class="text-xl font-bold text-gray-900 mb-2">Inventario</h3>
            <span class="text-base font-normal text-gray-500">
              Producto de mayor costo
            </span>
          </div>
          {/* <div class="flex-shrink-0">
  <a
    href="#"
    class="text-sm font-medium text-cyan-600 hover:bg-gray-100 rounded-lg p-2"
  >
    Ver todo
  </a>
</div> */}
        </div>
        <div class="flex flex-col mt-8">
          <div class="overflow-x-auto rounded-lg">
            <div class="align-middle inline-block min-w-full">
              <div class="shadow overflow-hidden sm:rounded-lg">
                <table class="min-w-full divide-y divide-gray-200">
                  <thead class="bg-gray-50">
                    <tr>
                      <th
                        scope="col"
                        class="p-4 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                      >
                        Producto
                      </th>
                      <th
                        scope="col"
                        class="p-4 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                      >
                        Cantidad
                      </th>
                      <th
                        scope="col"
                        class="p-4 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                      >
                        Costo
                      </th>
                    </tr>
                  </thead>
                  <tbody class="bg-white">
                    <tr>
                      <td class="p-4 whitespace-nowrap text-sm font-normal text-gray-900">
                        <span class="font-semibold">Fresas</span>
                      </td>
                      <td class="p-4 whitespace-nowrap text-sm font-normal text-gray-500">
                        50
                      </td>
                      <td class="p-4 whitespace-nowrap text-sm font-semibold text-gray-900">
                        $230
                      </td>
                    </tr>
                    <tr>
                      <td class="p-4 whitespace-nowrap text-sm font-normal text-gray-900">
                        <span class="font-semibold">Papel</span>
                      </td>
                      <td class="p-4 whitespace-nowrap text-sm font-normal text-gray-500">
                        100
                      </td>
                      <td class="p-4 whitespace-nowrap text-sm font-semibold text-gray-900">
                        $250
                      </td>
                    </tr>
                    <tr>
                      <td class="p-4 whitespace-nowrap text-sm font-normal text-gray-900">
                        <span class="font-semibold">Manzanas</span>
                      </td>
                      <td class="p-4 whitespace-nowrap text-sm font-normal text-gray-500">
                        50
                      </td>
                      <td class="p-4 whitespace-nowrap text-sm font-semibold text-gray-900">
                        $230
                      </td>
                    </tr>
                    <tr>
                      <td class="p-4 whitespace-nowrap text-sm font-normal text-gray-900">
                        <span class="font-semibold">Atún</span>
                      </td>
                      <td class="p-4 whitespace-nowrap text-sm font-normal text-gray-500">
                        80
                      </td>
                      <td class="p-4 whitespace-nowrap text-sm font-semibold text-gray-900">
                        $253
                      </td>
                    </tr>
                    <tr>
                      <td class="p-4 whitespace-nowrap text-sm font-normal text-gray-900">
                        <span class="font-semibold">Desinfectante</span>
                      </td>
                      <td class="p-4 whitespace-nowrap text-sm font-normal text-gray-500">
                        20
                      </td>
                      <td class="p-4 whitespace-nowrap text-sm font-semibold text-gray-900">
                        $50
                      </td>
                    </tr>
                    <tr>
                      <td class="p-4 whitespace-nowrap text-sm font-normal text-gray-900">
                        <span class="font-semibold">Arroz</span>
                      </td>
                      <td class="p-4 whitespace-nowrap text-sm font-normal text-gray-500">
                        1 arroba
                      </td>
                      <td class="p-4 whitespace-nowrap text-sm font-semibold text-gray-900">
                        $23
                      </td>
                    </tr>
                    <tr>
                      <td class="p-4 whitespace-nowrap text-sm font-normal text-gray-900">
                        <span class="font-semibold">Deterjente</span>
                      </td>
                      <td class="p-4 whitespace-nowrap text-sm font-normal text-gray-500">
                        50
                      </td>
                      <td class="p-4 whitespace-nowrap text-sm font-semibold text-gray-900">
                        $230
                      </td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
