import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { TablaInventario } from "../../../components/TablaInventario/TablaInventario";
import { ListaArticulosApi } from "../../../API/Articulos";
import { Toast } from "../../../components/Toast";

export default function Bodega() {
  const { id } = useParams();
  const [dataMensaje, setDataMesaje] = useState("");
  const [tipoToast, setTipoToast] = useState(0);

  const [articulos, setArticulos] = useState([{ nomart: "" }]);

  const head = [
    { title: "Descripción" },
    { title: "Tipo" },
    { title: "Cántidad" },
    { title: "Consumo Máximo" },
    { title: "Consumo Minimo" },
    { title: "Precio" },
    { title: "Costo" },
  ];

  useEffect(() => {
    ListaArticulosApi(id).then((res) => {
      setArticulos(res);
    });
  }, [id]);

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
      <div className="overflow-x-hidden px-12 mb-16">
        <div className="flex text-3xl font-bold pt-14 pb-9">
          Tabla de Inventario de {id.toLocaleLowerCase()}
        </div>
        <TablaInventario
          head={head}
          bodyt={articulos}
          id={id}
          setTipoToast={setTipoToast}
          setDataMesaje={setDataMesaje}
        />
      </div>
    </>
  );
}
