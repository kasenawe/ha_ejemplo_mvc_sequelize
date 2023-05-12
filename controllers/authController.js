const { passport } = require("../config/passport");

function login(req, res) {
  console.log("entro a login");
  passport.authenticate("local", {
    successRedirect: "/admin",
    failureRedirect: "/login",
    failureFlash: {
      type: "failureFlash",
      message: "Credenciales incorrectas",
    },
    successFlash: {
      type: "successFlash",
      message: "Las credenciales han ido validadas",
    },
  })(req, res);
}

module.exports = { login };
