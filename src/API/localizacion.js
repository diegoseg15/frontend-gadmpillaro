import { basePath, apiVersion } from "./config";

export function ListaProvinciasApi() {
  const url = `${basePath}/${apiVersion}/provincias`;

  return fetch(url)
    .then((response) => {
      return response.json();
    })
    .then((result) => {
      return result;
    })
    .catch((err) => {
      // window.location.href = ("http://localhost:3000", "/error500");
      return err.message;
    });
}

export function ListaCiudadesApi(id_provincias) {
  const url = `${basePath}/${apiVersion}/ciudades/${id_provincias}`;

  return fetch(url)
    .then((response) => {
      return response.json();
    })
    .then((result) => {
      return result;
    })
    .catch((err) => {
      // window.location.href = ("http://localhost:3000", "/error500");
      return err.message;
    });
}
