import React, { useState } from "react";
import { TablaUsuarios } from "../../components/TablaUsuarios/TablaUsuarios";
import { Toast } from "../../components/Toast";

export function Users() {
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
      <div className="py-10 px-16">
        <h1 className="text-2xl py-5 font-semibold">Usuarios</h1>
        <TablaUsuarios />
      </div>
    </>
  );
}
