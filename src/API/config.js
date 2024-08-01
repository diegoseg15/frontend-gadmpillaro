export const basePath =
  window.location.host.toString() === "192.168.212.226:3000"
    ? "http://192.168.212.226:3977/api"
    : "http://localhost:3977/api";
export const apiVersion = "v1";
