import React from "react";

export function Inventario(props) {
  const { data, setIdAtidulos } = props;
  const sortedData = data.sort((a, b) => b.ultcos - a.ultcos);
  const top5 = sortedData.slice(0, 5);
  return (
    <>
      <div className="bg-white shadow rounded-lg p-4 sm:p-6 xl:p-8 ">
        <div className="mb-4 flex items-center justify-between">
          <div>
            <h3 className="text-xl font-bold text-gray-900 mb-2">Inventario</h3>
            <span className="text-base font-normal text-gray-500">
              5 productos de mayor costo
            </span>
          </div>
          <div className="flex-shrink-0">
            <button
              className="text-sm font-medium text-cyan-600 hover:bg-gray-100 rounded-lg p-2"
              onClick={(event) => {
                event.preventDefault();
                setIdAtidulos("BODEGA");
              }}
            >
              Bodega
            </button>
            <button
              className="text-sm font-medium text-cyan-600 hover:bg-gray-100 rounded-lg p-2"
              onClick={(event) => {
                event.preventDefault();
                setIdAtidulos("COCINA");
              }}
            >
              Cocina
            </button>
            <button
              className="text-sm font-medium text-cyan-600 hover:bg-gray-100 rounded-lg p-2"
              onClick={(event) => {
                event.preventDefault();
                setIdAtidulos("MEDICINA");
              }}
            >
              Medicina
            </button>
          </div>
        </div>
        <div className="flex flex-col mt-8">
          <div className="overflow-x-auto rounded-lg">
            <div className="align-middle inline-block min-w-full">
              <div className="shadow overflow-hidden sm:rounded-lg">
                <table className="min-w-full divide-y divide-gray-200">
                  <thead className="bg-gray-50">
                    <tr>
                      <th
                        scope="col"
                        className="p-4 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                      >
                        Producto
                      </th>
                      <th
                        scope="col"
                        className="p-4 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                      >
                        Cantidad
                      </th>
                      <th
                        scope="col"
                        className="p-4 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                      >
                        Costo
                      </th>
                    </tr>
                  </thead>
                  <tbody className="bg-white">
                    {top5.map((item) => (
                      <tr key={item.codart}>
                        <td className="p-4 whitespace-nowrap text-sm font-normal text-gray-900">
                          <span className="font-semibold">{item.nomart}</span>
                        </td>
                        <td className="p-4 whitespace-nowrap text-sm font-normal text-gray-500">
                          {item.cantidad}
                        </td>
                        <td className="p-4 whitespace-nowrap text-sm font-semibold text-gray-900">
                          ${item.ultcos}
                        </td>
                      </tr>
                    ))}
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
