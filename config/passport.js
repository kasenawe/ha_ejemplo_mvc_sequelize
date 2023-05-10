const passport = require("passport");
const LocalStrategy = require("passport-local");
const { User } = require("../models");
const bcrypt = require("bcryptjs");

function passportConfig() {
  passport.use(
    new LocalStrategy(
      {
        usernameField: "email",
      },
      async function (email, password, done) {
        const user = await User.findOne({ where: { email } });
        if (!user) {
          console.log("no encontro el usuario");
          return done(null, false, { message: "credenciales incorrectas" });
        }
        if (!(await bcrypt.compare(password, user.password))) {
          console.log("la contrasena estaba mal");
          return done(null, false, { message: "credenciales incorrectas" });
        }
        console.log("nos deja pasar");
        return done(null, user);
      },
    ),
  );

  passport.serializeUser(function (user, done) {
    done(null, user.id);
  });

  passport.deserializeUser(function (id, done) {
    User.findByPk(id)
      .then((user) => {
        done(null, user);
      })
      .catch(() => {
        done(error, user);
      });
  });
}

module.exports = { passportConfig, passport };
