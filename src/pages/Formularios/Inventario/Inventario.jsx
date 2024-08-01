import React, { useState } from "react";
import { FormInventario } from "../../../components/Formularios/FormInventario";
import { Clase } from "../../../components/Modals/Clase";
import { Toast } from "../../../components/Toast";
import { useParams } from "react-router-dom";

export default function Inventario() {
  const { id, codigoarticulo } = useParams();
  const [open, setOpen] = useState(false);
  const [dataMensaje, setDataMesaje] = useState("");
  const [tipoToast, setTipoToast] = useState(0);
  return (
    <>
      {dataMensaje ? (
        tipoToast !== 0 ? (
          <Toast
            setDataMesaje={setDataMesaje}
            setTipo={setTipoToast}
            tipo={tipoToast}
            dataMensaje={dataMensaje}
          />
        ) : (
          ""
        )
      ) : (
        ""
      )}
      <div className="lg:px-16 lg:py-10">
        <Clase
          open={open}
          setOpen={setOpen}
          setTipoToast={setTipoToast}
          setDataMesaje={setDataMesaje}
        />
        <div className="flex justify-end px-10">
          <button
            type="submit"
            className="flex w-44 border-2 border-gray-400 text-gray-900 focus:outline-none font-medium rounded-lg text-sm pl-5 py-2.5 text-center bg-white hover:bg-primary focus:ring-gray-700 focus:ring-1 hover:text-white"
            onClick={(event) => {
              event.preventDefault();
              setOpen(true);
            }}
          >
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
              <path d="M12 5l0 14" />
              <path d="M5 12l14 0" />
            </svg>
            <span className="pl-2">Agregar Clase</span>
          </button>
        </div>

        <FormInventario
          id={id}
          tipoToast={tipoToast}
          setTipoToast={setTipoToast}
          setDataMesaje={setDataMesaje}
          codigoarticulo={codigoarticulo}
        />
      </div>
    </>
  );
}
