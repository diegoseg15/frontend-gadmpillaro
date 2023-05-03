import React from "react";
import { useParams } from "react-router-dom";
import { TablaInventario } from "../../../components/TablaInventario/TablaInventario";

export default function Bodega() {
  const { id } = useParams();

  const head = [
    { title: "Descripción" },
    { title: "Especificaciones" },
    { title: "Tipo" },
    { title: "Cántidad" },
    { title: "Consumo Máximo" },
    { title: "Costo" },
  ];

  const bodyCocina = [
    {
      descripcion: "Arrandanos",
      tipo: "Frutas",
      especificaciones:
        "COLOR NEGRO AZULADO,  PULPA ES AROMÁTICA, JUGOSA Y DE SABOR ALGO ÁCIDO. CONTIENE NUMEROSAS SEMILLAS PARDAS DE PEQUEÑO TAMAÑO.",
      cantidad: 48,
      consumoM: 4,
      suma: 5,
    },
    {
      descripcion: "Manzana",
      tipo: "Frutas",
      especificaciones:
        "COLOR ROJO O VERDE, SABOR DULCE O ÁCIDO SEGÚN LA VARIEDAD, PULPA JUGOSA Y CRUJIENTE.",
      cantidad: 60,
      consumoM: 3,
      suma: 6,
    },
    {
      descripcion: "Pasta",
      tipo: "Carbohidratos",
      especificaciones:
        "ELABORADA CON HARINA DE TRIGO, SE PREPARA COCIÉNDOLA EN AGUA CON SAL.",
      cantidad: 80,
      consumoM: 2,
      suma: 4,
    },
    {
      descripcion: "Pollo",
      tipo: "Carnes",
      especificaciones:
        "CARNES BLANCAS, BAJO CONTENIDO DE GRASA, ALTA FUENTE DE PROTEÍNAS.",
      cantidad: 100,
      consumoM: 1,
      suma: 3,
    },
    {
      descripcion: "Ensalada",
      tipo: "Vegetales",
      especificaciones:
        "COMBINACIÓN DE HOJAS VERDES, TOMATE, PEPINO, ZANAHORIA Y ADEREZO.",
      cantidad: 120,
      consumoM: 2,
      suma: 4,
    },
    {
      descripcion: "Salmón",
      tipo: "Pescados",
      especificaciones:
        "PESCADO GRASO RICO EN ÁCIDOS GRASOS OMEGA-3, BUENA FUENTE DE PROTEÍNAS.",
      cantidad: 90,
      consumoM: 1,
      suma: 2,
    },
    {
      descripcion: "Arroz",
      tipo: "Carbohidratos",
      especificaciones:
        "GRANO BLANCO O INTEGRAL, SE COCINA HIRVIÉNDOLO EN AGUA CON SAL.",
      cantidad: 80,
      consumoM: 3,
      suma: 6,
    },
    {
      descripcion: "Yogurt",
      tipo: "Lácteos",
      especificaciones:
        "PRODUCTO LÁCTEO FERMENTADO, VARIEDAD DE SABORES Y TEXTURAS.",
      cantidad: 200,
      consumoM: 1,
      suma: 3,
    },
    {
      descripcion: "Nueces",
      tipo: "Frutos Secos",
      especificaciones:
        "FRUTOS SECOS DE CÁSCARA DURO, RICOS EN GRASAS SALUDABLES Y PROTEÍNAS.",
      cantidad: 30,
      consumoM: 2,
      suma: 4,
    },
    {
      descripcion: "Arrandanos",
      tipo: "Frutas",
      especificaciones:
        "COLOR NEGRO AZULADO,  PULPA ES AROMÁTICA, JUGOSA Y DE SABOR ALGO ÁCIDO. CONTIENE NUMEROSAS SEMILLAS PARDAS DE PEQUEÑO TAMAÑO.",
      cantidad: 48,
      consumoM: 4,
      suma: 5,
    },
    {
      descripcion: "Manzana",
      tipo: "Frutas",
      especificaciones:
        "COLOR ROJO O VERDE, SABOR DULCE O ÁCIDO SEGÚN LA VARIEDAD, PULPA JUGOSA Y CRUJIENTE.",
      cantidad: 60,
      consumoM: 3,
      suma: 6,
    },
    {
      descripcion: "Pasta",
      tipo: "Carbohidratos",
      especificaciones:
        "ELABORADA CON HARINA DE TRIGO, SE PREPARA COCIÉNDOLA EN AGUA CON SAL.",
      cantidad: 80,
      consumoM: 2,
      suma: 4,
    },
    {
      descripcion: "Pollo",
      tipo: "Carnes",
      especificaciones:
        "CARNES BLANCAS, BAJO CONTENIDO DE GRASA, ALTA FUENTE DE PROTEÍNAS.",
      cantidad: 100,
      consumoM: 1,
      suma: 3,
    },
    {
      descripcion: "Ensalada",
      tipo: "Vegetales",
      especificaciones:
        "COMBINACIÓN DE HOJAS VERDES, TOMATE, PEPINO, ZANAHORIA Y ADEREZO.",
      cantidad: 120,
      consumoM: 2,
      suma: 4,
    },
    {
      descripcion: "Salmón",
      tipo: "Pescados",
      especificaciones:
        "PESCADO GRASO RICO EN ÁCIDOS GRASOS OMEGA-3, BUENA FUENTE DE PROTEÍNAS.",
      cantidad: 90,
      consumoM: 1,
      suma: 2,
    },
    {
      descripcion: "Arroz",
      tipo: "Carbohidratos",
      especificaciones:
        "GRANO BLANCO O INTEGRAL, SE COCINA HIRVIÉNDOLO EN AGUA CON SAL.",
      cantidad: 80,
      consumoM: 3,
      suma: 6,
    },
    {
      descripcion: "Yogurt",
      tipo: "Lácteos",
      especificaciones:
        "PRODUCTO LÁCTEO FERMENTADO, VARIEDAD DE SABORES Y TEXTURAS.",
      cantidad: 200,
      consumoM: 1,
      suma: 3,
    },
    {
      descripcion: "Nueces",
      tipo: "Frutos Secos",
      especificaciones:
        "FRUTOS SECOS DE CÁSCARA DURO, RICOS EN GRASAS SALUDABLES Y PROTEÍNAS.",
      cantidad: 30,
      consumoM: 2,
      suma: 4,
    },
    {
      descripcion: "Arrandanos",
      tipo: "Frutas",
      especificaciones:
        "COLOR NEGRO AZULADO,  PULPA ES AROMÁTICA, JUGOSA Y DE SABOR ALGO ÁCIDO. CONTIENE NUMEROSAS SEMILLAS PARDAS DE PEQUEÑO TAMAÑO.",
      cantidad: 48,
      consumoM: 4,
      suma: 5,
    },
    {
      descripcion: "Manzana",
      tipo: "Frutas",
      especificaciones:
        "COLOR ROJO O VERDE, SABOR DULCE O ÁCIDO SEGÚN LA VARIEDAD, PULPA JUGOSA Y CRUJIENTE.",
      cantidad: 60,
      consumoM: 3,
      suma: 6,
    },
    {
      descripcion: "Pasta",
      tipo: "Carbohidratos",
      especificaciones:
        "ELABORADA CON HARINA DE TRIGO, SE PREPARA COCIÉNDOLA EN AGUA CON SAL.",
      cantidad: 80,
      consumoM: 2,
      suma: 4,
    },
    {
      descripcion: "Pollo",
      tipo: "Carnes",
      especificaciones:
        "CARNES BLANCAS, BAJO CONTENIDO DE GRASA, ALTA FUENTE DE PROTEÍNAS.",
      cantidad: 100,
      consumoM: 1,
      suma: 3,
    },
    {
      descripcion: "Ensalada",
      tipo: "Vegetales",
      especificaciones:
        "COMBINACIÓN DE HOJAS VERDES, TOMATE, PEPINO, ZANAHORIA Y ADEREZO.",
      cantidad: 120,
      consumoM: 2,
      suma: 4,
    },
    {
      descripcion: "Salmón",
      tipo: "Pescados",
      especificaciones:
        "PESCADO GRASO RICO EN ÁCIDOS GRASOS OMEGA-3, BUENA FUENTE DE PROTEÍNAS.",
      cantidad: 90,
      consumoM: 1,
      suma: 2,
    },
    {
      descripcion: "Arroz",
      tipo: "Carbohidratos",
      especificaciones:
        "GRANO BLANCO O INTEGRAL, SE COCINA HIRVIÉNDOLO EN AGUA CON SAL.",
      cantidad: 80,
      consumoM: 3,
      suma: 6,
    },
    {
      descripcion: "Yogurt",
      tipo: "Lácteos",
      especificaciones:
        "PRODUCTO LÁCTEO FERMENTADO, VARIEDAD DE SABORES Y TEXTURAS.",
      cantidad: 200,
      consumoM: 1,
      suma: 3,
    },
    {
      descripcion: "Nueces",
      tipo: "Frutos Secos",
      especificaciones:
        "FRUTOS SECOS DE CÁSCARA DURO, RICOS EN GRASAS SALUDABLES Y PROTEÍNAS.",
      cantidad: 30,
      consumoM: 2,
      suma: 4,
    },
  ];

  const bodyBodega = [
    {
      descripcion: "Mesa",
      tipo: "Mueble",
      especificaciones:
        "MATERIAL: MADERA, COLOR: ROBLE, DIMENSIONES: 120 cm x 80 cm x 75 cm",
      cantidad: 1,
      consumoM: 0,
      suma: 0,
    },
    {
      descripcion: "Silla",
      tipo: "Mueble",
      especificaciones:
        "MATERIAL: MADERA, COLOR: BLANCO, DIMENSIONES: 40 cm x 40 cm x 90 cm",
      cantidad: 4,
      consumoM: 0,
      suma: 0,
    },
    {
      descripcion: "Televisor",
      tipo: "Electrodoméstico",
      especificaciones: "MARCA: Samsung, TAMAÑO: 55 pulgadas, RESOLUCIÓN: 4K",
      cantidad: 1,
      consumoM: 150,
      suma: 0,
    },
    {
      descripcion: "Refrigerador",
      tipo: "Electrodoméstico",
      especificaciones:
        "MARCA: LG, CAPACIDAD: 500 litros, COLOR: ACERO INOXIDABLE",
      cantidad: 1,
      consumoM: 200,
      suma: 0,
    },
    {
      descripcion: "Cama",
      tipo: "Mueble",
      especificaciones: "TAMAÑO: Queen, MATERIAL: MADERA, COLOR: NOGAL",
      cantidad: 1,
      consumoM: 0,
      suma: 0,
    },
    {
      descripcion: "Mesa",
      tipo: "Mueble",
      especificaciones:
        "MATERIAL: MADERA, COLOR: ROBLE, DIMENSIONES: 120 cm x 80 cm x 75 cm",
      cantidad: 1,
      consumoM: 0,
      suma: 0,
    },
    {
      descripcion: "Silla",
      tipo: "Mueble",
      especificaciones:
        "MATERIAL: MADERA, COLOR: BLANCO, DIMENSIONES: 40 cm x 40 cm x 90 cm",
      cantidad: 4,
      consumoM: 0,
      suma: 0,
    },
    {
      descripcion: "Televisor",
      tipo: "Electrodoméstico",
      especificaciones: "MARCA: Samsung, TAMAÑO: 55 pulgadas, RESOLUCIÓN: 4K",
      cantidad: 1,
      consumoM: 150,
      suma: 0,
    },
    {
      descripcion: "Refrigerador",
      tipo: "Electrodoméstico",
      especificaciones:
        "MARCA: LG, CAPACIDAD: 500 litros, COLOR: ACERO INOXIDABLE",
      cantidad: 1,
      consumoM: 200,
      suma: 0,
    },
    {
      descripcion: "Cama",
      tipo: "Mueble",
      especificaciones: "TAMAÑO: Queen, MATERIAL: MADERA, COLOR: NOGAL",
      cantidad: 1,
      consumoM: 0,
      suma: 0,
    },
    {
      descripcion: "Mesa",
      tipo: "Mueble",
      especificaciones:
        "MATERIAL: MADERA, COLOR: ROBLE, DIMENSIONES: 120 cm x 80 cm x 75 cm",
      cantidad: 1,
      consumoM: 0,
      suma: 0,
    },
    {
      descripcion: "Silla",
      tipo: "Mueble",
      especificaciones:
        "MATERIAL: MADERA, COLOR: BLANCO, DIMENSIONES: 40 cm x 40 cm x 90 cm",
      cantidad: 4,
      consumoM: 0,
      suma: 0,
    },
    {
      descripcion: "Televisor",
      tipo: "Electrodoméstico",
      especificaciones: "MARCA: Samsung, TAMAÑO: 55 pulgadas, RESOLUCIÓN: 4K",
      cantidad: 1,
      consumoM: 150,
      suma: 0,
    },
    {
      descripcion: "Refrigerador",
      tipo: "Electrodoméstico",
      especificaciones:
        "MARCA: LG, CAPACIDAD: 500 litros, COLOR: ACERO INOXIDABLE",
      cantidad: 1,
      consumoM: 200,
      suma: 0,
    },
    {
      descripcion: "Cama",
      tipo: "Mueble",
      especificaciones: "TAMAÑO: Queen, MATERIAL: MADERA, COLOR: NOGAL",
      cantidad: 1,
      consumoM: 0,
      suma: 0,
    },
    {
      descripcion: "Mesa",
      tipo: "Mueble",
      especificaciones:
        "MATERIAL: MADERA, COLOR: ROBLE, DIMENSIONES: 120 cm x 80 cm x 75 cm",
      cantidad: 1,
      consumoM: 0,
      suma: 0,
    },
    {
      descripcion: "Silla",
      tipo: "Mueble",
      especificaciones:
        "MATERIAL: MADERA, COLOR: BLANCO, DIMENSIONES: 40 cm x 40 cm x 90 cm",
      cantidad: 4,
      consumoM: 0,
      suma: 0,
    },
    {
      descripcion: "Televisor",
      tipo: "Electrodoméstico",
      especificaciones: "MARCA: Samsung, TAMAÑO: 55 pulgadas, RESOLUCIÓN: 4K",
      cantidad: 1,
      consumoM: 150,
      suma: 0,
    },
    {
      descripcion: "Refrigerador",
      tipo: "Electrodoméstico",
      especificaciones:
        "MARCA: LG, CAPACIDAD: 500 litros, COLOR: ACERO INOXIDABLE",
      cantidad: 1,
      consumoM: 200,
      suma: 0,
    },
    {
      descripcion: "Cama",
      tipo: "Mueble",
      especificaciones: "TAMAÑO: Queen, MATERIAL: MADERA, COLOR: NOGAL",
      cantidad: 1,
      consumoM: 0,
      suma: 0,
    },
    {
      descripcion: "Mesa",
      tipo: "Mueble",
      especificaciones:
        "MATERIAL: MADERA, COLOR: ROBLE, DIMENSIONES: 120 cm x 80 cm x 75 cm",
      cantidad: 1,
      consumoM: 0,
      suma: 0,
    },
    {
      descripcion: "Silla",
      tipo: "Mueble",
      especificaciones:
        "MATERIAL: MADERA, COLOR: BLANCO, DIMENSIONES: 40 cm x 40 cm x 90 cm",
      cantidad: 4,
      consumoM: 0,
      suma: 0,
    },
    {
      descripcion: "Televisor",
      tipo: "Electrodoméstico",
      especificaciones: "MARCA: Samsung, TAMAÑO: 55 pulgadas, RESOLUCIÓN: 4K",
      cantidad: 1,
      consumoM: 150,
      suma: 0,
    },
    {
      descripcion: "Refrigerador",
      tipo: "Electrodoméstico",
      especificaciones:
        "MARCA: LG, CAPACIDAD: 500 litros, COLOR: ACERO INOXIDABLE",
      cantidad: 1,
      consumoM: 200,
      suma: 0,
    },
    {
      descripcion: "Cama",
      tipo: "Mueble",
      especificaciones: "TAMAÑO: Queen, MATERIAL: MADERA, COLOR: NOGAL",
      cantidad: 1,
      consumoM: 0,
      suma: 0,
    },
    {
      descripcion: "Mesa",
      tipo: "Mueble",
      especificaciones:
        "MATERIAL: MADERA, COLOR: ROBLE, DIMENSIONES: 120 cm x 80 cm x 75 cm",
      cantidad: 1,
      consumoM: 0,
      suma: 0,
    },
    {
      descripcion: "Silla",
      tipo: "Mueble",
      especificaciones:
        "MATERIAL: MADERA, COLOR: BLANCO, DIMENSIONES: 40 cm x 40 cm x 90 cm",
      cantidad: 4,
      consumoM: 0,
      suma: 0,
    },
    {
      descripcion: "Televisor",
      tipo: "Electrodoméstico",
      especificaciones: "MARCA: Samsung, TAMAÑO: 55 pulgadas, RESOLUCIÓN: 4K",
      cantidad: 1,
      consumoM: 150,
      suma: 0,
    },
    {
      descripcion: "Refrigerador",
      tipo: "Electrodoméstico",
      especificaciones:
        "MARCA: LG, CAPACIDAD: 500 litros, COLOR: ACERO INOXIDABLE",
      cantidad: 1,
      consumoM: 200,
      suma: 0,
    },
    {
      descripcion: "Cama",
      tipo: "Mueble",
      especificaciones: "TAMAÑO: Queen, MATERIAL: MADERA, COLOR: NOGAL",
      cantidad: 1,
      consumoM: 0,
      suma: 0,
    },
    {
      descripcion: "Mesa",
      tipo: "Mueble",
      especificaciones:
        "MATERIAL: MADERA, COLOR: ROBLE, DIMENSIONES: 120 cm x 80 cm x 75 cm",
      cantidad: 1,
      consumoM: 0,
      suma: 0,
    },
    {
      descripcion: "Silla",
      tipo: "Mueble",
      especificaciones:
        "MATERIAL: MADERA, COLOR: BLANCO, DIMENSIONES: 40 cm x 40 cm x 90 cm",
      cantidad: 4,
      consumoM: 0,
      suma: 0,
    },
    {
      descripcion: "Televisor",
      tipo: "Electrodoméstico",
      especificaciones: "MARCA: Samsung, TAMAÑO: 55 pulgadas, RESOLUCIÓN: 4K",
      cantidad: 1,
      consumoM: 150,
      suma: 0,
    },
    {
      descripcion: "Refrigerador",
      tipo: "Electrodoméstico",
      especificaciones:
        "MARCA: LG, CAPACIDAD: 500 litros, COLOR: ACERO INOXIDABLE",
      cantidad: 1,
      consumoM: 200,
      suma: 0,
    },
    {
      descripcion: "Cama",
      tipo: "Mueble",
      especificaciones: "TAMAÑO: Queen, MATERIAL: MADERA, COLOR: NOGAL",
      cantidad: 1,
      consumoM: 0,
      suma: 0,
    },
    {
      descripcion: "Mesa",
      tipo: "Mueble",
      especificaciones:
        "MATERIAL: MADERA, COLOR: ROBLE, DIMENSIONES: 120 cm x 80 cm x 75 cm",
      cantidad: 1,
      consumoM: 0,
      suma: 0,
    },
    {
      descripcion: "Silla",
      tipo: "Mueble",
      especificaciones:
        "MATERIAL: MADERA, COLOR: BLANCO, DIMENSIONES: 40 cm x 40 cm x 90 cm",
      cantidad: 4,
      consumoM: 0,
      suma: 0,
    },
    {
      descripcion: "Televisor",
      tipo: "Electrodoméstico",
      especificaciones: "MARCA: Samsung, TAMAÑO: 55 pulgadas, RESOLUCIÓN: 4K",
      cantidad: 1,
      consumoM: 150,
      suma: 0,
    },
    {
      descripcion: "Refrigerador",
      tipo: "Electrodoméstico",
      especificaciones:
        "MARCA: LG, CAPACIDAD: 500 litros, COLOR: ACERO INOXIDABLE",
      cantidad: 1,
      consumoM: 200,
      suma: 0,
    },
    {
      descripcion: "Cama",
      tipo: "Mueble",
      especificaciones: "TAMAÑO: Queen, MATERIAL: MADERA, COLOR: NOGAL",
      cantidad: 1,
      consumoM: 0,
      suma: 0,
    },
    {
      descripcion: "Mesa",
      tipo: "Mueble",
      especificaciones:
        "MATERIAL: MADERA, COLOR: ROBLE, DIMENSIONES: 120 cm x 80 cm x 75 cm",
      cantidad: 1,
      consumoM: 0,
      suma: 0,
    },
    {
      descripcion: "Silla",
      tipo: "Mueble",
      especificaciones:
        "MATERIAL: MADERA, COLOR: BLANCO, DIMENSIONES: 40 cm x 40 cm x 90 cm",
      cantidad: 4,
      consumoM: 0,
      suma: 0,
    },
    {
      descripcion: "Televisor",
      tipo: "Electrodoméstico",
      especificaciones: "MARCA: Samsung, TAMAÑO: 55 pulgadas, RESOLUCIÓN: 4K",
      cantidad: 1,
      consumoM: 150,
      suma: 0,
    },
    {
      descripcion: "Refrigerador",
      tipo: "Electrodoméstico",
      especificaciones:
        "MARCA: LG, CAPACIDAD: 500 litros, COLOR: ACERO INOXIDABLE",
      cantidad: 1,
      consumoM: 200,
      suma: 0,
    },
    {
      descripcion: "Cama",
      tipo: "Mueble",
      especificaciones: "TAMAÑO: Queen, MATERIAL: MADERA, COLOR: NOGAL",
      cantidad: 1,
      consumoM: 0,
      suma: 0,
    },
  ];

  const bodyMedicina = [
    {
      descripcion: "Aspirina",
      tipo: "Medicina",
      especificaciones: "Analgésico y antiinflamatorio",
      cantidad: 20,
      consumoM: 1,
      suma: 3,
    },
    {
      descripcion: "Paracetamol",
      tipo: "Medicina",
      especificaciones: "Analgésico y antipirético",
      cantidad: 30,
      consumoM: 2,
      suma: 4,
    },
    {
      descripcion: "Lansoprazol",
      tipo: "Medicina",
      especificaciones: "Inhibidor de la bomba de protones",
      cantidad: 10,
      consumoM: 1,
      suma: 2,
    },
    {
      descripcion: "Atorvastatina",
      tipo: "Medicina",
      especificaciones: "Estatina para reducir el colesterol",
      cantidad: 15,
      consumoM: 1,
      suma: 3,
    },
    {
      descripcion: "Metformina",
      tipo: "Medicina",
      especificaciones: "Antidiabético oral",
      cantidad: 60,
      consumoM: 2,
      suma: 4,
    },
    {
      descripcion: "Warfarina",
      tipo: "Medicina",
      especificaciones: "Anticoagulante",
      cantidad: 30,
      consumoM: 1,
      suma: 2,
    },
    {
      descripcion: "Duloxetina",
      tipo: "Medicina",
      especificaciones: "Antidepresivo",
      cantidad: 20,
      consumoM: 1,
      suma: 3,
    },
    {
      descripcion: "Alprazolam",
      tipo: "Medicina",
      especificaciones: "Ansiolítico",
      cantidad: 25,
      consumoM: 1,
      suma: 3,
    },
    {
      descripcion: "Ginkgo Biloba",
      tipo: "Suplemento",
      especificaciones: "Mejora la memoria y la circulación",
      cantidad: 30,
      consumoM: 1,
      suma: 2,
    },
    {
      descripcion: "Calcio",
      tipo: "Suplemento",
      especificaciones: "Fortalece los huesos",
      cantidad: 60,
      consumoM: 2,
      suma: 4,
    },
    {
      descripcion: "Aspirina",
      tipo: "Medicina",
      especificaciones: "Analgésico y antiinflamatorio",
      cantidad: 20,
      consumoM: 1,
      suma: 3,
    },
    {
      descripcion: "Paracetamol",
      tipo: "Medicina",
      especificaciones: "Analgésico y antipirético",
      cantidad: 30,
      consumoM: 2,
      suma: 4,
    },
    {
      descripcion: "Lansoprazol",
      tipo: "Medicina",
      especificaciones: "Inhibidor de la bomba de protones",
      cantidad: 10,
      consumoM: 1,
      suma: 2,
    },
    {
      descripcion: "Atorvastatina",
      tipo: "Medicina",
      especificaciones: "Estatina para reducir el colesterol",
      cantidad: 15,
      consumoM: 1,
      suma: 3,
    },
    {
      descripcion: "Metformina",
      tipo: "Medicina",
      especificaciones: "Antidiabético oral",
      cantidad: 60,
      consumoM: 2,
      suma: 4,
    },
    {
      descripcion: "Warfarina",
      tipo: "Medicina",
      especificaciones: "Anticoagulante",
      cantidad: 30,
      consumoM: 1,
      suma: 2,
    },
    {
      descripcion: "Duloxetina",
      tipo: "Medicina",
      especificaciones: "Antidepresivo",
      cantidad: 20,
      consumoM: 1,
      suma: 3,
    },
    {
      descripcion: "Alprazolam",
      tipo: "Medicina",
      especificaciones: "Ansiolítico",
      cantidad: 25,
      consumoM: 1,
      suma: 3,
    },
    {
      descripcion: "Ginkgo Biloba",
      tipo: "Suplemento",
      especificaciones: "Mejora la memoria y la circulación",
      cantidad: 30,
      consumoM: 1,
      suma: 2,
    },
    {
      descripcion: "Calcio",
      tipo: "Suplemento",
      especificaciones: "Fortalece los huesos",
      cantidad: 60,
      consumoM: 2,
      suma: 4,
    },
    {
      descripcion: "Aspirina",
      tipo: "Medicina",
      especificaciones: "Analgésico y antiinflamatorio",
      cantidad: 20,
      consumoM: 1,
      suma: 3,
    },
    {
      descripcion: "Paracetamol",
      tipo: "Medicina",
      especificaciones: "Analgésico y antipirético",
      cantidad: 30,
      consumoM: 2,
      suma: 4,
    },
    {
      descripcion: "Lansoprazol",
      tipo: "Medicina",
      especificaciones: "Inhibidor de la bomba de protones",
      cantidad: 10,
      consumoM: 1,
      suma: 2,
    },
    {
      descripcion: "Atorvastatina",
      tipo: "Medicina",
      especificaciones: "Estatina para reducir el colesterol",
      cantidad: 15,
      consumoM: 1,
      suma: 3,
    },
    {
      descripcion: "Metformina",
      tipo: "Medicina",
      especificaciones: "Antidiabético oral",
      cantidad: 60,
      consumoM: 2,
      suma: 4,
    },
    {
      descripcion: "Warfarina",
      tipo: "Medicina",
      especificaciones: "Anticoagulante",
      cantidad: 30,
      consumoM: 1,
      suma: 2,
    },
    {
      descripcion: "Duloxetina",
      tipo: "Medicina",
      especificaciones: "Antidepresivo",
      cantidad: 20,
      consumoM: 1,
      suma: 3,
    },
    {
      descripcion: "Alprazolam",
      tipo: "Medicina",
      especificaciones: "Ansiolítico",
      cantidad: 25,
      consumoM: 1,
      suma: 3,
    },
    {
      descripcion: "Ginkgo Biloba",
      tipo: "Suplemento",
      especificaciones: "Mejora la memoria y la circulación",
      cantidad: 30,
      consumoM: 1,
      suma: 2,
    },
    {
      descripcion: "Calcio",
      tipo: "Suplemento",
      especificaciones: "Fortalece los huesos",
      cantidad: 60,
      consumoM: 2,
      suma: 4,
    },
  ];

  return (
    <div className="overflow-x-hidden p-8">
      <div className="flex text-3xl font-bold py-5">
        Tabla de Inventario de {id[0].toUpperCase() + id.substring(1)}
      </div>
      <TablaInventario
        head={head}
        bodyt={
          id === "cocina"
            ? bodyCocina
            : id === "bodega"
            ? bodyBodega
            : id === "medicina"
            ? bodyMedicina
            : [{}]
        }
      />
    </div>
  );
}
