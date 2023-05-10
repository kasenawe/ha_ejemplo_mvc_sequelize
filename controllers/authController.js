const { passport } = require("../config/passport");

function login(req, res) {
  console.log("entro a login");
  passport.authenticate("local", {
    successRedirect: "/admin",
    failureRedirect: "/",
  });
}

module.exports = { login };
