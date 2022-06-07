const User = require("./User");
const Post = require("./Post");
const Review = require("./Review");

User.hasMany(Post, {
  foreignKey: "user_id",
});

Post.belongsTo(User, {
  foreignKey: "user_id",
});

Review.belongsTo(User, {
  foreignKey: "user_id",
});

Review.belongsTo(Post, {
  foreignKey: "post_id",
});

User.hasMany(Review, {
  foreignKey: "user_id",
});

Post.hasMany(Review, {
  foreignKey: "post_id",
});

module.exports = { User, Post, Review };
