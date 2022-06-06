const { Review } = require("../../models");

const reviewData = [
    {
        review_text: "Nunc rhoncus dui vel sem.",
        user_id: 1,
        post_is:1
    },
    {
        review_text: "Morbi odio odio, elementum eu, interdum eu, tincidunt in, leo. Maecenas pulvinar lobortis est.",
        user_id: 2,
        post_is:1
    },
    {
        review_text: "Aliquam erat volutpat. In congue.",
        user_id: 1,
        post_is: 2
    },
    {
        review_text: "Quisque arcu libero, rutrum ac, lobortis vel, dapibus at, diam.",
        user_id: 3,
        post_is: 2
    },
    {
        review_text: "Integer tincidunt ante vel ipsum. Praesent blandit lacinia erat.",
        user_id: 1,
        post_is: 2
    },
]

const seedReviews = () => Comment.bulkCreate(reviewdata);

module.exports = seedReviews;
