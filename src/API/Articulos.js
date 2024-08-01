import { basePath, apiVersion } from "./config";

export function ListaArticulosApi(codinv) {
  const url = `${basePath}/${apiVersion}/articulo/${codinv}`;

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

export function ListaTodosArticulosApi() {
  const url = `${basePath}/${apiVersion}/todosarticulos`;

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

export function addArticuloApi(dataArticulo) {
  const url = `${basePath}/${apiVersion}/creararticulo`;

  const params = {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(dataArticulo),
  };

  return fetch(url, params)
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

export function ListaClaseArticuloApi() {
  const url = `${basePath}/${apiVersion}/clasearticulos`;

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

export function addClaseArticuloApi(dataClase) {
  const url = `${basePath}/${apiVersion}/crearclassarticle`;

  const params = {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(dataClase),
  };
  return fetch(url, params)
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

export function ListaInventariosApi() {
  const url = `${basePath}/${apiVersion}/inventarios`;

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
