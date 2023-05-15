import "./App.css";
import { BrowserRouter } from "react-router-dom";
import AdminRoutes from "./routes/AdminRoutes";
import LoginRoutes from "./routes/LoginRoutes";
import NurseRoutes from "./routes/NurseRoutes";

function App() {
  // if (window.location.pathname !== "/login") window.location.href = "/login";
  const login = true;
  const rol = "admin";
  function NoLogIn() {
    if (window.location.pathname !== "/login") window.location.href = "/login";
    return <LoginRoutes />;
  }
  function LogIn() {
    if (window.location.pathname === "/login") window.location.href = "/";
    return (
      <>
        {rol === "admin" ? (
          <AdminRoutes />
        ) : rol === "enfermero" ? (
          <NurseRoutes />
        ) : (
          ""
        )}
      </>
    );
  }
  return (
    <>
      <BrowserRouter>{login === true ? <LogIn /> : <NoLogIn />}</BrowserRouter>
    </>
  );
}

export default App;
