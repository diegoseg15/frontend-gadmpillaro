import React, { useState } from "react";
import { Link } from "react-router-dom";
import { addArticuloApi } from "../../API/Articulos";
import Cookies from "universal-cookie/es6";

export function TablaInventario(props) {
  const { id, head, bodyt, setTipoToast, setDataMesaje, tipoToast } = props;
  const cookies = new Cookies();
  const [consumo, setConsumo] = useState();

  const [selectedDate, setSelectedDate] = useState("");
  const currentDate = new Date();
  const currentMonth = currentDate.getMonth() + 1;

  const [startDate, setStartDate] = useState("");
  const [endDate, setEndDate] = useState("");

  const handleStartDateChange = (e) => {
    setStartDate(e.target.value);
  };

  const handleEndDateChange = (e) => {
    setEndDate(e.target.value);
  };

  const filterData = () => {
    let filteredData = [...bodyt];

    // Si se seleccionó una fecha de inicio, filtrar por fechas mayores o iguales
    if (startDate) {
      filteredData = filteredData.filter(
        (item) => new Date(item.fecing) >= new Date(startDate)
      );
    }

    // Si se seleccionó una fecha de fin, filtrar por fechas menores o iguales
    if (endDate) {
      filteredData = filteredData.filter(
        (item) => new Date(item.fecing) <= new Date(endDate)
      );
    }

    return filteredData;
  };

  const filteredData = filterData();
  const existenciaActual = (event, data) => {
    event.preventDefault();
    if (!consumo) {
      setDataMesaje("Llene cuanto es la cantidad a retirar.");
      setTipoToast(2);
    } else if (consumo > data.stkmax) {
      setDataMesaje("El valor no debe sobrepasar el consumo máximo.");
      setTipoToast(2);
    } else {
      data.existencia = Number(data.existencia) - Number(consumo);

      const dataInventario = {
        cod_emp: cookies.get("codigo_empresa"),
        cargo_usu: cookies.get("cargo"),
        cod_art: data.codart,
        nom_art: data.nomart,
        cod_uni: data.coduni,
        precio: data.precio,
        ultcos: data.ultcos,
        existencia: data.existencia,
        cantidad: data.cantidad,
        stkmax: data.stkmax,
        stkmin: data.stkmin,
        cod_cla: data.codcla,
        cod_inv: data.codinv,
      };
      console.log(dataInventario);
      addArticuloApi(dataInventario)
        .then((response) => {
          console.log(response.mensaje);
          setDataMesaje(response.mensaje);
          setTipoToast(
            response.mensaje === "Error al crear la clase del artículo." ||
              response.mensaje === "Error al crear el artículo."
              ? 3
              : response.mensaje === "No tiene permisos de Administrador"
              ? 3
              : response.mensaje === "Datos necesarios"
              ? 2
              : response.mensaje === "Artículo actualizado"
              ? 1
              : response.mensaje === "Artículo creado correctamente."
              ? 1
              : 3
          );
          if (
            response.mensaje === "Artículo actualizado" ||
            response.mensaje === "Artículo creado correctamente" ||
            tipoToast === 1
          ) {
            window.location.reload();
            // console.log(response);
          }
        })
        .catch((err) => {
          setDataMesaje("Error en el servidor", err);
          setTipoToast(3);
        });
    }
  };

  return (
    <div className="overflow-x-auto shadow-md rounded-lg">
      <label htmlFor="startDate">Fecha de inicio:</label>
      <input
        className="bg-gray-50 border border-gray-500 focus:ring-blue-500 focus:border-blue-500 text-gray-900 text-sm rounded-lg w-40 p-2.5 mx-5 my-3 placeholder:text-gray-400"
        type="date"
        id="startDate"
        value={startDate}
        onChange={handleStartDateChange}
      />

      <label htmlFor="endDate">Fecha de fin:</label>
      <input
        className="bg-gray-50 border border-gray-500 focus:ring-blue-500 focus:border-blue-500 text-gray-900 text-sm rounded-lg w-40 p-2.5 mx-5 my-3 placeholder:text-gray-400"
        type="date"
        id="endDate"
        value={endDate}
        onChange={handleEndDateChange}
      />

      <table className="w-full text-sm text-left">
        <thead className="text-xs uppercase text-gray-400">
          <tr>
            {head.map((datahead) => (
              <th
                key={datahead.title}
                scope="col"
                className="px-1 py-3 bg-gray-800 text-center"
              >
                {datahead.title}
              </th>
            ))}
            <th scope="col" className="px-6 py-3 bg-gray-800 text-center">
              Edición
            </th>
          </tr>
        </thead>
        <tbody>
          {filteredData.map((databody) => (
            <tr className="border border-gray-700 rounded-lg">
              <th
                scope="row"
                className="px-2 py-4 font-medium whitespace-nowrap text-white bg-gray-800 capitalize"
              >
                {databody.nomart.toLowerCase()}
              </th>
              <td className="px-2 py-4 bg-gray-800 text-white">
                {databody.codcla}
              </td>
              <td className="px-2 py-4">
                {databody.existencia}{" "}
                <text className="lowercase">{databody.coduni}</text>
              </td>
              <td className="px-2 py-4 bg-gray-800 text-white">
                {databody.stkmax}
              </td>
              <td className="px-2 py-4">{databody.stkmin}</td>
              <td className="px-2 py-4 bg-gray-800 text-white">
                ${databody.precio}
              </td>
              <td className="px-2 py-4">${databody.ultcos}</td>
              <td className="flex flex-col items-center px-2 py-4 bg-gray-800 text-white">
                <Link
                  className="font-medium hover:underline"
                  to={`/formulario/${id}/${databody.codart}`}
                  title="Editar Area"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth="1.5"
                    stroke="currentColor"
                    className="w-6 h-6"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M16.862 4.487l1.687-1.688a1.875 1.875 0 112.652 2.652L10.582 16.07a4.5 4.5 0 01-1.897 1.13L6 18l.8-2.685a4.5 4.5 0 011.13-1.897l8.932-8.931zm0 0L19.5 7.125M18 14v4.75A2.25 2.25 0 0115.75 21H5.25A2.25 2.25 0 013 18.75V8.25A2.25 2.25 0 015.25 6H10"
                    />
                  </svg>
                </Link>
                <button
                  className="font-medium py-3 hover:underline"
                  title="Eliminar Area"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth="1.5"
                    stroke="currentColor"
                    className="w-6 h-6"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M14.74 9l-.346 9m-4.788 0L9.26 9m9.968-3.21c.342.052.682.107 1.022.166m-1.022-.165L18.16 19.673a2.25 2.25 0 01-2.244 2.077H8.084a2.25 2.25 0 01-2.244-2.077L4.772 5.79m14.456 0a48.108 48.108 0 00-3.478-.397m-12 .562c.34-.059.68-.114 1.022-.165m0 0a48.11 48.11 0 013.478-.397m7.5 0v-.916c0-1.18-.91-2.164-2.09-2.201a51.964 51.964 0 00-3.32 0c-1.18.037-2.09 1.022-2.09 2.201v.916m7.5 0a48.667 48.667 0 00-7.5 0"
                    />
                  </svg>
                </button>
                <div className="flex flex-row border items-center placeholder:text-slate-600 rounded-lg">
                  <input
                    className="bg-gray-50 border border-gray-500  focus:ring-blue-500 focus:border-blue-500 text-gray-900 text-xs rounded-lg block w-20 p-2.5 placeholder:text-gray-400 h-8"
                    id="consumo"
                    placeholder="0"
                    max={databody.stkmax}
                    min={0}
                    type="number"
                    onChange={(event) => setConsumo(event.target.value)}
                  />
                  <button
                    onClick={(event) =>
                      existenciaActual(event, databody, consumo)
                    }
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke-width="1.5"
                      stroke="currentColor"
                      class="w-6 h-6"
                    >
                      <path
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        d="M18 12H6"
                      />
                    </svg>
                  </button>
                </div>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
