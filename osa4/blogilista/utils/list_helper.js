const blog = require("../models/blog");

const dummy = (blogs) => {
  return 1;
};

const totalLikes = (blogs) => {
  let sum = blogs.reduce((total, currentValue) => {
    return total + currentValue.likes;
  }, 0);
  return sum;
};

const favoriteBlog = (blogs) => {
  let blogFav = blogs[0];
  blogs.forEach((blog) => {
    if (blogFav.likes < blog.likes) blogFav = blog;
  });
  return blogFav;
};

module.exports = {
  dummy,
  totalLikes,
  favoriteBlog,
};
