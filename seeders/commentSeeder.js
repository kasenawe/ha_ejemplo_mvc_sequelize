const { faker } = require("@faker-js/faker");
const { Comment, Article } = require("../models");

faker.locale = "es";

module.exports = async () => {
  const comments = [];
  const articles = await Article.findAll();

  for (let i = 0; i < 500; i++) {
    const randomArticle = articles[Math.floor(Math.random() * articles.length)];
    comments.push({
      firstname: faker.name.firstName(),
      lastname: faker.name.lastName(),
      content: faker.lorem.paragraphs(),
      articleId: randomArticle.id,
    });
  }

  await Comment.bulkCreate(comments);
  console.log("[Database] Se corrió el seeder de Articles, Autores y ¿Comentarios?.");
};
