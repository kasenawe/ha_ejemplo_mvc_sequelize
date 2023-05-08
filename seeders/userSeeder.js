const { faker } = require("@faker-js/faker");
const { User } = require("../models");

faker.locale = "es";

module.exports = async () => {
  const users = [];

  for (let i = 0; i < 50; i++) {
    users.push({
      firstname: faker.name.firstName(),
      lastname: faker.name.lastName(),
    });
  }

  await User.bulkCreate(users);
  console.log("[Database] Se corrió el seeder de Articles y ¿Autores?.");
};
