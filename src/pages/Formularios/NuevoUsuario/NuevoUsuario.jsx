import React, { useState } from "react";
import { FormNuevoUsuario } from "../../../components/Formularios/FormNuevoUsuario";
import { Toast } from "../../../components/Toast";

export default function NuevoUsuario() {
  const [dataMensaje, setDataMesaje] = useState("");
  const [tipoToast, setTipoToast] = useState(0);
  return (
    <>
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
      <div className="py-10 px-40">
        <FormNuevoUsuario
          tipoToast={tipoToast}
          setTipoToast={setTipoToast}
          setDataMesaje={setDataMesaje}
        />
      </div>
    </>
  );
}
