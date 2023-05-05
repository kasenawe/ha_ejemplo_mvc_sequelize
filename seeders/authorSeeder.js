const { faker } = require("@faker-js/faker");
const { Article } = require("../models");

faker.locale = "es";

module.exports = async () => {
  const authors = [];

  for (let i = 0; i < 100; i++) {
    authors.push({
      firstname: faker.lorem.sentence(5),
      lastname: faker.lorem.paragraphs(),
    });
  }

  await Article.bulkCreate(articles);
  console.log("[Database] Se corrió el seeder de Articles.");
};
