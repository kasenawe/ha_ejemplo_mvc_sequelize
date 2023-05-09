const express = require("express");
const router = express.Router();
const userController = require("../controllers/userController");

// Rutas relacionadas a los usuarios:
// ...

router.get("/", userController.index);

router.get("/registro", userController.create); //http://localhost:3000/registro
router.post("/registro", userController.store); //http://localhost:3000/registro.
router.get("/login", userController.login); // http://localhost:3000/login.
// router.post("/login", userController.loginPost); // http://localhost:3000/login
// router.get("/logout", userController.logout); // http://localhost:3000/logout.

router.get("/:id", userController.show);
router.get("/:id/editar", userController.edit);
router.patch("/:id", userController.update);
router.delete("/:id", userController.destroy);

module.exports = router;
