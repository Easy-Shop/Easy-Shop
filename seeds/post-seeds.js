const { Post } = require("../models");

const postdata = [
  {
    title: "Sweater",
    image_url:
      "https://cdn.media.amplience.net/i/brooksbrothers/MS01145_RED?$large$",
    price: 99.99,
    user_id: 1,
  },
  {
    title: "Shirt",
    image_url:
      "https://img.ltwebstatic.com/images3_pi/2022/03/21/164785138330ce413b577106f77813e7b87489d507_thumbnail_900x.webp",
    price: 69.99,
    user_id: 2,
  },
  {
    title: "Pants",
    image_url:
      "https://www.helikon-tex.com/media/catalog/product/cache/6/image/9df78eab33525d08d6e5fb8d27136e95/s/p/sp-pgm-dc-11.jpg",
    price: 59.99,
    user_id: 3,
  },
];

const seedPosts = () => Post.bulkCreate(postdata);

module.exports = seedPosts;
