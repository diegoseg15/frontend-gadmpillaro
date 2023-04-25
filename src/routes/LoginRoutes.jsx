import React from "react";
import { Route, Routes } from "react-router-dom";
import { LoginLayout } from "../layouts/LoginLayout";
import { Login } from "../pages/Login";

export default function LoginRoutes() {
  const loadLayout = (Layout, Page) => {
    return (
      <Layout>
        <Page />
      </Layout>
    );
  };
  return (
    <Routes>
      <Route path="/login" element={loadLayout(LoginLayout, Login)} />
    </Routes>
  );
}
