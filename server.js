require("dotenv").config();

const methodOverride = require("method-override");
const express = require("express");
const session = require("express-session");
const flash = require("connect-flash");

const { passportConfig, passport } = require("./config/passport");
const isAuthenticated = require("./routes/middleware/isAuthenticated");
const middleFlash = require("./routes/middleware/middleFlash");
const routes = require("./routes");

const APP_PORT = process.env.APP_PORT || 3000;
const app = express();

app.set("view engine", "ejs");

app.use(methodOverride("_method"));
app.use(express.static("public"));
app.use(express.urlencoded({ extended: true }));
app.use(
  session({
    secret: "elTeamDePepeGrillo",
    resave: false,
    saveUninitialized: false,
  }),
);
app.use(passport.session());
app.use(isAuthenticated);
app.use(flash());
app.use(middleFlash);

passportConfig();

routes(app);

app.listen(APP_PORT, () => {
  console.log(`\n[Express] Servidor corriendo en el puerto ${APP_PORT}.`);
  console.log(`[Express] Ingresar a http://localhost:${APP_PORT}.\n`);
});
