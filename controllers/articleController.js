const { Article, Comment } = require("../models");

async function index(req, res) {
  const articles = await Article.findAll({ include: "user" });
  console.log(articles);
  res.render("admin", { articles });
}

// // Display a listing of the resource.
// async function show(req, res) {}

// Display the specified resource.
async function show(req, res) {
  const article = await Article.findByPk(req.params.id, {
    include: ["user", { model: Comment, as: "comments" }],
  });
  if (!article) {
    return res.status(404).send("Article not found");
  }
  return res.render("articles", { article });
}

// Show the form for creating a new resource
async function create(req, res) {}

// Store a newly created resource in storage.
async function store(req, res) {
  const form = formidable({
    multiples: true,
    uploadDir: __dirname + "/public/img",
    keepExtensions: true,
  });
  form.parse(req, async (err, fields, files) => {
    // const lastUserId = await User.max("id");
    const lastUserId = await User.max("id");
    const newArticle = await Article.create({
      title: fields.title,
      content: fields.content,
      userId: lastUserId,
    });

    const newUser = await User.create({
      firstname: fields.firstName,
      lastname: fields.lastName,
    });

    console.log(fields);
    res.redirect("/articulos/crear");
  });
}

// Show the form for editing the specified resource.
async function edit(req, res) {
  const article = await Article.findByPk(req.params.id, {
    include: ["user", { model: Comment, as: "comments" }],
  });
  if (!article) {
    return res.status(404).send("Article not found");
  }
  console.log(article.comments);
  res.render("editArticle", { article }); //("articles", {article, comments}) ----> const comments = article.comments;
}

// Update the specified resource in storage.
async function update(req, res) {
  const form = formidable({
    multiples: true,
    uploadDir: __dirname + "/public/img",
    keepExtensions: true,
  });
  form.parse(req, async (err, fields, files) => {
    // const lastUserId = await User.max("id");
    const updateArticle = await Article.update(
      {
        title: fields.titleInput,
        content: fields.contentInput,
      },
      {
        where: { id: articleId },
      },
    );

    const updateUser = await User.update(
      {
        firstname: fields.nameInput,
        lastname: fields.lastNameInput,
        email: fields.emailInput,
      },
      {
        where: { userId: article.userId },
      },
    );

    console.log();
    res.redirect("/articulos");
  });
}

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
