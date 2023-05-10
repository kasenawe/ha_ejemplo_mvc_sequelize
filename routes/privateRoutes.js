const express = require("express");
const ensureAuthenticated = require("./middleware/ensureAuthenticated");
const router = express.Router();
const pageController = require("../controllers/pageController");
const authController = require("../controllers/authController");
const adminController = require("../controllers/adminController");
const { passport } = require("../config/passport");

// Rutas relacionadas al panel de control (Admin):
// ...

router.get("/admin", adminController.admin);
router.get("/login", pageController.login); // http://localhost:3000/login.
router.post(
  "/login",
  passport.authenticate("local", {
    successRedirect: "/admin",
    failureRedirect: "/",
  }),
); // http://localhost:3000/login
router.get("/logout", pageController.logout); // http://localhost:3000/logout.

router.get("/welcome", ensureAuthenticated, function (req, res) {
  return res.send("untexto");
});

module.exports = router;
