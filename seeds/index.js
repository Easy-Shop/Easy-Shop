const seedUsers = require("./user-seeds");
const seedPosts = require("./post-seeds");
const seedReviews = require("./reviews-seeds");

const sequelize = require("../config/connection");

const seedAll = async () => {
  await sequelize.sync({ force: true });
  console.log("--------------");
  await seedUsers();
  console.log("--------------");

  await seedPosts();
  console.log("--------------");

  await seedReviews();
  console.log("--------------");

  process.exit(0);
};

seedAll();