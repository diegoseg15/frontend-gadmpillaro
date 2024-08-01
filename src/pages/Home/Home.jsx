import React, { useEffect, useState } from "react";
import { Dashboard } from "../../components/Dashboard";
import { ListaArticulosApi } from "../../API/Articulos";

export function Home() {
  const [idArticulos, setIdAtidulos] = useState("BODEGA");
  const [articulos, setArticulos] = useState([{ nomart: "" }]);

  useEffect(() => {
    ListaArticulosApi(idArticulos).then((res) => {
      setArticulos(res);
    });
  }, [idArticulos]);

  return (
    <>
      <Dashboard
        data={articulos}
        idArticulos={idArticulos}
        setIdAtidulos={setIdAtidulos}
      />
    </>
  );
}
