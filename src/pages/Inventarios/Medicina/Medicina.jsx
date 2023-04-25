import React from "react";
import { TablaInventario } from "../../../components/TablaInventario/TablaInventario";

export default function Medicina() {
  const head = [
    { title: "" },
    { title: "" },
    { title: "" },
    { title: "" },
    { title: "" },
    { title: "" },
  ];
  const body = [{ title: "" }];
  return (
    <div className="overflow-x-hidden p-8">
      <div className="flex text-3xl font-bold py-10">
        Tabla de Inventario de Medicinas
      </div>
      <TablaInventario head={head} body={body} />
    </div>
  );
}