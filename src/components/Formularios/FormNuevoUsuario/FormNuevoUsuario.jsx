import React, { useEffect, useState } from "react";
import { addUsuarioApi } from "../../../API/Empleados";
// import { dataUser } from "../../../utils/UserLog";
import {
  ListaCiudadesApi,
  ListaProvinciasApi,
} from "../../../API/localizacion";

export function FormNuevoUsuario(props) {
  const { setTipoToast, setDataMesaje, tipoToast } = props;
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
      // console.log(res.Areas);
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
    if (
      !formData.cedula ||
      !formData.nombres ||
      !formData.apellidos ||
      !formData.correo ||
      !formData.password ||
      !formData.repeatPassword ||
      !formData.genero ||
      !formData.ciudad ||
      !formData.provincia ||
      !formData.direccion ||
      !formData.celular ||
      !formData.telefono ||
      !formData.cargo
    ) {
      if (!formData.cedula) errors.cedula = true;
      if (!formData.nombres) errors.nombres = true;
      if (!formData.apellidos) errors.apellidos = true;
      if (!formData.correo) errors.correo = true;
      if (!formData.password) errors.password = true;
      if (!formData.repeatPassword) errors.repeatPassword = true;
      if (!formData.genero) errors.genero = true;
      if (!formData.ciudad) errors.ciudad = true;
      if (!formData.provincia) errors.provincia = true;
      if (!formData.direccion) errors.direccion = true;
      if (!formData.celular) errors.celular = true;
      if (!formData.telefono) errors.telefono = true;
      if (!formData.cargo) errors.cargo = true;
      setDataMesaje("Es obligatorio llenar todos los datos.");
      setTipoToast(2);
    } else if (formData.password === formData.repeatPassword) {
      const dataUser = {
        cod_emp: "01",
        cod_usu: formData.cedula,
        passwo_usu: formData.password,
        nom_usu: formData.nombres,
        ape_usu: formData.apellidos,
        sex_usu: formData.genero,
        ciu_usu: formData.ciudad,
        pro_usu: provinciaLista.find(
          (prov) => formData.provincia.toString() === prov.id.toString()
        ).provincia,
        dir_usu: formData.direccion,
        tel_usu: formData.telefono,
        cel_usu: formData.celular,
        email_usu: formData.correo,
        cargo_usu: formData.cargo.toUpperCase(),
        estado: "1",
        fecing: hoy,
      };

      // setFormData(defaultVaule());

      // console.log(dataUser);
      addUsuarioApi(dataUser)
        .then((response) => {
          setDataMesaje(response.mensaje);
          setTipoToast(
            response.mensaje === "Error al insertar el Usuario."
              ? 3
              : response.mensaje === "Usuario insertado correctamente."
              ? 1
              : response.mensaje === "Datos necesarios"
              ? 2
              : response.mensaje === "Cédula incorrecta"
              ? 2
              : response.mensaje === "Correo electronico invalido"
              ? 2
              : response.mensaje === "No tienes derechos de administrador"
              ? 3
              : 3
          );
          if (
            response.mensaje === "Usuario insertado correctamente." ||
            tipoToast === 1
          ) {
            window.location.href = "/usuarios";
            console.log(response);
          }
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
            } text-gray-900 text-sm rounded-lg block w-full p-2.5 placeholder:text-gray-400
          `}
              placeholder="Juan"
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
            } text-gray-900 text-sm rounded-lg block w-full p-2.5 placeholder:text-gray-400
              `}
              placeholder="Perez"
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
            } text-gray-900 text-sm rounded-lg block w-full p-2.5 placeholder:text-gray-400
              `}
              placeholder="182345678"
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
            } text-gray-900 text-sm rounded-lg block w-full p-2.5 placeholder:text-gray-400
              `}
              onChange={(event) =>
                setFormData({ ...formData, genero: event.target.value })
              }
            >
              <option>Selecciona el Género</option>
              <option value={"Hombre"}>Hombre</option>
              <option value={"Mujer"}>Mujer</option>
              <option value={"Otro"}>Otro</option>
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
            } text-gray-900 text-sm rounded-lg block w-full p-2.5 placeholder:text-gray-400
              `}
              onChange={(event) =>
                setFormData({ ...formData, cargo: event.target.value })
              }
            >
              <option>Selecciona el Cargo</option>
              <option value={"Administrador"}>Administrador</option>
              <option value={"Enfermero"}>Enfermero</option>
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
            } text-gray-900 text-sm rounded-lg block w-full p-2.5 placeholder:text-gray-400
              `}
              placeholder="098 765 4321"
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
            } text-gray-900 text-sm rounded-lg block w-full p-2.5 placeholder:text-gray-400
              `}
              placeholder="098 765 4321"
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
            } text-gray-900 text-sm rounded-lg block w-full p-2.5 placeholder:text-gray-400
              `}
              placeholder="Av. Ejemplo"
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
            } text-gray-900 text-sm rounded-lg block w-full p-2.5 placeholder:text-gray-400
              `}
              onChange={(event) =>
                setFormData({ ...formData, provincia: event.target.value })
              }
            >
              <option>Selecciona la Provincia</option>
              {provinciaLista.map((data) => (
                <option key={data.id} value={data.id}>
                  {data.provincia}
                </option>
              ))}
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
            } text-gray-900 text-sm rounded-lg block w-full p-2.5 placeholder:text-gray-400
              `}
              disabled={formData.provincia ? false : true}
              onChange={(event) =>
                setFormData({ ...formData, ciudad: event.target.value })
              }
            >
              <option>Selecciona la Ciudad</option>
              {ciudadLista.map((data) => (
                <option key={data.id} value={data.canton}>
                  {data.canton}
                </option>
              ))}
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
        } text-gray-900 text-sm rounded-lg block w-full p-2.5 placeholder:text-gray-400
          `}
            placeholder="ejemplo@company.com"
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
        } text-gray-900 text-sm rounded-lg block w-full p-2.5 placeholder:text-gray-400
          `}
            placeholder="•••••••••"
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
        } text-gray-900 text-sm rounded-lg block w-full p-2.5 placeholder:text-gray-400
          `}
            placeholder="•••••••••"
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
