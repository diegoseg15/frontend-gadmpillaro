import React from "react";
import { Route, Routes } from "react-router-dom";
import { AdminLayout } from "../layouts/AdminLayout";
import { Home } from "../pages/Home";
import InventarioBodega from "../pages/Inventarios/Bodega/Bodega";
import InventarioCocina from "../pages/Inventarios/Cocina/Cocina";
import InventarioMedicina from "../pages/Inventarios/Medicina/Medicina";
import FormularioBodega from "../pages/Formularios/Bodega/Bodega";
import FormularioCocina from "../pages/Formularios/Cocina/Cocina";
import FormularioMedicina from "../pages/Formularios/Medicinas/Medicinas";

export default function AdminRoutes() {
  const loadLayout = (Layout, Page) => {
    return (
      <Layout>
        <Page />
      </Layout>
    );
  };
  return (
    <Routes>
      <Route path="/" element={loadLayout(AdminLayout, Home)} />
      <Route
        path="/inventario-bodega"
        element={loadLayout(AdminLayout, InventarioBodega)}
      />
      <Route
        path="/inventario-cocina"
        element={loadLayout(AdminLayout, InventarioCocina)}
      />
      <Route
        path="/inventario-medicinas"
        element={loadLayout(AdminLayout, InventarioMedicina)}
      />
      <Route path="/" element={loadLayout(AdminLayout, Home)} />
      <Route
        path="/formulario-bodega"
        element={loadLayout(AdminLayout, FormularioBodega)}
      />
      <Route
        path="/formulario-cocina"
        element={loadLayout(AdminLayout, FormularioCocina)}
      />
      <Route
        path="/formulario-medicinas"
        element={loadLayout(AdminLayout, FormularioMedicina)}
      />
    </Routes>
  );
}
