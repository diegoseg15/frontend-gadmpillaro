import { useState, useEffect } from "react";
import { CSVLink } from "react-csv";
import { ListaArticulosApi } from "../../API/Articulos"; // Importa la función ListaArticulosApi desde el archivo api.js

export function ExportData(props) {
  const { id } = props;
  const [inicio, setInicio] = useState(""); // Estado para almacenar la fecha de inicio seleccionada
  const [fin, setFin] = useState(""); // Estado para almacenar la fecha de fin seleccionada
  const [articulos, setArticulos] = useState([]); // Estado para almacenar los datos de los artículos

  const tiempoTranscurrido = Date.now(); // Obtiene el tiempo transcurrido en milisegundos desde 1 de enero de 1970
  const hoy = new Date(tiempoTranscurrido); // Crea un objeto Date con la fecha actual

  console.log(hoy.getTime()); // Imprime el tiempo transcurrido en milisegundos desde 1 de enero de 1970

  const headers = [
    { label: "Descripción", key: "nomart" },
    { label: "Cantidad Comprada", key: "cantidad" },
    { label: "Existencia", key: "existencia" },
    { label: "Unidad", key: "coduni" },
    { label: "Precio", key: "precio" },
    { label: "Ultimo costo", key: "ultcos" },
    { label: "stkmax", key: "stkmax" },
    { label: "stkmin", key: "stkmin" },
  ]; // Definición de los encabezados para el archivo CSV

  useEffect(() => {
    ListaArticulosApi(id).then((res) => {
      setArticulos(res);
    });
  }, [id]);

  const filterData = articulos.filter((caso) => {
    const fecing = caso.fecing.split("T")[0]; // Obtiene la fecha de ingreso del artículo sin la parte de la hora
    return (
      (!inicio || fecing >= inicio.split("T")[0]) && // Comprueba si la fecha de ingreso es mayor o igual a la fecha de inicio seleccionada
      (!fin || fecing <= fin.split("T")[0]) // Comprueba si la fecha de ingreso es menor o igual a la fecha de fin seleccionada
    );
  }); // Filtra los datos de los artículos basado en las fechas seleccionadas

  return (
    <div className="py-4 px-10">
      <div className="w-full p-4 text-center border rounded-lg shadow-md sm:p-8 bg-gray-800 border-gray-700">
        <h5 className="capitalize mb-2 text-3xl font-bold text-white">
          Exportar Datos de{" "}
          {
            window.location.href.split("/")[
              window.location.href.split("/").length - 1
            ]
          }
        </h5>
      </div>
      <div>
        <div className="lg:px-10 lg:pt-20 pt-8">
          <p className="my-5 text-center text-gray-700 sm:text-lg">
            Escoge el inicio y fin de los datos a exportar
          </p>
          <div className="flex lg:flex-row flex-col items-center justify-center space-y-4 sm:flex sm:space-y-0 sm:space-x-4">
            <input
              type="date"
              className="px-4 w-44 bg-gray-50 border border-gray-500 hover:bg-gray-200 focus:ring-4 focus:outline-none focus:ring-gray-300 text-gray-800 rounded-lg inline-flex items-center justify-center py-2.5"
              max={fin ? fin : hoy.toISOString().split("T")[0]}
              // max={hoy.toISOString().split("T")[0]}
              onChange={(event) => setInicio(event.target.value)} // Actualiza el estado con la fecha de inicio seleccionada
            />
            <input
              type="date"
              className="px-4 w-44 bg-gray-50 border border-gray-500 hover:bg-gray-200 focus:ring-4 focus:outline-none focus:ring-gray-300 text-gray-800 rounded-lg inline-flex items-center justify-center py-2.5"
              min={inicio ? inicio : ""}
              max={hoy.toISOString().split("T")[0]}
              onChange={(event) => setFin(event.target.value)} // Actualiza el estado con la fecha de fin seleccionada
            />
          </div>
        </div>
        <div className="lg:px-32 py-10">
          <CSVLink
            data={filterData} // Establece los datos a exportar en el archivo CSV
            headers={headers} // Establece los encabezados del archivo CSV
            filename={`Exportación del ${hoy.toISOString().split("T")[0]}.csv`} // Establece el nombre del archivo CSV
          >
            <button className="flex justify-center w-full border-2 border-gray-400 text-gray-900 focus:outline-none font-medium rounded-lg text-sm pl-5 py-2.5 text-center bg-white hover:bg-primary focus:ring-gray-700 focus:ring-1 hover:text-white">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="w-5 h-5"
                viewBox="0 0 24 24"
                strokeWidth="2"
                stroke="currentColor"
                fill="none"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                <path d="M14 3v4a1 1 0 0 0 1 1h4" />
                <path d="M17 21h-10a2 2 0 0 1 -2 -2v-14a2 2 0 0 1 2 -2h7l5 5v11a2 2 0 0 1 -2 2z" />
                <path d="M12 17v-6" />
                <path d="M9.5 14.5l2.5 2.5l2.5 -2.5" />
              </svg>
              <span className="pl-2">Exportar</span>
            </button>
          </CSVLink>
        </div>
      </div>
    </div>
  );
}
