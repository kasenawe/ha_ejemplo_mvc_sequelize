const { faker } = require("@faker-js/faker");
const { User } = require("../models");
const bcrypt = require("bcryptjs");

faker.locale = "es";

module.exports = async () => {
  const users = [];

  for (let i = 0; i < 50; i++) {
    const password = faker.internet.password();
    const passwordHasheada = await bcrypt.hash(password, 10);
    users.push({
      firstname: faker.name.firstName(),
      lastname: faker.name.lastName(),
      email: faker.internet.email(),
      password: passwordHasheada,
    });
  }

  // for (user of users) {
  //   async function hashear() {
  //     const passwordHasheada = await bcrypt.hash(user.password, 10);
  //     console.log(passwordHasheada);
  //   }

  //   hashear();
  // }

  await User.bulkCreate(users);
  console.log("[Database] Se corrió el seeder de Articles y ¿Autores?.");
};
