const express = require("express");
const router = express.Router();
const pageController = require("../controllers/pageController");
const { passport } = require("../config/passport");

router.get("/", pageController.showHome);
router.get("/login", pageController.login); // http://localhost:3000/login.
router.post(
  "/login",
  passport.authenticate("local", {
    successRedirect: "/admin",
    failureRedirect: "/login",
  }),
); // http://localhost:3000/login

router.post("/logout", function (req, res, next) {
  req.logout(function (err) {
    if (err) {
      return next(err);
    }
    res.redirect("/");
  });
});

//router.get("/sobre-nosotros", pageController.showAboutUs);
//router.get("/articles", pageController.showArticles);

module.exports = router;
