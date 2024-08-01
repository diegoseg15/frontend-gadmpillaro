import React, { useState } from "react";
import { Toast } from "../../../components/Toast";
import { FormEditarUsuario } from "../../../components/Formularios/FormEditarUsuario";
import { useParams } from "react-router-dom";

export default function EditarUsuario() {
  const { id } = useParams();
  const [dataMensaje, setDataMesaje] = useState("");
  const [tipoToast, setTipoToast] = useState(0);
  return (
    <>
      {dataMensaje ? (
        tipoToast !== 0 ? (
          <Toast setDataMesaje={setDataMesaje} setTipo={setTipoToast} />
        ) : (
          ""
        )
      ) : (
        ""
      )}
      <div className="py-10 px-40">
        <FormEditarUsuario
          id={id}
          setTipoToast={setTipoToast}
          setDataMesaje={setDataMesaje}
        />
      </div>
    </>
  );
}
