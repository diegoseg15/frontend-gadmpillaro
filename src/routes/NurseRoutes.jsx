import React from "react";
import { Route, Routes } from "react-router-dom";
import { NurseLayout } from "../layouts/NurseLayout";
import { Nurse } from "../pages/Nurse";

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
      <Route path="/" element={loadLayout(NurseLayout, Nurse)} />
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
