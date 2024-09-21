import { Router } from "express";

const router = Router();

//--------LISTADO --------------------------------------------//
router.get("/listCategory", async (req, res) => {
  try {
    res.render("categoria/list");
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});

//------------AÑADIR CATEGORIA -------------------------------------------//

router.get("/add-category", (req, res) => {
  res.render("categoria/add");
});

router.post("/add-category", async (req, res) => {
  // if (Object.values(req.body).includes("")) {
  //   console.log("Erroasf");
  // }
  try {
    res.redirect("/listCategory");
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});

//--------------------EDITAR ------------------//
router.get("/edit-category", (req, res) => {
  res.render("categoria/edit");
});

router.post("/edit-category", async (req, res) => {
  try {
    res.redirect("/listCategory");
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});

export default router;
