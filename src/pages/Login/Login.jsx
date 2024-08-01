import React, { useState } from "react";
import { FormLogin } from "../../components/FormLogin";
import { UsuarioLoginApi } from "../../API/Empleados";
import Cookies from "universal-cookie";
import { Toast } from "../../components/Toast";

export function Login() {
  // const [usuario, setUsuario] = useState({});
  const [dataMensaje, setDataMesaje] = useState("");
  const [tipoToast, setTipoToast] = useState(0);
  const [formData, setFormData] = useState(defaultValue());

  const cookies = new Cookies();

  const handleSubmitLogin = (event) => {
    event.preventDefault();

    if (!formData.cod_usu || !formData.passwo_usu) {
      setDataMesaje("Es obligatorio llenar todos los datos.");
      setTipoToast(2);
    } else {
      UsuarioLoginApi(formData)
        .then((response) => {
          // setUsuario(response[0]);

          if (response.mensaje) {
            // console.log(response);
            setDataMesaje(response.mensaje);
            setTipoToast(
              response.mensaje === "Error al obtener el usuario." ||
                response.mensaje === "Error al obtener los usuarios."
                ? 3
                : response.mensaje === "No existe el usuario" ||
                  response.mensaje === "Contraseña incorrecta" ||
                  response.mensaje === "Usuario Inactivo" ||
                  response.mensaje ===
                    "Llene los campos, se encuentran vacíos" ||
                  response.mensaje === "Ingrese su Usuario" ||
                  response.mensaje === "Ingrese su contraseña"
                ? 2
                : 3
            );
          } else if (
            !response[0].codusu ||
            !response[0].codemp ||
            !response[0].cargousu ||
            !response[0].nomapeusu
          ) {
            setDataMesaje("Error en la respuesta");
            setTipoToast(3);
          } else {
            setDataMesaje("Usuario Correcto");
            setTipoToast(1);
            cookies.set("codigo_usuario", response[0].codusu, { path: "/" });
            cookies.set("codigo_empresa", response[0].codemp, { path: "/" });
            cookies.set("cargo", response[0].cargousu, { path: "/" });
            cookies.set("user", response[0].nomapeusu);
            cookies.set("login", "true-log", { path: "/" });
            window.location.href = "/";
          }

          console.log("usuario", response[0]);
        })
        .catch((err) => {
          setDataMesaje(err, "Error del Servidor");
          setTipoToast(3);
        });
    }
    // console.log("formData ", formData);
    // console.log({ mensaje: dataMensaje, toast: tipoToast });
  };

  return (
    <>
      <div className="bg-image overflow-hidden w-screen h-screen">
        <div className="relative flex h-screen">
          {dataMensaje ? (
            tipoToast !== 0 ? (
              <Toast
                dataMensaje={dataMensaje}
                setDataMesaje={setDataMesaje}
                tipo={tipoToast}
                setTipo={setTipoToast}
              />
            ) : (
              ""
            )
          ) : (
            ""
          )}

          <div className="hidden bg-cover lg:block lg:w-2/3">
            <div className="flex items-center h-full px-20 bg-gray-900 bg-opacity-50">
              <div>
                <h2 className="text-4xl font-bold text-white">
                  Santiago de Píllaro
                </h2>
                <p className="max-w-xl mt-3 text-gray-300">
                  "La ciudad de Píllaro, donde la tradición y la cultura andina
                  se fusionan en una experiencia única para todos sus
                  visitantes".
                </p>
              </div>
            </div>
          </div>
          <div className="bg-white flex items-center w-full max-w-xl px-6 lg:w-2/6">
            <div className="flex-1">
              <FormLogin
                handleSubmitLogin={handleSubmitLogin}
                formData={formData}
                setFormData={setFormData}
              />
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

function defaultValue() {
  return {
    cod_usu: "",
    passwo_usu: "",
  };
}
