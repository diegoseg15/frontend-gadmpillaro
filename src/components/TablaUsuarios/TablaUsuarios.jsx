import React, { useEffect, useState } from "react";
import { DeleteUsuario, ListaUsuariosApi } from "../../API/Empleados";
import { dataUser } from "../../utils/UserLog";
import { Link } from "react-router-dom";

export function TablaUsuarios(props) {
  const { setTipoToast, setDataMesaje } = props;

  const [usuarios, setUsuarios] = useState([]);

  // console.log(dataUser);

  useEffect(() => {
    ListaUsuariosApi(dataUser).then((res) => {
      setUsuarios(res);
      // console.log(res);
    });
  }, []);

  const removeUsuario = (event, idUsuario) => {
    event.preventDefault();

    DeleteUsuario(idUsuario)
      .then((response) => {
        setDataMesaje("Caso eliminado.");
        setTipoToast(1);
        window.location.reload();
      })
      .catch(() => {
        setDataMesaje("Error en el servidor.");
        setTipoToast(3);
      });
  };

  return (
    <div className="overflow-x-auto shadow-md rounded-lg">
      <table className="w-full text-sm text-left text-gray-400">
        <thead className="text-xs uppercase bg-gray-700 text-gray-400">
          <tr key={1}>
            <th scope="col" className="px-4 py-3">
              Cedula
            </th>
            <th scope="col" className="px-4 py-3">
              Nombre Y Apellido
            </th>
            <th scope="col" className="px-4 py-3">
              Ubicación
            </th>
            <th scope="col" className="px-4 py-3">
              Teléfono
            </th>
            <th scope="col" className="px-4 py-3">
              Estado
            </th>
            <th scope="col" className="px-4 py-3">
              Edición
            </th>
          </tr>
        </thead>
        <tbody>
          {usuarios.map((users) => (
            <tr
              key={users.CODUSU}
              className="border-b bg-gray-800 border-gray-700"
            >
              <th scope="row" className="px-4 py-4">
                {users.CODUSU}
              </th>
              <td className="flex items-center px-4 py-4 whitespace-nowrap text-white">
                <div className="pl-3">
                  <div className="text-base font-semibold">
                    {users.NOMAPEUSU}
                  </div>
                  <div className="font-normal text-gray-500">
                    {users.EMAILUSU}
                  </div>
                </div>
              </td>
              <td className="px-4 py-4">
                {users.CIUUSU} - {users.PROUSU}
              </td>
              <td className="px-4 py-4">{users.TELUSU}</td>
              <td className="px-4 py-4">
                <div className="flex items-center">
                  <div className="h-2.5 w-2.5 rounded-full bg-green-500 mr-2"></div>
                  {users.ESTADO === "1"
                    ? "Activo"
                    : users.ESTADO === "2"
                    ? "Inactivo"
                    : "Error"}
                </div>
              </td>
              <td className="flex px-4 items-center">
                <Link
                  className="font-medium px-2 hover:underline"
                  title="Editar Usuario"
                  to={`/editar-usuario/${users.CODUSU}`}
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
                  className="font-medium pl-2 hover:underline"
                  onClick={(event) => removeUsuario(event, users.CODUSU)}
                  title="Eliminar Usuario"
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
  );
}
