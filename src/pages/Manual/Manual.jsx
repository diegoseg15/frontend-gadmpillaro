import React, { useState } from "react";

export function Manual() {
  const data = [
    {
      subtitulo: "Inicio de sesión",
      contenido:
        "1. Para ingresar a la página colocamos el enlace dominio en la barra de búsquedas.\n2. Al cargar, se visualizará la página Login en la cual vamos a ingresar las credenciales, tanto el usuario como la contraseña asignados a cada servidor.\n3. Procedemos a dar clic en el botón Iniciar Sesión\n4. Al cargar la página visualizaremos el apartado Dashboard en el cual se muestran las estadísticas y un pequeño recuento, tanto del presupuesto como de las cantidades de los productos que están por escasear.",
    },
    {
      subtitulo: "Inventario",
      contenido:
        "5. Al dirigirnos al apartado bodega-existencia nos aparecerá una tabla de inventario del mismo, en este podemos visualizar el objeto, sus especificaciones, el tipo de objeto (mueble, electrodoméstico, ...), la cantidad de este, el consumo máximo y el costo.\n6. Dentro de estos apartados también contamos con la viñeta de nuevo producto en el cual podremos ingresar nuevos objetos, alimentos o medicinas, dentro de nuestra página.\nSe deberán llenar los campos Descripción (nombre), Especificaciones (detalles), Unidad (unidad de medida), Consumo Máximo (por mes), Proveedor (nombre), Clase del Producto (xxxx), Costo (precio), Fecha de Caducidad (vida útil).\n7. Una vez llenada la información damos clic en el botón Guardar.",
    },
    {
      subtitulo: "Exportar pedido al proveedor",
      contenido:
        "8. Dentro de la viñeta Exportar nos aparecerá una página en la cual podremos exportar los datos para realizar el pedido a los proveedores.\n9. Dentro de esta página ingresaremos el Nombre del Producto, la cantidad que se necesita, el tipo (frutas, verduras, ...), y las especificaciones del mismo.\n10. Debajo de los datos podremos dar clic al botón Agregar Producto en el caso de querer insertar uno nuevo o dar en el botón exportar en el caso de necesitar imprimir la petición.",
    },
    {
      subtitulo: "Usuario",
      contenido:
        "11. Dentro del apartado Usuarios podremos visualizar la lista de los adultos mayores registrados, indicando su número de cedula, nombre completo, ubicación, teléfono y su estado si es activo o inactivo.\n12. De la misma forma se podrá editar la información dando clic al botón o eliminar la información dando clic al botón.\n13. En el apartado Agregar Usuarios, visualizaremos una página en la cual podamos ingresar nuevos usuarios, se ingresará el nombre completo, la cedula, el género, el cargo, el número de celular y teléfono, la dirección de domicilio, provincia, ciudad, correo electrónico de referencia, la contraseña junto con su confirmación con la que podrá tener acceso a la página.\n14. Al ingresar la información respectiva se procederá a dar clic en el botón Guardar.",
    },
  ];

  return (
    <Accordion titulo="MANUAL DE USO DEL SISTEMA DE INVENTARIO" data={data} />
  );
}

const Accordion = ({ titulo, data }) => {
  const [activeIndex, setActiveIndex] = useState(0);

  const toggleAccordion = (index) => {
    if (activeIndex === index) {
      setActiveIndex(null);
    } else {
      setActiveIndex(index);
    }
  };

  return (
    <div className="py-20 lg:px-32 px-5">
      <h1 className="text-2xl font-bold pb-10 text-center">{titulo}</h1>
      <div id="accordion-collapse">
        {data.map((item, index) => (
          <div key={index}>
            <h2 id={`accordion-collapse-heading-${index + 1}`}>
              <button
                type="button"
                className={`${
                  activeIndex === index
                    ? "bg-gray-800 text-gray-400 border-gray-700"
                    : "bg-gray-700 text-slate-300 border-gray-500"
                } ${
                  index === 0 ? "rounded-t-xl" : ""
                } flex items-center justify-between w-full p-5 font-medium text-left border border-b-0  focus:ring-1 focus:ring-gray-800`}
                onClick={() => toggleAccordion(index)}
              >
                <span>{item.subtitulo}</span>
                <svg
                  data-accordion-icon
                  className={`w-6 h-6 ${
                    activeIndex === index ? "rotate-180" : ""
                  } shrink-0`}
                  fill="currentColor"
                  viewBox="0 0 20 20"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    fillRule="evenodd"
                    d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
                    clipRule="evenodd"
                  ></path>
                </svg>
              </button>
            </h2>
            <div
              id={`accordion-collapse-body-${index + 1}`}
              className={`${
                activeIndex === index ? "block" : "hidden"
              } p-5 border border-b-0 border-gray-700 bg-gray-900`}
              aria-labelledby={`accordion-collapse-heading-${index + 1}`}
            >
              <p className="mb-2 text-gray-50 whitespace-pre-line text-justify">
                {item.contenido}
              </p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};
