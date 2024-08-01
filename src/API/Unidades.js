import { basePath, apiVersion } from "./config";

export function ListaUnidadesApi() {
  const url = `${basePath}/${apiVersion}/unidades`;

  return fetch(url)
    .then((response) => {
      return response.json();
    })
    .then((result) => {
      return result;
    })
    .catch((err) => {
      // window.location.href = ("http://localhost:3000", "/error500");
      return err;
    });
}