import React, { useEffect, useState } from "react";
import EscudoPillaro from "../../assets/imgs/EscudoPillaro.png";

export function FormLogin(props) {
  const { handleSubmitLogin, formData, setFormData } = props;

  return (
    <>
      <div className="flex pb-10 justify-center">
        <img className="w-28 h-auto" src={EscudoPillaro} />
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
            <label htmlFor="email" className="block mb-2 text-sm text-gray-600">
              Usuario
            </label>
            <input
              type="text"
              id="user"
              placeholder="Tu Usuario"
              className="block w-full px-4 py-2 mt-2 text-gray-700 placeholder-gray-400 bg-white border border-gray-200 rounded-md focus:ring-blue-400 focus:outline-none focus:ring focus:ring-opacity-40"
              onChange={(event) =>
                setFormData({ ...formData, cod_usu: event.target.value })
              }
            />
          </div>

          <div className="mt-6">
            <div className="flex justify-between mb-2">
              <label htmlFor="password" className="text-sm text-gray-600">
                Contraseña
              </label>
            </div>
            <input
              type="password"
              id="password"
              placeholder="•••••••••"
              className="block w-full px-4 py-2 mt-2 text-gray-700 placeholder-gray-400 bg-white border border-gray-200 rounded-md focus:ring-blue-400 focus:outline-none focus:ring focus:ring-opacity-40"
              onChange={(event) =>
                setFormData({ ...formData, passwo_usu: event.target.value })
              }
            />
          </div>

          <div className="mt-6">
            <button
              className="w-full px-4 py-2 tracking-wide text-white transition-colors duration-200 transform bg-blue-500 rounded-md hover:bg-blue-400 focus:outline-none focus:bg-blue-400 focus:ring focus:ring-blue-300 focus:ring-opacity-50"
              onClick={(event) => handleSubmitLogin(event)}
            >
              Iniciar Sesión
            </button>
          </div>
        </form>
      </div>
    </>
  );
}
