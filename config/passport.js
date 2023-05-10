const session = require("express-session");
const passport = require("passport");
const LocalStrategy = require("passport-local");

function passportConfig() {
  passport.use(
    new LocalStrategy(
      {
        usernameField: "email",
      },
      async function (email, password, done) {
        const user = await User.findOne({ where: { email: email } });
        if (!user) {
          done(null, false, { message: "credenciales incorrectas" });
        }
        if (!(await bcrypt.compare(password, user.password))) {
          done(null, false, { message: "credenciales incorrectas" });
        }
        done(null, user);
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

module.exports = passportConfig;
