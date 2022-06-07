const router = require("express").Router();
const sequelize = require("../../config/connection");
const { Post, User, Review } = require("../../models");

// Get all Reviews
router.get("/", (req, res) => {
  Review.findAll()
    .then((dbReviewData) => res.json(dbReviewData))
    .catch((err) => {
      console.log(err);
      res.status(500).json(err);
    });
});

// Create a Review
router.post("/", (req, res) => {
  Review.create({
    review_text: req.body.review_text,
    post_id: req.body.post_id,
    user_id: req.body.user_id,
  })
    .then((dbReviewData) => res.json(dbReviewData))
    .catch((err) => {
      console.log(err);
      res.status(400).json(err);
    });
});

module.exports = router;
