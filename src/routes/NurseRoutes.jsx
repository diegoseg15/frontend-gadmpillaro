import React from "react";
import { Route, Routes } from "react-router-dom";
import { AdminLayout } from "../layouts/AdminLayout";
import { Home } from "../pages/Home";
import InventarioBodega from "../pages/Inventarios/Bodega/Bodega";
import FormularioBodega from "../pages/Formularios/Bodega/Bodega";
import { Export } from "../pages/Export";
import { NurseLayout } from "../layouts/NurseLayout";

export default function NurseRoutes() {
  const loadLayout = (Layout, Page) => {
    return (
      <Layout>
        <Page />
      </Layout>
    );
  };
  return (
    <Routes>
      <Route path="/" element={loadLayout(NurseLayout, Home)} />
      {/* <Route
        path="/inventario/:id"
        element={loadLayout(NurseLayout, InventarioBodega)}
      />
      <Route
        path="/formulario/:id"
        element={loadLayout(NurseLayout, FormularioBodega)}
      />
      <Route
        path="/exportar_proveedor/:id"
        element={loadLayout(NurseLayout, Export)}
      /> */}
    </Routes>
  );
}
