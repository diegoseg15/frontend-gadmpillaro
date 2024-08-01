import React, { useState } from "react";
import { Grafica } from "../Cards/Grafica"; // Importa el componente Grafica desde el archivo "../Cards/Grafica"
import { Inventario } from "../Cards/Inventario"; // Importa el componente Inventario desde el archivo "../Cards/Inventario"
import { Indicator } from "../Cards/Indicator"; // Importa el componente Indicator desde el archivo "../Cards/Indicator"
import { Cantidades } from "../Cards/Cantidades"; // Importa el componente Cantidades desde el archivo "../Cards/Cantidades"
// import { AdultoMayor } from "../Cards/AdultoMayor"; // Comentario: Este componente AdultoMayor está comentado, es decir, no se está utilizando en el código actualmente.

export function Dashboard(props) {
  const { data, idArticulos, setIdAtidulos } = props;

  return (
    <div className="h-screen bg-white">
      <div className="pt-6 px-4">
        <div className="w-full grid grid-cols-1 xl:grid-cols-2 2xl:grid-cols-3 gap-4">
          <Grafica
            data={data}
            idArticulos={idArticulos}
            setIdAtidulos={setIdAtidulos}
          />
          {/* Renderiza el componente Grafica */}
          <Inventario
            data={data}
            idArticulos={idArticulos}
            setIdAtidulos={setIdAtidulos}
          />
          {/* Renderiza el componente Inventario */}
        </div>
        <Indicator />
        {/* Renderiza el componente Indicator */}
        <div className="grid grid-cols-1 2xl:grid-cols-2 xl:gap-4 my-4">
          {/* <AdultoMayor /> */}{" "}
          {/* Comentario: Este componente AdultoMayor está comentado, es decir, no se está utilizando en el código actualmente. */}
          <Cantidades
            data={data}
            idArticulos={idArticulos}
            setIdAtidulos={setIdAtidulos}
          />
          {/* Renderiza el componente Cantidades */}
        </div>
      </div>
    </div>
  );
}
