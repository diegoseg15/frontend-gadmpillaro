import React from "react";
import { Link } from "react-router-dom";
import { Card } from "../../components/Card";

export function Home() {
  const dataCard = {
    Card1: {
      title: "Titulo1",
      text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse euismod massa vel massa ultricies, quis rutrum massa aliquam. Cras euismod in arcu ac laoreet. Curabitur et justo ut nibh semper facilisis. Praesent faucibus libero at justo varius eleifend. Vestibulum non euismod arcu. Etiam id velit ut purus efficitur ullamcorper.",
    },
    Card2: {
      title: "Titulo2",
      text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse euismod massa vel massa ultricies, quis rutrum massa aliquam. Cras euismod in arcu ac laoreet. Curabitur et justo ut nibh semper facilisis. Praesent faucibus libero at justo varius eleifend. Vestibulum non euismod arcu. Etiam id velit ut purus efficitur ullamcorper.",
    },
    Card3: {
      title: "Titulo3",
      text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse euismod massa vel massa ultricies, quis rutrum massa aliquam. Cras euismod in arcu ac laoreet. Curabitur et justo ut nibh semper facilisis. Praesent faucibus libero at justo varius eleifend. Vestibulum non euismod arcu. Etiam id velit ut purus efficitur ullamcorper.",
    },
  };

  return (
    <div className="h-screen bg-white">
      <div class="pt-6 px-4">
        <div class="w-full grid grid-cols-1 xl:grid-cols-2 2xl:grid-cols-3 gap-4">
          <div class="bg-white shadow rounded-lg p-4 sm:p-6 xl:p-8  2xl:col-span-2">
            <div class="flex items-center justify-between mb-4">
              <div class="flex-shrink-0">
                <span class="text-2xl sm:text-3xl leading-none font-bold text-gray-900">
                  $45,385
                </span>
                <h3 class="text-base font-normal text-gray-500">Egresos</h3>
              </div>
              <div class="flex items-center justify-end flex-1 text-green-500 text-base font-bold">
                12.5%
                <svg
                  class="w-5 h-5"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    fill-rule="evenodd"
                    d="M5.293 7.707a1 1 0 010-1.414l4-4a1 1 0 011.414 0l4 4a1 1 0 01-1.414 1.414L11 5.414V17a1 1 0 11-2 0V5.414L6.707 7.707a1 1 0 01-1.414 0z"
                    clip-rule="evenodd"
                  ></path>
                </svg>
              </div>
            </div>
            <div id="main-chart"></div>
          </div>
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
        </div>
        <div class="mt-4 w-full grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-4">
          <div class="bg-white shadow rounded-lg p-4 sm:p-6 xl:p-8 ">
            <div class="flex items-center">
              <div class="flex-shrink-0">
                <span class="text-2xl sm:text-3xl leading-none font-bold text-gray-900">
                  2,340
                </span>
                <h3 class="text-base font-normal text-gray-500">Bodega</h3>
              </div>
              <div class="ml-5 w-0 flex items-center justify-end flex-1 text-green-500 text-base font-bold">
                14.6%
                <svg
                  class="w-5 h-5"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    fill-rule="evenodd"
                    d="M5.293 7.707a1 1 0 010-1.414l4-4a1 1 0 011.414 0l4 4a1 1 0 01-1.414 1.414L11 5.414V17a1 1 0 11-2 0V5.414L6.707 7.707a1 1 0 01-1.414 0z"
                    clip-rule="evenodd"
                  ></path>
                </svg>
              </div>
            </div>
          </div>
          <div class="bg-white shadow rounded-lg p-4 sm:p-6 xl:p-8 ">
            <div class="flex items-center">
              <div class="flex-shrink-0">
                <span class="text-2xl sm:text-3xl leading-none font-bold text-gray-900">
                  5,355
                </span>
                <h3 class="text-base font-normal text-gray-500">Cocina</h3>
              </div>
              <div class="ml-5 w-0 flex items-center justify-end flex-1 text-green-500 text-base font-bold">
                32.9%
                <svg
                  class="w-5 h-5"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    fill-rule="evenodd"
                    d="M5.293 7.707a1 1 0 010-1.414l4-4a1 1 0 011.414 0l4 4a1 1 0 01-1.414 1.414L11 5.414V17a1 1 0 11-2 0V5.414L6.707 7.707a1 1 0 01-1.414 0z"
                    clip-rule="evenodd"
                  ></path>
                </svg>
              </div>
            </div>
          </div>
          <div class="bg-white shadow rounded-lg p-4 sm:p-6 xl:p-8 ">
            <div class="flex items-center">
              <div class="flex-shrink-0">
                <span class="text-2xl sm:text-3xl leading-none font-bold text-gray-900">
                  385
                </span>
                <h3 class="text-base font-normal text-gray-500">Medicina</h3>
              </div>
              <div class="ml-5 w-0 flex items-center justify-end flex-1 text-red-500 text-base font-bold">
                -2.7%
                <svg
                  class="w-5 h-5"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    fill-rule="evenodd"
                    d="M14.707 12.293a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 111.414-1.414L9 14.586V3a1 1 0 012 0v11.586l2.293-2.293a1 1 0 011.414 0z"
                    clip-rule="evenodd"
                  ></path>
                </svg>
              </div>
            </div>
          </div>
        </div>
        <div class="grid grid-cols-1 2xl:grid-cols-2 xl:gap-4 my-4">
          {/* <div class="bg-white shadow rounded-lg mb-4 p-4 sm:p-6 h-full">
            <div class="flex items-center justify-between mb-4">
              <h3 class="text-xl font-bold leading-none text-gray-900">
                Latest Customers
              </h3>
              <a
                href="#"
                class="text-sm font-medium text-cyan-600 hover:bg-gray-100 rounded-lg inline-flex items-center p-2"
              >
                View all
              </a>
            </div>
            <div class="flow-root">
              <ul role="list" class="divide-y divide-gray-200">
                <li class="py-3 sm:py-4">
                  <div class="flex items-center space-x-4">
                    <div class="flex-shrink-0">
                      <img
                        class="h-8 w-8 rounded-full"
                        src="https://demo.themesberg.com/windster/images/users/neil-sims.png"
                        alt="Neil image"
                      />
                    </div>
                    <div class="flex-1 min-w-0">
                      <p class="text-sm font-medium text-gray-900 truncate">
                        Neil Sims
                      </p>
                      <p class="text-sm text-gray-500 truncate">
                        <a
                          href="/cdn-cgi/l/email-protection"
                          class="__cf_email__"
                          data-cfemail="17727a767e7b57607e7973646372653974787a"
                        >
                          [email&#160;protected]
                        </a>
                      </p>
                    </div>
                    <div class="inline-flex items-center text-base font-semibold text-gray-900">
                      $320
                    </div>
                  </div>
                </li>
                <li class="py-3 sm:py-4">
                  <div class="flex items-center space-x-4">
                    <div class="flex-shrink-0">
                      <img
                        class="h-8 w-8 rounded-full"
                        src="https://demo.themesberg.com/windster/images/users/bonnie-green.png"
                        alt="Neil image"
                      />
                    </div>
                    <div class="flex-1 min-w-0">
                      <p class="text-sm font-medium text-gray-900 truncate">
                        Bonnie Green
                      </p>
                      <p class="text-sm text-gray-500 truncate">
                        <a
                          href="/cdn-cgi/l/email-protection"
                          class="__cf_email__"
                          data-cfemail="d4b1b9b5bdb894a3bdbab0a7a0b1a6fab7bbb9"
                        >
                          [email&#160;protected]
                        </a>
                      </p>
                    </div>
                    <div class="inline-flex items-center text-base font-semibold text-gray-900">
                      $3467
                    </div>
                  </div>
                </li>
                <li class="py-3 sm:py-4">
                  <div class="flex items-center space-x-4">
                    <div class="flex-shrink-0">
                      <img
                        class="h-8 w-8 rounded-full"
                        src="https://demo.themesberg.com/windster/images/users/michael-gough.png"
                        alt="Neil image"
                      />
                    </div>
                    <div class="flex-1 min-w-0">
                      <p class="text-sm font-medium text-gray-900 truncate">
                        Michael Gough
                      </p>
                      <p class="text-sm text-gray-500 truncate">
                        <a
                          href="/cdn-cgi/l/email-protection"
                          class="__cf_email__"
                          data-cfemail="57323a363e3b17203e3933242332257934383a"
                        >
                          [email&#160;protected]
                        </a>
                      </p>
                    </div>
                    <div class="inline-flex items-center text-base font-semibold text-gray-900">
                      $67
                    </div>
                  </div>
                </li>
                <li class="py-3 sm:py-4">
                  <div class="flex items-center space-x-4">
                    <div class="flex-shrink-0">
                      <img
                        class="h-8 w-8 rounded-full"
                        src="https://demo.themesberg.com/windster/images/users/thomas-lean.png"
                        alt="Neil image"
                      />
                    </div>
                    <div class="flex-1 min-w-0">
                      <p class="text-sm font-medium text-gray-900 truncate">
                        Thomes Lean
                      </p>
                      <p class="text-sm text-gray-500 truncate">
                        <a
                          href="/cdn-cgi/l/email-protection"
                          class="__cf_email__"
                          data-cfemail="284d45494144685f41464c5b5c4d5a064b4745"
                        >
                          [email&#160;protected]
                        </a>
                      </p>
                    </div>
                    <div class="inline-flex items-center text-base font-semibold text-gray-900">
                      $2367
                    </div>
                  </div>
                </li>
                <li class="pt-3 sm:pt-4 pb-0">
                  <div class="flex items-center space-x-4">
                    <div class="flex-shrink-0">
                      <img
                        class="h-8 w-8 rounded-full"
                        src="https://demo.themesberg.com/windster/images/users/lana-byrd.png"
                        alt="Neil image"
                      />
                    </div>
                    <div class="flex-1 min-w-0">
                      <p class="text-sm font-medium text-gray-900 truncate">
                        Lana Byrd
                      </p>
                      <p class="text-sm text-gray-500 truncate">
                        <a
                          href="/cdn-cgi/l/email-protection"
                          class="__cf_email__"
                          data-cfemail="a2c7cfc3cbcee2d5cbccc6d1d6c7d08cc1cdcf"
                        >
                          [email&#160;protected]
                        </a>
                      </p>
                    </div>
                    <div class="inline-flex items-center text-base font-semibold text-gray-900">
                      $367
                    </div>
                  </div>
                </li>
              </ul>
            </div>
          </div> */}
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
        </div>
      </div>
    </div>
  );
}
