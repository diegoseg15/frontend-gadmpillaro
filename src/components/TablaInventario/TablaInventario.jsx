import React from "react";

export function TablaInventario(props) {
  const { head, body } = props;
  return (
    <div className="overflow-x-auto shadow-md rounded-lg">
      <table className="w-full text-sm text-left text-gray-400">
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
          {body.map((index, databody) => (
            <tr key={index} className="border border-gray-700 rounded-lg">
              <th
                scope="row"
                className="px-6 py-4 font-medium whitespace-nowrap text-white bg-gray-800"
              >
                Apple MacBook Pro 17'
              </th>
              <td className="px-6 py-4">Silver</td>
              <td className="px-6 py-4 bg-gray-800">Laptop</td>
              <td className="px-6 py-4">$2999</td>
              <td className="px-6 py-4 bg-gray-800">Laptop</td>
              <td className="px-6 py-4">$2999</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
