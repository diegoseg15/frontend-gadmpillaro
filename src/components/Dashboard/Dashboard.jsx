import React from "react";
import { Grafica } from "../Cards/Grafica";
import { Inventario } from "../Cards/Inventario";
import { Indicator } from "../Cards/Indicator";
import { Cantidades } from "../Cards/Cantidades";
// import { AdultoMayor } from "../Cards/AdultoMayor";

export function Dashboard() {
  return (
    <div className="h-screen bg-white">
      <div class="pt-6 px-4">
        <div class="w-full grid grid-cols-1 xl:grid-cols-2 2xl:grid-cols-3 gap-4">
          <Grafica />
          <Inventario />
        </div>
        <Indicator />
        <div class="grid grid-cols-1 2xl:grid-cols-2 xl:gap-4 my-4">
          {/* <AdultoMayor /> */}
          <Cantidades />
        </div>
      </div>
    </div>
  );
}
