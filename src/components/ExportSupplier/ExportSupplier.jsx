import React, { useState } from "react";
import { CSVLink } from "react-csv";

export function ExportSupplier(props) {
  // Desestructuración de props
  const { setTipoToast, setDataMesaje } = props;

  // Estado para almacenar los datos de los productos
  const [data, setData] = useState([]);

  // Estado para almacenar los datos del formulario
  const [formData, setFormData] = useState(defaultVaule()); // No se proporciona la implementación de la función defaultVaule(), pero asumiremos que devuelve un objeto con las propiedades Descripcion, Cantidad, Tipo, y Especificacion.

  // Definición de las columnas del archivo CSV
  const headers = [
    { label: "Descripción", key: "Descripción" },
    { label: "Cantidad", key: "Cantidad" },
    { label: "Tipo", key: "Tipo" },
    { label: "Especificacion", key: "Especificacion" },
  ];

  // Función para agregar un producto
  const addProduct = (event) => {
    event.preventDefault();
    // Verificación de que se hayan completado todos los campos del formulario
    if (
      !formData.Descripcion ||
      !formData.Cantidad ||
      !formData.Tipo ||
      !formData.Especificacion
    ) {
      setDataMesaje("Es necesario llenar todos los datos."); // Mensaje de error en caso de campos vacíos
      setTipoToast(2); // Establecer tipo de Toast (2 para error)
    } else {
      // Agregar el nuevo producto a la lista de productos existente
      setData(
        [
          {
            id: data.length + 1, // Generar un ID único para el producto
            Descripción: formData.Descripcion,
            Cantidad: formData.Cantidad,
            Tipo: formData.Tipo,
            Especificacion: formData.Especificacion,
          },
        ].concat(data)
      );
    }
  };

  // Función para eliminar un producto
  const removeProduct = (event) => {
    event.preventDefault();
    // Implementación de la eliminación del producto seleccionado
  };

  // Otras funciones y efectos necesarios para el componente

  // Renderización del componente

  return (
    <div className="py-4 px-10">
      <div>
        {/* Encabezado */}
        <div className="w-full p-4 text-center border rounded-lg shadow-md sm:p-8 bg-gray-800 border-gray-700">
          <h5 className="mb-2 text-3xl font-bold text-white">
            Exportar Datos para el Proveedor
          </h5>
        </div>
        <div className="grid gap-6 mb-6 md:grid-cols-2 pt-6 pb-3 px-6">
          {/* Campo de entrada: Nombre del Producto */}
          <div className="col-span-2">
            <label
              htmlFor="name_product"
              className="block mb-2 text-sm font-medium text-gray-900"
            >
              Nombre del Producto
            </label>
            <input
              type="text"
              id="name_product"
              className="bg-gray-50 border border-gray-500 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
              placeholder="Manzana"
              onChange={(event) =>
                setFormData({ ...formData, Descripcion: event.target.value })
              }
              required
            />
          </div>
          {/* Campo de entrada: Cantidad */}
          <div>
            <label
              htmlFor="Cantidad"
              className="block mb-2 text-sm font-medium text-gray-900"
            >
              Cantidad
            </label>
            <input
              type="number"
              id="Cantidad"
              className="bg-gray-50 border border-gray-500 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
              placeholder={0}
              min={0}
              onChange={(event) =>
                setFormData({ ...formData, Cantidad: event.target.value })
              }
              required
            />
          </div>
          {/* Campo de entrada: Tipo */}
          <div>
            <label
              htmlFor="Tipo"
              className="block mb-2 text-sm font-medium text-gray-900"
            >
              Tipo
            </label>
            <input
              type="text"
              id="Tipo"
              className="bg-gray-50 border border-gray-500 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
              placeholder="Frutas"
              onChange={(event) =>
                setFormData({ ...formData, Tipo: event.target.value })
              }
              required
            />
          </div>
          {/* Campo de entrada: Especificaciones */}
          <div className="col-span-2">
            <label
              htmlFor="Especificaciones"
              className="block mb-2 text-sm font-medium text-gray-900"
            >
              Especificaciones
            </label>
            <textarea
              type="textarea"
              id="Especificación"
              className="childbarscroll bg-gray-50 border h-32 border-gray-500 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
              placeholder="Especificaciones de los productos"
              onChange={(event) =>
                setFormData({ ...formData, Especificacion: event.target.value })
              }
              required
            />
          </div>
        </div>
        <div className="flex lg:flex-row flex-col lg:justify-start justify-center lg:items-center items-center lg:pb-0 pb-3">
          {/* Botón: Agregar Producto */}
          <div className="pr-5 lg:pb-0 pb-3">
            <button
              className="flex w-48 border-2 border-gray-400 text-gray-900 focus:outline-none font-medium rounded-lg text-sm pl-5 py-2.5 text-center bg-white hover:bg-primary focus:ring-gray-700 focus:ring-1 hover:text-white"
              onClick={(event) => addProduct(event)}
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="icon icon-tabler icon-tabler-circle-plus"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                strokeWidth="2"
                stroke="currentColor"
                fill="none"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                <path d="M12 12m-9 0a9 9 0 1 0 18 0a9 9 0 1 0 -18 0" />
                <path d="M9 12l6 0" />
                <path d="M12 9l0 6" />
              </svg>
              <span className="pl-2">Agregar Producto</span>
            </button>
          </div>
          {/* Botón: Exportar */}
          <div>
            <CSVLink data={data} headers={headers} filename="Proveedor.csv">
              <button className="flex w-32 border-2 border-gray-400 text-gray-900 focus:outline-none font-medium rounded-lg text-sm pl-5 py-2.5 text-center bg-white hover:bg-primary focus:ring-gray-700 focus:ring-1 hover:text-white">
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
        {/* Tabla de productos */}
        {data.length !== 0 ? (
          <div className="py-10">
            <table className="rounded-lg w-full">
              <thead className="text-xs uppercase text-gray-400 w-full">
                <tr>
                  <th scope="col" className="px-2 py-3 bg-gray-800">
                    Id
                  </th>
                  <th scope="col" className="px-4 py-3 bg-gray-800">
                    Producto
                  </th>
                  <th scope="col" className="px-4 py-3 bg-gray-800">
                    Cantidad
                  </th>
                  <th scope="col" className="px-4 py-3 bg-gray-800">
                    Tipo
                  </th>
                  <th scope="col" className="px-4 py-3 bg-gray-800">
                    Especificaciones
                  </th>
                  <th scope="col" className="px-4 py-3 bg-gray-800"></th>
                </tr>
              </thead>
              <tbody>
                {/* Iterar sobre los datos y mostrar cada fila de producto */}
                {data.map((databody) => (
                  <tr className="border border-gray-700 rounded-lg">
                    <td className="px-2 py-4 font-medium text-center">
                      {databody.id}
                    </td>
                    <th
                      scope="row"
                      className="px-6 py-4 font-medium whitespace-nowrap text-white bg-gray-800"
                    >
                      {databody.Descripción}
                    </th>
                    <td className="px-6 py-4">{databody.Cantidad}</td>
                    <td className="px-6 py-4">{databody.Tipo}</td>
                    <td className="px-6 py-4 bg-gray-800 text-white">
                      {databody.Especificacion}
                    </td>
                    <td className="px-3 py-4 bg-gray-800 text-white">
                      <button
                        className="font-medium pl-2 hover:underline"
                        // onClick={(event) => removeArea(event, areasList._id)}
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
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        ) : (
          <></>
        )}
      </div>
    </div>
  );
}

function defaultVaule() {
  return {
    Descripcion: "",
    Cantidad: "",
    Tipo: "",
    Especificacion: "",
  };
}
