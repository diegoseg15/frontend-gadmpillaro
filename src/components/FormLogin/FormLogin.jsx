import React, { useEffect, useState } from "react";
import { EmpresasList } from "../../API/Empresas";

export function FormLogin() {
  const [empresas, setEmpresas] = useState([]);

  // const empresa = "GADM PILLARO";

  useEffect(() => {
    fetch("http://localhost/backend/cargar_empresa.php")
      .then((response) => response.json())
      .then((data) => setEmpresas(data));
  }, []);

  console.log(empresas);

  return (
    <>
      <div className="flex pb-10 justify-center">
        <img
          className="w-28 h-auto"
          src="https://www.pillaro.gob.ec/wp-content/uploads/2019/06/ESCUDO.jpg"
        />
      </div>
      <div className="text-center">
        <h2 className="text-4xl font-bold text-center text-gray-700">
          GADM de Píllaro
        </h2>

        <p className="mt-3 text-gray-500">
          Inicia sesión para acceder a tu cuenta
        </p>
      </div>
      <div className="mt-8 px-10">
        <form>
          <div>
            <select className="mb-2 block w-full px-4 py-2 mt-2 text-gray-700 placeholder-gray-400 bg-white border border-gray-200 rounded-md focus:ring-blue-400 focus:outline-none focus:ring focus:ring-opacity-40">
              <option disabled selected>Seleciona la Empresa</option>
              {empresas.map((option) => (
                <option key={option.CODEMP}>{option.NOMEMP}</option>
              ))}
            </select>
          </div>
          <div>
            <label for="email" className="block mb-2 text-sm text-gray-600">
              Usuario
            </label>
            <input
              type="text"
              name="tb_user"
              id="user"
              placeholder="Tu Usuario"
              className="block w-full px-4 py-2 mt-2 text-gray-700 placeholder-gray-400 bg-white border border-gray-200 rounded-md focus:ring-blue-400 focus:outline-none focus:ring focus:ring-opacity-40"
            />
          </div>

          <div className="mt-6">
            <div className="flex justify-between mb-2">
              <label for="password" className="text-sm text-gray-600">
                Contraseña
              </label>
            </div>

            <input
              type="password"
              name="tb_password"
              id="password"
              placeholder="Tu Contaseña"
              className="block w-full px-4 py-2 mt-2 text-gray-700 placeholder-gray-400 bg-white border border-gray-200 rounded-md focus:ring-blue-400 focus:outline-none focus:ring focus:ring-opacity-40"
            />
          </div>
          
          <div className="mt-6">
            <button className="w-full px-4 py-2 tracking-wide text-white transition-colors duration-200 transform bg-blue-500 rounded-md hover:bg-blue-400 focus:outline-none focus:bg-blue-400 focus:ring focus:ring-blue-300 focus:ring-opacity-50">
              Iniciar Sesión
            </button>
          </div>
        </form>
      </div>
    </>
  );
}
