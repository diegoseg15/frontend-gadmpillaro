import "./App.css";
import { BrowserRouter } from "react-router-dom";
import AdminRoutes from "./routes/AdminRoutes";
import LoginRoutes from "./routes/LoginRoutes";

function App() {
  // if (window.location.pathname !== "/login") window.location.href = "/login";
  return (
    <>
      <BrowserRouter>
        <AdminRoutes />
        {/* <LoginRoutes /> */}
      </BrowserRouter>
    </>
  );
}

export default App;
