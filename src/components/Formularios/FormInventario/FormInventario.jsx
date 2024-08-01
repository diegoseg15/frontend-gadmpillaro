import React, { useEffect, useState } from "react";
import { ListaClaseArticuloApi, addArticuloApi } from "../../../API/Articulos";
import { ListaUnidadesApi } from "../../../API/Unidades";
import Cookies from "universal-cookie/es6";

export function FormInventario(props) {
  const { id, tipoToast, setTipoToast, setDataMesaje, codigoarticulo } = props;
  const cookies = new Cookies();

  const [formData, setFormData] = useState(defaultVaule());
  const [clase, setclase] = useState([]);
  const [unidades, setUnidades] = useState([]);
  const [formError, setFormError] = useState({});

  const tiempoTranscurrido = Date.now();
  // const hoy = new Date(tiempoTranscurrido);

  useEffect(() => {
    ListaClaseArticuloApi().then((res) => {
      setclase(res);
    });
  }, []);

  useEffect(() => {
    ListaUnidadesApi().then((res) => {
      setUnidades(res);
    });
  }, []);

  const handleSubmitInventario = (event) => {
    event.preventDefault();
    let errors = {};
    if (
      !formData.descripcion ||
      !formData.especificaciones ||
      !formData.tipo ||
      !formData.unidad ||
      !formData.consumoMaximo ||
      !formData.consumoMinimo ||
      !formData.costo ||
      !formData.preciofinal
    ) {
      if (!formData.descripcion) errors.descripcion = true;
      if (!formData.especificaciones) errors.especificaciones = true;
      if (!formData.tipo) errors.tipo = true;
      if (!formData.unidad) errors.unidad = true;
      if (!formData.consumoMaximo) errors.consumoMaximo = true;
      if (!formData.consumoMinimo) errors.consumoMinimo = true;
      if (!formData.preciofinal) errors.preciofinal = true;
      if (!formData.costo) errors.costo = true;
      if (!formData.cantidad) errors.cantidad = true;
      if (!formData.fechaCaducidad) errors.fechaCaducidad = true;
      setDataMesaje("Es obligatorio llenar todos los datos.");
      setTipoToast(2);
    } else {
      const dataInventario = {
        cod_emp: cookies.get("codigo_empresa"),
        cargo_usu: cookies.get("cargo"),
        cod_art: codigoarticulo ? codigoarticulo : formData.codigo,
        nom_art: formData.descripcion.toLocaleUpperCase(),
        cod_uni: formData.unidad,
        precio: formData.costo,
        ultcos: formData.preciofinal,
        existencia: formData.cantidad,
        cantidad: formData.cantidad,
        stkmax: formData.consumoMaximo,
        stkmin: formData.consumoMinimo,
        observaciones: formData.especificaciones,
        cod_cla: formData.tipo,
        cod_inv: id,
        caducidad: formData.fechaCaducidad,
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
          errors = {};
        })
        .catch((err) => {
          setDataMesaje("Error en el servidor", err);
          setTipoToast(3);
        });
    }
    setFormError(errors);
  };
  return (
    <form className="bg-white shadow-md rounded px-8 mb-4 flex flex-col my-2">
      <div className="-mx-3 md:flex mb-6">
        <div className="md:w-full px-3">
          <label
            className="block my-2 text-sm font-medium text-gray-900"
            htmlFor="grid-descripcion"
          >
            Código
          </label>
          <input
            className={`
              ${
                formError.codigo
                  ? "bg-red-50 border border-red-500 focus:ring-red-800 focus:border-red-800"
                  : codigoarticulo
                  ? "bg-gray-100 border border-gray-400"
                  : "bg-gray-50 border border-gray-500  focus:ring-blue-500 focus:border-blue-500"
              } text-gray-900 text-sm rounded-lg block w-full p-2.5 placeholder:text-gray-400
                `}
            id="grid-descripcion"
            placeholder={codigoarticulo ? codigoarticulo : "Almohadas"}
            disabled={codigoarticulo ? true : false}
            onChange={(event) =>
              setFormData({ ...formData, codigo: event.target.value })
            }
          />
        </div>
      </div>
      <div className="-mx-3 md:flex mb-6">
        <div className="md:w-full px-3">
          <label
            className="block my-2 text-sm font-medium text-gray-900"
            htmlFor="grid-descripcion"
          >
            Descripción
          </label>
          <input
            className={`
              ${
                formError.descripcion
                  ? "bg-red-50 border border-red-500 focus:ring-red-800 focus:border-red-800"
                  : "bg-gray-50 border border-gray-500  focus:ring-blue-500 focus:border-blue-500"
              } text-gray-900 text-sm rounded-lg block w-full p-2.5 placeholder:text-gray-400
                `}
            id="grid-descripcion"
            placeholder="Almohadas"
            onChange={(event) =>
              setFormData({ ...formData, descripcion: event.target.value })
            }
          />
        </div>
      </div>
      <div className="-mx-3 md:flex mb-6">
        <div className="md:w-full px-3">
          <label
            className="block my-2 text-sm font-medium text-gray-900"
            htmlFor="grid-descripcion"
          >
            Observaciones
          </label>
          <textarea
            className={`
              ${
                formError.especificaciones
                  ? "bg-red-50 border border-red-500 focus:ring-red-800 focus:border-red-800"
                  : "bg-gray-50 border border-gray-500  focus:ring-blue-500 focus:border-blue-500"
              } text-gray-900 text-sm rounded-lg block w-full p-2.5 placeholder:text-gray-400 h-32
                `}
            id="grid-descripcion"
            placeholder="Color Negro"
            onChange={(event) =>
              setFormData({ ...formData, especificaciones: event.target.value })
            }
          ></textarea>
        </div>
      </div>
      <div className="-mx-3 md:flex mb-2">
        <div className="relative md:w-1/2 px-3 mb-6 md:mb-0">
          <label
            className="block my-2 text-sm font-medium text-gray-900"
            htmlFor="grid-unidad"
          >
            Unidad
          </label>
          <select
            className={`
              ${
                formError.unidad
                  ? "bg-red-50 border border-red-500 focus:ring-red-800 focus:border-red-800"
                  : "bg-gray-50 border border-gray-500  focus:ring-blue-500 focus:border-blue-500"
              } text-gray-900 text-sm rounded-lg block w-full p-2.5 placeholder:text-gray-400
                `}
            id="grid-unidad"
            onChange={(event) =>
              setFormData({ ...formData, unidad: event.target.value })
            }
          >
            <option>Seleccionar la unidades</option>
            {unidades.map((data) => (
              <option
                key={data.coduni}
                className="capitalize"
                value={data.coduni}
              >
                {data.nomuni.toLowerCase()} - {data.coduni.toLowerCase()}
              </option>
            ))}
          </select>
          {/* <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth="1.5"
            stroke="currentColor"
            className="absolute right-7 bottom-4 lg:bottom-7 w-4 h-4"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M19.5 8.25l-7.5 7.5-7.5-7.5"
            />
          </svg> */}
        </div>

        <div className="md:w-1/2 px-3">
          <label
            className="block my-2 text-sm font-medium text-gray-900"
            htmlFor="Consumo-Maximo"
          >
            Consumo Máximo
          </label>
          <input
            className={`
              ${
                formError.consumoMaximo
                  ? "bg-red-50 border border-red-500 focus:ring-red-800 focus:border-red-800"
                  : "bg-gray-50 border border-gray-500  focus:ring-blue-500 focus:border-blue-500"
              } text-gray-900 text-sm rounded-lg block w-full p-2.5 placeholder:text-gray-400
                `}
            id="Consumo-Maximo"
            placeholder={0}
            type="number"
            onChange={(event) =>
              setFormData({ ...formData, consumoMaximo: event.target.value })
            }
          />
        </div>

        <div className="md:w-1/2 px-3">
          <label
            className="block my-2 text-sm font-medium text-gray-900"
            htmlFor="proveedor"
          >
            Consumo Minimo
          </label>
          <input
            className={`
              ${
                formError.consumoMinimo
                  ? "bg-red-50 border border-red-500 focus:ring-red-800 focus:border-red-800"
                  : "bg-gray-50 border border-gray-500  focus:ring-blue-500 focus:border-blue-500"
              } text-gray-900 text-sm rounded-lg block w-full p-2.5 placeholder:text-gray-400
                `}
            id="proveedor"
            placeholder="0"
            type="number"
            onChange={(event) =>
              setFormData({ ...formData, consumoMinimo: event.target.value })
            }
          />
        </div>
        <div className="md:w-1/2 px-3">
          <label
            className="block my-2 text-sm font-medium text-gray-900"
            htmlFor="proveedor"
          >
            Cantidad
          </label>
          <input
            className={`
              ${
                formError.cantidad
                  ? "bg-red-50 border border-red-500 focus:ring-red-800 focus:border-red-800"
                  : "bg-gray-50 border border-gray-500  focus:ring-blue-500 focus:border-blue-500"
              } text-gray-900 text-sm rounded-lg block w-full p-2.5 placeholder:text-gray-400
                `}
            id="proveedor"
            placeholder="0"
            type="number"
            onChange={(event) =>
              setFormData({ ...formData, cantidad: event.target.value })
            }
          />
        </div>
      </div>
      <div className="-mx-3 md:flex mb-2">
        <div className="md:w-1/2 px-3">
          <label
            className="block my-2 text-sm font-medium text-gray-900"
            htmlFor="tipo-producto"
          >
            Clase del producto
          </label>
          <select
            className={`
              ${
                formError.tipo
                  ? "bg-red-50 border border-red-500 focus:ring-red-800 focus:border-red-800"
                  : "bg-gray-50 border border-gray-500  focus:ring-blue-500 focus:border-blue-500"
              } text-gray-900 text-sm rounded-lg block w-full p-2.5 placeholder:text-gray-400
                `}
            id="tipo-producto"
            type="text"
            onChange={(event) =>
              setFormData({ ...formData, tipo: event.target.value })
            }
          >
            <option>Seleccionar la clase</option>
            {clase.map((data) => (
              <option
                key={data.codcla}
                className="capitalize"
                value={data.codcla}
              >
                {data.nomcla.toLowerCase()}
              </option>
            ))}
          </select>
        </div>
        <div className="md:w-1/2 px-3">
          <label
            className="block my-2 text-sm font-medium text-gray-900"
            htmlFor="costo"
          >
            Precio Unitario
          </label>
          <input
            className={`
              ${
                formError.costo
                  ? "bg-red-50 border border-red-500 focus:ring-red-800 focus:border-red-800"
                  : "bg-gray-50 border border-gray-500  focus:ring-blue-500 focus:border-blue-500"
              } text-gray-900 text-sm rounded-lg block w-full p-2.5 placeholder:text-gray-400
                `}
            id="costo"
            placeholder="$5"
            type="text"
            onChange={(event) =>
              setFormData({ ...formData, costo: event.target.value })
            }
          />
        </div>
        <div className="md:w-1/2 px-3">
          <label
            className="block my-2 text-sm font-medium text-gray-900"
            htmlFor="costo"
          >
            Precio Final
          </label>
          <input
            className={`
              ${
                formError.preciofinal
                  ? "bg-red-50 border border-red-500 focus:ring-red-800 focus:border-red-800"
                  : "bg-gray-50 border border-gray-500  focus:ring-blue-500 focus:border-blue-500"
              } text-gray-900 text-sm rounded-lg block w-full p-2.5 placeholder:text-gray-400
                `}
            id="costo"
            placeholder="$5"
            type="text"
            onChange={(event) =>
              setFormData({ ...formData, preciofinal: event.target.value })
            }
          />
        </div>
        <div className="md:w-1/2 px-3">
          <label
            className="block my-2 text-sm font-medium text-gray-900"
            htmlFor="fecha-Caducidad"
          >
            Fecha de Caducidad
          </label>
          <input
            className={`
              ${
                formError.fechaCaducidad
                  ? "bg-red-50 border border-red-500 focus:ring-red-800 focus:border-red-800"
                  : "bg-gray-50 border border-gray-500  focus:ring-blue-500 focus:border-blue-500"
              } text-gray-900 text-sm rounded-lg block w-full p-2.5 placeholder:text-gray-400
                `}
            id="fecha-Caducidad"
            type="date"
            onChange={(event) =>
              setFormData({ ...formData, fechaCaducidad: event.target.value })
            }
          />
        </div>
      </div>
      <button
        type="submit"
        className="w-48 text-white focus:ring-4 focus:outline-none font-medium rounded-lg text-sm px-5 py-2.5 text-center bg-blue-600 hover:bg-blue-700 focus:ring-blue-800 my-6"
        onClick={(event) => handleSubmitInventario(event)}
      >
        Guardar
      </button>
    </form>
  );
}

function defaultVaule() {
  return {
    codigo: "",
    descripcion: "",
    especificaciones: "",
    tipo: "",
    unidad: "",
    consumoMaximo: 0,
    consumoMinimo: 0,
    cantidad: "",
    costo: 0,
    preciofinal: 0,
    fechaCaducidad: "",
  };
}
