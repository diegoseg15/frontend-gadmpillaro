import React, { useState } from "react";
import Cookies from "universal-cookie/es6";
import { addClaseArticuloApi } from "../../../API/Articulos";

export function Clase(props) {
  // Desestructuración de props
  const { open, setOpen, tipoToast, setTipoToast, setDataMesaje } = props;

  const cookies = new Cookies();

  // Estado local utilizando el hook useState
  const [formData, setFormData] = useState(defaultVaule());
  const [formError, setFormError] = useState({});

  // Obtener la fecha actual
  const tiempoTranscurrido = Date.now();
  const hoy = new Date(tiempoTranscurrido);

  // Función para manejar el envío del formulario
  const handleSubmitClase = (event) => {
    event.preventDefault();
    let errors = {};

    if (!formData.codigo || !formData.clase) {
      if (!formData.codigo) errors.cedula = true;
      if (!formData.clase) errors.nombres = true;

      // Mostrar mensaje de error y establecer tipo de toast
      setDataMesaje("Es obligatorio llenar todos los datos.");
      setTipoToast(2);
    } else if (formData.password === formData.repeatPassword) {
      const dataClase = {
        cod_emp: cookies.get("codigo_empresa"),
        cod_cla: formData.codigo,
        nom_cla: formData.clase,
        fechaActual: hoy.toUTCString(),
        cod_usu: cookies.get("codigo_usuario"),
      };
      console.log(dataClase);
      addClaseArticuloApi(dataClase)
        .then((response) => {
          setDataMesaje(response.mensaje);
          setTipoToast(
            response.mensaje === "Error al crear la clase del artículo."
              ? 3
              : response.mensaje === "Datos necesarios"
              ? 2
              : response.mensaje === "Clase artículo actualizado"
              ? 1
              : response.mensaje === "Clase del artículo creada correctamente."
              ? 1
              : 3
          );
          if (
            response.mensaje === "Clase artículo actualizado" ||
            response.mensaje === "Clase del artículo creada correctamente." ||
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
      setOpen(false);
    } else {
      // Mostrar mensaje de error y establecer tipo de toast
      setDataMesaje("Es obligatorio que las contraseñas coincidan.");
      setTipoToast(2);
    }

    // Establecer el estado de formError con los errores
    setFormError(errors);
  };

  return (
    <div
      className={`${
        open === false ? "hidden" : ""
      } absolute top-0 left-0 z-60 w-full h-screen bg-gray-900 bg-opacity-50 overflow-hidden`}
    >
      {/* Contenedor del formulario */}
      <form className="relative flex flex-col bg-primary max-w-screen-sm rounded-lg my-32 mx-72 py-10 px-16">
        {/* Botón de cierre del modal */}
        <button
          className="absolute top-3 right-4 text-gray-400 bg-transparent hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm p-1.5 ml-auto inline-flex items-center dark:hover:bg-gray-800 dark:hover:text-white"
          onClick={(event) => {
            event.preventDefault();
            setOpen(false);
          }}
        >
          {/* Icono de cierre */}
          <svg
            aria-hidden="true"
            className="w-5 h-5"
            fill="currentColor"
            viewBox="0 0 20 20"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              fillRule="evenodd"
              d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"
              clipRule="evenodd"
            />
          </svg>
          <span className="sr-only">Close modal</span>
        </button>
        {/* Etiqueta y campo de entrada para el código */}
        <label
          htmlFor="codigo"
          className="block my-2 text-sm font-medium text-white"
        >
          Código
        </label>
        <input
          type="text"
          id="codigo"
          className={`
      ${
        formError.codigo
          ? "bg-red-50 border border-red-500 focus:ring-red-800 focus:border-red-800"
          : "bg-gray-50 border border-gray-500  focus:ring-blue-500 focus:border-blue-500"
      } text-gray-900 text-sm rounded-lg block w-full p-2.5 placeholder:text-gray-400
        `}
          placeholder="CD-Frutas"
          onChange={(event) =>
            setFormData({ ...formData, codigo: event.target.value })
          }
          required
        />

        {/* Etiqueta y campo de entrada para el nombre de la clase */}
        <label
          htmlFor="clase"
          className="block my-2 text-sm font-medium text-white"
        >
          Nombre de la Clase
        </label>
        <input
          type="clase"
          id="clase"
          className={`
      ${
        formError.clase
          ? "bg-red-50 border border-red-500 focus:ring-red-800 focus:border-red-800"
          : "bg-gray-50 border border-gray-500  focus:ring-blue-500 focus:border-blue-500"
      } text-gray-900 text-sm rounded-lg block w-full p-2.5 placeholder:text-gray-400
        `}
          placeholder="Frutas"
          onChange={(event) =>
            setFormData({ ...formData, clase: event.target.value })
          }
          required
        />

        {/* Botón de envío del formulario */}
        <div className="flex justify-center">
          <button
            type="submit"
            className="w-64 text-white focus:ring-4 focus:outline-none font-medium rounded-lg text-sm px-5 py-2.5 text-center bg-blue-600 hover:bg-blue-700 focus:ring-blue-800 my-6"
            onClick={(event) => handleSubmitClase(event)}
          >
            Guardar
          </button>
        </div>
      </form>
    </div>
  );
}

function defaultVaule() {
  // Valor por defecto del estado formData
  return {
    codigo: "",
    clase: "",
  };
}
