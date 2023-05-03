import React from "react";

export function TablaInventario(props) {
  const { head, bodyt } = props;
  return (
    <div className="overflow-x-auto shadow-md rounded-lg">
      <table className="w-full text-sm text-left">
        <thead className="text-xs uppercase text-gray-400">
          <tr>
            {head.map((datahead) => (
              <th
                key={datahead.title}
                scope="col"
                className="px-6 py-3 bg-gray-800"
              >
                {datahead.title}
              </th>
            ))}
          </tr>
        </thead>
        <tbody>
          {bodyt.map((databody) => (
            <tr className="border border-gray-700 rounded-lg">
              <th
                scope="row"
                className="px-6 py-4 font-medium whitespace-nowrap text-white bg-gray-800"
              >
                {databody.descripcion}
              </th>
              <td className="px-6 py-4">{databody.especificaciones}</td>
              <td className="px-6 py-4 bg-gray-800 text-white">
                {databody.tipo}
              </td>
              <td className="px-6 py-4">{databody.cantidad}</td>
              <td className="px-6 py-4 bg-gray-800 text-white">
                {databody.consumoM}
              </td>
              <td className="px-6 py-4">${databody.suma}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
