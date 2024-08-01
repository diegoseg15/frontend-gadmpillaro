import React, { useEffect, useState } from "react";
import { ListaUsuariosApi, updateUsuarioApi } from "../../../API/Empleados";
// import { dataUser } from "../../../utils/UserLog";
import {
  ListaCiudadesApi,
  ListaProvinciasApi,
} from "../../../API/localizacion";

export function FormEditarUsuario(props) {
  const { id, setTipoToast, setDataMesaje } = props;
  const [users, setUsers] = useState([
    {
      CODEMP: "",
      CODUSU: "",
      PASSWOUSU: "",
      NOMUSU: "",
      APEUSU: "",
      NOMAPEUSU: "",
      SEXUSU: "",
      CIUUSU: "",
      PROUSU: "",
      DIRUSU: "",
      TELUSU: "",
      CELUSU: "",
      EMAILUSU: "",
      CARGOUSU: "",
      ESTADO: "",
      FECING: "",
    },
  ]);
  const [user, setUser] = useState({
    CODEMP: "",
    CODUSU: "",
    PASSWOUSU: "",
    NOMUSU: "",
    APEUSU: "",
    NOMAPEUSU: "",
    SEXUSU: "",
    CIUUSU: "",
    PROUSU: "",
    DIRUSU: "",
    TELUSU: "",
    CELUSU: "",
    EMAILUSU: "",
    CARGOUSU: "",
    ESTADO: "",
    FECING: "",
  });
  const [formData, setFormData] = useState(defaultVaule());
  const [ciudadLista, setCiudadLista] = useState([]);
  const [formError, setFormError] = useState({});
  const [provinciaLista, setProvinciasLista] = useState([
    { id: "", provincia: "" },
  ]);

  const tiempoTranscurrido = Date.now();
  const hoy = new Date(tiempoTranscurrido);

  useEffect(() => {
    ListaProvinciasApi().then((res) => {
      setProvinciasLista(res);
      // console.log(res);
    });
  }, []);

  useEffect(() => {
    ListaUsuariosApi().then((res) => {
      setUser(res.find((data) => data.CODUSU === id));
      console.log(res);
    });
  }, []);

  useEffect(() => {
    ListaCiudadesApi(formData.provincia).then((res) => {
      setCiudadLista(res);
      setFormData({ ...formData, ciudad: "" });
    });
  }, [formData.provincia]);

  if (formData.password || formData.repeatPassword) {
    if (formData.password === formData.repeatPassword) {
      formError.password = false;
      formError.repeatPassword = false;
    } else {
      formError.password = true;
      formError.repeatPassword = true;
    }
  } else {
    formError.password = "";
    formError.repeatPassword = "";
  }

  const handleSubmitUsuario = (event) => {
    event.preventDefault();
    let errors = {};
    // setOpenCarga(true);
    if (formData.password === formData.repeatPassword) {
      const dataUser = {
        cod_emp: user.CODEMP,
        cod_usu: formData.cedula ? formData.cedula : user.CODUSU,
        passwo_usu: formData.password ? formData.password : user.PASSWO,
        nom_usu: formData.nombres ? formData.nombres : user.NOMUSU,
        ape_usu: formData.apellidos ? formData.apellidos : user.APEUSU,
        sex_usu: formData.genero ? formData.genero : user.SEXUSU,
        ciu_usu: formData.ciudad ? formData.genero : user.CIUUSU,
        pro_usu: formData.provincia
          ? provinciaLista.find(
              (prov) => formData.provincia.toString() === prov.id.toString()
            ).provincia
          : user.PROUSU,
        dir_usu: formData.direccion ? formData.direccion : user.DIRUSU,
        tel_usu: formData.telefono ? formData.telefono : user.TELUSU,
        cel_usu: formData.celular ? formData.celular : user.CELUSU,
        email_usu: formData.correo ? formData.correo : user.EMAILUSU,
        cargo_usu: formData.cargo ? formData.cargo : user.CARGOUSU,
        estado: user.ESTADO,
        fecing: user.FECING,
      };

      // setFormData(defaultVaule());

      // console.log(dataUser);
      updateUsuarioApi(dataUser)
        .then((response) => {
          setDataMesaje(response.mensaje);
          setTipoToast(2);
          errors = {};
        })
        .catch((err) => {
          setDataMesaje("Error en el servidor", err);
          setTipoToast(3);
        });
    } else {
      setDataMesaje("Es obligatorio que las contraseñas coincidan.");
      setTipoToast(2);
    }
    setFormError(errors);
  };

  // console.log(provincia);
  return (
    <>
      <form className="flex flex-col">
        <div className="grid gap-x-3 mb-2 md:grid-cols-2">
          <div>
            <label
              htmlFor="first_name"
              className="block mb-2 text-sm font-medium text-gray-900"
            >
              Nombres
            </label>
            <input
              type="text"
              id="first_name"
              className={`
            ${
              formError.nombres
                ? "bg-red-50 border border-red-500 focus:ring-red-800 focus:border-red-800"
                : "bg-gray-50 border border-gray-500  focus:ring-blue-500 focus:border-blue-500"
            } text-gray-900 text-sm rounded-lg block w-full p-2.5 placeholder:text-gray-600
          `}
              placeholder={user.NOMUSU}
              onChange={(event) =>
                setFormData({ ...formData, nombres: event.target.value })
              }
              required
            />
          </div>
          <div>
            <label
              htmlFor="last_name"
              className="block mb-2 text-sm font-medium text-gray-900"
            >
              Apellidos
            </label>
            <input
              type="text"
              id="last_name"
              className={`
            ${
              formError.apellidos
                ? "bg-red-50 border border-red-500 focus:ring-red-800 focus:border-red-800"
                : "bg-gray-50 border border-gray-500  focus:ring-blue-500 focus:border-blue-500"
            } text-gray-900 text-sm rounded-lg block w-full p-2.5 placeholder:text-gray-600
          `}
              placeholder={user.APEUSU}
              onChange={(event) =>
                setFormData({ ...formData, apellidos: event.target.value })
              }
              required
            />
          </div>
          <div>
            <label
              htmlFor="cedula"
              className="block my-2 text-sm font-medium text-gray-900"
            >
              Cedula
            </label>
            <input
              type="text"
              id="cedula"
              className={`
            ${
              formError.cedula
                ? "bg-red-50 border border-red-500 focus:ring-red-800 focus:border-red-800"
                : "bg-gray-50 border border-gray-500  focus:ring-blue-500 focus:border-blue-500"
            } text-gray-900 text-sm rounded-lg block w-full p-2.5 placeholder:text-gray-600
          `}
              placeholder={user.CODUSU}
              onChange={(event) =>
                setFormData({ ...formData, cedula: event.target.value })
              }
              required
            />
          </div>
          <div>
            <label
              htmlFor="genero"
              className="block my-2 text-sm font-medium text-gray-900"
            >
              Género
            </label>
            <select
              id="ciudad"
              className={`
            ${
              formError.genero
                ? "bg-red-50 border border-red-500 focus:ring-red-800 focus:border-red-800"
                : "bg-gray-50 border border-gray-500  focus:ring-blue-500 focus:border-blue-500"
            } text-gray-900 text-sm rounded-lg block w-full p-2.5 placeholder:text-gray-600
          `}
              onChange={(event) =>
                setFormData({ ...formData, genero: event.target.value })
              }
            >
              <option>{user.SEXUSU}</option>
              {user.SEXUSU === "Hombre" ? (
                ""
              ) : (
                <option value={"Hombre"}>Hombre</option>
              )}
              {user.SEXUSU === "Mujer" ? (
                ""
              ) : (
                <option value={"Mujer"}>Mujer</option>
              )}
              {user.SEXUSU === "Otro" ? (
                ""
              ) : (
                <option value={"Otro"}>Otro</option>
              )}
            </select>
          </div>
          <div>
            <label
              htmlFor="cargo"
              className="block my-2 text-sm font-medium text-gray-900"
            >
              Cargo
            </label>
            <select
              id="cargo"
              className={`
            ${
              formError.cargo
                ? "bg-red-50 border border-red-500 focus:ring-red-800 focus:border-red-800"
                : "bg-gray-50 border border-gray-500  focus:ring-blue-500 focus:border-blue-500"
            } text-gray-900 text-sm rounded-lg block w-full p-2.5 placeholder:text-gray-600
          `}
              onChange={(event) =>
                setFormData({ ...formData, cargo: event.target.value })
              }
            >
              <option>{user.CARGOUSU}</option>
              {user.CARGOUSU === "Administrador" ? (
                ""
              ) : (
                <option value={"Administrador"}>Administrador</option>
              )}
              {user.CARGOUSU === "Enfermero" ? (
                ""
              ) : (
                <option value={"Enfermero"}>Enfermero</option>
              )}
              {/* <option value={"Otro"}>Otro</option> */}
            </select>
          </div>
          <div>
            <label
              htmlFor="phone"
              className="block my-2 text-sm font-medium text-gray-900"
            >
              Celular
            </label>
            <input
              type="tel"
              id="phone"
              className={`
            ${
              formError.celular
                ? "bg-red-50 border border-red-500 focus:ring-red-800 focus:border-red-800"
                : "bg-gray-50 border border-gray-500  focus:ring-blue-500 focus:border-blue-500"
            } text-gray-900 text-sm rounded-lg block w-full p-2.5 placeholder:text-gray-600
          `}
              placeholder={user.CELUSU}
              pattern="[0-9]{3}-[0-9]{2}-[0-9]{3}"
              onChange={(event) =>
                setFormData({ ...formData, celular: event.target.value })
              }
              required
            />
          </div>
          <div>
            <label
              htmlFor="phone"
              className="block my-2 text-sm font-medium text-gray-900"
            >
              Teléfono
            </label>
            <input
              type="tel"
              id="phone"
              className={`
            ${
              formError.telefono
                ? "bg-red-50 border border-red-500 focus:ring-red-800 focus:border-red-800"
                : "bg-gray-50 border border-gray-500  focus:ring-blue-500 focus:border-blue-500"
            } text-gray-900 text-sm rounded-lg block w-full p-2.5 placeholder:text-gray-600
          `}
              placeholder={user.TELUSU}
              pattern="[0-9]{3}-[0-9]{2}-[0-9]{3}"
              onChange={(event) =>
                setFormData({ ...formData, telefono: event.target.value })
              }
              required
            />
          </div>
          <div>
            <label
              htmlFor="website"
              className="block my-2 text-sm font-medium text-gray-900"
            >
              Dirección
            </label>
            <input
              type="url"
              id="website"
              className={`
            ${
              formError.direccion
                ? "bg-red-50 border border-red-500 focus:ring-red-800 focus:border-red-800"
                : "bg-gray-50 border border-gray-500  focus:ring-blue-500 focus:border-blue-500"
            } text-gray-900 text-sm rounded-lg block w-full p-2.5 placeholder:text-gray-600
          `}
              placeholder={user.DIRUSU}
              onChange={(event) =>
                setFormData({ ...formData, direccion: event.target.value })
              }
              required
            />
          </div>
          <div>
            <label
              htmlFor="provincia"
              className="block my-2 text-sm font-medium text-gray-900"
            >
              Provincia
            </label>
            <select
              id="provincia"
              className={`
            ${
              formError.provincia
                ? "bg-red-50 border border-red-500 focus:ring-red-800 focus:border-red-800"
                : "bg-gray-50 border border-gray-500  focus:ring-blue-500 focus:border-blue-500"
            } text-gray-900 text-sm rounded-lg block w-full p-2.5 placeholder:text-gray-600
          `}
              onChange={(event) =>
                setFormData({ ...formData, provincia: event.target.value })
              }
            >
              <option value={user.PROUSU}>{user.PROUSU}</option>
              {provinciaLista.map((data) =>
                user.PROUSU === data.provincia ? (
                  ""
                ) : (
                  <option key={data.id} value={data.id}>
                    {data.provincia}
                  </option>
                )
              )}
            </select>
          </div>
          <div>
            <label
              htmlFor="ciudad"
              className="block my-2 text-sm font-medium text-gray-900"
            >
              Ciudad
            </label>
            <select
              id="ciudad"
              className={`
            ${
              formError.ciudad
                ? "bg-red-50 border border-red-500 focus:ring-red-800 focus:border-red-800"
                : "bg-gray-50 border border-gray-500  focus:ring-blue-500 focus:border-blue-500"
            } text-gray-900 text-sm rounded-lg block w-full p-2.5 placeholder:text-gray-600
          `}
              disabled={formData.provincia ? false : true}
              onChange={(event) =>
                setFormData({ ...formData, ciudad: event.target.value })
              }
            >
              <option>{user.CIUUSU}</option>
              {ciudadLista.map((data) =>
                user.PROUSU === data.canton ? (
                  ""
                ) : (
                  <option key={data.id} value={data.id}>
                    {data.canton}
                  </option>
                )
              )}
            </select>
          </div>
        </div>
        <div className="">
          <label
            htmlFor="email"
            className="block my-2 text-sm font-medium text-gray-900"
          >
            Correo
          </label>
          <input
            type="email"
            id="email"
            className={`
        ${
          formError.correo
            ? "bg-red-50 border border-red-500 focus:ring-red-800 focus:border-red-800"
            : "bg-gray-50 border border-gray-500  focus:ring-blue-500 focus:border-blue-500"
        } text-gray-900 text-sm rounded-lg block w-full p-2.5 placeholder:text-gray-600
      `}
            placeholder={user.EMAILUSU}
            onChange={(event) =>
              setFormData({ ...formData, correo: event.target.value })
            }
            required
          />
        </div>
        <div className="">
          <label
            htmlFor="password"
            className="block my-2 text-sm font-medium text-gray-900"
          >
            Contraseña
          </label>
          <input
            type="password"
            id="password"
            className={`
        ${
          formError.password === true
            ? "bg-red-50 border border-red-500 focus:ring-red-800 focus:border-red-800"
            : formError.password === false
            ? "bg-green-100 border border-green-500 focus:ring-green-800 focus:border-green-800"
            : "bg-gray-50 border border-gray-500  focus:ring-blue-500 focus:border-blue-500"
        } text-gray-900 text-sm rounded-lg block w-full p-2.5 placeholder:text-gray-600
      `}
            placeholder={user.PASSWOUSU}
            onChange={(event) =>
              setFormData({ ...formData, password: event.target.value })
            }
            required
          />
        </div>
        <div className="">
          <label
            htmlFor="confirm_password"
            className="block my-2 text-sm font-medium text-gray-900"
          >
            Confirmar Contraseña
          </label>
          <input
            type="password"
            id="confirm_password"
            className={`
        ${
          formError.repeatPassword === true
            ? "bg-red-50 border border-red-500 focus:ring-red-800 focus:border-red-800"
            : formError.repeatPassword === false
            ? "bg-green-100 border border-green-500 focus:ring-green-800 focus:border-green-800"
            : "bg-gray-50 border border-gray-500  focus:ring-blue-500 focus:border-blue-500"
        } text-gray-900 text-sm rounded-lg block w-full p-2.5 placeholder:text-gray-600
      `}
            placeholder={user.PASSWOUSU}
            onChange={(event) =>
              setFormData({ ...formData, repeatPassword: event.target.value })
            }
            required
          />
        </div>
        <button
          type="submit"
          className="w-48 text-white focus:ring-4 focus:outline-none font-medium rounded-lg text-sm px-5 py-2.5 text-center bg-blue-600 hover:bg-blue-700 focus:ring-blue-800 my-6"
          onClick={(event) => handleSubmitUsuario(event)}
        >
          Guardar
        </button>
      </form>
    </>
  );
}

function defaultVaule() {
  return {
    cedula: "",
    password: "",
    repeatPassword: "",
    nombres: "",
    apellidos: "",
    genero: "",
    ciudad: "",
    provincia: 0,
    direccion: "",
    telefono: "",
    celular: "",
    correo: "",
    cargo: "",
  };
}
