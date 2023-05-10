const { Article } = require("../models");

async function admin(req, res) {
  const articles = await Article.findAll({ include: "user" });
  res.render("admin", { articles });
}

module.exports = admin;
