const { Article, User, Comment } = require("../../models");

async function editorCheck(req, res, next) {
  //try {
  const articleId = req.params.id;
  const article = await Article.findByPk(articleId, { include: "user" });
  console.log(article);

  if (req.user.id === article.userId) {
    return next();
  } else {
    //req.session.redirectTo = req.query.redirectTo;
    return res.send("No es el editor de este articulo");
  }
  // } catch (error) {
  // return res.status(500).send("Error en el middleware editorCheck");
}
//}

module.exports = editorCheck;
/*
const { Article, User, Comment } = require("../../models");

function editorCheck(req, res, next) {
  async function edit(req, res) {
    const articleId = req.params.id;
    const article = await Article.findByPk(articleId, { include: "user" });
    console.log(article);

    if (req.user.id === article.userId) {
      return next();
    } else {
      //req.session.redirectTo = req.query.redirectTo;
      return res.send("No es el editor de este articulo");
    }
  }
}

module.exports = editorCheck;
*/
