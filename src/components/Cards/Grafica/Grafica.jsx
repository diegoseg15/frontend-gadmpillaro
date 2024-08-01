import React from "react";
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
} from "recharts";

export function Grafica(props) {
  const { data, idArticulos } = props;
  return (
    <>
      <div className="bg-white shadow rounded-lg p-4 sm:p-6 xl:p-8  2xl:col-span-2">
        <div className="flex items-center justify-between mb-4">
          <div className="flex-shrink-0">
            <span className="capitalize ext-2xl sm:text-3xl leading-none font-bold text-gray-900">
              {idArticulos.toLowerCase()}
            </span>
            <h3 className="text-base font-normal text-gray-500">Egresos</h3>
          </div>
        </div>
        <div id="main-chart" className="pt-10">
          <LineChart width={500} height={300} data={data}>
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis dataKey="codart" />
            <YAxis />
            <Tooltip />
            <Legend />
            <Line type="monotone" dataKey="ultcos" stroke="#8884d8" />
          </LineChart>
        </div>
      </div>
    </>
  );
}
