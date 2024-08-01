import "./App.css";
import Cookies from "universal-cookie";
import { BrowserRouter } from "react-router-dom";
import AdminRoutes from "./routes/AdminRoutes";
import LoginRoutes from "./routes/LoginRoutes";
import NurseRoutes from "./routes/NurseRoutes";

function App() {
  const cookies = new Cookies();
  function NoLogIn() {
    if (window.location.pathname !== "/login") window.location.href = "/login";
    return <LoginRoutes />;
  }
  function LogIn() {
    if (window.location.pathname === "/login") window.location.href = "/";
    return (
      <>
        {cookies.get("cargo") === "ADMINISTRADOR" ? (
          <AdminRoutes />
        ) : cookies.get("cargo") === "ENFERMERO" ? (
          <NurseRoutes />
        ) : (
          ""
        )}
      </>
    );
  }
  return (
    <>
      <BrowserRouter>
        {cookies.get("login") === "true-log" ? <LogIn /> : <NoLogIn />}
      </BrowserRouter>
    </>
  );
}

export default App;
