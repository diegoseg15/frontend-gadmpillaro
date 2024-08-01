import React, { useState } from "react";
import { ExportSupplier } from "../../components/ExportSupplier/ExportSupplier";
import { Toast } from "../../components/Toast";
import { ExportData } from "../../components/Export";
import { useParams } from "react-router-dom";

export function Export() {
  // Estados para el mensaje y tipo del Toast
  const { id } = useParams();
  const [dataMensaje, setDataMesaje] = useState("");
  const [tipoToast, setTipoToast] = useState(0);

  return (
    <>
      {/* Renderización del componente Toast si hay un mensaje */}
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

      <div>
        {/* Renderización del componente ExportSupplier */}
        {window.location.pathname === `/exportar_proveedor/${id}` ? (
          <ExportSupplier
            setDataMesaje={setDataMesaje}
            setTipoToast={setTipoToast}
          />
        ) : window.location.pathname === `/exportar_data/${id}` ? (
          <ExportData id={id} />
        ) : (
          <></>
        )}
      </div>
    </>
  );
}
