import React from "react";

export function Cantidades() {
  return (
    <>
      {" "}
      <div class="bg-white shadow rounded-lg p-4 sm:p-6 xl:p-8 ">
        <h3 class="text-xl leading-none font-bold text-gray-900 mb-10">
          Cantidades
        </h3>
        <div class="block w-full overflow-x-auto">
          <table class="items-center w-full bg-transparent border-collapse">
            <thead>
              <tr>
                <th class="px-4 bg-gray-50 text-gray-700 align-middle py-3 text-xs font-semibold text-left uppercase border-l-0 border-r-0 whitespace-nowrap">
                  Producto
                </th>
                <th class="px-4 bg-gray-50 text-gray-700 align-middle py-3 text-xs font-semibold text-left uppercase border-l-0 border-r-0 whitespace-nowrap">
                  Cantidad
                </th>
                <th class="px-4 bg-gray-50 text-gray-700 align-middle py-3 text-xs font-semibold text-left uppercase border-l-0 border-r-0 whitespace-nowrap min-w-140-px">
                  Porcentaje
                </th>
              </tr>
            </thead>
            <tbody class="divide-y divide-gray-100">
              <tr class="text-gray-500">
                <th class="border-t-0 px-4 align-middle text-sm font-normal whitespace-nowrap p-4 text-left">
                  Fresas
                </th>
                <td class="border-t-0 px-4 align-middle text-xs font-medium text-gray-900 whitespace-nowrap p-4">
                  10
                </td>
                <td class="border-t-0 px-4 align-middle text-xs whitespace-nowrap p-4">
                  <div class="flex items-center">
                    <span class="mr-2 text-xs font-medium">30%</span>
                    <div class="relative w-full">
                      <div class="w-full bg-gray-200 rounded-sm h-2">
                        <div
                          class="bg-cyan-600 h-2 rounded-sm"
                          style={{ width: "30%" }}
                        ></div>
                      </div>
                    </div>
                  </div>
                </td>
              </tr>
              <tr class="text-gray-500">
                <th class="border-t-0 px-4 align-middle text-sm font-normal whitespace-nowrap p-4 text-left">
                  Aguacate
                </th>
                <td class="border-t-0 px-4 align-middle text-xs font-medium text-gray-900 whitespace-nowrap p-4">
                  4
                </td>
                <td class="border-t-0 px-4 align-middle text-xs whitespace-nowrap p-4">
                  <div class="flex items-center">
                    <span class="mr-2 text-xs font-medium">10%</span>
                    <div class="relative w-full">
                      <div class="w-full bg-gray-200 rounded-sm h-2">
                        <div
                          class="bg-orange-300 h-2 rounded-sm"
                          style={{ width: "10%" }}
                        ></div>
                      </div>
                    </div>
                  </div>
                </td>
              </tr>
              <tr class="text-gray-500">
                <th class="border-t-0 px-4 align-middle text-sm font-normal whitespace-nowrap p-4 text-left">
                  Pollo
                </th>
                <td class="border-t-0 px-4 align-middle text-xs font-medium text-gray-900 whitespace-nowrap p-4">
                  15
                </td>
                <td class="border-t-0 px-4 align-middle text-xs whitespace-nowrap p-4">
                  <div class="flex items-center">
                    <span class="mr-2 text-xs font-medium">80%</span>
                    <div class="relative w-full">
                      <div class="w-full bg-gray-200 rounded-sm h-2">
                        <div
                          class="bg-teal-400 h-2 rounded-sm"
                          style={{ width: "80%" }}
                        ></div>
                      </div>
                    </div>
                  </div>
                </td>
              </tr>
              <tr class="text-gray-500">
                <th class="border-t-0 px-4 align-middle text-sm font-normal whitespace-nowrap p-4 text-left">
                  Atún
                </th>
                <td class="border-t-0 px-4 align-middle text-xs font-medium text-gray-900 whitespace-nowrap p-4">
                  12
                </td>
                <td class="border-t-0 px-4 align-middle text-xs whitespace-nowrap p-4">
                  <div class="flex items-center">
                    <span class="mr-2 text-xs font-medium">12%</span>
                    <div class="relative w-full">
                      <div class="w-full bg-gray-200 rounded-sm h-2">
                        <div
                          class="bg-pink-600 h-2 rounded-sm"
                          style={{ width: "12%" }}
                        ></div>
                      </div>
                    </div>
                  </div>
                </td>
              </tr>
              <tr class="text-gray-500">
                <th class="border-t-0 px-4 align-middle text-sm font-normal whitespace-nowrap p-4 text-left">
                  Azucar
                </th>
                <td class="border-t-0 px-4 align-middle text-xs font-medium text-gray-900 whitespace-nowrap p-4">
                  3 lb
                </td>
                <td class="border-t-0 px-4 align-middle text-xs whitespace-nowrap p-4">
                  <div class="flex items-center">
                    <span class="mr-2 text-xs font-medium">9%</span>
                    <div class="relative w-full">
                      <div class="w-full bg-gray-200 rounded-sm h-2">
                        <div
                          class="bg-indigo-600 h-2 rounded-sm"
                          style={{ width: "9%" }}
                        ></div>
                      </div>
                    </div>
                  </div>
                </td>
              </tr>
              <tr class="text-gray-500">
                <th class="border-t-0 align-middle text-sm font-normal whitespace-nowrap p-4 pb-0 text-left">
                  Deterjente
                </th>
                <td class="border-t-0 align-middle text-xs font-medium text-gray-900 whitespace-nowrap p-4 pb-0">
                  4
                </td>
                <td class="border-t-0 align-middle text-xs whitespace-nowrap p-4 pb-0">
                  <div class="flex items-center">
                    <span class="mr-2 text-xs font-medium">7%</span>
                    <div class="relative w-full">
                      <div class="w-full bg-gray-200 rounded-sm h-2">
                        <div
                          class="bg-purple-500 h-2 rounded-sm"
                          style={{ width: "7%" }}
                        ></div>
                      </div>
                    </div>
                  </div>
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </>
  );
}
