import React, { useEffect, useState } from "react";
import { ListaTodosArticulosApi } from "../../../API/Articulos";

export function Indicator() {
  const [articulos, setArticulos] = useState([
    {
      codart: "",
      nomart: "",
      coduni: "",
      codcla: "",
      precio: "",
      ultcos: "",
      cantidad: "",
      existencia: "",
      stkmax: "0",
      stkmin: "",
      codinv: "",
      caducidad: null,
      fecing: "",
    },
  ]);

  useEffect(() => {
    ListaTodosArticulosApi().then((res) => {
      setArticulos(res);
    });
  }, []);

  // Calculate total quantity and percentages for each inventory category
  const inventoryData = articulos.reduce(
    (accumulator, item) => {
      const quantity = item.cantidad * parseFloat(item.existencia);
      accumulator.totalQuantity += quantity;

      if (item.codinv === "BODEGA") {
        accumulator.bodegaQuantity += quantity;
      } else if (item.codinv === "COCINA") {
        accumulator.cocinaQuantity += quantity;
      } else if (item.codinv === "MEDICINA") {
        accumulator.medicinaQuantity += quantity;
      }

      return accumulator;
    },
    {
      totalQuantity: 0,
      bodegaQuantity: 0,
      cocinaQuantity: 0,
      medicinaQuantity: 0,
    }
  );

  // Calculate percentages
  const bodegaPercentage = (
    (inventoryData.bodegaQuantity / inventoryData.totalQuantity) *
    100
  ).toFixed(1);
  const cocinaPercentage = (
    (inventoryData.cocinaQuantity / inventoryData.totalQuantity) *
    100
  ).toFixed(1);
  const medicinaPercentage = (
    (inventoryData.medicinaQuantity / inventoryData.totalQuantity) *
    100
  ).toFixed(1);

  return (
    <div className="mt-4 w-full grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-4">
      <div className="bg-white shadow rounded-lg p-4 sm:p-6 xl:p-8 ">
        <div className="flex items-center">
          <div className="flex-shrink-0">
            <span className="text-2xl sm:text-3xl leading-none font-bold text-gray-900">
              {inventoryData.bodegaQuantity.toLocaleString()}
            </span>
            <h3 className="text-base font-normal text-gray-500">Bodega</h3>
          </div>
          <div className="ml-5 w-0 flex items-center justify-end flex-1 text-green-500 text-base font-bold">
            {bodegaPercentage}%
            <svg
              className="w-5 h-5"
              fill="currentColor"
              viewBox="0 0 20 20"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                fillRule="evenodd"
                d="M5.293 7.707a1 1 0 010-1.414l4-4a1 1 0 011.414 0l4 4a1 1 0 01-1.414 1.414L11 5.414V17a1 1 0 11-2 0V5.414L6.707 7.707a1 1 0 01-1.414 0z"
                clipRule="evenodd"
              />
            </svg>
          </div>
        </div>
      </div>
      <div className="bg-white shadow rounded-lg p-4 sm:p-6 xl:p-8 ">
        <div className="flex items-center">
          <div className="flex-shrink-0">
            <span className="text-2xl sm:text-3xl leading-none font-bold text-gray-900">
              {inventoryData.cocinaQuantity.toLocaleString()}
            </span>
            <h3 className="text-base font-normal text-gray-500">Cocina</h3>
          </div>
          <div className="ml-5 w-0 flex items-center justify-end flex-1 text-green-500 text-base font-bold">
            {cocinaPercentage}%
            <svg
              className="w-5 h-5"
              fill="currentColor"
              viewBox="0 0 20 20"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                fillRule="evenodd"
                d="M5.293 7.707a1 1 0 010-1.414l4-4a1 1 0 011.414 0l4 4a1 1 0 01-1.414 1.414L11 5.414V17a1 1 0 11-2 0V5.414L6.707 7.707a1 1 0 01-1.414 0z"
                clipRule="evenodd"
              />
            </svg>
          </div>
        </div>
      </div>
      <div className="bg-white shadow rounded-lg p-4 sm:p-6 xl:p-8 ">
        <div className="flex items-center">
          <div className="flex-shrink-0">
            <span className="text-2xl sm:text-3xl leading-none font-bold text-gray-900">
              {inventoryData.medicinaQuantity.toLocaleString()}
            </span>
            <h3 className="text-base font-normal text-gray-500">Medicina</h3>
          </div>
          <div className="ml-5 w-0 flex items-center justify-end flex-1 text-red-500 text-base font-bold">
            {medicinaPercentage}%
            <svg
              className="w-5 h-5"
              fill="currentColor"
              viewBox="0 0 20 20"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                fillRule="evenodd"
                d="M5.293 7.707a1 1 0 010-1.414l4-4a1 1 0 011.414 0l4 4a1 1 0 01-1.414 1.414L11 5.414V17a1 1 0 11-2 0V5.414L6.707 7.707a1 1 0 01-1.414 0z"
                clipRule="evenodd"
              />
            </svg>
          </div>
        </div>
      </div>
    </div>
  );
}
