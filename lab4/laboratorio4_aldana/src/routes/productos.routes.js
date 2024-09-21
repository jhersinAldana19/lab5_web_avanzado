import { Router } from "express";

const router = Router();

//--------LISTADO --------------------------------------------//
router.get("/listProduct", async (req, res) => {
  try {
    res.render("producto/list");
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});

//---------------AÑADIR ----------------------------
router.get("/add-product", (req, res) => {
  res.render("producto/add");
});

router.post("/add-product", async (req, res) => {
  if (Object.values(req.body).includes("")) {
    res.render("producto/add", { message: "Campos vacios" });
  } else {
    res.redirect("/listProduct");
  }
  /* try {
    res.redirect("/list");
  } catch (err) {
    res.status(500).json({ message: err.message });
  }*/
});

//===========EDITAR
router.get("/edit-product", (req, res) => {
  res.render("producto/edit");
});

router.post("/edit-product", async (req, res) => {
  try {
    res.redirect("/list");
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});

//--------------------ELIMINAR

router.get("/borrar-product", (req, res) => {
  res.render("producto/list", {
    message: "Esstas seguro que quieres Eliminar!?",
  });
});

export default router;
