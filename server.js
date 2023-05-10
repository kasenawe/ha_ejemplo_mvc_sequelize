require("dotenv").config();

const methodOverride = require("method-override");
const express = require("express");
const routes = require("./routes");
const APP_PORT = process.env.APP_PORT || 3000;
const app = express();

app.use(methodOverride("_method"));
app.use(express.static("public"));
app.use(express.urlencoded({ extended: true }));
app.set("view engine", "ejs");

routes(app);

app.listen(APP_PORT, () => {
  console.log(`\n[Express] Servidor corriendo en el puerto ${APP_PORT}.`);
  console.log(`[Express] Ingresar a http://localhost:${APP_PORT}.\n`);
});

const session = require("express-session");
const passport = require("passport");
const LocalStrategy = require("passport-local");

app.use(
  session({
    secret: "elTeamDePepeGrillo",
    resave: false,
    saveUninitialized: false,
  }),
);

app.use(passport.session());

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

passport.serializeUser((user, cb) => {
  cb(null, user.id);
});

passport.deserializeUser(async (id, cb) => {
  try {
    const user = await User.findByPk(id);
    cb(null, user); // Usuario queda disponible en req.user.
  } catch (err) {
    cb(err);
  }
});

app.post(
  "/login",
  passport.authenticate("local", {
    successRedirect: "/admin",
    failureRedirect: "/login",
  }),
);
