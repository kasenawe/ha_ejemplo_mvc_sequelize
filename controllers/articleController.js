const { Article, Comment } = require("../models");

async function index(req, res) {
  const articles = await Article.findAll({ include: "user" });
  console.log(articles);
  res.render("admin", { articles });
}

// Display a listing of the resource.
async function show(req, res) {}

// Display the specified resource.
async function show(req, res) {}

// Show the form for creating a new resource
async function create(req, res) {}

// Store a newly created resource in storage.
async function store(req, res) {}

// Show the form for editing the specified resource.
async function edit(req, res) {
  const article = await Article.findByPk(req.params.id, {
    include: ["user", { model: Comment, as: "comments" }],
  });
  if (!article) {
    return res.status(404).send("Article not found");
  }
  console.log(article.comments);
  res.render("articles", { article }); //("articles", {article, comments}) ----> const comments = article.comments;
}

// Update the specified resource in storage.
async function update(req, res) {}

// Remove the specified resource from storage.
async function destroy(req, res) {}

// Otros handlers...
// ...

module.exports = {
  index,
  show,
  create,
  store,
  edit,
  update,
  destroy,
};
