import React from "react";
import { Route, Routes } from "react-router-dom";
import { AdminLayout } from "../layouts/AdminLayout";
import { Home } from "../pages/Home";
import InventarioBodega from "../pages/Inventarios/Bodega/Bodega";
import FormularioInventario from "../pages/Formularios/Inventario/Inventario";
import FormularioNuevoUsuario from "../pages/Formularios/NuevoUsuario/NuevoUsuario";
import FormularioEditarUsuario from "../pages/Formularios/EditarUsuario/EditarUsuario";
import { Nurse } from "../pages/Nurse";
import { Export } from "../pages/Export";
import { Users } from "../pages/Users";
import { Settings } from "../pages/Settings";
import ERROR404 from "../pages/ERROR/ERROR404";
import { Manual } from "../pages/Manual";

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
        path="/inventario/:id"
        element={loadLayout(AdminLayout, InventarioBodega)}
      />
      <Route
        path="/formulario/:id"
        element={loadLayout(AdminLayout, FormularioInventario)}
      />
      <Route
        path="/formulario/:id/:codigoarticulo"
        element={loadLayout(AdminLayout, FormularioInventario)}
      />
      <Route path="/usuarios" element={loadLayout(AdminLayout, Users)} />
      <Route
        path="/nuevo-usuario"
        element={loadLayout(AdminLayout, FormularioNuevoUsuario)}
      />
      <Route
        path="/editar-usuario/:id"
        element={loadLayout(AdminLayout, FormularioEditarUsuario)}
      />
      <Route
        path="/exportar_proveedor/:id"
        element={loadLayout(AdminLayout, Export)}
      />
      <Route
        path="/exportar_data/:id"
        element={loadLayout(AdminLayout, Export)}
      />
      <Route path="/enfermería" element={loadLayout(AdminLayout, Nurse)} />
      <Route
        path="/configuracion"
        element={loadLayout(AdminLayout, Settings)}
      />
      <Route path="/manual" element={loadLayout(AdminLayout, Manual)} />
      <Route path="/*" element={loadLayout(AdminLayout, ERROR404)} />
    </Routes>
  );
}
