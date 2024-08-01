import React, { useEffect, useState } from "react";
import moment from "moment";
import { ListaTodosArticulosApi } from "../../../API/Articulos";

export function Cantidades() {
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
  const getDaysUntilExpiration = (expirationDate) => {
    const today = moment();
    const expiration = moment(expirationDate);
    return expiration.diff(today, "days");
  };

  const getExpirationPercentage = (expirationDate) => {
    const daysUntilExpiration = getDaysUntilExpiration(expirationDate);
    const expirationPercentage = Math.round((daysUntilExpiration / 30) * 100);
    return expirationPercentage < 0
      ? 0
      : expirationPercentage > 100
      ? 100
      : expirationPercentage;
  };

  const expiringProducts = articulos
    .filter((product) => product.caducidad !== null)
    .sort((a, b) => {
      const aExpiration = moment(a.caducidad);
      const bExpiration = moment(b.caducidad);
      return aExpiration - bExpiration;
    })
    .slice(0, 10);
  return (
    <>
      {" "}
      <div className="bg-white shadow rounded-lg p-4 sm:p-6 xl:p-8 ">
        <h3 className="text-xl leading-none font-bold text-gray-900 mb-10">
          Cantidades
        </h3>
        <div className="block w-full overflow-x-auto">
          <table className="items-center w-full bg-transparent border-collapse">
            <thead>
              <tr>
                <th className="px-4 bg-gray-50 text-gray-700 align-middle py-3 text-xs font-semibold text-left uppercase border-l-0 border-r-0 whitespace-nowrap">
                  Producto
                </th>
                <th className="px-4 bg-gray-50 text-gray-700 align-middle py-3 text-xs font-semibold text-left uppercase border-l-0 border-r-0 whitespace-nowrap">
                  Cantidad
                </th>
                <th className="px-4 bg-gray-50 text-gray-700 align-middle py-3 text-xs font-semibold text-left uppercase border-l-0 border-r-0 whitespace-nowrap min-w-140-px">
                  Porcentaje (tiempo para que se caduque)
                </th>
              </tr>
            </thead>
            <tbody className="divide-y divide-gray-100">
              {expiringProducts.map((product) => (
                <tr key={product.codart} className="text-gray-500">
                  <th className="border-t-0 px-4 align-middle text-sm font-normal whitespace-nowrap p-4 text-left">
                    {product.nomart}
                  </th>
                  <td className="border-t-0 px-4 align-middle text-xs font-medium text-gray-900 whitespace-nowrap p-4">
                    {product.cantidad}
                  </td>
                  <td className="border-t-0 px-4 align-middle text-xs whitespace-nowrap p-4">
                    <div className="flex items-center">
                      <span className="mr-2 text-xs font-medium">
                        {getExpirationPercentage(product.caducidad)}%
                      </span>
                      <div className="relative w-full">
                        <div className="w-full bg-gray-200 rounded-sm h-2">
                          <div
                            className={`${
                              getExpirationPercentage(product.caducidad) > 75
                                ? "bg-cyan-600"
                                : getExpirationPercentage(product.caducidad) <=
                                    75 &&
                                  getExpirationPercentage(product.caducidad) >
                                    60
                                ? "bg-cyan-400"
                                : getExpirationPercentage(product.caducidad) <=
                                    60 &&
                                  getExpirationPercentage(product.caducidad) >
                                    50
                                ? "bg-orange-300"
                                : getExpirationPercentage(product.caducidad) <
                                    50 &&
                                  getExpirationPercentage(product.caducidad) >
                                    40
                                ? "bg-orange-500"
                                : getExpirationPercentage(product.caducidad) <
                                    40 &&
                                  getExpirationPercentage(product.caducidad) >
                                    35
                                ? "bg-orange-700"
                                : getExpirationPercentage(product.caducidad) <
                                  35
                                ? "bg-red-600"
                                : ""
                            } h-2 rounded-sm`}
                            style={{
                              width: `${getExpirationPercentage(
                                product.caducidad
                              )}%`,
                            }}
                          ></div>
                        </div>
                      </div>
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </>
  );
}
