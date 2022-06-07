const router = require("express").Router();
const sequelize = require("../config/connection");
const { Post, User, Review } = require("../models");

router.get("/", (req, res) => {
  Post.findAll({
    attributes: ["id", "title", "image_url", "price", "created_at"],
    include: [
      {
        model: Review,
        attributes: ["id", "review_text", "post_id", "user_id", "created_at"],
        include: {
          model: User,
          attributes: ["username"],
        },
      },
      {
        model: User,
        attributes: ["username"],
      },
    ],
  })
    .then((dbPostData) => {
      const posts = dbPostData.map((post) => post.get({ plain: true }));

      res.render("homepage", {
        posts,
        // loggedIn: req.session.loggedIn,
      });
    })
    .catch((err) => {
      console.log(err);
      res.status(500).json(err);
    });
});

router.get('/login', (req,res) => {
    res.render('login');
})

module.exports = router;
