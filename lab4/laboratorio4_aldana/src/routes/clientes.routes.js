import { Router } from "express";

const router = Router();

//--------LISTADO --------------------------------------------//
router.get("/list", async (req, res) => {
  try {
    res.render("clientes/list");
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});

//--------AÑADIR --------------------------------------------//

router.get("/add", (req, res) => {
  res.render("clientes/add");
});

router.post("/add", async (req, res) => {
  if (Object.values(req.body).includes("")) {
    res.render("clientes/add", {
      message: "Campos vacios! Por favor rrellena los campos",
    });
  } else {
    res.redirect("/list");
  }
  /* try {
    res.redirect("/list");
  } catch (err) {
    res.status(500).json({ message: err.message });
  }*/
  /*
   if (Object.values(req.body.length === 0)) {
     console.log("Err");
   }*/
});

//--------ACTUALIZAR --------------------------------------------//

router.get("/edit", (req, res) => {
  res.render("clientes/edit");
});

router.post("/edit", async (req, res) => {
  try {
    res.redirect("/list");
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});

//----------------------------------------------------//

export default router;
