import { Router } from "express";

const router = Router();

//--------FORMULARIO DE PAGO--------------------------------------------//
router.get("/pago", (req, res) => {
  res.render("pagos/formulario");
});

//--------PROCESAR PAGO Y MOSTRAR DETALLE--------------------------------//
router.post("/pago", async (req, res) => {
  const { monto, metodoPago, fecha } = req.body;

  if (!monto || !metodoPago || !fecha) {
    res.render("pagos/formulario", { message: "Todos los campos son obligatorios" });
  } else {

    res.render("pagos/detalle", {
      pago: {
        monto,
        metodoPago,
        fecha,
      },
    });
  }
});

export default router;
