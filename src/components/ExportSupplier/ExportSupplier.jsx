import React from "react";
// import ExportExcel from "react-export-excel";

export function ExportSupplier() {
  //   const ExcelFile = ExportExcel.ExcelFile;
  //   const ExcelSheet = ExportExcel.ExcelSheet;
  //   const ExcelColumn = ExportExcel.ExcelColumn;
  return (
    <div className="py-5 px-10">
      <div>
        <div class="w-full p-4 text-center bg-white border rounded-lg shadow-md sm:p-8 dark:bg-gray-800 dark:border-gray-700">
          <h5 class="mb-2 text-3xl font-bold text-gray-900 dark:text-white">
            Exportar Datos para el Proveedor
          </h5>
        </div>
        {/* <div>
          <ExcelFile
            element={
              <button class="w-full text-white bg-gray-900 hover:bg-red-800 focus:ring-4 focus:outline-none focus:ring-red-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-red-600 dark:hover:bg-red-700 dark:focus:ring-red-800">
                Exportar
              </button>
            }
            filename={`Proveedor`}
          >
            <ExcelSheet data={{}} name="Casos">
              <ExcelColumn label="Id" value="_id" />
              <ExcelColumn label="Estado" value="idEstado" />
              <ExcelColumn label="Motivo" value="idMotivo" />
              <ExcelColumn label="Fecha" value="createdAt" />
            </ExcelSheet>
            <ExcelSheet data={{}} name="Detalles">
              <ExcelColumn label="Id del Caso" value="idCaso" />
              <ExcelColumn label="Fecha" value="fecha" />
              <ExcelColumn label="Estado" value="tipoUso" />
            </ExcelSheet>
          </ExcelFile>
        </div> */}
      </div>
    </div>
  );
}
