const passport = require("./config/passport");

function login(req, res) {
  passport.authenticate("local", {
    successRedirect: "/admin",
    failureRedirect: "/login",
  });
}

modile.exports = { login };
