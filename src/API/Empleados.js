import { basePath, apiVersion } from "./config";

export function UsuarioLoginApi(dataUser) {
  const url = `${basePath}/${apiVersion}/login`;

  const params = {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(dataUser),
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

export function ListaUsuariosApi(dataUser) {
  const url = `${basePath}/${apiVersion}/usuarios`;

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

export function addUsuarioApi(dataUsuario) {
  const url = `${basePath}/${apiVersion}/crear-usuario`;

  const params = {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(dataUsuario),
  };
  return fetch(url, params)
    .then((response) => {
      return response.json();
    })
    .then((result) => {
      return result;
    })
    .catch((err) => {
      return err;
    });
}

export function updateUsuarioApi(dataUser, id) {
  const url = `${basePath}/${apiVersion}/update-usuario/${id}`;

  const params = {
    method: "PUT",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(dataUser),
  };
  return fetch(url, params)
    .then((response) => {
      return response.json();
    })
    .then((result) => {
      return result.message;
    })
    .catch((err) => {
      // console.log(err);
    });
}

export function DeleteUsuario(idUsuario) {
  const url = `${basePath}/${apiVersion}/delete-usuario/${idUsuario}`;

  const params = {
    method: "DELETE",
  };
  return fetch(url, params)
    .then((response) => {
      return response.json();
    })
    .then((result) => {
      return result.message;
    })
    .catch((err) => {
      // console.log(err);
    });
}
