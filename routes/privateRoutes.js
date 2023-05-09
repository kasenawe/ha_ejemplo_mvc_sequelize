const express = require("express");
const router = express.Router();
const pageController = require("../controllers/pageController");
// Rutas relacionadas al panel de control (Admin):
// ...

router.get("/login", pageController.login); // http://localhost:3000/login.
router.post("/login", pageController.loginPost); // http://localhost:3000/login
router.get("/logout", pageController.logout); // http://localhost:3000/logout.

module.exports = router;
