export function EmpresasList() {
    const url = `/backend/cargar_empresa.php`;
  
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