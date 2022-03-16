const listHelper = require("../utils/list_helper");
const helper = require("./test_helper");

test("dummy returns one", () => {
  const blogs = [];

  const result = listHelper.dummy(blogs);
  expect(result).toBe(1);
});

describe("total likes", () => {
  const blog1 = [
    {
      _id: "5a422a851b54a676234d17f7",
      title: "React patterns",
      author: "Michael Chan",
      url: "https://reactpatterns.com/",
      likes: 7,
      __v: 0,
    },
  ];

  const blog0 = [];
  test("of empty list is zero", () => {
    const result = listHelper.totalLikes(blog0);
    expect(result).toBe(0);
  });
  test("when list has only one blog equals the likes of that", () => {
    const result = listHelper.totalLikes(blog1);
    expect(result).toBe(7);
  });
  test("of a bigger list is calculated right", () => {
    const result = listHelper.totalLikes(helper.initialBlogs);
    expect(result).toBe(36);
  });
  test("favorite blog", () => {
    const result = listHelper.favoriteBlog(helper.initialBlogs);
    expect(result).toEqual(helper.initialBlogs[2]);
  });
});
