const express = require("express");
const router = express.Router();
const articleController = require("../controllers/articleController");
const userController = require("../controllers/articleController");
const editorCheck = require("./middleware/editorCheck");
const { Article, User, Comment } = require("../models");

// Rutas relacionadas a los artículos:
// ...

router.get("/crear", articleController.create);
router.post("/", articleController.store);
router.get("/:id", articleController.show);
router.get("/editar/:id", articleController.edit);
router.post("/editar/:id", editorCheck, articleController.update);
router.delete("/:id", articleController.destroy);

module.exports = router;
