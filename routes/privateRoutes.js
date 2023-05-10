const express = require("express");
const ensureAuthenticated = require("./middleware/ensureAthenticated");
const router = express.Router();
const pageController = require("../controllers/pageController");
const authController = require("../controllers/authController");
// Rutas relacionadas al panel de control (Admin):
// ...

router.get("/login", pageController.login); // http://localhost:3000/login.
router.post("/login", pageController.loginPost); // http://localhost:3000/login
router.get("/logout", pageController.logout); // http://localhost:3000/logout.

router.get("/welcome", ensureAthenticated, function (req, res) {
  res.redirect("/admin");
});

router.post("/login", autoController.login);

module.exports = router;
