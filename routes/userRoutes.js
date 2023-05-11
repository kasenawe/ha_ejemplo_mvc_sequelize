const express = require("express");
const router = express.Router();
const userController = require("../controllers/userController");
const pageController = require("../controllers/pageController");
const authController = require("../controllers/authController");
const adminController = require("../controllers/adminController");
const { passport } = require("../config/passport");
const ensureAuthenticated = require("./middleware/ensureAuthenticated");

// Rutas relacionadas a los usuarios:
// ...

router.get("/", userController.index);

router.get("/registro", userController.create); //http://localhost:3000/registro
router.post("/registro", userController.store); //http://localhost:3000/registro.

router.get("/logout", pageController.logout); // http://localhost:3000/logout.

router.get("/welcome", ensureAuthenticated, function (req, res) {
  //if (ensureAuthenticated)
  return res.send("untexto");
});

// router.get("/:id", userController.show);
// router.get("/:id/editar", userController.edit);
// router.patch("/:id", userController.update);
// router.delete("/:id", userController.destroy);

module.exports = router;
